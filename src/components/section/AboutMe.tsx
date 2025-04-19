import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface AboutMeProps {
  image1: StaticImageData;
  image2: StaticImageData;
}

const AboutMe: React.FC<AboutMeProps> = ({ image1, image2 }) => {
  return (
    <>
      {/* ----------- About Me Section ----------- */}
      <div className='maxWidth space-y-4 py-16'>
        <h2 className='text-4xl lg:text-6xl font-bold text-purple-950'>About Me</h2>
        <p className='text-gray-700'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. </p>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-10'>
          <Image src={image1} width={500} height={360} alt="Cover" sizes="100vw" />
          <Image src={image2} width={500} height={360} alt="Cover" sizes="100vw" />
        </div>
      </div>
    </>
  )
}

export default AboutMe