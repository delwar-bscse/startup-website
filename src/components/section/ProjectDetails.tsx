/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useState } from "react";
import BusinessDetails from "../shared/BusinessDetails";
import TargetVsRaisedAmount from "../shared/TargetVsRaised";
import { getImageUrl } from "@/utils/baseUrl";
import dayjs from "dayjs";
import Link from "next/link";

interface Project {
  [x: string]: any;
  deadLine: string;
  title: string;
  primaryUrl?: string;
  description: string;
  fundingGoal: number;
  fundsRaised: number;
  storyUrls: string[]; // Add this property to match BusinessDetails requirements
}

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const [changeComponent, setChangeComponent] = useState<string>("details");

  const imageUrl = getImageUrl();

  const deadline = project?.deadLine;
  const daysLeft = dayjs(deadline).diff(dayjs(), "day");
  console.log(daysLeft);
  const progressPercentage = Math.min(
    (project?.fundsRaised * 100) / project?.fundingGoal,
    100
  );
  const isOverfunded =
    (project?.fundsRaised * 100) / project?.fundingGoal > 100;

  return (
    <div>
      {/* Destination Section */}
      <div className="maxWidth">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div>
            {project?.primaryUrl ? (
              <Image
                src={`${imageUrl}${project.primaryUrl}`}
                width={1000}
                height={1000}
                alt="Project Hero Image"
                className="rounded-sm"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                No Image Available
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold pb-2 text-gray-600">
                {project?.title}
              </h2>
              <p className="text-gray-600">{project?.description}</p>
            </div>
            <div className="space-y-6">
              <div className="w-full">
                <div className="relative flex items-center justify-start w-full bg-gray-200 h-10 rounded-md overflow-hidden shadow-inner">
                  <div
                    className={`h-full transition-all duration-700 ease-out ${
                      isOverfunded ? "bg-green-500" : "bg-primary2"
                    }`}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>

                  {/* Progress text */}
                  <span className="absolute left-4 text-gray-800 font-semibold text-sm md:text-base z-10">
                    Raised{" "}
                    {Math.round(
                      (project?.fundsRaised * 100) / project?.fundingGoal
                    )}
                    %
                  </span>

                  {/* Amount text on the right */}
                  <span className="absolute right-4 text-gray-700 font-medium text-xs md:text-sm z-10">
                    ${project?.fundsRaised?.toLocaleString()} / $
                    {project?.fundingGoal?.toLocaleString()}
                  </span>
                </div>

                {/* Optional: Status message below */}
                {isOverfunded && (
                  <p className="text-green-600 text-sm font-medium mt-2">
                    🎉 Goal exceeded! Thank you for your support!
                  </p>
                )}
              </div>
              {!project?.entrepreneurId && (
                <div>
                  <Link
                    href="/invest-now"
                    className="block text-center font-semibold bg-primary2 text-gray-700 px-2 md:px-4 py-1 md:py-2 rounded-sm cursor-pointer w-full text-2xl"
                  >
                    Invest Now
                  </Link>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:text-lg lg:text-xl">
                <p className="flex md:flex-col items-center justify-center gap-3 bg-secondary px-3 py-6 rounded-sm">
                  <span className="text-gray-600 font-semibold">Target</span>
                  <span className="text-primary font-semibold">
                    ${project?.fundingGoal}
                  </span>
                </p>
                <p className="flex md:flex-col items-center justify-center gap-3 bg-secondary px-3 py-6 rounded-sm">
                  <span className="text-gray-600 font-semibold">Raise</span>
                  <span className="text-primary font-semibold">
                    ${project?.fundsRaised}
                  </span>
                </p>
                <p className="flex md:flex-col items-center justify-center gap-3 bg-secondary px-3 py-6 rounded-sm">
                  <span className="text-gray-600 font-semibold">Days left</span>
                  <span className="text-primary font-semibold">
                    {daysLeft} Days
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div
            className={`${
              changeComponent === "details" ? "bg-secondary" : "bg-white"
            } p-6 rounded-sm text-sm md:text-lg lg:text-xl space-y-3 shadow-md`}
          >
            <p className="font-semibold w-[90%]">
              <span className="text-primary">Business Name - </span>
              <span className="text-green-600">{project?.title}</span>
            </p>
            {/* <p className="font-semibold w-[90%]">
              <span className="text-primary">Started Journey - </span>
              <span className="text-yellow-600">27 Jan 2025</span>
            </p> */}
            <div className="flex justify-end">
              <button
                onClick={() => setChangeComponent("details")}
                className="bg-primary2 text-white px-2 md:px-4 py-1 md:py-2 rounded-sm cursor-pointer"
              >
                View Details
              </button>
            </div>
          </div>
          <div
            className={`${
              changeComponent === "amounts" ? "bg-secondary" : "bg-white"
            } p-6 rounded-sm text-sm md:text-lg lg:text-xl space-y-3 shadow-md`}
          >
            <p className="font-semibold">
              <span className="text-primary">Target Amount - </span>
              <span className="text-black">{project?.fundingGoal}$</span>
            </p>
            <p className="font-semibold">
              <span className="text-primary">Raise Amount - </span>
              <span className="text-red-800">{project?.fundsRaised}$</span>
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setChangeComponent("amounts")}
                className="bg-primary2 text-white px-2 md:px-4 py-1 md:py-2 rounded-sm cursor-pointer"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {changeComponent === "details" && <BusinessDetails project={project} />}
      {changeComponent === "amounts" && (
        <TargetVsRaisedAmount project={project} />
      )}
    </div>
  );
};

export default ProjectDetails;
