"use client";

// import { projectDatas } from '@/constants/projectData'
import Image from "next/image";
import homeHeroImg from "@/assets/home/home_hero.png";
import aboutImg from "@/assets/home/about_us.png";
import StartProjectImg from "@/assets/contact/startProject.png";
import booking_01 from "@/assets/home/booking_01.png";
import { RiSendPlaneLine } from "react-icons/ri";
import React from "react";
import { whyChooseUsDatas } from "@/constants/homeData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CustomSlider from "@/components/shared/OurUsersSlide";
import InvestorsSlider from "@/components/shared/BestInvestorSlide";
import Link from "next/link";
import { useGetTotalCountsQuery } from "@/Redux/apis/utilityApi";
import { useGetAllProjectsQuery } from "@/Redux/apis/projectsApi";
import ProjectCard from "@/components/shared/ProjectCard";
import { Project } from "@/types/types";

const Home = () => {
  const {
    data: totalCountsData,
    error,
    isLoading,
  } = useGetTotalCountsQuery({});
  console.log(totalCountsData);

  const {
    data: allProjectsData,
    error: errorProjects,
    isLoading: loadingProjects,
  } = useGetAllProjectsQuery({});

  const totalCount = totalCountsData?.data;
  const allProjects = allProjectsData?.data?.data;

  const userToken = localStorage.getItem("accessToken");

  console.log(totalCount);
  console.log(allProjects);

  if (!userToken) {
    return (
      <p className="text-center py-20 text-2xl font-semibold text-red-600">
        Please Log In First
      </p>
    );
  }

  if (isLoading || loadingProjects) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        <div className="text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  if (error || errorProjects) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        <div className="text-lg font-semibold text-red-600">
          Something went wrong. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* ----------- Home's Hero Section ----------- */}
      <div
        style={{ backgroundImage: `url(${homeHeroImg.src})` }}
        className="bg-cover bg-center"
      >
        <div className="bg-black/40">
          <div className="maxWidth text-white py-10 md:py-24 lg:py-48 space-y-2 md:space-y-4">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold max-w-[10200px]">
              Empowering Small Businesses with Affordable Marketing Tools
            </h2>
            <p className="text-sm md:text-base lg:text-xl py-4 max-w-[700px]">
              Connecting agents with powerful tools that showcase you and your
              listings beyond your local MLS, facilitating seamless referrals
              for lucrative fees, placing you on a global search engine where
              new clients can discover.
            </p>
            <Link
              href="/projects"
              className="flex justify-center items-center bg-primary text-white py-2 md:py-3  px-2 sm:px-4 lg:px-8 gap-1  sm:gap-2 lg:gap-4 rounded-md text-sm sm:text-lg lg:text-2xl tracking-wider w-50 sm:w-60 lg:w-80"
            >
              <span>Explore Projects</span>
              <RiSendPlaneLine className="text-sm sm:text-xl lg:text-2xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* ----------- About Us Section ----------- */}
      <div className="maxWidth py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={aboutImg}
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold pb-2 md:pb-4 lg:pb-8">
            About Us
          </h2>
          <p>
            We know how important it is to be on time. Our drivers are punctual,
            and our services are designed to ensure you arrive at your
            destination safely and efficiently. We know how important it is to
            be on time. Our drivers are punctual, and our services are designed
            to ensure you arrive at your destination safely and efficiently.
          </p>
        </div>
      </div>

      {/* ----------- Project Overview (Mini Card) Section ----------- */}
      <div className="bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 maxWidth py-20">
          {/* Entrepreneur */}
          <div className="relative flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 overflow-hidden">
            <h2 className="text-gray-600 md:text-xl lg:text-2xl font-semibold pb-4 lg:pb-8 max-w-[300px] text-center">
              Total Entrepreneurs
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
              {totalCount?.totalEntrepreneurs || 0}
            </p>
            <div className="bg-primary2 w-30 md:w-40 xl:w-50 h-30 md:h-40 xl:h-50 rounded-full absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2" />
          </div>

          {/* Investors */}
          <div className="relative flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 overflow-hidden">
            <h2 className="text-gray-600 md:text-xl lg:text-2xl font-semibold pb-4 lg:pb-8 max-w-[300px] text-center">
              Total Investors
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
              {totalCount?.totalInvestors || 0}
            </p>
            <div className="bg-primary2 w-30 md:w-40 xl:w-50 h-30 md:h-40 xl:h-50 rounded-full absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2" />
          </div>

          {/* Projects */}
          <div className="relative flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 overflow-hidden">
            <h2 className="text-gray-600 md:text-xl lg:text-2xl font-semibold pb-4 lg:pb-8 max-w-[300px] text-center">
              Total Projects
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
              {totalCount?.totalProjects || 0}
            </p>
            <div className="bg-primary2 w-30 md:w-40 xl:w-50 h-30 md:h-40 xl:h-50 rounded-full absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2" />
          </div>

          {/* Revenue */}
          <div className="relative flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 overflow-hidden">
            <h2 className="text-gray-600 md:text-xl lg:text-2xl font-semibold pb-4 lg:pb-8 max-w-[300px] text-center">
              Total Revenue
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
              ${totalCount?.totalRevenue || 0}
            </p>
            <div className="bg-primary2 w-30 md:w-40 xl:w-50 h-30 md:h-40 xl:h-50 rounded-full absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* ----------- Why Choose US Section ----------- */}
      <div className="flex flex-col lg:flex-row w-full pt-20">
        <div className="w-full lg:w-[40%] bg-primary box-border flex items-center justify-start lg:justify-end">
          <div
            style={{ maxWidth: `${(1440 * 40) / 100}px`, width: "100%" }}
            className="box-border flex flex-col justify-center items-start gap-6 text-white py-28 md:8 px-4 md:px-24"
          >
            <h2 className="text-4xl font-semibold flex flex-row md:fle-col gap-2">
              <span>Why</span>
              <span>Chose</span>
              <span>Us?</span>
            </h2>
            <p className="text-gray-200">
              Hear from mantes who have transformed their careers with the help
              of expert mentors.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[60%] bg-secondary box-border flex flex-col items-start justify-start gap-2 sm:gap-4 py-10">
          {whyChooseUsDatas?.map((item) => (
            <div
              key={item?.id}
              style={{ maxWidth: `${(1440 * 60) / 100}px`, width: "100%" }}
              className="py-4 flex items-center relative"
            >
              <div className="absolute top-6 left-10 lg:left-0 transform -translate-x-1/2 bg-primary2 ring-4 ring-gray-300 lg:ring-gray-100/60 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center">
                <Image src={booking_01} width={32} height={32} alt="About Us" />
              </div>
              <div className="max-lg:ps-20 lg:px-16 space-y-2">
                <h2 className="text-2xl font-bold text-gray-600">
                  {item?.title}
                </h2>
                <p className="text-gray-400 text-sm">{item?.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------- Projects Section ----------- */}
      <div className="maxWidth py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-8">
          Exclusive Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {allProjects.slice(0, 6)?.map((project: Project) => (
            <ProjectCard
              key={project?._id}
              project={project}
              detailsUrl={`/projects/${project?._id}`}
            />
          ))}
        </div>
        <div className="flex items-center justify-center py-3">
          <Link
            href="/projects"
            className="text-2xl font-semibold text-gray-500 py-2 px-2"
          >
            See All
          </Link>
        </div>
      </div>

      {/* ----------- Start Your Projects Section ----------- */}
      <div
        style={{ backgroundImage: `url(${StartProjectImg.src})` }}
        className="w-full text-center min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex flex-col gap-6 items-center justify-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Want to Start your Project
        </h2>
        <Link
          href="/signup"
          className="flex justify-center items-center bg-primary2  py-1 sm:py-2 px-4 lg:px-6 gap-1  sm:gap-2 lg:gap-4 rounded-md text-sm sm:text-lg tracking-wider"
        >
          <span>Start Project</span>
          <RiSendPlaneLine className="text-sm sm:text-xl" />
        </Link>
      </div>

      {/* ----------- Best Investors Slider Section ----------- */}
      <div className="maxWidth flex flex-col-reverse md:flex-row gap-4 pt-12">
        <div className="w-full md:w-[50%]">
          <InvestorsSlider />
        </div>
        <div className="flex flex-col gap-4 items-start justify-center px-3 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Our best Investors
          </h2>
          <p className="lg:tracking-wider text-gray-600">
            We know how important it is to be on time. Our drivers are punctual,
            and our services are designed to ensure you arrive at your
            destination safely and efficiently. We know how important it is to
            be on time.{" "}
          </p>
        </div>
      </div>

      {/* ----------- What Our Users Are Saying Carousel Section ----------- */}
      <div className="bg-secondary py-10 md:py-20">
        <div className="text-center space-y-2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            What Our Users Are Saying
          </h3>
          <p className="text-gray-400 lg:tracking-wide text-base">
            Hear from mentees who have transformed their careers with the help
            of expert mentors.
          </p>
        </div>
        <CustomSlider />
      </div>
    </div>
  );
};

export default Home;
