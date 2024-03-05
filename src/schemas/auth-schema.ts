import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(6, { message: "Minimum 6" }).max(50).email({
    message: "Must be a valid email",
  }),
  password: z.string().min(2, { message: "Minimum 6 letters" }).max(50),
});

export const registerSchema = z
  .object({
    username: z.string().min(6, { message: "Minimum 6" }).max(50),
    email: z.string().min(6, { message: "Minimum 6" }).max(50).email({
      message: "Must be a valid email",
    }),
    password: z.string().min(6, { message: "Minimum 6" }).max(50),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" })
      .max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

