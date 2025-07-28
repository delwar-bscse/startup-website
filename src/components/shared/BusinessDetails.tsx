/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import { getImageUrl } from "@/utils/baseUrl";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

interface MissionStep {
  stepTitle: React.ReactNode;
  stepDescription: React.ReactNode;
}

interface Project {
  [x: string]: any;
  story?: string;
  storyUrls: string[];
  mission?: MissionStep[];
  vision?: string;
  visionUrl?: string;
}

interface BusinessDetailsProps {
  project: Project;
}

const BusinessDetails = ({ project }: BusinessDetailsProps) => {
  console.log("Project Detailssss:", project);
  const imageUrl = getImageUrl();
  const visionUrlPath = project?.visionUrl || project?.project.visionUrl;

  return (
    <div className="py-5">
      {/* ----------- Our Story Section ----------- */}
      <div className="maxWidth">
        <h2 className="text-3xl md:text-5xl font-bold pb-8 text-gray-600">
          Our Story
        </h2>
        <p className="text-gray-600">{project?.story}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {project?.storyUrls.map(
            (image: any, index: any | null | undefined) => (
              <Image
                key={index}
                src={`${imageUrl}${image}` || `${imageUrl}${project.image}`}
                width={700}
                height={300}
                alt={`Project Story Image ${index + 1}`}
                className="rounded-sm"
              />
            )
          )}
        </div>
      </div>

      {/* ----------- Our Mission Section ----------- */}
      <div className="bg-secondary">
        <div className="maxWidth py-20">
          <h2 className="text-3xl md:text-5xl font-bold pb-10 text-gray-700">
            Our Mission
          </h2>

          {project?.mission?.map(
            (
              mission: {
                stepTitle:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactPortal
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
                stepDescription:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactPortal
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              },
              index: number
            ) => (
              <div key={index} className="flex gap-2 md:gap-4">
                <div className="flex flex-col items-center gap-2">
                  <p className="w-8 h-8 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center md:text-xl font-semibold text-gray-700">
                    {index + 1}
                  </p>
                  {index < (project?.mission?.length ?? 0) - 1 && (
                    <div className="grow border-s-2 md:border-s-4 border-dashed border-gray-300" />
                  )}
                </div>
                <div className="pb-4 pt-1">
                  <h2 className="sm:text-xl md:text-3xl font-bold pb-2 text-gray-600">
                    {mission.stepTitle}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    {mission.stepDescription}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* ----------- Our Vision Section ----------- */}
      <div className="maxWidth py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold pb-8 text-gray-600">
            Our Vision
          </h2>
          <p className="text-gray-600">{project?.vision}</p>
        </div>
        <div>
          <Image
            src={`${imageUrl}${visionUrlPath}`}
            width={650}
            height={300}
            alt="Project Vision Image"
            className="rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
