import { z } from 'zod';

export const preRegisterSchema = z.object({
    name: z.string().nonempty('O Nome é obrigatório'),
    email: z.string().email('Email inválido'),
});
