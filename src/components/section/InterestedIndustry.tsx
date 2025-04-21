import Image, { StaticImageData } from 'next/image'
import React from 'react'
import fashionImg from '@/assets/industry/fashion.png';
import technologyImg from '@/assets/industry/technology.png';
import cookingImg from '@/assets/industry/cooking.png';

type Props = {
  id: number;
  name: string;
  image: StaticImageData;
}

const industries: Props[] = [
  {
    id: 1,
    name: "Fashion",
    image: fashionImg
  },
  {
    id: 2,
    name: "Technology",
    image: technologyImg
  },
  {
    id: 3,
    name: "Cooking",
    image: cookingImg
  }
]


const InterestedIndustry = () => {
  return (
    <div className='maxWidth py-20'>
      <h1 className='text-4xl md:text-5xl font-bold pb-4 lg:pb-8 text-gray-700'>Interested Industry</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {industries?.map((industry) => (
          <div key={industry.id} className='flex items-center gap-2 border border-primary py-2 px-4'>
            <div className='w-14 h-14 overflow-hidden'>
              <Image src={industry.image} alt="" width={100} height={100} />
            </div>
            <p className='text-lg font-semibold'>{industry.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InterestedIndustry