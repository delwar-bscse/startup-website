"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

// Schema
const PersonalInfoSchema = z.object({
  annualIncome: z.enum(["", "00-50000", "50000-100000", "100000-5000000", "5000000+"], {
    required_error: "You need to select one.",
  }),
  debtToIncomeRatio: z.enum(["", "00-20", "20-40", "40-60", "60-100"], {
    required_error: "You need to select one.",
  }),
  cashAndSavings: z.enum(["", "00-50000", "50000-250000", "250000-1000000", "1000000+"], {
    required_error: "You need to select one.",
  }),
  investmentHorizon: z.enum(["", "capitalAppreciation", "incomeGeneration", "taxBenefits", "diversification", "preservationOfCapital"], {
    required_error: "You need to select one of above.",
  }),
  investmentGoal: z.enum(["", "capitalAppreciation", "incomeGeneration", "taxBenefits", "diversification", "preservationOfCapital"], {
    required_error: "You need to select one of above.",
  }),
  riskTolerance: z.enum(["", "low", "moderate", "high"], {
    required_error: "You need to select one.",
  }),
  experience: z.enum(["", "beginner", "intermediate", "advanced"], {
    required_error: "You need to select experience level.",
  }),
  previousInvestment: z.enum(["", "00-50000", "50000-250000", "250000-1000000", "1000000+"], {
    required_error: "You need to select one.",
  }),
  returnOnInvestment: z.enum(["", "05-10", "10-20", "20-50", "50-100"], {
    required_error: "You need to select one.",
  }),
  currentAssets: z.enum(["", "00-50000", "50000-250000", "250000-1000000", "1000000+"], {
    required_error: "You need to select one.",
  }),
});

// Type
type PersonalInfoValues = z.infer<typeof PersonalInfoSchema>;

const defaultValues: Partial<PersonalInfoValues> = {
  annualIncome: "",
  debtToIncomeRatio: "",
  cashAndSavings: "",
  investmentHorizon: "",
  investmentGoal: "",
  riskTolerance: "",
  experience: "",
  previousInvestment: "",
  returnOnInvestment: "",
  currentAssets: "",
};

const FinancialInvestmentDetails2 = () => {
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

              {/* Annual Income -- and -- Debt to Income Ratio */}
              <div className="grid grid-cols-2 gap-4">
                {/* Annual Income */}
                <div>
                  <FormField
                    control={form.control}
                    name="annualIncome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Income</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-3 text-gray-600"
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
                                <RadioGroupItem value="50000-100000" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                $50,000 to $100,000
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1">
                              <FormControl>
                                <RadioGroupItem value="100000-5000000" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                $100,000 to $500,000
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1">
                              <FormControl>
                                <RadioGroupItem value="5000000+" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                $500,000+
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* Debt to Income Ratio */}
                <div>
                  <FormField
                    control={form.control}
                    name="debtToIncomeRatio"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Debt to Income Ratio</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-3 text-gray-600"
                          >
                            <FormItem className="flex items-center space-x-1 ">
                              <FormControl>
                                <RadioGroupItem value="00-20" />
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
              </div>

              {/* Cash & Savings -- and -- Investment Horizon */}
              <div className="grid grid-cols-2 gap-4">
                {/* Cash & Savings */}
                <div>
                  <FormField
                    control={form.control}
                    name="cashAndSavings"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Assets</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-3 text-gray-600"
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
                </div>
                {/* Investment Horizon */}
                <div>
                  <FormField
                    control={form.control}
                    name="investmentHorizon"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Investment Horizon</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-3 text-gray-600"
                          >
                            <FormItem className="flex items-center space-x-1 ">
                              <FormControl>
                                <RadioGroupItem value="capitalAppreciation" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Capital Appreciation
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1">
                              <FormControl>
                                <RadioGroupItem value="incomeGeneration" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Income Generation
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1">
                              <FormControl>
                                <RadioGroupItem value="taxBenefits" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Tax Benefits
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1">
                              <FormControl>
                                <RadioGroupItem value="diversification" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Diversification
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1">
                              <FormControl>
                                <RadioGroupItem value="preservationOfCapital" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Preservation of Capital
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

              {/* Investment Goal -- and -- Risk Tolerance */}
              <div className="grid grid-cols-2 gap-4">
                {/* Investment Goal */}
                <div>
                  <FormField
                    control={form.control}
                    name="investmentGoal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Investment Goal</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-3 text-gray-600"
                          >
                            <FormItem className="flex items-center space-x-1 ">
                              <FormControl>
                                <RadioGroupItem value="capitalAppreciation" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Capital Appreciation
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1">
                              <FormControl>
                                <RadioGroupItem value="incomeGeneration" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Income Generation
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1">
                              <FormControl>
                                <RadioGroupItem value="taxBenefits" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Tax Benefits
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1">
                              <FormControl>
                                <RadioGroupItem value="diversification" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Diversification
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1">
                              <FormControl>
                                <RadioGroupItem value="preservationOfCapital" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Preservation of Capital
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* Risk Tolerance */}
                <div>
                  <FormField
                    control={form.control}
                    name="riskTolerance"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Risk Tolerance</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-3 text-gray-600"
                          >
                            <FormItem className="flex items-center space-x-1 ">
                              <FormControl>
                                <RadioGroupItem value="low" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Low Risk
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1">
                              <FormControl>
                                <RadioGroupItem value="moderate" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Moderate Risk
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1">
                              <FormControl>
                                <RadioGroupItem value="high" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                High Risk
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

              {/* Experience Level -- and -- Previous Investment */}
              <div className="grid grid-cols-2 gap-4">
                {/* Experience Level */}
                <div>
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
                            className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-3 text-gray-600"
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
                {/* Previous Investment */}
                <div>
                  <FormField
                    control={form.control}
                    name="previousInvestment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Previous Investment</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-3 text-gray-600"
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
                </div>

              </div>

              {/* Target Return on Investment (ROI) -- and -- Current Assets */}
              <div className="grid grid-cols-2 gap-4">
                {/* Target Return on Investment (ROI) */}
                <div>
                  <FormField
                    control={form.control}
                    name="returnOnInvestment"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Target Return on Investment (ROI)</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-3 text-gray-600"
                          >
                            <FormItem className="flex items-center space-x-1 ">
                              <FormControl>
                                <RadioGroupItem value="05-10" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                5% - 10%
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1">
                              <FormControl>
                                <RadioGroupItem value="10-20" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                10% - 20%
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1">
                              <FormControl>
                                <RadioGroupItem value="20-50" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                20% - 50%
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1">
                              <FormControl>
                                <RadioGroupItem value="50-100" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                50%+
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* Current Assets */}
                <div>
                  <FormField
                    control={form.control}
                    name="currentAssets"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Assets</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col ps-2 sm:ps-20 pt-3 space-y-3 text-gray-600"
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
                </div>
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

export default FinancialInvestmentDetails2;
