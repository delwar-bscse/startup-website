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
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import Link from "next/link";
import { setCookie } from "cookies-next/client";
import { useRouter } from "next/navigation";

// Schema
const signUpFormSchema = z.object({
  role: z.enum(["investor", "entrepreneur"], {
    required_error: "Please select a role.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  rememberMe: z.boolean().optional(),
});

// Type
type SignUpFormValues = z.infer<typeof signUpFormSchema>;

const defaultValues: Partial<SignUpFormValues> = {
  role: "investor",
  email: "",
  password: "",
  rememberMe: false,
};

const SignInForm = () => {
  const router = useRouter();
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: SignUpFormValues) {
    toast("Sign In successfully!");
    console.log("Submitted Data:", data);

    setCookie("su_role", data.role);
    router.push("/")
  }

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-[800px] py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Sign In</h2>
        <p className="text-center text-gray-800 text-sm mb-6">
          Login to your account to continue
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Role Radio Group */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="flex justify-center gap-2 py-4 md:py-8">
                  <RadioGroup onValueChange={field.onChange} value={field.value} className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="investor" id="investor" />
                      <Label htmlFor="investor" className="text-gray-800 font-semibold">Investor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="entrepreneur" id="entrepreneur" />
                      <Label htmlFor="entrepreneur" className="text-gray-800 font-semibold">Entrepreneur</Label>
                    </div>
                  </RadioGroup>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                    <Input type="password" placeholder="Enter password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between items-center">
              {/* Checkbox */}
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center gap-2 md:gap-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel className="text-sm sm:text-base">
                      Remember Me
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Link href="/forgot-password" className="font-semibold text-sm sm:text-base text-gray-600">
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
