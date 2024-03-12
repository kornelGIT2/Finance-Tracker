"use client";

import { deleteExpense } from "@/api/expenses/action";
import { toast } from "sonner";

export const DeleteButton = ({
  children,
  expenseId,
}: {
  children: React.ReactNode;
  expenseId: number;
}) => {
  return (
    <button
      className="hover:bg-gray-800 rounded-lg p-3 "
      onClick={() => {
        deleteExpense(expenseId).then((res) => {
          toast.success("Expense has been deleted successfully");
        });
      }}
    >
      {children}
    </button>
  );
};
