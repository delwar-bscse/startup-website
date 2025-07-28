"use client";
import React from "react";
import UserInfo from "@/components/section/UserInfo";
import AboutMe from "@/components/section/AboutMe";
import SkillsAndExperience from "@/components/section/SkillsAndExperience";
import InterestedIndustry from "@/components/section/InterestedIndustry";
import { useParams } from "next/navigation";
import { useGetUserDetailsQuery } from "@/Redux/apis/userApi";

const Page = () => {
  const { id } = useParams();

  const { data: entrepreneurDetails, isLoading } = useGetUserDetailsQuery(id);
  const entrepreneur = entrepreneurDetails?.data;
  console.log("entrepreneur", entrepreneur);

  if (isLoading) {
    return (
      <div className="maxWidth flex justify-center items-center h-screen">
        <h1 className="text-xl text-gray-700">Loading your projects...</h1>
      </div>
    );
  }

  return (
    <div className="">
      {/* ----------- Profile Section ----------- */}
      <>
        <UserInfo userInfo={entrepreneur} />
      </>
      {/* ----------- About Me Section ----------- */}
      <div className="maxWidth space-y-4 py-4 md:py-12 lg:py-16">
        <AboutMe user={entrepreneur} />
      </div>
      {/* ----------- About Me Section ----------- */}
      <div className="bg-secondary">
        <div className="maxWidth space-y-4 py-4 md:py-12 lg:py-16">
          <SkillsAndExperience user={entrepreneur} />
        </div>
      </div>
      {/* ----------- Interested Industry Section ----------- */}
      {entrepreneur?.personalInfo?.interestedIndustries.length > 0 && (
        <>
          <InterestedIndustry user={entrepreneur} />
        </>
      )}
    </div>
  );
};

export default Page;
