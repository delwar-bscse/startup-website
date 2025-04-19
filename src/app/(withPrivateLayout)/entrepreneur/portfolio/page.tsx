import React from 'react'
import About01 from '@/assets/projects/Entrepreneur/aboutme01.png'
import About02 from '@/assets/projects/Entrepreneur/aboutme02.png'
import AboutMe from '@/components/section/AboutMe'
import SkillsAndExperience from '@/components/section/SkillsAndExperience'


const page = () => {
  return (
    <div className='maxWidth'>
      {/* ----------- About Me Section ----------- */}
      <>
        <AboutMe image1={About01} image2={About02} />
      </>

      {/* ----------- Skills & Experience Section ----------- */}
      <>
        <SkillsAndExperience />
      </>
    </div>
  )
}

export default page