import { Expense } from "@/types/types";
import { DeleteButton } from "./button";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpensesList = async ({ expenses }: { expenses: Expense[] }) => {
  const result = Object.values(
    expenses.reduce((acc: any, x: any) => {
      let index = x.date as string;
      acc[index] = [...(acc[index] || []), x];
      return acc;
    }, {})
  );

  if (result.length === 0) {
    return (
      <h1 className="mt-1 text-[17px] font-semibold">
        You have no expenses...
      </h1>
    );
  }

  return (
    <>
      <ul className="mt-24 md:mt-0">
        {result.map((expense: any, id) => {
          return (
            <li key={expense.id}>
              <span className="font-bold text-2xl ">
                {" "}
                {expense[0].date.toString().split("00")[0]}
              </span>
              <ul key={expense.id} className="mt-5 mb-5">
                {expense.map((el: any) => {
                  return (
                    <li
                      className=" hover:border-gray-700 rounded-[20px] cursor-pointer mb-1 text-lg border p-8 border-gray-800 bg-slate-900 grid grid-cols-12"
                      key={el.id}
                    >
                      <div className="flex flex-col gap-2  col-span-6">
                        <div>
                          <span className="text-lg font-semibold">
                            {el?.title}
                          </span>

                          <span
                            style={{ background: `${el?.tags[0]?.color}` }}
                            className={`bg-green-200 p-2 rounded-lg text-gray-700 ml-4 text-sm font-semibold`}
                          >
                            {el?.tags[0]?.label ? el?.tags[0]?.label : "No tag"}
                          </span>
                        </div>
                        <div className="text-md">
                          -<span className="text-red-200">{el?.value} </span>$
                        </div>
                      </div>
                      <div className="flex col-span-6 justify-end">
                        <DeleteButton expenseId={el?.id}>
                          <DeleteIcon
                            className="hover:text-slate-200"
                            sx={{ fontSize: "40px", color: "rgb(200,200,200)" }}
                          />
                        </DeleteButton>
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
