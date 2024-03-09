"use client";
import Image from "next/image";
import { signOut } from "next-auth/react";
import ProtectedLinks from "./ProtectedLinks";

const DashboardNavbar = ({ children, session }: any) => {
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className=" h-full px-3 py-4 overflow-y-auto border-r text-gray-200 border-gray-700 dark:bg-gray-800 bg-slate-900 ">
          <a href="/dashboard" className="flex items-center ps-2.5 mb-10 mt-2">
            <img
              src={session?.user?.image}
              className="h-6 me-3 sm:h-7 rounded-[25px]"
              alt="User avatar"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {`${session?.user?.name}`}
            </span>
          </a>
          <div className="space-y-10">
            <ProtectedLinks />
            <div className="">
              <ul>
                <li className="">
                  <a
                    onClick={() => {
                      signOut();
                    }}
                    href="#"
                    className="flex items-center p-2 text-gray-400  rounded-lg dark:text-white hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400  dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                      />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Sign Out
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 flex min-h-screen">{children}</div>
    </>
  );
};
export default DashboardNavbar;
