"use client";

import { Links } from "./Links";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const Navbar = ({ children }: any) => {
  const pathname = usePathname();
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const handleOpenMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav className=" text-white from-gray-600 via-gray-900 to-gray-900 ">
      <div
        className={`  ${
          toggleMenu ? "flex" : "hidden"
        } absolute md:hidden flex-col gap-2 p-2 text-center items-center w-full   mt-20`}
      >
        <div className="flex flex-col gap-2 w-full">
          <Button
            onClick={() => {
              router.push("/login");
            }}
          >
            Sign In
          </Button>
          <Button
            onClick={() => {
              router.push("/register");
            }}
            className="bg-white text-black hover:bg-slate-300"
          >
            Get Started
          </Button>
        </div>
      </div>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5"
      >
        <div className="flex flex-row gap-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {0 ? (
              "Welcome "
            ) : (
              <button
                onClick={() => {
                  router.push("/");
                }}
              >
                Smart Wally
              </button>
            )}
          </span>
        </div>

        <button
          onClick={handleOpenMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>

          {!toggleMenu ? (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          ) : (
            <CloseIcon />
          )}
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          {children}
        </div>
      </motion.div>
    </nav>
  );
};
