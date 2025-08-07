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
import { useResetPasswordMutation } from "@/Redux/apis/authApi";

// Schema
const signUpFormSchema = z
  .object({
    newPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // This will show the error on the confirmPassword field
  });

// Type
type SignUpFormValues = z.infer<typeof signUpFormSchema>;

const defaultValues: Partial<SignUpFormValues> = {
  newPassword: "",
  confirmPassword: "",
};

const SignInForm = () => {
  const router = useRouter();
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const [resetPassword] = useResetPasswordMutation();
  // const email = localStorage.getItem("userEmail");

  const onSubmit = async (data: SignUpFormValues) => {
    console.log(data);
    const changePasswordData = {
      newPassword: data.newPassword,
    };
    try {
      const res = await resetPassword(changePasswordData).unwrap();
      console.log(res);
      if (res.success) {
        localStorage.removeItem("otpToken");
        localStorage.removeItem("resetToken");
        localStorage.removeItem("userEmail");
        toast.success("Password Changed Successfully");
        router.push("/signin");
      } else {
        toast.error(
          res?.data?.message || res?.error?.data?.message || "Sign up failed"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center w-full px-4 py-10">
      <div className="w-full max-w-[800px] py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md">
        <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">
          Reset Password
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* New Password */}
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
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
            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
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

            {/* Submit */}
            <Button
              type="submit"
              className="w-full text-base cursor-pointer md:text-lg"
            >
              Update
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;
