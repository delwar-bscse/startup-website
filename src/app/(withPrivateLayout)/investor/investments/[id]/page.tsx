import Profile from "@/assets/projects/Entrepreneur/profile1.png"
import About03 from "@/assets/projects/Entrepreneur/aboutme03.png"
import About04 from "@/assets/projects/Entrepreneur/aboutme04.png"
import React from 'react'
import UserInfo from '@/components/section/UserInfo';
import AboutMe from '@/components/section/AboutMe';
import Achievement from '@/components/section/Achievement';

const page = () => {
  return (
    <div className=''>
      {/* ----------- Profile Section ----------- */}
      <>
        <UserInfo Profile={Profile} />
      </>
      {/* ----------- About Me Section ----------- */}
      <div className='maxWidth space-y-4 py-16'>
        <AboutMe image1={About03} image2={About04} />
      </div>
      {/* ----------- About Me Section ----------- */}
      <>
        <Achievement />
      </>
    </div>
  )
}

export default page