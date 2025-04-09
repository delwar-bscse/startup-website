import { projectDatas } from '@/constants/projectData'
import Image from 'next/image'
import homeHeroImg from '@/assets/home/home_hero.png';
import aboutImg from '@/assets/home/about_us.png'
// import booking_01 from '@/assets/home/booking_01.png'
import { LuClock } from "react-icons/lu";
import { RiSendPlaneLine } from "react-icons/ri";
import React from 'react'
import { projectOverview } from '@/constants/homeData';

// export const whyUs = <div className='flex w-full'>
//   <div className='w-[40%] bg-primary flex items-center justify-end'>
//     <div style={{ maxWidth: `${1440 * 40 / 100}px`, width: '100%' }} className='box-border flex flex-col justify-center items-center text-white py-8 px-20'>
//       <h2 className='text-4xl font-semibold'>Why <br />Chose <br />US?</h2>
//       <p>Hear from mentees who have transformed their careers with the help of expert mentors.</p>
//     </div>
//   </div>
//   <div style={{ maxWidth: `${1440 * 60 / 100}px`, width: '100%' }} className='bg-secondary' >
//     <div className='box-border py-4'>
//       <div className='flex items-center gap-3'>
//         <div className='relative top-2 left-0 transform -translate-x-1/2  bg-primary2 ring-4
//      ring-gray-100/60 w-16 h-16 rounded-full flex items-center justify-center'>
//           <Image src={booking_01} alt='About Us' />
//         </div>
//         <div className='pr-20'>
//           <h2 className='text-2xl font-bold'>Accessible Options</h2>
//           <p className=''>We prioritize your needs with options like wheelchair access, driver assistance, and extra space for mobility devices.</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

const page = () => {
  return (
    <div className='w-full'>
      {/* ----------- Home's Hero Section ----------- */}
      <div style={{ backgroundImage: `url(${homeHeroImg.src})` }} className='bg-cover bg-center'>
        <div className='bg-black/40'>
          <div className='maxWidth text-white py-10 md:py-24 lg:py-48 space-y-4'>
            <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold max-w-[650px]'>Empowering Small Businesses with Affordable Marketing Tools</h2>
            <p className='text-sm md:text-base lg:text-xl py-4 max-w-[700px]'>Connecting agents with powerful tools that showcase you and your listings beyond your local MLS, facilitating seamless referrals for lucrative fees, placing you on a global search engine where new clients can discover.</p>
            <button className='flex justify-center items-center bg-primary text-white py-4 px-8 gap-4 rounded-md text-2xl tracking-wider'>
              <span>Explore Projects</span>
              <RiSendPlaneLine className='text-2xl' />
            </button>
          </div>
        </div>
      </div>
      {/* ----------- About Us Section ----------- */}
      <div className='maxWidth py-20 grid grid-cols-2 gap-8'>
        <div>
          <Image src={aboutImg} alt='About Us' className='w-full h-full object-cover' />
        </div>
        <div className='flex flex-col justify-center'>
          <h2 className='text-3xl md:text-5xl font-bold pb-8'>About Us</h2>
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
                <div className='bg-primary2 w-50 h-50 rounded-full absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2' />
              </div>
            ))
          }
        </div>
      </div>
      {/* ----------- Why Choose US Section ----------- */}
          
          
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
                  <button className='bg-primary text-white py-3 px-4 mt-4 w-full'>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page