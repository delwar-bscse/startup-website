"use client";

import EditUserImage from "@/components/common/EditUserImage";
import BusinessDetailsInfo from "@/components/section/BusinessDetailsInfo";
import FinancialInvestmentDetails from "@/components/section/FinancialInvestmentDetails";
import FinancialInvestmentDetails2 from "@/components/section/FinancialInvestmentDetails2";
import LegalCompliance from "@/components/section/LegalCompliance";
import PersonalInformation from "@/components/section/PersonalInformation";
import Subscriptions from "@/components/section/Subscriptions";
import React, { useEffect, useState } from "react";
import { useGetUserProfileQuery } from "@/Redux/apis/userApi";

type Props = {
  id: number;
  title: string;
};

const stepsData: Props[] = [
  {
    id: 1,
    title: "Personal Information",
  },
  {
    id: 2,
    title: "Business Details",
  },
  {
    id: 3,
    title: "Financial Investment Details",
  },
  {
    id: 4,
    title: "Legal Compliance",
  },
  {
    id: 5,
    title: "Subscriptions",
  },
];

const EditDetails = () => {
  const [activeStep, setActiveStep] = useState(1);
  const { data: userData } = useGetUserProfileQuery({});
  const user = userData?.data;
  console.log(user);

  const userRole = user?.role;

  const handleStep = (id: number) => {
    setActiveStep(id);
  };

  useEffect(() => {
    // This ensures that the page doesn't jump to the top when the activeStep changes
    window.scrollTo(0, 0);
  }, [activeStep]);

  return (
    <div>
      {/* ----------- Edit Cover & Profile Image ----------- */}
      <div>
        <EditUserImage user={user} />
      </div>
      {/* ----------- Profile complete steps ----------- */}
      <div className="maxWidth py-20 bg-white">
        <div className="flex flex-col md:flex-row gap-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-700">
            Complete Your Profile
          </h2>
          <div className="space-y-1 pt-5">
            {stepsData.map((step) => (
              <div key={step.id} className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-2 pt-[2px]">
                  <p
                    className={`w-6 h-6 bg-gray-300 rounded-full flex ${
                      activeStep === step.id ? "bg-primary2" : "bg-gray-300"
                    }`}
                  />
                  {stepsData.length !== step.id && (
                    <div className="grow border-s-2 h-8 border-dashed border-gray-300" />
                  )}
                </div>
                <h2
                  className={`text-2xl leading-6 ${
                    activeStep === step.id ? "text-primary2" : "text-gray-500"
                  }`}
                >
                  {step.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      {activeStep === 1 && (
        <PersonalInformation onHandleStep={handleStep} user={user} />
      )}
      {activeStep === 2 && (
        <BusinessDetailsInfo onHandleStep={handleStep} user={user} />
      )}
      {userRole === "entrepreneur" && activeStep === 3 && (
        <FinancialInvestmentDetails onHandleStep={handleStep} />
      )}
      {userRole === "investor" && activeStep === 3 && (
        <FinancialInvestmentDetails2 onHandleStep={handleStep} />
      )}
      {activeStep === 4 && <LegalCompliance onHandleStep={handleStep} />}
      {activeStep === 5 && <Subscriptions />}
    </div>
  );
};

export default EditDetails;
