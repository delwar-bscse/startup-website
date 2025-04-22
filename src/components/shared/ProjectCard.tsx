import { Project } from '@/types/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { LuClock } from "react-icons/lu";

const ProjectCard = ({ project, detailsUrl }: { project: Project, detailsUrl: string }) => {
  return (
    <div className='flex flex-col border border-gray-300'>
      <div className='w-full'>
        <Image src={project?.img} alt={project?.name} width={700} height={400} />
      </div>
      <div className='w-full h-full p-4 flex flex-col justify-between'>
        <div className=''>
          <h2 className='text-xl md:text-2xl font-bold'>{project?.name}</h2>
        </div>
        <div>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-4'>
            <p className='flex items-center gap-2 font-semibold'>
              <span>Target : </span>
              <span className='text-primary'>{project?.target} USD</span>
            </p>
            <p className='flex items-center sm:justify-end gap-2'>
              <span><LuClock /></span>
              <span className='text-gray-500'>{project?.left} Days Left</span>
            </p>
          </div>
          <div className='relative flex items-center justify-start w-full bg-gray-200'>
            <p className='basis-[40%] bg-primary2 text-right h-8'></p>
            <span className='absolute left-4 text-gray-800 font-semibold text-sm md:text-base'>Raised 40%</span>
          </div>
          <Link href={detailsUrl} className='bg-primary text-white py-3 px-4 mt-4 w-full block text-center'>View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard