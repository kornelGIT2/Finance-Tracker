"use client";
import { Suspense } from "react";
import SuspenseLoading from "./SuspenseLoading";

type ExpenseClientProps = {
  children: React.ReactNode;
  page: number;
};

const ExpenseClientWrapper = ({ children, page }: any) => {
  return (
    <Suspense key={page} fallback={<SuspenseLoading />}>
      {children}
    </Suspense>
  );
};

export default ExpenseClientWrapper;
