"use server";
import { db } from "@/lib/db";
import { auth } from "../../../auth";
import { revalidatePath } from "next/cache";
import { type Tag, type Expense } from "@/types/types";
import { random_rgba } from "@/lib/utils";

export const deleteExpense = async (idExepnse: number) => {
  try {
    const deleteExpense = await db.expenses.delete({
      where: {
        id: idExepnse,
      },
    });
  } catch (error) {
    throw error;
  }

  revalidatePath("/expenses");
};

export const getTags = async () => {
  const session = await auth();

  const userId = session?.user?.userId;

  let tags = [];

  try {
    tags = await db.tag.findMany({
      where: {
        createdById: userId,
      },
    });
  } catch (error) {
    throw error;
  }

  return tags as typeof tags;
};

export const addExpense = async (data: any, tag: Tag | undefined) => {
  //const validated = loginSchema.safeParse(values);

  //if (!validated.success) {
  ///  return { feedback: "Invalid field" };
  // }

  console.log(tag);

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
              tags: tag?.__isNew__
                ? {
                    create: {
                      createdById: result[0].id,
                      label: tag.label,
                      color: random_rgba(),
                    },
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

export const getExpenses = async ({
  page = 1,
  limit = 8,
}: {
  page?: number;
  limit?: number;
}) => {
  const data = await auth();

  const userId = data?.user?.userId;

  let expenses: Expense[] = [];

  const skip = (page! - 1) * limit!;

  try {
    expenses = await db.expenses.findMany({
      where: { createdById: userId },
      orderBy: [{ date: "desc" }, { id: "desc" }],
      take: limit,
      skip: skip,
      include: {
        tags: {},
      },
    });
  } catch (error) {
    throw error;
  }

  return {
    expenses: expenses,
    hasNextPage: limit + skip < 8,
  };
};
