"use server";

import * as z from "zod";
import { registerSchema } from "@/schemas/auth-schema";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validated = registerSchema.safeParse(values);
  const saltRounds = 10;

  if (!validated.success) {
    return { feedback: "Invalid data" };
  }

  const { email, password, username } = validated.data;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { feedback: "Email already in use!" };
  }
  try {
    await db.user.create({
      data: {
        email,
        name: username,
        password: hashedPassword,
      },
    });
  } catch (error) {
    throw error;
  }

  return { feedback: "Email sent!" };
};
