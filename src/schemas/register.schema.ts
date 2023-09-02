import { z } from "zod";

export const registerSchema = z.object({
    phone: z.string().nonempty("O número de telefone é obrigatório"),
    password: z.string().min(6, "Sua senha deve ter no mínimo 6 caracteres")
        .max(120, "Sua senha deve ter no máximo 120 caracteres")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&#])[A-Za-z\d@$!%?&#]{6,120}$/, "A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula e um caractere especial"),
    confirmPassword: z.string().nonempty("Confirmação de senha obrigatória")
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem coincidir",
    path: ["confirmPassword"],
});
