"use server";
import { db } from "@/lib/db";
import { auth } from "../../../auth";

export const getExpenses = async ({
  page = 1,
  limit = 8,
}: {
  page?: number;
  limit?: number;
}) => {
  const data = await auth();

  const email = data?.user?.email;
  var expenses;

  const skip = (page - 1) * limit;

  try {
    await db.user.findMany({ where: { email: email } }).then(async (result) => {
      try {
        expenses = await db.expenses.findMany({
          where: { createdById: result[0]?.id },
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
    });
  } catch (error) {
    throw error;
  }
  return {
    expenses: expenses,
    hasNextPage: limit + skip < 8,
  };
};
