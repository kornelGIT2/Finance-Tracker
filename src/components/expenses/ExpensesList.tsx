import { type Expenses } from "@/app/(protected)/expenses/page";
import DeleteIcon from "@mui/icons-material/Delete";
import { Suspense } from "react";
import { getExpenses } from "@/api/expenses/getExpenses";
import Link from "next/link";

const ExpensesList = async ({ expenses }: any) => {
  const result = Object.values(
    expenses.reduce((acc: any, x: any) => {
      let index = x.date as string;
      acc[index] = [...(acc[index] || []), x];
      return acc;
    }, {})
  );

  return (
    <>
      <ul className="">
        {result.map((expense: any, id) => {
          return (
            <li key={expense.id}>
              <span className="font-bold text-2xl ">
                {" "}
                {expense[0].date.toString().split("00")[0]}
              </span>
              <ul key={expense.id} className="mt-5 mb-5">
                {expense.map((el) => {
                  return (
                    <li
                      className=" hover:border-gray-700 rounded-[20px] cursor-pointer mb-1 text-lg border  p-8 border-gray-800 bg-slate-900  "
                      key={el.id}
                    >
                      <div className="flex flex-col gap-2">
                        <div>
                          <span className="text-lg font-semibold">
                            {el?.title}
                          </span>

                          <span className="bg-green-200 p-2 rounded-lg text-gray-700 ml-4 text-sm font-semibold">
                            {el?.tags[0]?.name}
                          </span>
                        </div>
                        <div className="text-md">
                          -<span className="text-red-200">{el?.value} </span>$
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ExpensesList;
