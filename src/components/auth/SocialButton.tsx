"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { DEFAULT_REDIRECT } from "../../../routes";

type providerType = "google" | "github";

export const SocialButton = () => {
  const handleClick = (provider: providerType) => {
    signIn(provider, {
      callbackUrl: DEFAULT_REDIRECT,
    });
  };

  return (
    <button
      onClick={() => {
        handleClick("google");
      }}
      type="button"
      className=" text-[14px] flex shadow-lg bg-slate-900 rounded-lg p-2 gap-2 w-full justify-center items-center cursor-pointer hover:bg-slate-800 mt-10 text-white"
    >
      <Image
        className=""
        src="/gmail.png"
        alt=""
        height={30}
        width={30}
      ></Image>
      Sign in with Google
    </button>
  );
};
