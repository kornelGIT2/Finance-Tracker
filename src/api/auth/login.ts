"use server";
import * as z from "zod";
import { loginSchema } from "@/schemas/auth-schema";
import { signIn } from "../../../auth";
import { DEFAULT_REDIRECT } from "../../../routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validated = loginSchema.safeParse(values);

  if (!validated.success) {
    return { feedback: "Invalid field" };
  }

  const { email, password } = validated.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { feedback: "Invalid credentials!" };
        default:
          return {
            feedback: "Something went wrong!",
          };
      }
    }

    throw error;
  }
};
