"use client";
import React from "react";
import AboutMe from "@/components/section/AboutMe";
import Achievement from "@/components/section/Achievement";
import UserInfo from "@/components/section/UserInfo";
import InterestedIndustry from "@/components/section/InterestedIndustry";
import { useParams } from "next/navigation";
import { useGetUserDetailsQuery } from "@/Redux/apis/userApi";

const Page = () => {
  const { id } = useParams();

  const { data: investorDetails, isLoading } = useGetUserDetailsQuery(id);
  const investor = investorDetails?.data;
  console.log("investor", investor);

  if (isLoading) {
    return (
      <div className="maxWidth flex justify-center items-center h-screen">
        <h1 className="text-xl text-gray-700">Loading your projects...</h1>
      </div>
    );
  }

  return (
    <div className="">
      {/* ----------- Pr
      {/* ----------- Profile Section ----------- */}
      <>
        <UserInfo userInfo={investor} />
      </>
      {/* ----------- About Me Section ----------- */}
      <>
        <AboutMe user={investor} />
      </>
      {/* ----------- About Me Section ----------- */}

      {investor?.achievement && investor?.achievement.length > 0 && (
        <>
          <Achievement />
        </>
      )}
      <></>
      {/* ----------- Interested Industry Section ----------- */}
      {investor?.personalInfo?.interestedIndustries.length > 0 && (
        <>
          <InterestedIndustry user={investor} />
        </>
      )}
    </div>
  );
};

export default Page;
