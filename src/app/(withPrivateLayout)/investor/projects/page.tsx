"use client";

import ProjectBreakdown from "@/components/shared/ProjectBreakdown";
import ProjectCard from "@/components/shared/ProjectCard";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Profile from "@/assets/projects/project.png";
import Profile2 from "@/assets/projects/project_01.png";
import { useGetMyInvestedProjectQuery } from "@/Redux/apis/projectsApi";
import { Project } from "@/types/types";

interface Investor {
  name: string;
  projectName: string;
  amount: string;
  shareholder: string;
  date: string;
  profileUrl: StaticImageData;
}

const investors: Investor[] = [
  {
    name: "John Doe",
    projectName: "Eco-Friendly Urban Farming",
    amount: "300$",
    shareholder: "10%",
    date: "14/2/2025",
    profileUrl: Profile,
  },
  {
    name: "Jane Smith",
    projectName: "Revolutionary Tech for Education",
    amount: "250$",
    shareholder: "8%",
    date: "15/3/2025",
    profileUrl: Profile2,
  },
  {
    name: "John Doe",
    projectName: "Fundraising & Vendor Recruitment",
    amount: "300$",
    shareholder: "10%",
    date: "14/2/2025",
    profileUrl: Profile,
  },
  {
    name: "Jane Smith",
    projectName: "A New Super Car on Your Wrist",
    amount: "250$",
    shareholder: "8%",
    date: "15/3/2025",
    profileUrl: Profile2,
  },
];

const Page = () => {
  const { data: projectsData, isLoading } = useGetMyInvestedProjectQuery({});
  const projects = projectsData?.data;
  console.log("Projects Dataaaaaa:", projects);

  if (isLoading) {
    return (
      <div className="maxWidth flex justify-center items-center h-screen">
        <h1 className="text-xl text-gray-700">Loading your projects...</h1>
      </div>
    );
  }

  return (
    <div>
      {/* ----------- My Projects Section ----------- */}
      <div className="maxWidth py-20">
        <h2 className="text-3xl md:text-5xl font-bold pb-8">
          Invested Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.slice(0, 3)?.map((project: Project) => (
            <ProjectCard
              key={project?.project._id || project?._id}
              project={project}
              detailsUrl={`/investor/projects/${
                project?.project._id || project?._id
              }`}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto overflow-x-auto py-10 px-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl py-4 font-bold text-gray-700">
          Entrepreneur List
        </h2>
        <div className="w-full py-1 overflow-x-auto">
          <table
            className="maxWidth min-w-[678px] table-auto bg-white"
            style={{ borderCollapse: "collapse", width: "100%" }}
          >
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">
                  Entrepreneur
                </th>
                <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">
                  Project
                </th>
                <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">
                  Amount
                </th>
                <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">
                  Shareholder
                </th>
                <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">
                  Date
                </th>
                <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-sm md lg:text-base font-light">
              {investors.map((investor, index) => (
                <tr key={index}>
                  <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 flex items-center">
                    <Image
                      src={investor.profileUrl}
                      width={400}
                      height={400}
                      alt={investor.name}
                      className="w-[30px] lg:w-[40px] xl:w-[48px] h-[30px] lg:h-[40px] xl:h-[48px] rounded-full border-2 border-primary"
                    />
                    <span className="ml-2">{investor.name}</span>
                  </td>
                  <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">
                    {investor.projectName.slice(0, 25)}...
                  </td>
                  <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">
                    {investor.amount}
                  </td>
                  <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">
                    {investor.shareholder}
                  </td>
                  <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">
                    {investor.date}
                  </td>
                  <td className="py-1 md:py-2 lg:py-3 w-24 lg:w-30">
                    <Link
                      href={`/entrepreneur/investor/${index + 1}`}
                      className="bg-primary2 block text-center text-gray-600 font-semibold py-1 md:py-2 w-full rounded-md"
                    >
                      See Profile
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ----------- Projects Breakedown ----------- */}
      <ProjectBreakdown />
    </div>
  );
};

export default Page;
