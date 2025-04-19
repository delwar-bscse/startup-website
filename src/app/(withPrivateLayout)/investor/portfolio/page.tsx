
import About03 from "@/assets/projects/Entrepreneur/aboutme03.png"
import About04 from "@/assets/projects/Entrepreneur/aboutme04.png"
import React from 'react'
import Achievement from '@/components/section/Achievement'
import AboutMe from "@/components/section/AboutMe"

const page = () => {
  return (
    <div className=''>
      <>
        <AboutMe image1={About03} image2={About04} /></>
      <>
        <Achievement />
      </>
    </div>
  )
}

export default page