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
import { useRouter } from "next/navigation";
import Image from "next/image";
import { login } from "@/api/auth/login";
import * as React from "react";
import { toast } from "sonner";

const Login = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setLoading(true);

    setTimeout(() => {
      login(values)
        .then((data) => {
          const { feedback } = data;
          toast.error(`${feedback}`);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  };

  return (
    <main className="flex-1  flex justify-center items-center ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-screen-sm space-y-10 w-full p-8 text-white flex flex-col justify-center items-center"
        >
          <div className="flex flex-col gap-10 w-full ">
            <div className="flex flex-col gap-1 items-center md:items-start">
              <label className="font-bold text-lg">Log in to Smart Wally</label>
              <span
                onClick={() => router.push("/register")}
                className="text-[13px] cursor-pointer  font-semibold text-slate-400"
              >
                {" Don't have an account? "}
                <span className="text-blue-400">Sign up</span>.
              </span>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="text-white bg-slate-900 border-slate-700 "
                      placeholder="janKowalski@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="absolute" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="text-white bg-slate-900 border-slate-700"
                      type="password"
                      placeholder="●●●●●●●●"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="absolute " />
                </FormItem>
              )}
            />

            <Button
              disabled={loading}
              className={`w-full shadow-lg p-6 bg-gray-300 text-black font-semibold hover:bg-gray-400`}
            >
              {!loading ? (
                <span>Continue</span>
              ) : (
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-slate-900"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              )}
            </Button>

            <div className="flex items-center">
              <hr className=" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-25 dark:opacity-100 w-full" />
              <span className=" text-slate-300">or</span>
              <hr className=" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-25 dark:opacity-100 w-full" />
            </div>
          </div>
          <button
            type="button"
            className="flex shadow-lg bg-slate-900 rounded-lg p-2 gap-2 w-full justify-center items-center cursor-pointer hover:bg-slate-800"
          >
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
          </button>
          <div className="flex flex-col items-center gap-4">
            <span className="text-[12px] cursor-pointer ">
              Forgot your password?
            </span>
          </div>
        </form>
      </Form>
    </main>
  );
};

export default Login;
