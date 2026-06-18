import { z } from "zod";

// validación compartida cliente/servidor; los mensajes salen tal cual en el formulario
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Dime cómo te llamas.")
    .max(80, "El nombre es demasiado largo."),
  // opcional: la dejo pasar vacía (longitud 0) pero limito el máximo
  company: z.string().trim().max(120, "El nombre de la empresa es demasiado largo."),
  email: z.email("Ese correo no parece válido.").max(160),
  message: z
    .string()
    .trim()
    .min(10, "Cuéntame algo más, al menos un par de frases.")
    .max(2000, "El mensaje supera los 2000 caracteres."),
  // el checkbox manda "on" cuando está marcado; si no, no llega y falla aquí
  consent: z.unknown().refine((v) => v === "on", {
    message: "Debes aceptar la política de privacidad para enviar el mensaje.",
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;
