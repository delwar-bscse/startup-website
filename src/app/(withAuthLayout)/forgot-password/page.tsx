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
import { useRouter } from "next/navigation";
import { useForgetPasswordMutation } from "@/Redux/apis/authApi";

// Schema
const forgotPasswordSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

// Type
type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

const defaultValues: Partial<ForgotPasswordValues> = {
  email: "",
};

const ForgotPassword = () => {
  const router = useRouter();
  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues,
    mode: "onChange",
  });

  const [forgotPasswordMail] = useForgetPasswordMutation();

  const onSubmit = async (data: ForgotPasswordValues) => {
    console.log("email", data);
    try {
      const response = await forgotPasswordMail(data).unwrap();
      console.log(response);

      if (response?.success) {
        // localStorage.setItem("otpToken", response?.data?.forgetToken);
        localStorage.setItem("userEmail", data?.email);
        toast.success("OTP sent to provided mail!");
        router.push("/verify-otp?source=forgot-password");
      }
    } catch (error) {
      console.log("error", error);
    }

    // router.push("/verify-otp")
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-[800px] py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Forgot Password
        </h2>
        <p className="text-center text-gray-800 text-sm mb-6">
          Enter you email below to reset your password
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

            {/* Submit */}
            <Button type="submit" className="w-full text-base md:text-lg">
              Send OTP
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
