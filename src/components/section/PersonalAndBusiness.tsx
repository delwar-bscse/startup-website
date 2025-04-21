import React from 'react'

const PersonalAndBusiness = () => {
  return (
    <>
      <div className='maxWidth pb-16 space-y-12'>
        {/* --- Personal ---*/}
        <div>
          <h3 className='text-2xl md:text-3xl font-bold pb-4 text-gray-700 border-b border-gray-300 mb-4'>Personal Details</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <p className='flex flex-col'>
              <span className='font-semibold'>Name</span>
              <span className='text-gray-600'>Md. Rakibul Islam</span>
            </p>
            <p className='flex flex-col'>
              <span className='font-semibold'>E-Mail</span>
              <span className='text-gray-600'>H1n4o@example.com</span>
            </p>
            <p className='flex flex-col'>
              <span className='font-semibold'>Phone</span>
              <span className='text-gray-600'>+880 1713-000000</span>
            </p>
            <p className='flex flex-col'>
              <span className='font-semibold'>Date of Birth</span>
              <span className='text-gray-600'>01/01/2000</span>
            </p>
            <p className='flex flex-col'>
              <span className='font-semibold'>Gender</span>
              <span className='text-gray-600'>Male</span>
            </p>
            <p className='flex flex-col'>
              <span className='font-semibold'>Occupation</span>
              <span className='text-gray-600'>Entrepreneur</span>
            </p>
            <p className='flex flex-col'>
              <span className='font-semibold'>Nationality</span>
              <span className='text-gray-600'>Bangladesh</span>
            </p>
            <p className='flex flex-col'>
              <span className='font-semibold'>Address</span>
              <span className='text-gray-600'>Dhaka, Bangladesh</span>
            </p>
            <p className='flex flex-col'>
              <span className='font-semibold'>City</span>
              <span className='text-gray-600'>Dhaka</span>
            </p>
            <p className='flex flex-col'>
              <span className='font-semibold'>State</span>
              <span className='text-gray-600'>Bangladesh</span>
            </p>
          </div>
        </div>

        {/* --- Business ---*/}
        <div>
          <h3 className='text-2xl md:text-3xl font-bold pb-4 text-gray-700 border-b border-gray-300 mb-4'>Business Details</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <p className='flex flex-col'>
              <span className='font-semibold'>Company Name</span>
              <span className='text-gray-600'>Technology Hub</span>
            </p>
            <p className='flex flex-col'>
              <span className='font-semibold'>Company Type</span>
              <span className='text-gray-600'>Technology</span>
            </p>
            <p className='flex flex-col'>
              <span className='font-semibold'>Years of Experience</span>
              <span className='text-gray-600'>5 years</span>
            </p>
            <p className='flex flex-col'>
              <span className='font-semibold'>Company Registration Number</span>
              <span className='text-gray-600'>123456</span>
            </p>
            <p className='flex flex-col'>
              <span className='font-semibold'>Date of Establishment</span>
              <span className='text-gray-600'>01/01/2010</span>
            </p>
            <p className='flex flex-col'>
              <span className='font-semibold'>Website URL</span>
              <span className='text-gray-600'>www.technologyhub.com</span>
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default PersonalAndBusiness