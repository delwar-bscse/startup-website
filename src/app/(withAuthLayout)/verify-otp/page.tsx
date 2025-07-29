"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useUserOtpVerifyMutation,
  useVerifyChangePasswordOtpMutation,
} from "@/Redux/apis/authApi";
import { Suspense, useEffect, useState } from "react";

// Schema
const verifyOtpSchema = z.object({
  otp: z.string({
    message: "Please enter a valid OTP",
  }),
});

// Type
type VerifyOtpValues = z.infer<typeof verifyOtpSchema>;

const defaultValues: Partial<VerifyOtpValues> = {
  otp: "",
};

const VerifyOTPSuspense = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    const _source = searchParams.get("source");

    setSource(_source);
  }, [searchParams]);

  const form = useForm<VerifyOtpValues>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues,
    mode: "onChange",
  });

  const email = localStorage.getItem("userEmail");

  const [verifyCreateUserOtp] = useUserOtpVerifyMutation();
  const [verifyChangePasswordOtp] = useVerifyChangePasswordOtpMutation();

  const onCreateUserSubmit = async (data: VerifyOtpValues) => {
    const response = await verifyCreateUserOtp(data).unwrap();
    try {
      if (response.success) {
        localStorage.removeItem("createUserToken");
        toast.success("OTP Verified successfully!");
        router.push("/signin");
      }
    } catch (error: unknown) {
      console.error("Error verifying OTP:", error);
      toast.error("An Error Occured");
      // if (error.data?.message === "Invalid OTP") {
      //   toast.error("Invalid OTP. Please try again.");
      // }
      // if (error.data?.message === "OTP did not match") {
      //   toast.error(" OTP did not match");
      // } else {
      //   toast.error("Failed to verify OTP. Please try again.");
      // }
    }

    // router.push("/reset-password")
  };
  const onChangePasswordSubmit = async (data: VerifyOtpValues) => {
    const changePassData = {
      otp: data?.otp,
      email,
    };

    console.log("clicked onChangePasswordSubmit");

    console.log(changePassData);
    const response = await verifyChangePasswordOtp(changePassData).unwrap();
    console.log(response);
    const resetToken = response.data;

    try {
      if (response.success) {
        localStorage.removeItem("userMail");
        localStorage.setItem("resetToken", resetToken);
        toast.success("OTP Verified successfully!");
        router.push("/reset-password");
      }
    } catch (error: unknown) {
      toast.error("An Error Occured");
      console.error("Error verifying OTP:", error);
      const err = error as { data?: { message?: string } };
      console.log(err);
      if (err?.data?.message === "OTP code Expired! Please try again.!") {
        toast.error("OTP code Expired! Please try again.!");
      }
      if (err?.data?.message === "OTP did not match") {
        toast.error(" OTP did not match");
      } else {
        toast.error("Failed to verify OTP. Please try again.");
      }
    }
  };

  const handleSubmit = (data: VerifyOtpValues) => {
    if (source === "signup") {
      onCreateUserSubmit(data);
    } else if (source === "forgot-password") {
      onChangePasswordSubmit(data);
    } else {
      toast.error("Invalid OTP flow source");
    }
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-[800px] py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Verify-OTP
        </h2>
        <p className="text-center text-gray-800 text-sm mb-6">
          {" "}
          We&apos;ll send a verification code to your email. Check your inbox
          and enter the code here.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            {/* Email */}
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP maxLength={4} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        {/* <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} /> */}
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button
              type="submit"
              className="block w-full max-w-100 mx-auto text-base md:text-lg py-1"
            >
              Verify
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default function VerifyOTP() {
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <VerifyOTPSuspense />
    </Suspense>
  );
}
