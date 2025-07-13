/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// This component is used to collect financial and investment details from the user.
// ---------------------------- INVESTOR SECTION ----------------------------//

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
import { useEffect } from "react";
import {
  useGetFinancialDetailsFieldsQuery,
  useUpdateFinancialInfoMutation,
} from "@/Redux/apis/financialDetailsApi";

const FinancialInvestmentDetails2: React.FC<any> = ({ onHandleStep, user }) => {
  const { data: financialFields } = useGetFinancialDetailsFieldsQuery({});
  console.log("financialFields", financialFields?.data);
  console.log("user", user);

  const [updateFinancialInfo] = useUpdateFinancialInfoMutation();

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      annualIncome: user?.annualIncome || "",
      debtToIncomeRatio: user?.debtToIncomeRatio || "",
      cashAndSavings: user?.cashAndSavings || "",
      investmentHorizon: user?.investmentHorizon || "",
      investmentGoal: user?.investmentGoal || "",
      riskTolerance: user?.riskTolerance || "",
      experience: user?.experience || "",
      previousInvestment: user?.previousInvestment || "",
      returnOnInvestment: user?.returnOnInvestment || "",
      currentAssets: user?.currentAssets || "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        annualIncome: user?.financialDetails?.annualIncome || "",
        debtToIncomeRatio: user?.financialDetails?.debtToIncomeRatio || "",
        cashAndSavings: user?.financialDetails?.cashAndSavings || "",
        investmentHorizon: user?.financialDetails?.investmentHorizon || "",
        investmentGoal: user?.financialDetails?.investmentGoal || "",
        riskTolerance: user?.financialDetails?.riskTolerance || "",
        experience: user?.financialDetails?.experience || "",
        previousInvestment: user?.financialDetails?.previousInvestment || "",
        returnOnInvestment: user?.financialDetails?.returnOnInvestment || "",
        currentAssets: user?.financialDetails?.currentAssets || "",
      });
    }
  }, [user, form]);

  const onSubmit = async (data: any) => {
    console.log("Submitted Data:", data);
    try {
      const response = await updateFinancialInfo(data).unwrap();
      console.log(response);
      if (response.error) {
        toast.error("Error updating financial information.");
        console.log(response.error);
      } else {
        toast.success("Financial information updated successfully!");

        onHandleStep(4);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.log("Form Submission Error", error);
    }
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-[1000px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">
                Financial & Investment Details
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {financialFields?.data.map((fieldData: any, index: number) => {
                  if (fieldData?.for === "investor") {
                    return (
                      <FormField
                        key={index}
                        control={form.control}
                        name={fieldData.name}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{fieldData.label}</FormLabel>
                            <FormControl>
                              <RadioGroup
                                value={field.value}
                                onValueChange={(value) => field.onChange(value)}
                                className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-3 text-gray-600"
                              >
                                {fieldData.selectOptions?.map(
                                  (option: any, optionIndex: number) => (
                                    <FormItem
                                      key={optionIndex}
                                      className="flex items-center space-x-1 cursor-pointer"
                                    >
                                      <FormControl>
                                        <RadioGroupItem value={option.name} />
                                      </FormControl>
                                      <FormLabel className="font-normal cursor-pointer">
                                        {option.label}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                )}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* Back  ||  Submit then Next */}
            <div className="w-full flex justify-between">
              <Button
                onClick={() => onHandleStep(2)}
                type="submit"
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

export default FinancialInvestmentDetails2;
