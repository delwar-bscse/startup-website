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
import { IoMdArrowBack } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
import { useInvestOnProjectMutation } from "@/Redux/apis/investorApi";
import { toast } from "sonner";

const defaultValues = {
  percentage: "",
  amount: "",
};

const InvestNow = () => {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("projectId");
  const entrepreneurId = searchParams.get("entrepreneurId");
  const projectTarget = searchParams.get("target");
  const raised = searchParams.get("raised");
  const daysLeft = searchParams.get("daysLeft");

  const router = useRouter();

  const [investOnProject, { isLoading: isInvesting }] =
    useInvestOnProjectMutation();

  const form = useForm({
    defaultValues,
    mode: "onChange",
  });

  const calculateAmount = (percentage: string) => {
    const percentageValue = parseFloat(percentage);
    if (
      !isNaN(percentageValue) &&
      percentageValue >= 10 &&
      percentageValue <= 100
    ) {
      return ((Number(projectTarget) * percentageValue) / 100).toFixed(2);
    }
    return "";
  };

  const onSubmit = async (data: any) => {
    console.log("Investment Form Data", data);
    try {
      if (projectId && entrepreneurId) {
        const amount = parseFloat(data.amount);
        const sharePercentage = parseFloat(data.percentage);

        const response = await investOnProject({
          projectId,
          entrepreneurId,
          amount,
          sharePercentage,
        });

        console.log("response investment", response);

        if (response?.data.success) {
          toast.success("Investment successful!");
          const redirectPath = response?.data?.data;
          if (redirectPath) {
            router.push(redirectPath);
          } else {
            toast.error("No redirect path provided.");
          }
        } else {
          toast.error("Something went wrong. Please try again.");
          console.log(response.error);
        }
      }
    } catch (error) {
      console.log("Error submitting investment:", error);
      toast.error(
        "An error occurred while processing your investment. Please try again."
      );
    }
  };

  const handlePercentageChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    form.setValue("percentage", value);

    const calculatedAmount = calculateAmount(value);
    form.setValue("amount", calculatedAmount);
  };

  if (isInvesting) {
  }

  return (
    <div className="py-10">
      <div className="max-w-[800px] mx-auto flex items-center pb-2">
        <button
          onClick={() => window.history.back()}
          className="cursor-pointer flex items-center gap-1"
        >
          <IoMdArrowBack className="text-xl text-gray-600" />
          <span className="text-gray-700 font-semibold text-xl">Back</span>
        </button>
      </div>
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[800px] py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-700 text-center mb-4">
            Your Investment
          </h2>
          <p className="text-center text-gray-800 mb-6 text-lg pb-4">
            See a Detailed Breakdown of Your Investment Contributions
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Percentage */}
              <FormField
                control={form.control}
                name="percentage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Investment Percentage (%)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={10}
                        max={100}
                        placeholder="Enter percentage"
                        {...field}
                        onChange={handlePercentageChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Amount */}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Investment Amount ($)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        placeholder="Amount will be calculated"
                        {...field}
                        disabled
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:text-lg lg:text-xl">
                <p className="flex md:flex-col items-center justify-center gap-3 bg-white px-3 py-6 rounded-sm">
                  <span className="text-gray-600 font-semibold">Target</span>
                  <span className="text-primary font-semibold">
                    ${projectTarget}
                  </span>
                </p>
                <p className="flex md:flex-col items-center justify-center gap-3 bg-white px-3 py-6 rounded-sm">
                  <span className="text-gray-600 font-semibold">Raise</span>
                  <span className="text-primary font-semibold">${raised}</span>
                </p>
                <p className="flex md:flex-col items-center justify-center gap-3 bg-white px-3 py-6 rounded-sm">
                  <span className="text-gray-600 font-semibold">Days left</span>
                  <span className="text-primary font-semibold">
                    {daysLeft} Days
                  </span>
                </p>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full text-base md:text-lg lg:text-2xl font-semibold"
              >
                Invest
              </Button>
              <span className="text-red-500 block w-full text-center">
                &quot;10% minimum investment&quot;
              </span>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default InvestNow;
