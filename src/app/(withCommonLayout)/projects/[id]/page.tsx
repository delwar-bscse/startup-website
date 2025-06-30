"use client";

import ProjectDetails from "@/components/section/ProjectDetails";
import { useGetAllProjectsQuery } from "@/Redux/apis/projectsApi";
import { Project } from "@/types/types";
import { useParams } from "next/navigation";
import { getImageUrl } from "@/utils/baseUrl";

const Page = () => {
  const params = useParams();
  const projectId = params?.id;
  console.log(projectId);
  const {
    data: allProjectsData,
    error,
    isLoading,
  } = useGetAllProjectsQuery({});
  const imageUrl = getImageUrl;

  const allProjects = allProjectsData?.data?.data as Project[] | undefined;

  const project = allProjects?.find((p: Project) => p._id === projectId);
  console.log(project);

  console.log(allProjects);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        <div className="text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        <div className="text-lg font-semibold text-red-600">
          Something went wrong. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* ----------- Single Project's Hero Section ----------- */}
      <div
        style={{
          backgroundImage: `url(${
            project?.primaryUrl ? imageUrl(project?.primaryUrl) : ""
          })`,
        }}
        className="w-full text-center min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          {project?.industry}
        </h2>
      </div>

      <div>
        {project ? (
          <ProjectDetails project={project} />
        ) : (
          <div className="w-full flex justify-center items-center py-10">
            <div className="text-lg font-semibold text-red-600">
              Project not found.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
