import { subscriptionDatas } from '@/constants/subscriptionData'
import Image from 'next/image'
import React from 'react'
import WeGet from '@/assets/projects/Entrepreneur/Button.png'
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Subscriptions = () => {
  return (
    <div className='maxWidth py-20 space-y-6'>
      <div className='bg-secondary px-2 py-6 lg:py-12 lg:px-4 xl:py-20 xl:px-16'>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold'>Choose <span className='text-primary'>Your Subscription Plan</span></h2>
          <p className='py-2 lg:py-6 text-gray-500 text-base lg:text-lg'>Flexible plans for every gifting need - find the perfect fit for you.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {subscriptionDatas?.map((sub) => (
            <div key={sub.id}>
              <div className={`border ${sub?.recommended ? "border-primary" : "border-gray-200"} overflow-hidden rounded-md`}>
                {sub?.recommended && <p className='text-center bg-primary text-white py-2 text-2xl font-bold'>Recommended</p>}
                <div className=' space-y-6 py-6 px-2 lg:px-4 xl:px-6 bg-white'>
                  <h3 className='text-2xl font-semibold text-center text-gray-700'>{sub.title}</h3>
                  <p className='text-4xl lg:text-5xl font-bold text-center'>${sub.price}<span className='text-gray-500 text-base lg:text-lg font-semibold'>/month</span></p>
                  <p className='text-gray-500 text-semibold'>{sub.description}</p>
                  <div className='w-[95%] h-8 mx-auto flex justify-center'>
                    <Image src={WeGet} alt={sub.title} width={300} height={100} />
                  </div>
                  <ul className='flex flex-col gap-3 lg:gap-4 text-gray-500'>
                    {
                      sub?.features?.map((feature, index) => (
                        <li key={index} className='flex items-center justify-start gap-2 lg:gap-4'>
                          <span className='rounded-full p-1 lg:p-2 bg-secondary flex items-center justify-center'><FaCheckCircle className='text-primary' /></span>
                          <span className='text-sm lg:text-base'>{feature}</span>
                        </li>
                      ))
                    }
                  </ul>
                  <div className='px-5'>
                    <button className='w-full bg-secondary2 text-primary border-2 border-primary py-2 lg:py-3 rounded-lg font-semibold text-lg lg:text-2xl'>Choose Plan</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Submit then Next */}
      <div className="flex justify-end">
              <Button type="submit" className="text-base md:text-lg bg-primary2 text-gray-900 min-w-[150px] px-3">
                Subscribe
              </Button>
            </div>
    </div>
  )
}

export default Subscriptions