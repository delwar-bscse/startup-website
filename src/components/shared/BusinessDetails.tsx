import React from 'react'
import StoryImg01 from "@/assets/projects/single_project/ourStory_01.png"
import StoryImg02 from "@/assets/projects/single_project/ourStory_02.png"
import StoryImg03 from "@/assets/projects/single_project/ourStory_03.png"
import MissionImg01 from "@/assets/projects/single_project/ourMission_01.png"
import MissionImg02 from "@/assets/projects/single_project/ourMission_02.png"
import Image from 'next/image'

const BusinessDetails = () => {
  return (
    <div>
      {/* ----------- Our Story Section ----------- */}
      <div className="maxWidth">
        <h2 className="text-3xl md:text-5xl font-bold pb-8 text-gray-600">Our Story</h2>
        <p className="text-gray-600">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.   web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Image src={StoryImg01} width={700} height={700} alt="Project Hero Image" className="rounded-sm" />
          <Image src={StoryImg02} width={700} height={700} alt="Project Hero Image" className="rounded-sm" />
          <Image src={StoryImg03} width={700} height={700} alt="Project Hero Image" className="rounded-sm" />
        </div>
      </div>

      {/* ----------- Our Mission Section ----------- */}
      <div className="bg-secondary">
        <div className="maxWidth py-20">
          <h2 className="text-3xl md:text-5xl font-bold pb-10 text-gray-700">Our Story</h2>
          <div className="space-y-2">
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <p className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-xl font-semibold text-gray-700">1</p>
                <div className="grow border-s-4 border-dashed border-gray-300" />
              </div>
              <div className="pb-4 pt-2">
                <h2 className="text-3xl font-bold pb-2 text-gray-600">Fundraising & Vendor Recruitment</h2>
                <p className="text-gray-600">Fundraising and Selecting Vendors? Raise funds to finance the setup and operation. This could involve personal savings, investors, or crowdfunding. Simultaneously, recruit a variety of food vendors, establishing clear agreements and setting operational standards. Fundraising and Selecting Vendors? Raise funds to finance the setup and operation. This could involve personal savings, investors, or crowdfunding. Simultaneously, recruit a variety of food vendors, establishing clear agreements and setting operational standards.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <p className="w-12 h-12 bg-primary2 rounded-full flex items-center justify-center text-xl font-semibold text-gray-700">1</p>
                <div className="grow border-s-4 border-dashed border-primary2" />
              </div>
              <div className="pb-4 pt-2">
                <h2 className="text-3xl font-bold pb-2 text-gray-600">Fundraising & Vendor Recruitment</h2>
                <p>Designing the Space and Business Plan? Develop a comprehensive business plan, create a layout for the street court, and obtain necessary permits. Design your space to ensure maximum customer satisfaction and operational efficiency. Designing the Space and Business Plan? Develop a comprehensive business plan, create a layout for the street court, and obtain necessary permits. Design your space to ensure maximum customer satisfaction and operational efficiency</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <p className="w-12 h-12 bg-primary2 rounded-full flex items-center justify-center text-xl font-semibold text-gray-700">1</p>
              </div>
              <div className="pb-4 pt-2">
                <h2 className="text-3xl font-bold pb-2 text-gray-600">Fundraising & Vendor Recruitment</h2>
                <p>Designing the Space and Business Plan? Develop a comprehensive business plan, create a layout for the street court, and obtain necessary permits. Design your space to ensure maximum customer satisfaction and operational efficiency. Designing the Space and Business Plan? Develop a comprehensive business plan, create a layout for the street court, and obtain necessary permits. Design your space to ensure maximum customer satisfaction and operational efficiency</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Image src={MissionImg01} width={700} height={700} alt="Project Hero Image" className="rounded-sm" />
            <Image src={MissionImg02} width={700} height={700} alt="Project Hero Image" className="rounded-sm" />
          </div>
        </div>
      </div>

      {/* ----------- Our Vision Section ----------- */}
      <div className="maxWidth py-20">
        <h2 className="text-3xl md:text-5xl font-bold pb-8 text-gray-600">Our Vision</h2>
        <p className="text-gray-600">
          To create a vibrant and diverse food destination that brings together local flavors, fosters community connections, and provides a unique dining experience for all. We aim to offer a variety of food options that cater to every taste and dietary preference while ensuring a welcoming atmosphere where people can enjoy great food, live entertainment, and social interaction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div>
            <Image src={StoryImg01} width={700} height={700} alt="Project Hero Image" className="rounded-sm" />
          </div>
          <ul className="list-disc text-gray-600 flex flex-col items-start justify-center gap-8 tracking-wider">
            <li>Diverse Food Offerings: Featuring 10+ food vendors with global cuisines, vegan, gluten-free, and fast casual options.</li>
            <li>Community Engagement: Providing a gathering space for locals and visitors to connect, relax, and enjoy a lively atmosphere.</li>
            <li>Unique Experience: Combining delicious food with live music, events, and a casual, outdoor dining environment.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BusinessDetails