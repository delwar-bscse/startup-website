import Profile from "@/assets/projects/Entrepreneur/profile1.png"
import About03 from "@/assets/projects/Entrepreneur/aboutme03.png"
import About04 from "@/assets/projects/Entrepreneur/aboutme04.png"
import React from 'react'
import AboutMe from '@/components/section/AboutMe';
import Achievement from '@/components/section/Achievement';
import UserInfo from '@/components/section/UserInfo';
import InterestedIndustry from "@/components/section/InterestedIndustry";

const userInfo = {profileImg:Profile, name:"Jenny Wilson", designation:"Fashion Designer", address:"Dhaka, Bangladesh"}

const page = () => {
  return (
    <div className=''>
      {/* ----------- Pr
      {/* ----------- Profile Section ----------- */}
      <>
        <UserInfo userInfo={userInfo} />
      </>
      {/* ----------- About Me Section ----------- */}
      <>
        <AboutMe image1={About03} image2={About04} />
      </>
      {/* ----------- About Me Section ----------- */}
      <>
        <Achievement />
      </>
      {/* ----------- Interested Industry Section ----------- */}
      <>
        <InterestedIndustry />
      </>
    </div>
  )
}

export default page