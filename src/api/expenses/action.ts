"use server";
import { db } from "@/lib/db";
import { auth } from "../../../auth";
import { revalidatePath } from "next/cache";
import { type Tag } from "@/components/expenses/ExpensesForm";

export const addExpense = async (data: any, tag: Tag) => {
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
              tags: tag.__isNew__
                ? {
                    create: { createdById: result[0].id, name: tag.value },
                  }
                : {},
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
