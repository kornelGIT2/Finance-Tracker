"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export const Links = () => {
  const pathname = usePathname();
  const ArrayOfLinks = [
    { name: "Home", path: "/" },
    { name: "About Project", path: "/about" },
    { name: "Sign In", path: "/login" },
    { name: "Get Started", path: "/register" },
  ];

  const ArrayOfLinkProtected = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "About Project", path: "/about" },
  ];

  const mappedProtected = ArrayOfLinkProtected.map((link) => {
    return (
      <li key={link.name} className="flex">
        <Link
          className={`${
            link.path === pathname
              ? "text-white"
              : "text-slate-500 hover:text-slate-400"
          }  flex py-2 px-3 border-2 rounded-2xl p-3 pl-5 pr-5  border-transparent  cursor-pointer  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
          key={link.name}
          href={link.path}
        >
          <span>{link.name}</span>
        </Link>

        {link.name === "About Project" ? (
          <div className="border-r border-slate-700 ml-9"></div>
        ) : (
          ""
        )}
      </li>
    );
  });

  const mappedLinks = ArrayOfLinks.map((link) => {
    return (
      <li key={link.name}>
        <Link
          className={`${
            link.path === pathname ? "text-white" : " hover:text-slate-400"
          } ${
            link.name === "Get Started"
              ? "bg-white rounded-[30px] text-black"
              : "text-slate-500"
          }   flex py-2 px-3 border-2 rounded-2xl p-3 pl-5 pr-5  border-transparent  cursor-pointer `}
          key={link.name}
          href={link.path}
        >
          <span>{link.name}</span>
        </Link>
        {link.name === "About Project" ? (
          <div className="border-r border-slate-700 ml-9"></div>
        ) : (
          ""
        )}
      </li>
    );
  });

  return (
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {mappedLinks}
      {0 ? (
        <button
          onClick={() => {
            signOut();
          }}
          className="hover:text-slate-400 flex py-2 px-3 border-2 rounded-2xl p-3 pl-5 pr-5  border-transparent  cursor-pointer  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Sign out
        </button>
      ) : (
        ""
      )}
    </ul>
  );
};
