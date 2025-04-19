import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";

type UserInfoProps = {
  Profile: StaticImageData
} 

const UserInfo = ({ Profile}: UserInfoProps) => {
  return (
    <>
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
    </>
  )
}

export default UserInfo