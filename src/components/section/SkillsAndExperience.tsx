import React from 'react'

const SkillsAndExperience = () => {
  return (
    <>
      {/* ----------- Skills & Experience Section ----------- */}
      <div className='space-y-4 py-16'>
        <h2 className='text-4xl font-bold text-gray-800'>Skills & Experience</h2>
        <p className='text-gray-700'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <div className='w-full flex justify-between gap-8'>
          <p className='basis-2/3 text-gray-700'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Many desktop publishing packages and web page editors now use</p>
          <ul className='basis-1/3 grid grid-cols-2 justify-items-end gap-4 list-disc text-primary2 text-lg'>
            <li>Cleanliness</li>
            <li>Cleanliness</li>
            <li>Cleanliness</li>
            <li>Cleanliness</li>
            <li>Cleanliness</li>
            <li>Cleanliness</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SkillsAndExperience