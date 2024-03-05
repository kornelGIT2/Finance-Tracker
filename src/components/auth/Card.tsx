"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schemas/auth-schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import * as React from "react";
import { useRouter } from "next/navigation";

interface Card {
  showSocial: boolean;
  forgotPassword: string;
  header: string;
  login: boolean;
  children: React.ReactNode;
}

const Card = ({
  header,
  showSocial,
  forgotPassword,
  login,
  children,
}: Card) => {
  const router = useRouter();

  return (
    <main className="flex-1 flex justify-center items-center max-w-screen-sm p-10">
      <div className="w-full ">
        <div className="flex flex-col space-y-10 text-white">
          {/* TODO: HEADER */}
          <div className="flex flex-col items-center md:items-start">
            <label className="font-bold text-lg">
              {login ? "Log in to Smart Wally" : "Create an account"}
            </label>
            {login ? (
              <span
                onClick={() => router.push("/register")}
                className="text-[13px] cursor-pointer  font-semibold text-slate-400"
              >
                Don't have an account?{" "}
                <span className="text-blue-400">Sign up</span>.
              </span>
            ) : (
              <span
                onClick={() => router.push("/login")}
                className="text-[13px] cursor-pointer  font-semibold text-slate-400"
              >
                Already a member? <span className="text-blue-400">Sign in</span>
                .
              </span>
            )}
          </div>
          {/* END OF HEADER */}
          {/* FORM */}
          <div>{children}</div>
          {/* END OF FORM */}

          <div className="flex items-center">
            <hr className=" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-25 dark:opacity-100 w-full" />
            <span className=" text-slate-300">or</span>
            <hr className=" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-25 dark:opacity-100 w-full" />
          </div>
        </div>
        {login
          ? (
              <div className="flex shadow-lg bg-slate-900 rounded-lg p-2 gap-2 w-full justify-center items-center cursor-pointer hover:bg-slate-800">
                <Image
                  className=""
                  src="/gmail.png"
                  alt=""
                  height={30}
                  width={30}
                ></Image>
                <label className="text-[14px] cursor-pointer  ">
                  Sign in with Google
                </label>
              </div>
            ) && (
              <div className="flex flex-col items-center gap-4">
                <span className="text-[12px] cursor-pointer ">
                  {forgotPassword}
                </span>
              </div>
            )
          : null}
      </div>
    </main>
  );
};
export default Card;
