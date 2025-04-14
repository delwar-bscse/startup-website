import Image from 'next/image'
import Profile from "@/assets/projects/Entrepreneur/profile1.png"
import About03 from "@/assets/projects/Entrepreneur/aboutme03.png"
import About04 from "@/assets/projects/Entrepreneur/aboutme04.png"
import { HiOutlineLocationMarker } from "react-icons/hi";
import React from 'react'

const page = () => {
  return (
    <div className='maxWidth'>
      <div className='flex items-end'>
        <Image src={Profile} width={400} height={200} alt="Cover" className="rounded-sm" />
        <div className='text-lg font-semibold text-gray-700 ml-4'>
          <p>Jenny Wilson</p>
          <p>Fashion Designer</p>
          <p className='flex items-center gap-1'>
            <span>
              <HiOutlineLocationMarker />
            </span>
            <span>Dhaka, Bangladesh</span>
          </p>
        </div>
      </div>
      {/* ----------- About Me Section ----------- */}
      <div className='space-y-4 py-16'>
        <h2 className='text-4xl font-bold text-gray-800'>About Me</h2>
        <p className='text-gray-700'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. </p>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-10'>
          <Image src={About03} width={500} height={360} alt="Cover" sizes="100vw" />
          <Image src={About04} width={500} height={360} alt="Cover" sizes="100vw" />
        </div>
      </div>
    </div>
  )
}

export default page