import ProjectBreakdown from '@/components/shared/ProjectBreakdown';
import { projectDatas } from '@/constants/projectData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuClock } from "react-icons/lu";

const page = () => {
  return (
    <div>
      
      {/* ----------- My Projects Section ----------- */}
      <div className='maxWidth py-20'>
        <h2 className='text-3xl md:text-5xl font-bold pb-8'>Invested Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {projectDatas.slice(0, 3)?.map((project) => (
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
                  <Link href={`/investor/projects/${project?.id}`} className='bg-primary text-white py-3 px-4 mt-4 w-full block text-center'>View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------- Projects Breakedown ----------- */}
      <ProjectBreakdown />
    </div>
  )
}

export default page