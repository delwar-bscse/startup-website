"use client";

import ProjectDetails from "@/components/section/ProjectDetails";
import { useGetProjectDetailsQuery } from "@/Redux/apis/projectsApi";
import { useParams } from "next/navigation";
import { getImageUrl } from "@/utils/baseUrl";

const Page = () => {
  const params = useParams();
  const projectId = params?.id;
  console.log(projectId);
  const {
    data: projectData,
    error,
    isLoading,
  } = useGetProjectDetailsQuery(projectId);

  const projectDetails = projectData?.data;
  console.log("projectDetails", projectDetails);

  const imageUrl = getImageUrl();

  // const project = allProjects?.find((p: Project) => p._id === projectId);
  // console.log("qedawrdwearter", project);

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
          backgroundImage: projectDetails?.primaryUrl
            ? `url(${imageUrl}${projectDetails.primaryUrl})`
            : `url(/path/to/placeholder-image.jpg)`, // Fallback placeholder image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full text-center min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          {projectDetails?.industry.name}
        </h2>
      </div>

      <div>
        {projectDetails ? (
          <ProjectDetails project={projectDetails} />
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
