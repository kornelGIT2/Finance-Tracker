"use client";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar/Navbar";
import { Links } from "@/components/navbar/Links";
import { useRouter } from "next/navigation";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-screen-lg  p-4 ">
          <div className="md:text-left text-center">
            <label className="md:text-8xl text-5xl font-black text-white">
              Ultra fast and user-friendly app for managing your finances
            </label>
            <p className="text-white md:text-2xl text-lg mt-10">
              Fully responsive powered by Vercel
            </p>
          </div>
          <div className="grid md:grid-cols-12 gap-4 min-w-[250px] mt-10">
            <Button
              className="bg-white p-6 col-span-3 text-gray-700 hover:bg-slate-300 rounded-[30px]"
              onClick={() => router.push("/register")}
            >
              {"Get Started"}{" "}
              <ArrowForwardIosIcon
                sx={{ fontSize: "12px", marginLeft: "5px" }}
              />
            </Button>
            <Button
              onClick={() => {
                router.push("/about");
              }}
              className="bg-transparent p-6 col-span-3 hover:bg-slate-600 hover:text-white text-slate-400 rounded-[30px]"
            >
              About Project
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
