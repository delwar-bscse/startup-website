/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ProjectBreakdown from "@/components/shared/ProjectBreakdown";
import ProjectCard from "@/components/shared/ProjectCard";
import Link from "next/link";
import React from "react";
import {
  useGetMyInvestedEntrepreneursQuery,
  useGetMyInvestedProjectQuery,
} from "@/Redux/apis/projectsApi";
import { Project } from "@/types/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useGetMyInvestedIndustriesQuery } from "@/Redux/apis/investorApi";

const Page = () => {
  const { data: projectsData, isLoading } = useGetMyInvestedProjectQuery({});
  const projects = projectsData?.data;
  // console.log("Projects Dataaaaaa:", projects);

  const { data: entrepreneurData, isLoading: loadingEntrepreneur } =
    useGetMyInvestedEntrepreneursQuery({});
  const investedEntrepreneur = entrepreneurData?.data;
  // console.log("Invested Entrepreneur", investedEntrepreneur);

  const { data: investedIndustries, isLoading: loadingIndustries } =
    useGetMyInvestedIndustriesQuery({});
  const industries = investedIndustries?.data;
  console.log(industries);

  if (isLoading || loadingEntrepreneur || loadingIndustries) {
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
                {/* <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">
                  Date
                </th> */}
                <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-sm md lg:text-base font-light">
              {investedEntrepreneur.map(
                (
                  each: {
                    totalInvestedAmount: number;
                    totalSharePercentage: number;
                    project: any;
                    entrepreneur: any;
                    profileUrl: string | StaticImport;
                    name:
                      | string
                      | number
                      | bigint
                      | boolean
                      | React.ReactElement<
                          unknown,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | React.ReactPortal
                          | React.ReactElement<
                              unknown,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined;
                    amount:
                      | string
                      | number
                      | bigint
                      | boolean
                      | React.ReactElement<
                          unknown,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | React.ReactPortal
                          | React.ReactElement<
                              unknown,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined;
                    shareholder:
                      | string
                      | number
                      | bigint
                      | boolean
                      | React.ReactElement<
                          unknown,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | React.ReactPortal
                          | React.ReactElement<
                              unknown,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined;
                    date:
                      | string
                      | number
                      | bigint
                      | boolean
                      | React.ReactElement<
                          unknown,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | React.ReactPortal
                          | React.ReactElement<
                              unknown,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined;
                  },
                  index: number
                ) => (
                  <tr key={index}>
                    <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 flex items-center">
                      <Image
                        src={each.entrepreneur.profileImg}
                        width={400}
                        height={400}
                        alt={each.entrepreneur.name}
                        className="w-[30px] lg:w-[40px] xl:w-[48px] h-[30px] lg:h-[40px] xl:h-[48px] rounded-full border-2 border-primary"
                      />
                      <span className="ml-2">{each.entrepreneur.name}</span>
                    </td>
                    <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">
                      {each.project.title}
                    </td>
                    <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">
                      {each.totalInvestedAmount}
                    </td>
                    <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">
                      {each.totalSharePercentage}
                    </td>
                    {/* <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">
                      {each.date}
                    </td> */}
                    <td className="py-1 md:py-2 lg:py-3 w-24 lg:w-30">
                      <Link
                        href={`/investor/investments/${each?.entrepreneur._id}`}
                        className="bg-primary2 block text-center text-gray-600 font-semibold py-1 md:py-2 w-full rounded-md"
                      >
                        See Profile
                      </Link>
                    </td>
                  </tr>
                )
              )}
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
