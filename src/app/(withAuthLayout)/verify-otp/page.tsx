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
  useResendOtpMutation,
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
  const [timer, setTimer] = useState<number>(120); // 2 minutes = 120 seconds
  const [isOtpExpired, setIsOtpExpired] = useState(false);

  useEffect(() => {
    const _source = searchParams.get("source");
    setSource(_source);

    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      } else {
        setIsOtpExpired(true);
        clearInterval(countdown); // Stop the countdown once it reaches 0
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, searchParams]);

  const form = useForm<VerifyOtpValues>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues,
    mode: "onChange",
  });

  const email = localStorage.getItem("userEmail");

  const [verifyCreateUserOtp] = useUserOtpVerifyMutation();
  const [verifyChangePasswordOtp] = useVerifyChangePasswordOtpMutation();
  const [resendOtp] = useResendOtpMutation();

  const onCreateUserSubmit = async (data: VerifyOtpValues) => {
    console.log("otp data", data);
    try {
      const response = await verifyCreateUserOtp(data).unwrap();
      console.log(response);

      if (response.success) {
        localStorage.removeItem("createUserToken");
        toast.success("User Created successfully!");
        router.push("/signin");
      } else {
        if (response.data?.message === "Invalid OTP") {
          toast.error("Invalid OTP. Please try again.");
        } else if (response.data?.message === "OTP did not match") {
          toast.error("OTP did not match.");
        } else if (
          response?.data?.message?.includes(
            "MongoServerError: E11000 duplicate key error collection: MoonPartner.users index: phone_1 dup key:"
          )
        ) {
          toast.error("Phone Number already exists.");
        } else {
          toast.error("Failed to verify OTP. Please try again.");
        }
      }
    } catch (error: unknown) {
      console.error("Error verifying OTP:", error);

      toast.error("An error occurred while verifying OTP.");

      const err = error as { data?: { message?: string } };
      if (err?.data?.message) {
        if (err.data.message === "Incorrect OTP. Please try again.") {
          toast.error("Incorrect OTP. Please try again.");
        } else if (err.data.message === "OTP did not match") {
          toast.error("OTP did not match.");
        } else if (
          err.data.message === "OTP code Expired! Please try again.!"
        ) {
          toast.error("OTP code Expired! Please try again.!");
        } else if (
          err?.data?.message?.includes(
            "MongoServerError: E11000 duplicate key error collection: MoonPartner.users index: phone_1 dup key:"
          )
        ) {
          toast.error("Phone Number already exists.");
        } else {
          toast.error("Failed to verify OTP. Please try again.");
        }
      }
    }
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

  const handleResendOtp = async () => {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      toast.error("Email not found. Please start the reset process again.");
      return;
    }

    const data = email;
    console.log("resend data", data);
    try {
      const response = await resendOtp(data).unwrap();
      if (response.success === true) {
        toast.success("An OTP has been sent to your email!");
        setTimer(120); // Reset the timer to 2 minutes when the OTP is resent
        setIsOtpExpired(false);
      }
    } catch (error) {
      // console.error("Error sending reset code:", error);
      const err = error as { data?: { message?: string } };
      if (err.data?.message === "User not found") {
        toast.error("Incorrect Email.");
      } else {
        toast.error("Failed to resend OTP. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center w-full px-4 py-10">
      <div className="w-full max-w-[800px] py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md">
        <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl">
          Verify-OTP
        </h2>
        <p className="mb-6 text-sm text-center text-gray-800">
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
              className="block w-full py-1 mx-auto text-base cursor-pointer max-w-100 md:text-lg"
            >
              Verify
            </Button>
          </form>

          {/* Countdown Timer */}
          <div className="mt-4 text-center">
            {isOtpExpired ? (
              <p className="text-sm text-red-500">
                OTP expired. Please request a new one.
              </p>
            ) : (
              <p className="text-xs text-red-500">
                Time remaining: {Math.floor(timer / 60)}:
                {String(timer % 60).padStart(2, "0")}
              </p>
            )}
          </div>

          <button
            onClick={handleResendOtp}
            disabled={!isOtpExpired}
            className="w-20 mt-5 text-xs cursor-pointer float-end text-[#765CF0] underline"
          >
            Resend Otp
          </button>
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
