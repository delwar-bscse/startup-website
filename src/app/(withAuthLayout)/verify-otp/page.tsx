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
import { useRouter } from "next/navigation";
import { useUserOtpVerifyMutation } from "@/Redux/apis/authApi";

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

const VerifyOTP = () => {
  const router = useRouter();
  const form = useForm<VerifyOtpValues>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues,
    mode: "onChange",
  });

  const [verifyOtp] = useUserOtpVerifyMutation();

  const onSubmit = async (data: VerifyOtpValues) => {
    const response = await verifyOtp(data).unwrap();
    try {
      if (response.success) {
        localStorage.removeItem("createUserToken");
        toast.success("OTP Verified successfully!");
        router.push("/login");
      }
    } catch (error: unknown) {
      console.error("Error verifying OTP:", error);
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

export default VerifyOTP;
