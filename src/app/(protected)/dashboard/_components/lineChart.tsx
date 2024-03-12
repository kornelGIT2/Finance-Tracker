"use client";
import { random_rgba } from "@/lib/utils";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { groupBy } from "@/lib/utils";
import { Expense } from "@/types/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "September",
];

export const options = {
  responsive: true,
  aspectRation: 1,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Expenses vs Incomes",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Expenses",
      data: [44, 55, 100, 2000, -1000, 500, 1],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Incomes",
      data: [5000, 2000, -300, 200, -1004, 24, -10000],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const LineChart = () => {
  return <Line className="" data={data} options={options} />;
};
