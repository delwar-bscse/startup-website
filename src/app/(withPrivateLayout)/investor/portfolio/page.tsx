"use client";

import React from "react";
import Achievement from "@/components/section/Achievement";
import AboutMe from "@/components/section/AboutMe";
import InterestedIndustry from "@/components/section/InterestedIndustry";
import PersonalAndBusiness from "@/components/section/PersonalAndBusiness";
import { useGetUserProfileQuery } from "@/Redux/apis/userApi";

const Page = () => {
  const { data: userData } = useGetUserProfileQuery({});
  const user = userData?.data;
  console.log("portfolio user", user);
  return (
    <div className="">
      <>
        <AboutMe user={user} />
      </>
      <>
        <Achievement />
      </>
      {user?.personalInfo?.interestedIndustry && (
        <InterestedIndustry user={user} />
      )}
      {/* ----------- Personal, Business Details Section ----------- */}
      <>
        <PersonalAndBusiness user={user} />
      </>
    </div>
  );
};

export default Page;
