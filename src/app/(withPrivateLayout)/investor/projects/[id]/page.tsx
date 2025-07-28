"use client";

import ProjectDetails from "@/components/section/ProjectDetails";
import { useGetProjectDetailsQuery } from "@/Redux/apis/projectsApi";
import { useParams } from "next/navigation";

const InvestorProjectDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data: projectsData, isLoading } = useGetProjectDetailsQuery(id);
  const investedProject = projectsData?.data;

  console.log("invested project", investedProject);

  if (isLoading) {
    return (
      <div className="maxWidth flex justify-center items-center h-screen">
        <h1 className="text-xl text-gray-700">Loading your projects...</h1>
      </div>
    );
  }

  return (
    <div>
      {/* Pass the sliced project array to ProjectDetails */}
      <ProjectDetails project={investedProject} />
    </div>
  );
};

export default InvestorProjectDetails;
