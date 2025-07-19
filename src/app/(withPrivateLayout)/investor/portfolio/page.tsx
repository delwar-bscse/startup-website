"use client";

import About03 from "@/assets/projects/Entrepreneur/aboutme03.png";
import About04 from "@/assets/projects/Entrepreneur/aboutme04.png";
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
        <AboutMe image1={About03} image2={About04} user={user} />
      </>
      <>
        <Achievement />
      </>
      <>
        <InterestedIndustry />
      </>
      {/* ----------- Personal, Business Details Section ----------- */}
      <>
        <PersonalAndBusiness />
      </>
    </div>
  );
};

export default Page;
