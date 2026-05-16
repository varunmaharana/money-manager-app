import { z } from "zod";

// export const createUserSchema = z.object({
// 	firstName: z.string().optional(),
// 	lastName: z.string().optional(),
// 	email: z.email().optional(),
// 	phoneNumber: z.string().optional(),
// 	password: z.string().min(8).optional(),
// });

export const createUserSchema = z
	.object({
		firstName: z.string().trim().optional(),

		lastName: z.string().trim().optional(),

		email: z.email().trim().toLowerCase().optional(),

		phoneNumber: z.string().trim().optional(),

		password: z.string().min(8).optional(),
	})
	.superRefine((data, ctx) => {
		// Either email or phone required
		if (!data.email && !data.phoneNumber) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Either email or phone number is required",
				path: ["email"],
			});

			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Either email or phone number is required",
				path: ["phoneNumber"],
			});
		}

		// If email exists, password required
		if (data.email && !data.password) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Password is required when using email",
				path: ["password"],
			});
		}
	});

export type CreateUserDto = z.infer<typeof createUserSchema>;
