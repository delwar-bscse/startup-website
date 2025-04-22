"use client"

import StoryImg01 from "@/assets/projects/single_project/ourStory_01.png"
import Image from "next/image"
import { useState } from "react";
import BusinessDetails from "../shared/BusinessDetails";
import TargetVsRaisedAmount from "../shared/TargetVsRaised";

const ProjectDetails = () => {
  const [changeComponent, setChangeComponent] = useState<string>("details");
  return (
    <div>
      {/* Destination Section */}
      <div className="maxWidth pb-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div>
            <Image src={StoryImg01} width={1000} height={1000} alt="Project Hero Image" className="rounded-sm" />
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold pb-2 text-gray-600">Your Ultimate Foodie Destination</h2>
              <p className="text-gray-600">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. content here&apos;, making it look like readable English.</p>
            </div>
            <div className="space-y-6">
              <div className='relative flex items-center justify-start w-full bg-gray-200'>
                <p className='basis-[20%] bg-primary2 text-right h-10'></p>
                <span className='absolute left-4 text-gray-800 font-semibold text-sm md:text-base'>Raised 20%</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:text-lg lg:text-xl">
                <p className="flex md:flex-col items-center justify-center gap-3 bg-secondary px-3 py-6 rounded-sm">
                  <span className="text-gray-600 font-semibold">Target</span>
                  <span className="text-primary font-semibold">$1000</span>
                </p>
                <p className="flex md:flex-col items-center justify-center gap-3 bg-secondary px-3 py-6 rounded-sm">
                  <span className="text-gray-600 font-semibold">Raise</span>
                  <span className="text-primary font-semibold">$100</span>
                </p>
                <p className="flex md:flex-col items-center justify-center gap-3 bg-secondary px-3 py-6 rounded-sm">
                  <span className="text-gray-600 font-semibold">Days left</span>
                  <span className="text-primary font-semibold">30 Days</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className={`${changeComponent === "details" ? "bg-secondary" : "bg-white"} p-6 rounded-sm text-sm md:text-lg lg:text-xl space-y-3 shadow-md`}>
            <p className="font-semibold w-[90%]">
              <span className="text-primary">Business Name - </span>
              <span className="text-green-600">Your Ultimate Foodie Destination</span>
            </p>
            <p className="font-semibold w-[90%]">
              <span className="text-primary">Started Journey - </span>
              <span className="text-yellow-600">27 Jan 2025</span>
            </p>
            <div className="flex justify-end">
              <button onClick={() => setChangeComponent("details")} className="bg-primary2 text-white px-2 md:px-4 py-1 md:py-2 rounded-sm cursor-pointer">View Details</button>
            </div>
          </div>
          <div className={`${changeComponent === "amounts" ? "bg-secondary" : "bg-white"} p-6 rounded-sm text-sm md:text-lg lg:text-xl space-y-3 shadow-md`}>
            <p className="font-semibold">
              <span className="text-primary">Target Amount - </span>
              <span className="text-black">2300$</span>
            </p>
            <p className="font-semibold">
              <span className="text-primary">Raise Amount - </span>
              <span className="text-red-800">200$</span>
            </p>
            <div className="flex justify-end">
              <button onClick={() => setChangeComponent("amounts")} className="bg-primary2 text-white px-2 md:px-4 py-1 md:py-2 rounded-sm cursor-pointer">View Details</button>
            </div>
          </div>
        </div>
      </div>

      {changeComponent === "details" && <BusinessDetails />}
      {changeComponent === "amounts" && <TargetVsRaisedAmount />}


    </div>
  )
}

export default ProjectDetails;