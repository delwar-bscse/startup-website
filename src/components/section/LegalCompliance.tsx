"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { PiUploadSimple } from "react-icons/pi";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { format } from "date-fns"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner";
import Image from "next/image";
import { useState } from "react";

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

// Schema
const PersonalInfoSchema = z.object({
  accreditedInvestor: z.enum(["", "yes", "no"], {
    required_error: "You need to select Company Yes/No.",
  }),
  legalOrRegulatory: z.enum(["", "yes", "no"], {
    required_error: "You need to select Team Yes/No.",
  }),
  iAgree: z
    .boolean(),
  signature: z
    .any()
    .refine((file) => file, "Image is required.") // Required
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  date: z.date(),
});

// Type
type PersonalInfoValues = z.infer<typeof PersonalInfoSchema>;

const defaultValues: Partial<PersonalInfoValues> = {
  accreditedInvestor: "",
  legalOrRegulatory: "",
  iAgree: false,
  date: new Date(),
};

const LegalCompliance = () => {
  const [imagePreview1, setImagePreview1] = useState<string | null>(null);
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">Legal Compliance</h2>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Are you an accredited investor */}
                <div>
                <FormField
                  control={form.control}
                  name="accreditedInvestor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Are you an accredited investor ?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-1 text-gray-600"
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
                {/* Do you have a team */}
                <div>
                <FormField
                  control={form.control}
                  name="legalOrRegulatory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Are you involved in any legal or regulatory issues related to investments ?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-1 text-gray-600"
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
              </div>

              <p>I hereby declare that the information provided is accurate and complete to the best of my knowledge.</p>

              {/* Title of the project */}
              <FormField
                control={form.control}
                name="iAgree"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-0 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel>I Agree</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Image Upload */}
              <div className="flex flex-wrap gap-3">
                <p className="text-primary font-semibold">Signature : </p>
                {/* Image Upload Field */}
                <FormField
                  control={form.control}
                  name="signature"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative w-[250px] h-[80px] bg-purple-100 rounded-md border-2 border-primary flex justify-center items-center cursor-pointer overflow-hidden">
                          {!imagePreview1 ? (
                            <>
                              <PiUploadSimple className="text-4xl text-primary" />
                            </>
                          ) : (
                            <Image
                              src={imagePreview1} // Use the base64 string for the src
                              alt="Uploaded Preview"
                              width={300} // Set width and height
                              height={80}
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
              </div>
              {/* Date */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex gap-3">
                    <FormLabel>Date : </FormLabel>
                    <FormControl>
                      <p className="font-semibold">{field.value && (format(field.value, "PPP"))}</p>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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

export default LegalCompliance;
