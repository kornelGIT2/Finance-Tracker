"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="flex-1 flex justify-center items-center text-white flex-col  gap-">
      <section className="max-w-screen-lg ">
        <div className="flex  items-center justify-center p-10">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-2 md:text-5xl text-2xl text-white font-bold ">
            THIS IS{" "}
            <span className="bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 text-transparent bg-clip-text inline-block">
              NEXT.JS
            </span>{" "}
            PORTFOLIO PROJECT
          </h1>
        </div>
        <div className="flex flex-col text-center justify-center gap-4 font-semibold mt-4 m-3">
          <p className=" uppercase  tracking-wide">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </div>
      </section>
      <section className="mt-12 flex justify-center items-center flex-col">
        <label className="text-2xl font-semibold uppercase tracking-wide">
          Tech Stack
        </label>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 5 }}
          className="flex flex-row gap-10 mt-10 "
        >
          <Image
            src="/nextLogo.svg"
            alt="nextjs"
            height={50}
            width={50}
            className=""
          />
          <Image
            src="/typescript.svg"
            alt="typescript"
            height={50}
            width={50}
            className=""
          />
          <Image
            src="/tailwind.svg"
            alt="tailwind"
            height={50}
            width={50}
            className=""
          />
          <Image
            src="/prisma.svg"
            alt="prisma"
            height={50}
            width={50}
            className=""
          />

          <Image
            src="/postgresql.svg"
            alt="postgresql"
            height={50}
            width={50}
            className=""
          />
        </motion.div>
      </section>
    </main>
  );
};

export default About;
