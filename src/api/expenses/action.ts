"use server";
import { db } from "@/lib/db";
import { auth } from "../../../auth";
import { revalidatePath } from "next/cache";

export const addExpense = async (data: any) => {
  //const validated = loginSchema.safeParse(values);

  //if (!validated.success) {
  ///  return { feedback: "Invalid field" };
  // }

  const session = await auth();

  const email = session?.user?.email;

  try {
    await db.user
      .findMany({
        where: {
          email: email,
        },
      })
      .then(async (result) => {
        try {
          const expense = await db.expenses.create({
            data: {
              createdById: result[0].id,
              date: data.date,
              value: parseInt(data.amount),
              title: data.title,
              desc: data.desc,
            },
          });
        } catch (error) {
          throw error;
        }
      });
  } catch (error) {
    throw error;
  }

  revalidatePath("/expenses");
};
