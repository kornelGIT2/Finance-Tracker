import * as React from "react";
import ExpensesForm from "./_components/expenseForm";
import ExpenseClientWrapper from "./_components/expenseClientWrapper";
import SuspenseLoading from "./_components/skeleton";
import { Suspense } from "react";

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

const Expenses = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 8;

  // const sum = getSum(expenses);

  return (
    <div className="md:grid md:grid-cols-12  text-white md:space-x-20  md:p-10 max-w-screen-lg flex flex-col justify-center w-full">
      <div className="md:col-span-6 md:border-r border-b border-gray-700 md:p-10 ">
        <div className="">
          <ExpensesForm />
        </div>
      </div>

      <div className="md:col-span-6 md:w-[500px] relative">
        <Suspense key={page} fallback={<SuspenseLoading />}>
          <ExpenseClientWrapper page={page} limit={limit} />
        </Suspense>
      </div>
    </div>
  );
};

export default Expenses;
