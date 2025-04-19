import { projectDatas } from '@/constants/projectData'
import Image from 'next/image'
import homeHeroImg from '@/assets/home/home_hero.png';
import aboutImg from '@/assets/home/about_us.png'
import ContactUsImg from "@/assets/contact/contact-us.png";
import booking_01 from '@/assets/home/booking_01.png'
import { LuClock } from "react-icons/lu";
import { RiSendPlaneLine } from "react-icons/ri";
import React from 'react'
import { projectOverview, whyChooseUsDatas } from '@/constants/homeData';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CustomSlider from '@/components/shared/OurUsersSlide';
import InvestorsSlider from '@/components/shared/BestInvestorSlide';
import Link from 'next/link';






const page = () => {
  return (
    <div className='w-full'>

      {/* ----------- Home's Hero Section ----------- */}
      <div style={{ backgroundImage: `url(${homeHeroImg.src})` }} className='bg-cover bg-center'>
        <div className='bg-black/40'>
          <div className='maxWidth text-white py-10 md:py-24 lg:py-48 space-y-4'>
            <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold max-w-[650px]'>Empowering Small Businesses with Affordable Marketing Tools</h2>
            <p className='text-sm md:text-base lg:text-xl py-4 max-w-[700px]'>Connecting agents with powerful tools that showcase you and your listings beyond your local MLS, facilitating seamless referrals for lucrative fees, placing you on a global search engine where new clients can discover.</p>
            <button className='flex justify-center items-center bg-primary text-white py-2 sm:py-3 lg:py-4 px-2 sm:px-4 lg:px-8 gap-1  sm:gap-2 lg:gap-4 rounded-md text-sm sm:text-lg lg:text-2xl tracking-wider'>
              <span>Explore Projects</span>
              <RiSendPlaneLine className='text-sm sm:text-xl lg:text-2xl' />
            </button>
          </div>
        </div>
      </div>

      {/* ----------- About Us Section ----------- */}
      <div className='maxWidth py-20 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <Image src={aboutImg} alt='About Us' className='w-full h-full object-cover' />
        </div>
        <div className='flex flex-col justify-center'>
          <h2 className='text-2xl lg:text-4xl xl:text-5xl font-bold pb-2 md:pb-4 lg:pb-8'>About Us</h2>
          <p>We know how important it is to be on time. Our drivers are punctual, and our services are designed to ensure you arrive at your destination safely and efficiently. We know how important it is to be on time. Our drivers are punctual, and our services are designed to ensure you arrive at your destination safely and efficiently.</p>
        </div>
      </div>
      <div className='bg-secondary'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 maxWidth py-20'>
          {
            projectOverview?.map((item) => (
              <div key={item?.id} className='relative flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 overflow-hidden'>
                <h2 className='text-2xl md:text-3xl font-semibold pb-8 max-w-[300px] text-center'>{item?.title}</h2>
                <p className='text-5xl font-bold text-primary'>{item?.number}</p>
                <div className='bg-primary2 w-30 md:w-40 xl:w-50 h-30 md:h-40 xl:h-50 rounded-full absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2' />
              </div>
            ))
          }
        </div>
      </div>

      {/* ----------- Why Choose US Section ----------- */}
      <div className='flex flex-col md:flex-row w-full pt-20'>
        <div className='w-full md:w-[40%] bg-primary box-border flex items-center justify-start md:justify-end'>
          <div style={{ maxWidth: `${1440 * 40 / 100}px`, width: '100%' }} className='box-border flex flex-col justify-center items-start gap-6 text-white py-28 md:8 px-4 md:px-24'>
            <h2 className='text-4xl font-semibold flex flex-row md:fle-col gap-2'>
              <span>Why</span>
              <span>Chose</span>
              <span>Us?</span>
            </h2>
            <p className='text-gray-200'>Hear from mantes who have transformed their careers with the help of expert mentors.</p>
          </div>
        </div>
        <div className='w-full md:w-[60%] bg-secondary box-border flex flex-col items-start justify-start gap-4 py-10' >
          {whyChooseUsDatas?.map((item) => (
            <div key={item?.id} style={{ maxWidth: `${1440 * 60 / 100}px`, width: '100%' }} className='py-4 flex items-center relative'>
              <div className='absolute top-6 left-10 md:left-0 transform -translate-x-1/2 bg-primary2 ring-4 ring-gray-300
     md:ring-gray-100/60 w-16 h-16 rounded-full flex items-center justify-center'>
                <Image src={booking_01} width={32} height={32} alt='About Us' />
              </div>
              <div className='max-md:ps-22 md:px-16 space-y-2'>
                <h2 className='text-2xl font-bold text-gray-600'>{item?.title}</h2>
                <p className='text-gray-400 text-sm'>{item?.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------- Projects Section ----------- */}
      <div className='maxWidth py-20'>
        <h2 className='text-3xl md:text-5xl font-bold pb-8'>Our Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {projectDatas.slice(0, 6)?.map((project) => (
            <div key={project?.id} className='flex flex-col border border-gray-300'>
              <div className='w-full'>
                <Image src={project?.img} alt={project?.name} width={700} height={400} />
              </div>
              <div className='w-full h-full p-4 flex flex-col justify-between'>
                <div className=''>
                  <h2 className='text-2xl md:text-3xl font-bold'>{project?.name}</h2>

                </div>
                <div>
                  <div className='flex items-center justify-between py-4'>
                    <p className='flex items-center gap-2'>
                      <span>Target : </span>
                      <span>{project?.target}</span>
                    </p>
                    <p className='flex items-center justify-end gap-2'>
                      <span><LuClock /></span>
                      <span className='text-gray-500'>{project?.left} Days Left</span>
                    </p>
                  </div>
                  <div className='flex items-center justify-start w-full bg-gray-200'>
                    <p className='basis-[40%] bg-primary2 text-right px-3 py-1'>Raised 40%</p>
                  </div>
                  <Link href={`/projects/${project?.id}`} className='bg-primary text-white py-3 px-4 mt-4 w-full block text-center'>View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center py-3">
          <Link href="/projects" className='text-2xl font-semibold text-gray-500 py-2 px-2'>See All</Link>
        </div>
      </div>

      {/* ----------- Start Your Projects Section ----------- */}
      <div style={{ backgroundImage: `url(${ContactUsImg.src})` }} className="w-full text-center min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex flex-col gap-6 items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Want to Start your Project</h2>
        <button className='flex justify-center items-center bg-primary2  py-2 sm:py-3 px-4 lg:px-6 gap-1  sm:gap-2 lg:gap-4 rounded-md text-sm sm:text-lg tracking-wider'>
          <span>Start Project</span>
          <RiSendPlaneLine className='text-sm sm:text-xl' />
        </button>
      </div>

      {/* ----------- Best Investors Section ----------- */}
      <div className='maxWidth grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div><InvestorsSlider /></div>
        <div className='flex flex-col gap-4 items-start justify-center px-3 lg:px-20'>
          <h2 className='text-3xl md:text-5xl font-bold'>Our best Investors</h2>
          <p className='lg:tracking-wider text-gray-600'>We know how important it is to be on time. Our drivers are punctual, and our services are designed to ensure you arrive at your destination safely and efficiently. We know how important it is to be on time. </p>
        </div>
      </div>

      {/* ----------- What Our Users Are Saying Carousel Section ----------- */}
      <div className='bg-secondary py-10 md:py-20'>
        <div className='text-center space-y-2'>
          <h3 className='text-3xl lg:text-5xl font-bold'>What Our Users Are Saying</h3>
          <p className='text-gray-400 lg:tracking-widest'>Hear from mentees who have transformed their careers with the help of expert mentors.</p>
        </div>
        <CustomSlider />
      </div>

    </div>
  )
}

export default page