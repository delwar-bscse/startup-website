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

// Schema
const signUpFormSchema = z.object({
  role: z.enum(["investor", "entrepreneur"], {
    required_error: "Please select a role.",
  }),
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  primaryEvent: z.string({
    required_error: "Please select your primary event.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  optInGiftDeliveries: z.boolean().optional(),
});

// Type
type SignUpFormValues = z.infer<typeof signUpFormSchema>;

const defaultValues: Partial<SignUpFormValues> = {
  role: "investor",
  fullName: "",
  email: "",
  phoneNumber: "",
  primaryEvent: "",
  password: "",
  optInGiftDeliveries: false,
};

const SignUpForm = () => {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: SignUpFormValues) {
    toast("Form submitted successfully!");
    console.log("Submitted Data:", data);
  }

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-[800px] py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Sign Up</h2>
        <p className="text-center text-gray-800 text-sm mb-6">
          Join us and start making every moment unforgettable!
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

            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
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

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Primary Event */}
            <FormField
              control={form.control}
              name="primaryEvent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What&apos;s Your Primary Event?</FormLabel>
                  <FormControl>
                    <Input placeholder="Type your primary event" {...field} />
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

            {/* Checkbox */}
            <FormField
              control={form.control}
              name="optInGiftDeliveries"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-4  p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-sm sm:text-base">
                    Opt-in for Random Gift Deliveries
                  </FormLabel>
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button type="submit" className="w-full text-base md:text-lg">
              Create Your Account
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
