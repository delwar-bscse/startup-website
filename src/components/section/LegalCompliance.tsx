/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  useGetLegalComplianceFieldsQuery,
  useUpdateLegalComplianceInfoMutation,
} from "@/Redux/apis/legalComplianceApi";
import { CiImageOn } from "react-icons/ci";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

const LegalCompliance: React.FC<any> = ({ onHandleStep, user, refetch }) => {
  const [imagePreview1, setImagePreview1] = useState<string | null>(null);
  const router = useRouter();

  const { data: legalFields } = useGetLegalComplianceFieldsQuery({});
  console.log("legalFields", legalFields?.data);
  const [updateLegallInfo] = useUpdateLegalComplianceInfoMutation();

  console.log(user);

  const userRole = user?.role;
  // console.log(userRole);

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      accreditedInvestor: user?.legalCompliance?.accreditedInvestor || "",
      legalOrRegulatoryIssuesWithInvestments:
        user?.legalCompliance?.legalOrRegulatoryIssuesWithInvestments || "",
      declareInfoIsTrue: user?.legalCompliance?.declareInfoIsTrue || false,
      date: user?.legalCompliance?.date
        ? dayjs(user?.legalCompliance?.date).format("YYYY-MM-DD")
        : "",
      signature: undefined,
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        accreditedInvestor: user?.legalCompliance?.accreditedInvestor || "",
        legalOrRegulatoryIssuesWithInvestments:
          user?.legalCompliance?.legalOrRegulatoryIssuesWithInvestments || "",
        declareInfoIsTrue: user?.legalCompliance?.declareInfoIsTrue || false,
        date: user?.legalCompliance?.date
          ? dayjs(user?.legalCompliance?.date).format("YYYY-MM-DD")
          : "",
        signature: undefined,
      });
    }
  }, [user, form]);

  const onSubmit = async (data: any) => {
    console.log("Submitted Data:", data);
    try {
      const { signature, ...newData } = data;
      const formData = new FormData();

      if (signature) formData.append("file", signature);
      formData.append("data", JSON.stringify(newData));
      console.log("new", newData);

      // API call to update user data
      const response = await updateLegallInfo(formData).unwrap();
      console.log(response);
      if (response.error) {
        toast.error("Error updating legal compliances.");
        console.log(response.error);
      } else {
        toast.success("Legal Compliances Updated Successfully!");
        refetch();
        // onHandleStep(5);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.log("Form Submission Error", error);
    }

    // const response = await myFetch("/users/legalCompliance", {
    //   method: "PUT",
    //   body: formData,
    // });
    // console.log("Response:", response);

    // onHandleStep(5);
  };

  const handleComplete = () => {
    router.push(`/${userRole}/portfolio`);
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-[1000px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">
                Legal Compliance
              </h2>
              <div className="grid grid-cols-2 gap-8">
                {/* Are you an accredited investor */}
                {legalFields?.data.map((eachField: any, index: number) => {
                  return (
                    <FormField
                      key={index}
                      control={form.control}
                      name={eachField.name}
                      render={({ field }) => {
                        if (eachField.type === "Date") {
                          return (
                            <FormItem>
                              <FormLabel>{eachField.label}</FormLabel>
                              <FormControl>
                                <input
                                  type="date"
                                  value={field.value}
                                  onChange={(e) =>
                                    field.onChange(e.target.value)
                                  }
                                  className="px-4 py-2 rounded-md border border-primary2"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }
                        if (eachField.name === "declareInfoIsTrue") {
                          return (
                            <FormField
                              key={index}
                              control={form.control}
                              name={eachField.name}
                              render={({ field }) => (
                                <FormItem className="flex items-center gap-5">
                                  <FormLabel>{eachField.label}</FormLabel>
                                  <FormControl>
                                    <input
                                      type="checkbox"
                                      checked={field.value === true}
                                      onChange={(e) =>
                                        field.onChange(e.target.checked)
                                      }
                                      className="form-checkbox h-5 w-5 text-primary2"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          );
                        }

                        return (
                          <FormItem className="flex">
                            <FormLabel>{eachField.label}</FormLabel>
                            <FormControl>
                              <RadioGroup
                                value={field.value}
                                onValueChange={(value) => field.onChange(value)}
                                className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-3 text-gray-600"
                              >
                                {eachField.selectOptions?.map(
                                  (option: any, optionIndex: number) => {
                                    const booleanValue =
                                      option.name === "true"
                                        ? true
                                        : option.name === "false"
                                        ? false
                                        : option.name;

                                    return (
                                      <FormItem
                                        key={optionIndex}
                                        className="flex items-center space-x-1 cursor-pointer"
                                      >
                                        <FormControl>
                                          <RadioGroupItem
                                            value={booleanValue}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal cursor-pointer">
                                          {option.label}
                                        </FormLabel>
                                      </FormItem>
                                    );
                                  }
                                )}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  );
                })}
              </div>

              {/* Signature Image */}
              <FormField
                control={form.control}
                name="signature"
                render={({ field }) => (
                  <FormItem>
                    <p className="text-gray-600 underline font-semibold">
                      Add Signature:
                    </p>
                    <FormControl>
                      <div className="relative w-1/2 h-[150px] bg-purple-100 rounded-md border-2 border-primary flex justify-center items-center cursor-pointer overflow-hidden">
                        {!imagePreview1 ? (
                          <span className="text-primary">
                            <CiImageOn className="text-8xl" />
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
            </div>

            {/* Back  ||  Submit then Next */}
            <div className="w-full flex justify-between">
              <Button
                onClick={() => onHandleStep(3)}
                variant={"outline"}
                className="cursor-pointer text-base md:text-lg min-w-[150px] px-3 border border-primary2"
              >
                Back
              </Button>

              <Button
                type="submit"
                onClick={handleComplete}
                className="cursor-pointer text-base md:text-lg bg-primary2 min-w-[150px] px-3 text-gray-900"
              >
                {/* Next */}
                Complete
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LegalCompliance;
