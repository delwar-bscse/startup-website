/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Link from "next/link";
import { setCookie } from "cookies-next/client";
import { useRouter, useSearchParams } from "next/navigation";
import { myFetch } from "@/utils copy/myFetch";
import { useLogInMutation } from "@/Redux/apis/authApi";

// Schema
const signInFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 8 characters.",
  }),
});

// Type
type SigninFormValues = z.infer<typeof signInFormSchema>;

const defaultValues: Partial<SigninFormValues> = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const router = useRouter();
  // const redirect = useSearchParams().get("redirect");
  const form = useForm<SigninFormValues>({
    resolver: zodResolver(signInFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const [logIn] = useLogInMutation();

  const onSubmit = async (data: SigninFormValues) => {
    toast.loading("Logging in...", {
      id: "login",
    });

    const payload = {
      email: data.email,
      password: data.password,
    };
    console.log(payload);

    try {
      const res = await logIn(payload).unwrap();

      console.log(res);
      if (res.success) {
        localStorage.setItem("accessToken", res.data.accessToken);
        toast.success("Login successful");
        router.push("/");
        // const user = await myFetch("/users/me", {
        //   method: "GET",
        // });
        // console.log("User Data:", user);
        // if (user.success) {
        // }
        // router.push(redirect || "/");
      } else {
        toast.error(res?.message || "Login failed", { id: "login" });
      }
    } catch (error: unknown) {
      console.error("Error fetching data:", { id: "login" });
      toast.error(res?.message || "Login failed", { id: "login" });
    }
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-[800px] py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Sign In
        </h2>
        <p className="text-center text-gray-800 text-sm mb-6">
          Login to your account to continue
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Forgot Password */}
            <div className="flex justify-end items-center">
              <Link
                href="/forgot-password"
                className="font-semibold text-sm sm:text-base text-gray-600"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full text-base md:text-lg">
              Sign In
            </Button>
            <div className="text-center text-sm md:text-base text-gray-600 mt-4">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary font-semibold">
                Sign Up
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;
