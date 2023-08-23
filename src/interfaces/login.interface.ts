import { z } from "zod";
import { loginSchema } from "@/schemas/login.schema";

export type TLogin = z.infer<typeof loginSchema>;