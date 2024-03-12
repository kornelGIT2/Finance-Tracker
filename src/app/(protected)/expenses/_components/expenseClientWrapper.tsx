import { getExpenses } from "@/api/expenses/action";
import Link from "next/link";
import ExpensesList from "./expenseList";

type ExpenseClientProps = {
  page: number;
  limit: number;
};

const ExpenseClientWrapper = async ({ page, limit }: ExpenseClientProps) => {
  const { expenses, hasNextPage } = await getExpenses({ page, limit });

  return (
    <>
      <div className="flex text-center gap-4 absolute md:justify-end justify-center w-full m-[-8px] mt-5 md:mt-[-10px]">
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
            expenses?.length < 8 ? "pointer-events-none opacity-50" : ""
          } flex justify-center items-center bg-slate-900 p-3 rounded-lg w-[120px] hover:bg-slate-800`}
          href={`/expenses?page=${page >= 1 ? page + 1 : 1}`}
        >
          Next
        </Link>
      </div>

      <ExpensesList expenses={expenses} />
    </>
  );
};

export default ExpenseClientWrapper;
