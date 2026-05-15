import { z } from "zod";

export const registerSchema = z.object({
	firstName: z.string().optional(),
	lastName: z.string().optional(),
	email: z.email().optional(),
	phoneNumber: z.string().optional(),
	password: z.string().min(8).optional(),
});
