import * as React from "react";
import { db } from "@/lib/db";
import { auth } from "../../../../auth";
import { getSum } from "@/lib/utils";
import Header from "@/components/expenses/Header";
import ExpensesForm from "@/components/expenses/ExpensesForm";
import ExpensesList from "@/components/expenses/ExpensesList";
import { Button } from "@/components/ui/button";
import { getExpenses } from "@/api/expenses/getExpenses";
import Link from "next/link";
import SuspenseLoading from "@/components/expenses/SuspenseLoading";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ExpenseClientWrapper from "@/components/expenses/ExpenseClientWrapper";

type Tag = {
  id: string;
  title: string;
};

export type Expenses = {
  id: string;
  date: string | null;
  title?: string;
  value: number;
  desc?: string;
  tag?: Tag[];
};

const Expenses = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 8;

  const { expenses } = await getExpenses({ page, limit });

  const sum = getSum(expenses);

  return (
    <div className="md:grid md:grid-cols-12  text-white md:space-x-20  md:p-10 max-w-screen-lg flex flex-col justify-center w-full">
      <div className="md:col-span-6 md:border-r border-gray-700 md:p-10 ">
        <Header>{sum}</Header>
        <div className="">
          <ExpensesForm />
        </div>
      </div>

      <div className="md:col-span-6 md:w-[500px] relative">
        <div className="flex  text-center gap-4 absolute justify-end  w-full m-[-8px]">
          <Link
            className={`${
              page === 1 ? "pointer-events-none opacity-50" : ""
            } flex justify-center items-center bg-slate-900 p-3 rounded-lg w-[120px] hover:bg-slate-800`}
            href={`/expenses?page=${page > 1 ? page - 1 : 1}`}
          >
            Previous
          </Link>

          <Link
            className={` ${
              expenses.length < 8 ? "pointer-events-none opacity-50" : ""
            } flex justify-center items-center bg-slate-900 p-3 rounded-lg w-[120px] hover:bg-slate-800`}
            href={`/expenses?page=${page >= 1 ? page + 1 : 1}`}
          >
            Next
          </Link>
        </div>
        <ExpenseClientWrapper page={page}>
          <ExpensesList expenses={expenses} />
        </ExpenseClientWrapper>
      </div>
    </div>
  );
};

export default Expenses;
