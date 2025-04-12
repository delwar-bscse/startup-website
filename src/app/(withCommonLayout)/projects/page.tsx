import React from 'react';
import heroImg from '@/assets/projects/project.png';
import { projectDatas } from '@/constants/projectData';
import { LuClock } from "react-icons/lu";
import Image from 'next/image';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Link from 'next/link';


const Projects = () => {
  return (
    <div>
      
      {/* ----------- Project's Hero Section ----------- */}
      <div style={{ backgroundImage: `url(${heroImg.src})` }} className='bg-cover bg-center'>
        <div className='maxWidth text-white py-10 md:py-24 lg:py-48 space-y-4'>
          <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold max-w-[650px]'>Empowering Small Businesses with Affordable Marketing Tools</h2>
          <p className='text-sm md:text-base lg:text-xl py-4 max-w-[700px]'>Connecting agents with powerful tools that showcase you and your listings beyond your local MLS, facilitating seamless referrals for lucrative fees, placing you on a global search engine where new clients can discover.</p>
        </div>
      </div>

      {/* ----------- Projects Section ----------- */}
      <div className='maxWidth py-20'>
        <h2 className='text-3xl md:text-5xl font-bold pb-8'>Our Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {projectDatas?.map((project) => (
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
      </div>

      {/* ----------- Pagination Section----------- */}
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

    </div>
  )
}

export default Projects