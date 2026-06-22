"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";

const initialState: ContactState = { ok: false };

const fieldClass =
  "w-full rounded-xs border border-accent/15 bg-accent/5 px-4 font-soft text-[16px] text-accent placeholder:text-accent/40 outline-none transition-colors duration-200 focus:border-accent/40";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.ok) {
    return (
      <div className="rounded-xs border border-accent/20 bg-accent/5 p-8 text-center">
        <p className="font-display text-[24px] font-light text-accent">
          Mensaje enviado.
        </p>
        <p className="mt-3 font-soft text-[16px] leading-relaxed text-accent/80">
          Gracias por escribir. Te respondo lo antes posible, normalmente en menos de un día.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-3.5">
      {/* honeypot: invisible para personas, tentador para bots */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor="website">No rellenar</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="sr-only">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nombre"
          autoComplete="name"
          aria-invalid={!!state.fieldErrors?.name}
          className={`${fieldClass} h-[52px]`}
        />
        {state.fieldErrors?.name && (
          <p className="mt-1.5 font-soft text-[13px] text-accent-2">
            {state.fieldErrors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="sr-only">
          Empresa
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Empresa"
          autoComplete="organization"
          aria-invalid={!!state.fieldErrors?.company}
          className={`${fieldClass} h-[52px]`}
        />
        {state.fieldErrors?.company && (
          <p className="mt-1.5 font-soft text-[13px] text-accent-2">
            {state.fieldErrors.company}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Correo
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Correo"
          autoComplete="email"
          aria-invalid={!!state.fieldErrors?.email}
          className={`${fieldClass} h-[52px]`}
        />
        {state.fieldErrors?.email && (
          <p className="mt-1.5 font-soft text-[13px] text-accent-2">
            {state.fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Cuéntame brevemente qué perfil buscáis, en qué producto o equipo trabajaría y qué tipo de experiencia necesitáis."
          rows={3}
          aria-invalid={!!state.fieldErrors?.message}
          className={`${fieldClass} min-h-[96px] resize-y py-3 leading-relaxed`}
        />
        {state.fieldErrors?.message && (
          <p className="mt-1.5 font-soft text-[13px] text-accent-2">
            {state.fieldErrors.message}
          </p>
        )}
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-2.5">
          <input
            type="checkbox"
            name="consent"
            value="on"
            aria-invalid={!!state.fieldErrors?.consent}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent)]"
          />
          <span className="font-soft text-[13px] leading-snug text-accent/80">
            He leído y acepto la{" "}
            <Link
              href="/privacidad"
              className="text-accent underline underline-offset-2 transition-colors hover:text-accent-2"
            >
              Política de Privacidad
            </Link>
            .
          </span>
        </label>
        {state.fieldErrors?.consent && (
          <p className="mt-1.5 font-soft text-[13px] text-accent-2">
            {state.fieldErrors.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="h-[52px] rounded-xs bg-accent font-soft text-[16px] font-medium text-background transition-colors duration-300 hover:bg-accent-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Enviando…" : "Enviar mensaje"}
      </button>

      {state.error && !state.fieldErrors && (
        <p className="font-soft text-[14px] text-accent-2" role="alert">
          {state.error}
        </p>
      )}

      <div className="flex flex-col gap-1 font-soft text-[12px] leading-relaxed text-accent/50">
        <p>
          <span className="text-accent/70">Responsable:</span> Mario Cava Ávila.
        </p>
        <p>
          <span className="text-accent/70">Finalidad:</span> gestionar tu
          mensaje, responder a tu solicitud y proteger el formulario frente a
          abuso o spam.
        </p>
        <p>
          <span className="text-accent/70">Legitimación:</span> consentimiento al
          enviar el formulario e interés legítimo para la prevención de abuso.
        </p>
        <p>
          <span className="text-accent/70">Destinatarios:</span> no se cederán
          datos a terceros, salvo obligación legal. Se utilizan proveedores
          técnicos como Vercel, Resend y Upstash.
        </p>
        <p>
          <span className="text-accent/70">Derechos:</span> puedes acceder,
          rectificar, suprimir y ejercer otros derechos escribiendo a
          mariocavaavila@gmail.com.
        </p>
        <p>
          <span className="text-accent/70">Información adicional:</span> consulta
          la{" "}
          <Link
            href="/privacidad"
            className="underline underline-offset-2 transition-colors hover:text-accent"
          >
            Política de Privacidad
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
