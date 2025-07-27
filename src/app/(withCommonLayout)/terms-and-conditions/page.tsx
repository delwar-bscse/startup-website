"use client";
import React from "react";
import TermsAndConditionsImg from "@/assets/contact/termsAndConditions.png";
import { useGetTermsAndConditionsQuery } from "@/Redux/apis/utilityApi";

const TermsPage: React.FC = () => {
  const { data: termsAndConditions } = useGetTermsAndConditionsQuery({});
  const termsData = termsAndConditions?.data;
  console.log("Terms and Conditions Data:", termsData);

  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${TermsAndConditionsImg.src})` }}
        className="w-full text-center min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Terms & Conditions
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="prose max-w-none py-8 space-y-4 md:space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
            {termsData?.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: termsData?.content }} />
          {/* {termsData?.updatedAt && (
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date(termsData.updatedAt).toLocaleDateString()}
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
