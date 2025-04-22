import Profile from "@/assets/projects/Entrepreneur/profile3.png"
import About03 from "@/assets/projects/Entrepreneur/aboutme03.png"
import About04 from "@/assets/projects/Entrepreneur/aboutme04.png"
import React from 'react'
import UserInfo from '@/components/section/UserInfo';
import AboutMe from '@/components/section/AboutMe';
import SkillsAndExperience from "@/components/section/SkillsAndExperience";
import InterestedIndustry from "@/components/section/InterestedIndustry";

const userInfo = { profileImg: Profile, name: "Jenny Wilson", designation: "Fashion Designer", address: "Dhaka, Bangladesh" }

const page = () => {
  return (
    <div className=''>
      {/* ----------- Profile Section ----------- */}
      <>
        <UserInfo userInfo={userInfo} />
      </>
      {/* ----------- About Me Section ----------- */}
      <div className='maxWidth space-y-4 py-4 md:py-12 lg:py-16'>
        <AboutMe image1={About03} image2={About04} />
      </div>
      {/* ----------- About Me Section ----------- */}
      <div className="bg-secondary">
        <div className='maxWidth space-y-4 py-4 md:py-12 lg:py-16'>
          <SkillsAndExperience />
        </div>
      </div>
      {/* ----------- Interested Industry Section ----------- */}
      <>
        <InterestedIndustry />
      </>
    </div>
  )
}

export default page