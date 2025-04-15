import Image from 'next/image'
import Profile from "@/assets/projects/Entrepreneur/profile1.png"
import About03 from "@/assets/projects/Entrepreneur/aboutme03.png"
import About04 from "@/assets/projects/Entrepreneur/aboutme04.png"
import { HiOutlineLocationMarker } from "react-icons/hi";
import React from 'react'

const page = () => {
  return (
    <div className=''>
      {/* ----------- Profile Section ----------- */}
      <div className='maxWidth flex flex-col md:flex-row md:items-end'>
        <Image src={Profile} width={400} height={200} alt="Cover" className="rounded-sm" />
        <div className='text-lg font-semibold text-gray-700 ml-4'>
          <p className='font-bold text-2xl'>Jenny Wilson</p>
          <p className='font-normal text-gray-500 text-lg'>Fashion Designer</p>
          <p className='flex items-center gap-1'>
            <span>
              <HiOutlineLocationMarker />
            </span>
            <span>Dhaka, Bangladesh</span>
          </p>
        </div>
      </div>
      {/* ----------- About Me Section ----------- */}
      <div className='maxWidth space-y-4 py-16'>
        <h2 className='text-4xl lg:text-6xl font-bold text-purple-950'>About Me</h2>
        <p className='text-gray-700'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. </p>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-10'>
          <Image src={About03} width={500} height={360} alt="Cover" sizes="100vw" />
          <Image src={About04} width={500} height={360} alt="Cover" sizes="100vw" />
        </div>
      </div>
      {/* ----------- About Me Section ----------- */}
      <div className='bg-secondary py-10'>
        <div className='maxWidth space-y-12 py-16'>
          <div className='space-y-4'>
            <h2 className='text-4xl lg:text-6xl font-bold text-purple-950'>Achievement</h2>
            <p className='text-gray-700'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.</p>
          </div>
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
              <div className='space-y-4'>
                <div className='flex justify-center items-center gap-6'>
                  <p className='font-semibold text-5xl md:text-8xl text-purple-950'>75%</p>
                  <div className='w-4 h-18 md:h-22 border-x-3 border-gray-300' />
                  <div className='flex flex-col gap-1 text-xl font-semibold'>
                    <p>Total Invested</p>
                    <p className='text-primary'>$100000</p>
                  </div>
                </div>
                <div>
                  <div className='h-4 w-full bg-gray-300 rounded-full'>
                    <div className={`relative w-[75%] h-4 bg-primary2 flex items-center rounded-full`}>
                      <div className='absolute right-0 w-8 h-8 bg-white rounded-full border-3 border-primary2' />
                    </div>
                  </div>
                </div>
              </div>
              <p className='text-gray-700'>the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page