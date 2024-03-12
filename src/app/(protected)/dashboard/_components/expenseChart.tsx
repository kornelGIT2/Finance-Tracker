"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { groupBy } from "@/lib/utils";
import { Expense } from "@/types/types";
import { useRouter } from "next/navigation";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  aspectRation: 1,
};

export const ExpenseChart = ({ data }: { data: Expense[] }) => {
  const router = useRouter();

  //TODO: change variable names
  let data_ = data.map((el) => {
    let { value, ...rest } = el;
    return { value: value, name: el.tags[0]?.label, color: el.tags[0]?.color };
  });

  let result = groupBy<typeof data_>(data_, "byName");

  let suma2: Array<{ suma: number; name: string; color: string }> = [];

  result.forEach((array, i) => {
    let suma = 0;
    let name = "";
    let color = "";

    array.forEach((el) => {
      suma += el.value;
      name = el.name;
      color = el.color;
    });

    suma2.push({ suma: suma, name: name, color: color });
  });

  let dataq = {
    labels: suma2.map((data: any) => {
      if (data.name === undefined) {
        return "Rest...";
      }
      return data.name;
    }),
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "Total amount ($)",
        data: suma2.map((data) => data.suma),
        backgroundColor: suma2.map((el) => {
          if (el.color) {
            return el.color;
          } else {
            return "rgb(187 247 208)";
          }
        }),
        borderWidth: 1,
      },
    ],
  };

  if (data.length === 0) {
    return (
      <h1 className="text-white text-4xl">
        Add an{" "}
        <span
          className="text-blue-200 cursor-pointer hover:text-blue-300"
          onClick={() => {
            router.push("/expenses");
          }}
        >
          expense
        </span>{" "}
        to see the chart
      </h1>
    );
  }
  return <Doughnut className="" data={dataq} options={options} />;
};
