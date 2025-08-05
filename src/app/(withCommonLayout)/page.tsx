"use client";

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

// import CustomSlider from "@/components/shared/OurUsersSlide";
import InvestorsSlider from "@/components/shared/BestInvestorSlide";
import Link from "next/link";
import { useGetQuantityCountsQuery } from "@/Redux/apis/utilityApi";
import { useGetAllProjectsQuery } from "@/Redux/apis/projectsApi";
import ProjectCard from "@/components/shared/ProjectCard";
import { Project } from "@/types/types";
import { useGetTopInvestorQuery } from "@/Redux/apis/investorApi";

const Home = () => {
  const {
    data: totalCountsData,
    // error,
    isLoading,
  } = useGetQuantityCountsQuery({});
  console.log(totalCountsData);

  const {
    data: allProjectsData,
    // error: errorProjects,
    isLoading: loadingProjects,
  } = useGetAllProjectsQuery({});

  const { data: topInvestorsData, isLoading: loadingTopInvestors } =
    useGetTopInvestorQuery({});

  const totalCount = totalCountsData?.data;
  const allProjects = allProjectsData?.data;
  const topInvestors = topInvestorsData?.data;
  console.log("allProjects", allProjects);

  // const userToken = localStorage.getItem("accessToken");

  console.log(totalCount);
  console.log(allProjects);

  // if (!userToken) {
  //   return (
  //     <p className="py-20 text-2xl font-semibold text-center text-red-600">
  //       Please Log In First
  //     </p>
  //   );
  // }

  if (isLoading || loadingProjects || loadingTopInvestors) {
    return (
      <div className="flex items-center justify-center w-full py-10">
        <div className="text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  // if (error || errorProjects) {
  //   return (
  //     <div className="flex items-center justify-center w-full py-10">
  //       <div className="text-lg font-semibold text-red-600">
  //         Something went wrong. Please try again later.
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="w-full">
      {/* ----------- Home's Hero Section ----------- */}
      <div
        style={{ backgroundImage: `url(${homeHeroImg.src})` }}
        className="bg-center bg-cover"
      >
        <div className="bg-black/40">
          <div className="py-10 space-y-2 text-white maxWidth md:py-24 lg:py-48 md:space-y-4">
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
              className="flex items-center justify-center gap-1 px-2 py-2 text-sm tracking-wider text-white rounded-md bg-primary md:py-3 sm:px-4 lg:px-8 sm:gap-2 lg:gap-4 sm:text-lg lg:text-2xl w-50 sm:w-60 lg:w-80"
            >
              <span>Explore Projects</span>
              <RiSendPlaneLine className="text-sm sm:text-xl lg:text-2xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* ----------- About Us Section ----------- */}
      <div className="grid grid-cols-1 gap-8 py-20 maxWidth md:grid-cols-2">
        <div>
          <Image
            src={aboutImg}
            alt="About Us"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="pb-2 text-2xl font-bold lg:text-4xl xl:text-5xl md:pb-4 lg:pb-8">
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
        <div className="grid grid-cols-1 gap-8 py-20 md:grid-cols-2 lg:grid-cols-3 maxWidth">
          {/* Entrepreneur */}
          <div className="relative flex flex-col items-center justify-center p-8 overflow-hidden bg-white rounded-lg shadow-lg">
            <h2 className="text-gray-600 md:text-xl lg:text-2xl font-semibold pb-4 lg:pb-8 max-w-[300px] text-center">
              Total Users
            </h2>
            <p className="text-2xl font-bold md:text-3xl lg:text-4xl text-primary">
              {totalCount?.totalUsers || 0}
            </p>
            <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 rounded-full bg-primary2 w-30 md:w-40 xl:w-50 h-30 md:h-40 xl:h-50" />
          </div>

          {/* Investors */}
          <div className="relative flex flex-col items-center justify-center p-8 overflow-hidden bg-white rounded-lg shadow-lg">
            <h2 className="text-gray-600 md:text-xl lg:text-2xl font-semibold pb-4 lg:pb-8 max-w-[300px] text-center">
              Total Projects
            </h2>
            <p className="text-2xl font-bold md:text-3xl lg:text-4xl text-primary">
              {totalCount?.totalProjects || 0}
            </p>
            <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 rounded-full bg-primary2 w-30 md:w-40 xl:w-50 h-30 md:h-40 xl:h-50" />
          </div>

          {/* Projects */}
          <div className="relative flex flex-col items-center justify-center p-8 overflow-hidden bg-white rounded-lg shadow-lg">
            <h2 className="text-gray-600 md:text-xl lg:text-2xl font-semibold pb-4 lg:pb-8 max-w-[300px] text-center">
              Total Investments
            </h2>
            <p className="text-2xl font-bold md:text-3xl lg:text-4xl text-primary">
              {totalCount?.totalInvestments || 0}
            </p>
            <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 rounded-full bg-primary2 w-30 md:w-40 xl:w-50 h-30 md:h-40 xl:h-50" />
          </div>
          {/* Revenue */}
          {/* <div className="relative flex flex-col items-center justify-center p-8 overflow-hidden bg-white rounded-lg shadow-lg">
            <h2 className="text-gray-600 md:text-xl lg:text-2xl font-semibold pb-4 lg:pb-8 max-w-[300px] text-center">
              Total Revenue
            </h2>
            <p className="text-2xl font-bold md:text-3xl lg:text-4xl text-primary">
              ${totalCount?.totalRevenue || 0}
            </p>
            <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 rounded-full bg-primary2 w-30 md:w-40 xl:w-50 h-30 md:h-40 xl:h-50" />
          </div> */}
        </div>
      </div>

      {/* ----------- Why Choose US Section ----------- */}
      <div className="flex flex-col w-full pt-20 lg:flex-row">
        <div className="w-full lg:w-[40%] bg-primary box-border flex items-center justify-start lg:justify-end">
          <div
            style={{ maxWidth: `${(1440 * 40) / 100}px`, width: "100%" }}
            className="box-border flex flex-col items-start justify-center gap-6 px-4 text-white py-28 md:8 md:px-24"
          >
            <h2 className="flex flex-row gap-2 text-4xl font-semibold md:fle-col">
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
              className="relative flex items-center py-4"
            >
              <div className="absolute flex items-center justify-center w-12 h-12 transform -translate-x-1/2 rounded-full top-6 left-10 lg:left-0 bg-primary2 ring-4 ring-gray-300 lg:ring-gray-100/60 sm:w-16 sm:h-16">
                <Image src={booking_01} width={32} height={32} alt="About Us" />
              </div>
              <div className="space-y-2 max-lg:ps-20 lg:px-16">
                <h2 className="text-2xl font-bold text-gray-600">
                  {item?.title}
                </h2>
                <p className="text-sm text-gray-400">{item?.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------- Projects Section ----------- */}
      {allProjects && (
        <div className="py-20 maxWidth">
          <h2 className="pb-8 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            Exclusive Projects
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {allProjects.slice(0, 6)?.map((project: Project) => (
              <ProjectCard
                key={project?._id}
                project={project}
                detailsUrl={`/projects/${project?._id}`}
              />
            ))}
          </div>
          {allProjects.length > 0 ? (
            <div className="flex items-center justify-center py-3">
              <Link
                href="/projects"
                className="px-2 py-2 text-2xl font-semibold text-gray-500"
              >
                See All
              </Link>
            </div>
          ) : (
            <p>No Projects Found</p>
          )}
        </div>
      )}

      {/* ----------- Start Your Projects Section ----------- */}
      <div
        style={{ backgroundImage: `url(${StartProjectImg.src})` }}
        className="w-full text-center min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex flex-col gap-6 items-center justify-center"
      >
        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Want to Start your Project
        </h2>
        <Link
          href="/signup"
          className="flex items-center justify-center gap-1 px-4 py-1 text-sm tracking-wider rounded-md bg-primary2 sm:py-2 lg:px-6 sm:gap-2 lg:gap-4 sm:text-lg"
        >
          <span>Start Project</span>
          <RiSendPlaneLine className="text-sm sm:text-xl" />
        </Link>
      </div>

      {/* ----------- Best Investors Slider Section ----------- */}
      {topInvestors.length > 0 && (
        <div className="flex flex-col-reverse gap-4 pt-12 maxWidth md:flex-row">
          <div className="w-full md:w-[50%]">
            <InvestorsSlider topInvestors={topInvestors} />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 px-3 lg:px-20">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              Our best Investors
            </h2>
            <p className="text-gray-600 lg:tracking-wider">
              We know how important it is to be on time. Our drivers are
              punctual, and our services are designed to ensure you arrive at
              your destination safely and efficiently. We know how important it
              is to be on time.{" "}
            </p>
          </div>
        </div>
      )}

      {/* ----------- What Our Users Are Saying Carousel Section ----------- */}
      {/* <div className="py-10 bg-secondary md:py-20">
        <div className="space-y-2 text-center">
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            What Our Users Are Saying
          </h3>
          <p className="text-base text-gray-400 lg:tracking-wide">
            Hear from mentees who have transformed their careers with the help
            of expert mentors.
          </p>
        </div>
        <CustomSlider />
      </div> */}
    </div>
  );
};

export default Home;
