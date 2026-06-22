"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { contactSchema } from "@/lib/contact-schema";

export type ContactState = {
  ok: boolean;
  error?: string;
  fieldErrors?: Partial<
    Record<"name" | "company" | "email" | "message" | "consent", string>
  >;
};

// una sola vez, y solo si hay credenciales de Upstash; si no, se omite el rate limit
let limiter: Ratelimit | null = null;
function getLimiter() {
  if (limiter) return limiter;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  limiter = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    prefix: "contact",
  });
  return limiter;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // honeypot: si un bot rellena este campo finjo éxito y no mando nada
  if ((formData.get("website") as string | null)?.trim()) {
    return { ok: true };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    message: formData.get("message"),
    consent: formData.get("consent"),
  });

  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (
        (key === "name" ||
          key === "company" ||
          key === "email" ||
          key === "message" ||
          key === "consent") &&
        !fieldErrors[key]
      ) {
        fieldErrors[key] = issue.message;
      }
    }
    return { ok: false, error: "Revisa los campos marcados.", fieldErrors };
  }

  const { name, company, email, message } = parsed.data;

  const rl = getLimiter();
  if (rl) {
    const ip =
      (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";
    const { success } = await rl.limit(ip);
    if (!success) {
      return {
        ok: false,
        error: "Has enviado varios mensajes seguidos. Prueba de nuevo en un rato.",
      };
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return {
      ok: false,
      error: "El formulario todavía no está configurado. Escríbeme por correo mientras tanto.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    // texto plano a propósito: nada de HTML con la entrada del usuario
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nuevo mensaje de ${name} desde el portfolio`,
      text: `Nombre: ${name}\nEmpresa: ${company || "(no indicada)"}\nCorreo: ${email}\n\n${message}`,
    });
    if (error) {
      return { ok: false, error: "No se pudo enviar. Inténtalo otra vez en un momento." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "No se pudo enviar. Inténtalo otra vez en un momento." };
  }
}
