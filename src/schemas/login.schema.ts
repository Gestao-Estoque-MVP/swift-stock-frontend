import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().nonempty("A senha é obrigatória")
});
