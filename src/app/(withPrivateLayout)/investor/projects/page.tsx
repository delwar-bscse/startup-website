import ProjectBreakdown from '@/components/shared/ProjectBreakdown';
import ProjectCard from '@/components/shared/ProjectCard';
import { projectDatas } from '@/constants/projectData'
import React from 'react'

const page = () => {
  return (
    <div>

      {/* ----------- My Projects Section ----------- */}
      <div className='maxWidth py-20'>
        <h2 className='text-3xl md:text-5xl font-bold pb-8'>Invested Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {projectDatas.slice(0, 3)?.map((project) => (
              <ProjectCard key={project?.id} project={project} detailsUrl={`/investor/projects/${project?.id}`}/>
          ))}
        </div>
      </div>

      {/* ----------- Projects Breakedown ----------- */}
      <ProjectBreakdown />
    </div>
  )
}

export default page