"use client";

import { useForm } from "react-hook-form";

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
import { useEffect } from "react";
import {
  useGetBusinessDetailsFieldsQuery,
  useUpdateBusinessInfoMutation,
} from "@/Redux/apis/businessApi";

// const MAX_FILE_SIZE = 1024 * 1024 * 5;
// const ACCEPTED_IMAGE_TYPES = [
//   "image/jpeg",
//   "image/jpg",
//   "image/png",
//   "image/webp",
// ];

// Schema
// const PersonalInfoSchema = z.object({
//   occupation: z.string(),
//   companyName: z.string(),
//   companyType: z.string(),
//   experience: z.string(),
//   companyRegistrationNumber: z.string(),
//   dateOfEstablishment: z.date({
//     required_error: "A date of birth is required.",
//   }),
//   businessWebsiteURL: z.string(),
//   achievement: z.string(),
//   image1: z
//     .any()
//     .refine((file) => file, "Image is required.") // Required
//     .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
//     .refine(
//       (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
//       "Only .jpg, .jpeg, .png and .webp formats are supported."
//     ),
//   image2: z
//     .any()
//     .refine((file) => file, "Image is required.") // Required
//     .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
//     .refine(
//       (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
//       "Only .jpg, .jpeg, .png and .webp formats are supported."
//     ),
// });

// Type
// type PersonalInfoValues = z.infer<typeof PersonalInfoSchema>;

const BusinessDetailsInfo: React.FC<any> = ({ onHandleStep, user }) => {
  const { data: businessFields } = useGetBusinessDetailsFieldsQuery({});
  console.log("businessFields", businessFields);
  const [updateBusinessInfo] = useUpdateBusinessInfoMutation();

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      occupation: user?.occupation || "",
      companyName: user?.companyName || "",
      companyType: user?.companyType || "",
      companyRegistrationNumber: user?.companyRegistrationNumber || "",
      establishmentDate: user?.establishmentDate || "",
      businessWebURL: user?.businessWebURL || "",
      achievement: user?.achievement || "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        occupation: user?.occupation || "",
        companyName: user?.companyName || "",
        companyType: user?.companyType || "",
        companyRegistrationNumber: user?.companyRegistrationNumber || "",
        establishmentDate: user?.establishmentDate || "",
        businessWebURL: user?.businessWebURL || "",
        achievement: user?.achievement || "",
      });
    }
  }, [user, form]);

  const onSubmit = async (data: any) => {
    console.log("submitted Data", data);

    try {
      const response = await updateBusinessInfo(data).unwrap();
      console.log(response);
      if (response.error) {
        toast.error("Error updating business information.");
        console.log(response.error);
      } else {
        toast.success("Business information updated successfully!");

        // Move to the next step after successful submission
        onHandleStep(3);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.log("Form Submission Error", error);
    }
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className=" w-full max-w-[1000px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-6 bg-secondary py-8 md:py-16 px-4 sm:px-24 rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">
                Business Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {businessFields?.data.map((inputField: any, index: number) => (
                  <FormField
                    key={index}
                    control={form.control}
                    name={inputField.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{inputField.label}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={inputField.placeholder}
                            {...form.register(field.name, {
                              required: `${inputField.label} is required`,
                            })}
                            type={inputField.type}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Back  ||  Submit then Next */}
            <div className="w-full flex justify-between">
              <Button
                onClick={() => onHandleStep(1)}
                variant={"outline"}
                className="text-base md:text-lg min-w-[150px] px-3 border border-primary2"
              >
                Back
              </Button>

              <Button
                type="submit"
                className="text-base md:text-lg bg-primary2 min-w-[150px] px-3 text-gray-900"
              >
                Next
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BusinessDetailsInfo;
