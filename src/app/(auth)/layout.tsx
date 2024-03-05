"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          router.push("/");
        }}
        className="absolute flex items-center gap-1 text-slate-400  font-semibold m-10 hover:bg-slate-800 hover:text-white rounded-[20px] pr-6 p-3 pl-6"
      >
        <ArrowBackIosIcon style={{ fontSize: "10px" }} />
        Home
      </button>
      {children}
    </>
  );
}
