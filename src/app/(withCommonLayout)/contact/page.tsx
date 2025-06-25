"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { BiUser } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";

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
import { Textarea } from "@/components/ui/textarea"

import ContactUsImg from "@/assets/contact/contact-us.png";
import { contactData } from "@/constants/contactData";
import Image from "next/image";
import { myFetch } from "@/utils copy/myFetch";

// Schema
const signUpFormSchema = z.object({
  name: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  message: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
});

// Type
type SignUpFormValues = z.infer<typeof signUpFormSchema>;

const defaultValues: Partial<SignUpFormValues> = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
{/* ---------------------------- Sign Up Form ---------------------------- */}
const SignUpForm = () => {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit (data: SignUpFormValues) {
    const response = await myFetch("/users/get-in-touch",
      {
        method: "POST",
        body: data,
      }
    )
    if( response?.success) {
      toast.success("Message sent successfully!");
      form.reset();
      // console.log("Form Data:", response?.data);
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">

      <div style={{ backgroundImage: `url(${ContactUsImg.src})` }} className="w-full text-center min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Contact Us</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20 w-full max-w-[1200px] mx-auto px-4 sm:px-24">
        {contactData?.map((item) => (
          <div key={item?.id} className="flex flex-col items-center justify-center py-2 md:py-4 customShadow rounded-2xl border-t-8 border-t-primary2 bg-white">
            <div className="p-4 bg-color1/5 rounded-full mb-4 w-16 h-16 flex items-center justify-center border border-color1/20">
              <Image src={item?.icon.src} alt={item?.title} width={30} height={30} className="" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-700">{item?.title}</h2>
            <p className="text-center text-gray-700 text-sm md:text-base mb-4">
              {item?.desc1} <br /> {item?.desc2}
            </p>
          </div>
        ))}
      </div>

      <div className="w-[92%] sm:w-[96%] md:w-full max-w-[800px] py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md mb-20 mx-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-780">Get in touch with us.</h2>
        <p className="text-center text-gray-700 text-xl mb-10">
          We&apos;ll get back to you as soon as possible.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {/* Full Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <BiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                      <Input placeholder="Enter your full name" {...field} className="pl-10" />
                    </div>
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
                    <div className="relative">
                      <MdOutlineEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                      <Input placeholder="Enter your email address" {...field} className="pl-10" />
                    </div>
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
                    <div className="relative">
                      <FiPhoneCall className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                      <Input placeholder="Enter your phone number" {...field} className="pl-10" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Full Name */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-[10px] transform text-gray-500 text-xl" />
                      <Textarea placeholder="Enter your message" {...field} className="pl-10 bg-white h-24" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button type="submit" className="w-full text-base md:text-lg">
              Send Message
            </Button>
          </form>
        </Form>
      </div>
      
    </div>
  );
};

export default SignUpForm;
