"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { CiImageOn } from "react-icons/ci";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

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
import Image from "next/image";
import { useState } from "react";
// import { myFetch } from "@/utils copy/myFetch";



const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

// Schema
const PersonalInfoSchema = z.object({
  occupation: z.string(),
  companyName: z.string(),
  companyType: z.string(),
  experience: z.string(),
  companyRegistrationNumber: z.string(),
  dateOfEstablishment: z.date({
    required_error: "A date of birth is required.",
  }),
  businessWebsiteURL: z.string(),
  achievement: z.string(),
  image1: z
    .any()
    .refine((file) => file, "Image is required.") // Required
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  image2: z
    .any()
    .refine((file) => file, "Image is required.") // Required
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

// Type
type PersonalInfoValues = z.infer<typeof PersonalInfoSchema>;

const defaultValues: Partial<PersonalInfoValues> = {
  occupation: "",
  companyName: "",
  companyType: "",
  experience: "",
  companyRegistrationNumber: "",
  dateOfEstablishment: new Date(),
  businessWebsiteURL: "",
  achievement: "",
};

interface PersonalInformationProps {
  onHandleStep: (id: number) => void; // Define the type of onHandleStep prop
}

const BusinessDetailsInfo: React.FC<PersonalInformationProps> = ({onHandleStep}) => {
  const [imagePreview1, setImagePreview1] = useState<string | null>(null);
  const [imagePreview2, setImagePreview2] = useState<string | null>(null);
  const form = useForm<PersonalInfoValues>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: PersonalInfoValues) {
    toast("Form submitted successfully!");
    console.log("Submitted Data:", data);
    const { image1, image2, ...newData } = data;

    const formData = new FormData();
    formData.append("files", image1);
    formData.append("files", image2);
    formData.append("data", JSON.stringify(newData));

    // const response = await myFetch("/users/businessInfo", {
    //   method: "PUT",
    //   body: formData,
    // });
    // console.log("Response:", response);

    onHandleStep(3);
  }

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className=" w-full max-w-[1000px]">

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-6 bg-secondary py-8 md:py-16 px-4 sm:px-24 rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">Business Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Occupation */}
                <FormField
                  control={form.control}
                  name="occupation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Occupation</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your occupation" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Company Name */}
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Company Type */}
              <FormField
                control={form.control}
                name="companyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Type</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter company type" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Experience */}
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of Experience</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your years of experience" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Company Registration Number */}
                <FormField
                  control={form.control}
                  name="companyRegistrationNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Registration Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter company registration number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date of Establishment */}
                <FormField
                  control={form.control}
                  name="dateOfEstablishment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Establishment</FormLabel>
                      <FormControl>
                        {/* <Input placeholder"Enter your date of birth" {...field} /> */}
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[100%] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Business Website URL */}
                <FormField
                  control={form.control}
                  name="businessWebsiteURL"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Website URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your years of experience" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Achievement */}
              <FormField
                control={form.control}
                name="achievement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Occupation</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your achievement" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Add Images */}
              <div>
                <p className="text-primary font-semibold py-2">Add Images</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* Image Upload Field */}
                  <FormField
                    control={form.control}
                    name="image1"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative w-full h-[150px] bg-purple-100 rounded-md border-2 border-primary flex justify-center items-center cursor-pointer overflow-hidden">
                            {!imagePreview1 ? (
                              <span className="text-primary">
                                <CiImageOn className='text-8xl' />
                              </span>
                            ) : (
                              <Image
                                src={imagePreview1} // Use the base64 string for the src
                                alt="Uploaded Preview"
                                width={280} // Set width and height
                                height={140}
                                objectFit="cover" // Make sure it covers the area properly
                              />
                            )}

                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  field.onChange(file);
                                  setImagePreview1(URL.createObjectURL(file));
                                }
                              }}
                              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            />
                          </div>

                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Image Upload Field */}
                  <FormField
                    control={form.control}
                    name="image2"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative w-full h-[150px] bg-purple-100 rounded-md border-2 border-primary flex justify-center items-center cursor-pointer overflow-hidden">
                            {!imagePreview2 ? (
                              <span className="text-primary">
                                <CiImageOn className='text-8xl' />
                              </span>
                            ) : (
                              <Image
                                src={imagePreview2} // Use the base64 string for the src
                                alt="Uploaded Preview"
                                width={280} // Set width and height
                                height={140}
                                objectFit="cover" // Make sure it covers the area properly
                              />
                            )}

                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  field.onChange(file);
                                  setImagePreview2(URL.createObjectURL(file));
                                }
                              }}
                              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            />
                          </div>

                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            
            {/* Back  ||  Submit then Next */}
            <div className="w-full flex justify-between">
              <Button onClick={() => onHandleStep(1)} variant={"outline"} className="text-base md:text-lg min-w-[150px] px-3 border border-primary2">
                Back
              </Button>

              <Button type="submit" className="text-base md:text-lg bg-primary2 min-w-[150px] px-3 text-gray-900">
                Next
              </Button>
            </div>
          </form>

        </Form>
      </div>
    </div >
  );
};

export default BusinessDetailsInfo;
