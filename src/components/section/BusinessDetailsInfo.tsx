/* eslint-disable @typescript-eslint/no-explicit-any */
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
import dayjs from "dayjs";

const BusinessDetailsInfo: React.FC<any> = ({
  onHandleStep,
  user,
  refetch,
}) => {
  const { data: businessFields } = useGetBusinessDetailsFieldsQuery({});
  console.log("businessFields", businessFields);
  const [updateBusinessInfo] = useUpdateBusinessInfoMutation();

  const form = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  useEffect(() => {
    if (user && businessFields?.data) {
      const newFormValues: any = {};

      businessFields.data.forEach((field: any) => {
        const fieldName = field.name;
        newFormValues[fieldName] = user?.businessInfo?.[fieldName] || "";
      });

      if (user?.businessInfo?.EstablishmentDate) {
        newFormValues.EstablishmentDate = dayjs(
          user.businessInfo.EstablishmentDate
        ).format("YYYY-MM-DD");
      }

      form.reset(newFormValues);
    }
  }, [user, businessFields?.data, form]);

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
        refetch();
        onHandleStep(3);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.log("Form Submission Error", error);
    }
  };

  return (
    <div className="flex justify-center w-full px-4 py-10">
      <div className=" w-full max-w-[1000px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="px-4 py-8 space-y-6 rounded-lg shadow-md bg-secondary md:py-16 sm:px-24">
              <h2 className="mb-8 text-2xl font-semibold md:text-3xl text-primary">
                Business Details
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
            <div className="flex justify-between w-full">
              <Button
                onClick={() => onHandleStep(1)}
                variant={"outline"}
                className="cursor-pointer text-base md:text-lg min-w-[150px] px-3 border border-primary2"
              >
                Back
              </Button>

              <Button
                type="submit"
                className="cursor-pointer text-base md:text-lg bg-primary2 min-w-[150px] px-3 text-gray-900"
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
