import { auth } from "../../../../auth";

const Dashboard = async () => {
  const qq = await auth();

  console.log(qq);

  return (
    <div className=" flex w-full justify-center text-center items-center">
      <div className="text-4lx">
        <p className=" text-white">{JSON.stringify(qq!.user)}</p>
      </div>
    </div>
  );
};

export default Dashboard;
