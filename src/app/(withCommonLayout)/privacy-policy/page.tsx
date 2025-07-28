"use client";
import React from "react";
import PrivacyPolicyImg from "@/assets/contact/PrivacyPolicy.png";
import { useGetPrivacyPolicyQuery } from "@/Redux/apis/utilityApi";

const PrivacyPolicyPage: React.FC = () => {
  const { data: privacyPolicy } = useGetPrivacyPolicyQuery({});
  const privacyData = privacyPolicy?.data;
  console.log("Privacy Data:", privacyData);


  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${PrivacyPolicyImg.src})` }}
        className="w-full text-center min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Privacy Policy
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="prose max-w-none py-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {privacyData?.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: privacyData?.content }} />

          {/* {privacyData?.updatedAt && (
            <p className="text-sm text-gray-500 mt-4">
              Last updated:{" "}
              {new Date(privacyData.updatedAt).toLocaleDateString()}
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
