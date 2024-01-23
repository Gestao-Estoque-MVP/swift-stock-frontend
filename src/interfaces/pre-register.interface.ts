import { preRegisterSchema } from '@/schemas/pre-register.schema';
import { z } from 'zod';

export type TPreRegister = z.infer<typeof preRegisterSchema>;
