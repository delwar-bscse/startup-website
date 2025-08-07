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
  console.log("visionUrlPath", visionUrlPath);

  return (
    <div className="py-5">
      {/* ----------- Our Story Section ----------- */}
      <div className="maxWidth">
        <h2 className="pb-8 text-3xl font-bold text-gray-600 md:text-5xl">
          Our Story
        </h2>
        <p className="text-gray-600">{project?.story}</p>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {project?.storyUrls.map(
            (image: any, index: any | null | undefined) => (
              <Image
                key={index}
                src={`${imageUrl}${image}` || `${imageUrl}${project.image}`}
                width={500}
                height={300}
                alt={`Project Story Image ${index + 1}`}
                className="rounded-sm h-[400px] w-[600px]"
              />
            )
          )}
        </div>
      </div>

      {/* ----------- Our Mission Section ----------- */}
      <div className="my-10 bg-secondary">
        <div className="py-20 maxWidth">
          <h2 className="pb-10 text-3xl font-bold text-gray-700 md:text-5xl">
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
                  <p className="flex items-center justify-center w-8 h-8 font-semibold text-gray-700 bg-gray-300 rounded-full md:w-12 md:h-12 md:text-xl">
                    {index + 1}
                  </p>
                  {index < (project?.mission?.length ?? 0) - 1 && (
                    <div className="border-gray-300 border-dashed grow border-s-2 md:border-s-4" />
                  )}
                </div>
                <div className="pt-1 pb-4">
                  <h2 className="pb-2 font-bold text-gray-600 sm:text-xl md:text-3xl">
                    {mission.stepTitle}
                  </h2>
                  <p className="text-sm text-gray-600 md:text-base">
                    {mission.stepDescription}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* ----------- Our Vision Section ----------- */}
      <div className="grid grid-cols-1 gap-8 py-10 maxWidth md:grid-cols-2">
        <div>
          <h2 className="pb-8 text-3xl font-bold text-gray-600 md:text-5xl">
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
