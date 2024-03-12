import { getExpenses } from "@/api/expenses/action";
import { ExpenseChart } from "./_components/expenseChart";
import { LineChart } from "./_components/lineChart";

const Dashboard = async () => {
  const { expenses } = await getExpenses({});

  return (
    <div className="   md:p-20 p-4  w-full md:max-w-7xl">
      <div className=" flex flex-col gap-6  border-slate-700   md:p-14">
        <section
          className="p-10  bg-gradient-to-l from-slate-800 to-slate-900 opacity-90 rounded-[40px] flex flex-col space-y-6 shadow-lg
          border-b-2 border-slate-950"
        >
          <label className="text-4xl text-slate-50 font-semibold">
            Current balance
          </label>
          <label className="text-4xl text-red-400 font-semibold">
            -$14.000
          </label>
        </section>

        <div className=" grid grid-cols-2 gap-6 ">
          <section className="p-10 bg-slate-900 opacity-60 text-white  rounded-[40px] flex flex-col space-y-6 shadow-lg">
            <label>Total incomes</label>
            <label className="text-2xl text-green-300 font-semibold">
              $6.000
            </label>
          </section>
          <section className="p-10 bg-slate-900 opacity-60 text-white  rounded-[40px] flex flex-col space-y-6 shadow-lg">
            <label>Total expenses</label>
            <label className="text-2xl  text-red-300 font-semibold">
              $20.000
            </label>
          </section>
        </div>

        <section className="md:p-14 p-4 bg-slate-900 opacity-70 md:h-[700px]  rounded-[40px] flex flex-col space-y-6 shadow-lg justify-center  items-center ">
          <label className="text-white text-2xl">Expenses & Incomes</label>
          <LineChart />
        </section>
        <section className="md:p-14 p-8 bg-slate-900 opacity-70 md:h-[500px] justify-center items-center rounded-[40px] flex flex-col space-y-6 shadow-lg ">
          <ExpenseChart data={expenses} />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
