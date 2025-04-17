"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import { CiImageOn } from "react-icons/ci";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


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

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

// Schema
const PersonalInfoSchema = z.object({
  projectName: z.string().min(2, {
    message: "Project name must be at least 2 characters.",
  }),
  projectDes: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  haveCompany: z.enum(["", "yes", "no"], {
    required_error: "You need to select Company Yes/No.",
  }),
  haveTeam: z.enum(["", "yes", "no"], {
    required_error: "You need to select Team Yes/No.",
  }),
  ifHaveCompany: z.string(),
  needCapital: z.enum(["", "00-50000", "50000-250000", "250000-1000000", "1000000+"], {
    required_error: "You need to select one.",
  }),
  percentageSell: z.enum(["", "00-20", "20-40", "40-60", "60-100"], {
    required_error: "You need to select one.",
  }),
  experience: z.enum(["", "beginner", "intermediate", "advanced"], {
    required_error: "You need to select experience level.",
  }),
  shareSell: z.enum(["", "00-50000", "50000-250000", "250000-1000000", "1000000+"], {
    required_error: "You need to select one.",
  }),
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
  projectName: "",
  projectDes: "",
  haveCompany: "",
  haveTeam: "",
  ifHaveCompany: "",
  experience: "",
  shareSell: "",
  needCapital: "",
  percentageSell: "",
};

const FinancialInvestmentDetails = () => {
  const [imagePreview1, setImagePreview1] = useState<string | null>(null);
  const [imagePreview2, setImagePreview2] = useState<string | null>(null);
  const form = useForm<PersonalInfoValues>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: PersonalInfoValues) {
    toast("Form submitted successfully!");
    console.log("Submitted Data:", data);
  }

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-[1000px]">

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">Financial & Investment Details</h2>
              {/* Title of the project */}
              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title of the project</FormLabel>
                    <FormControl>
                      <Input placeholder="Project Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* What's it about? (Your Story) */}
              <FormField
                control={form.control}
                name="projectDes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What&apos;s it about? (Your Story)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Project des..." className="h-32 bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                {/* Do you have a company */}
                <FormField
                  control={form.control}
                  name="haveCompany"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Do you Have a company ?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-1"
                        >
                          <FormItem className="flex items-center space-x-1 ">
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Yes
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              No
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Do you have a team */}
                <FormField
                  control={form.control}
                  name="haveTeam"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Do you Have a team ?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-1"
                        >
                          <FormItem className="flex items-center space-x-1 ">
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Yes
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              No
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* What's it about? (Your Story) */}
                <FormField
                  control={form.control}
                  name="ifHaveCompany"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>If yes, put your company name and SIRET number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Company Name and SIRET number"  {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Image Upload */}
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

              <div className="grid grid-cols-2 gap-4">
                {/* How many company shares do you sell */}
                <FormField
                  control={form.control}
                  name="needCapital"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How much capital do you need ?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-1"
                        >
                          <FormItem className="flex items-center space-x-1 ">
                            <FormControl>
                              <RadioGroupItem value="00-50000" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Less than $50,000
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1">
                            <FormControl>
                              <RadioGroupItem value="50000-250000" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              $50,000 to $250,000
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1">
                            <FormControl>
                              <RadioGroupItem value="250000-1000000" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              $250,000 to $1 million
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1">
                            <FormControl>
                              <RadioGroupItem value="1000000+" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              More than $1 million
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Experience Level */}
                <FormField
                  control={form.control}
                  name="percentageSell"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>How many percentage of your company do you sell ?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-1"
                        >
                          <FormItem className="flex items-center space-x-1 ">
                            <FormControl>
                              <RadioGroupItem value="0-20" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Less than 20%
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1">
                            <FormControl>
                              <RadioGroupItem value="20-40" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              20% - 40%
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1">
                            <FormControl>
                              <RadioGroupItem value="40-60" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              40% - 60%
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1">
                            <FormControl>
                              <RadioGroupItem value="60-100" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              More than 60%
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* How many company shares do you sell */}
                <FormField
                  control={form.control}
                  name="shareSell"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How much company&apos;s shares do you sell ?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-1"
                        >
                          <FormItem className="flex items-center space-x-1 ">
                            <FormControl>
                              <RadioGroupItem value="00-50000" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Less than $50,000
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1">
                            <FormControl>
                              <RadioGroupItem value="50000-250000" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              $50,000 to $250,000
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1">
                            <FormControl>
                              <RadioGroupItem value="250000-1000000" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              $250,000 to $1 million
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1">
                            <FormControl>
                              <RadioGroupItem value="1000000+" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              More than $1 million
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Experience Level */}
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Experience Level</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-1"
                        >
                          <FormItem className="flex items-center space-x-1 ">
                            <FormControl>
                              <RadioGroupItem value="beginner" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Beginner
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1">
                            <FormControl>
                              <RadioGroupItem value="intermediate" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Intermediate
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1">
                            <FormControl>
                              <RadioGroupItem value="advanced" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Advanced
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            {/* Back  ||  Submit then Next */}
            <div className="w-full flex justify-between">
              <Button type="submit" variant={"outline"} className="text-base md:text-lg min-w-[150px] px-3 border border-primary2">
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

export default FinancialInvestmentDetails;
