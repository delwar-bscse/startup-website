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
// import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import Image from "next/image";
import { useRef, useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import { myFetch } from "@/utils copy/myFetch";
import { useRouter } from "next/navigation";

// Schema
const signUpFormSchema = z.object({
  role: z.enum(["investor", "entrepreneur"], {
    required_error: "Please select a role.",
  }),
  name: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  // optInGiftDeliveries: z.boolean().optional(),
});

// Type
type SignUpFormValues = z.infer<typeof signUpFormSchema>;

const defaultValues: Partial<SignUpFormValues> = {
  role: "investor",
  name: "",
  email: "",
  phone: "",
  password: "",
  // optInGiftDeliveries: false,
};

const SignUpForm = () => {
  const router = useRouter();
  const userRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageError, setImageError] = useState<string>("");
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const handleImageChange = () => {
    const file = userRef.current?.files?.[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
      setImageError("");
    }
  };

  const onSubmit = async (data: SignUpFormValues) => {
    if (!imageUrl) {
      setImageError("Please select a profile image.");
      return;
    }
    const formData = new FormData();
    const file = userRef.current?.files?.[0];
    if (file) {
      formData.append("file", file);
    }
    formData.append("data", JSON.stringify(data));

    try {
      const res = await myFetch("/users/register", {
        method: "POST",
        body: formData,
      });
      if (res.success) {
        toast.success("Sign up successful", { id: "signup" });
        router.push("/signin");
      } else {
        toast.error(res?.message || "Sign up failed", { id: "signup" });
      }
    } catch (error) {
      console.error("Error:", error);
    }

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

            {/* Profile Image */}
            <div className="relative w-40 h-40 mx-auto rounded-full bg-gray-100">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src={imageUrl}
                  alt="Profile"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <span onClick={() => userRef.current?.click()} className="absolute bottom-2.5 right-2.5 p-1.5 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <IoCameraOutline size={16} />
              </span>
              <input ref={userRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            </div>
            {imageError && (
              <p className="text-red-500 text-center pb-4 text-sm">{imageError}</p>
            )}

            {/* Full Name */}
            <FormField
              control={form.control}
              name="name"
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
              name="phone"
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
            {/* <FormField
              control={form.control}
              name="optInGiftDeliveries"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-2 md:gap-4 p-4 text-gray-600">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-xs sm:text-sm md:text-base">
                    Opt-in for Random Gift Deliveries
                  </FormLabel>
                </FormItem>
              )}
            /> */}

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
