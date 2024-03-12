import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { protectedRoutes } from "../../routes";
import { type Expenses } from "@/app/(protected)/expenses/page";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const new_routes_system = () => {
  let ob: { id: number; path: string; name: string }[] = [];

  protectedRoutes.forEach((el, id) => {
    ob.push({ id: id, path: el.path, name: el.name });
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

export function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

export const groupBy = <T>(data: T, by: string): T[] => {
  const result = Object.values(
    data.reduce((accumulator: any, currentValue: any) => {
      let index = "";

      if (by === "byName") {
        index = currentValue.name;
      } else {
        index = currentValue.name;
      }

      accumulator[index] = [...(accumulator[index] || []), currentValue];
      return accumulator;
    }, {})
  );

  return result as T[];
};
