import { registerSchema } from '../schemas/register.schema';
import { z } from 'zod';

export type TRegister = z.infer<typeof registerSchema>;
