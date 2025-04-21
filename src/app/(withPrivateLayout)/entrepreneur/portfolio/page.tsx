import React from 'react'
import About01 from '@/assets/projects/Entrepreneur/aboutme01.png'
import About02 from '@/assets/projects/Entrepreneur/aboutme02.png'
import AboutMe from '@/components/section/AboutMe'
import SkillsAndExperience from '@/components/section/SkillsAndExperience'
import InterestedIndustry from '@/components/section/InterestedIndustry'
import PersonalAndBusiness from '@/components/section/PersonalAndBusiness'


const page = () => {
  return (
    <div className=''>
      {/* ----------- About Me Section ----------- */}
      <>
        <AboutMe image1={About01} image2={About02} />
      </>

      {/* ----------- Skills & Experience Section ----------- */}
      <div className='bg-secondary'>
        <div className='maxWidth space-y-4 py-8'>
          <SkillsAndExperience />
        </div>
      </div>

      {/* ----------- Interested Industry Section ----------- */}
      <>
        <InterestedIndustry />
      </>
      {/* ----------- Personal, Business Details Section ----------- */}
      <>
        <PersonalAndBusiness />
      </>
    </div>
  )
}

export default page