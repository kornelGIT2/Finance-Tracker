import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { protectedRoutes } from "../../routes";
import { type Expenses } from "@/app/(protected)/expenses/page";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const new_routes_system = () => {
  let ob: { id: number; path: string }[] = [];

  protectedRoutes.forEach((el, id) => {
    ob.push({ id: id, path: el });
  });

  return ob;
};

export const getSum = (expenses: Expenses[] | null): number => {
  let sum = 0;

  expenses!.forEach((element) => {
    sum += element?.value;
  });

  return sum;
};
