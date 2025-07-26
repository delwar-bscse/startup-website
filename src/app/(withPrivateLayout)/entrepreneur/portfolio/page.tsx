"use client";

import AboutMe from "@/components/section/AboutMe";
import SkillsAndExperience from "@/components/section/SkillsAndExperience";
import InterestedIndustry from "@/components/section/InterestedIndustry";
import PersonalAndBusiness from "@/components/section/PersonalAndBusiness";
import { useGetUserProfileQuery } from "@/Redux/apis/userApi";

const Page = () => {
  const { data: userData } = useGetUserProfileQuery({});
  const user = userData?.data;
  console.log("portfolio user", user);

  return (
    <div className="">
      {/* ----------- About Me Section ----------- */}
      <>
        <AboutMe user={user} />
      </>

      {/* ----------- Skills & Experience Section ----------- */}
      {(user?.personalInfo?.skills?.length > 0 ||
        user?.personalInfo?.experience?.length > 0) && (
        <div className="bg-secondary">
          <div className="maxWidth space-y-4 py-8">
            <SkillsAndExperience user={user} />
          </div>
        </div>
      )}
      {/* ----------- Interested Industry Section ----------- */}
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
