import React from 'react';
import heroImg from '@/assets/projects/project.png';
import { projectDatas } from '@/constants/projectData';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import HeroFilter from '@/components/shared/HeroFilter';
import ProjectCard from '@/components/shared/ProjectCard';


const Projects = () => {
  return (
    <div>

      {/* ----------- Project's Hero Section ----------- */}
      <div style={{ backgroundImage: `url(${heroImg.src})` }} className='bg-cover bg-center'>
        <div className='maxWidth text-white py-12 md:py-16 lg:py-20 space-y-4'>
          <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold max-w-[650px]'>Empowering Small Businesses with Affordable Marketing Tools</h2>
          <p className='text-sm md:text-base lg:text-xl py-4 max-w-[700px]'>Connecting agents with powerful tools that showcase you and your listings beyond your local MLS, facilitating seamless referrals for lucrative fees, placing you on a global search engine where new clients can discover.</p>

          <div className='mt-16'>
            <HeroFilter />
          </div>
        </div>
      </div>

      {/* ----------- Projects Section ----------- */}
      <div className='maxWidth py-20'>
        <h2 className='text-3xl md:text-5xl font-bold pb-8'>Our Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {projectDatas?.map((project) => (
            <ProjectCard key={project?.id} project={project} detailsUrl={`/projects/${project?.id}`}/>
          ))}
        </div>
        {/* ----------- Pagination Section----------- */}
        <div className='py-6'>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
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



    </div>
  )
}

export default Projects