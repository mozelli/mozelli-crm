import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email("Informe um e-mail válido."),
    password: z.string().min(8, "Senha inválida."),
    retypePassword: z.string().min(8, "As senhas não conferem."),
  })
  .refine((data) => data.password === data.retypePassword, {
    message: "As senhas não coincidem.",
    path: ["retypePassword"],
  });

export type RegisterData = z.infer<typeof registerSchema>;
