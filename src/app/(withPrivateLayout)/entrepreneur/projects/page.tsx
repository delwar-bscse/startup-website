"use client";
import CreateProject from "@/components/section/CreateProject";
import ProjectDetails from "@/components/section/ProjectDetails";
import { useGetMyProjectQuery } from "@/Redux/apis/projectsApi";
import { useEffect, useState } from "react";

const EntrepreneurProjects = () => {
  const [isProject, setIsProject] = useState(false);
  const { data: projectData, isLoading } = useGetMyProjectQuery({});
  const project = projectData?.data;
  console.log("Project Data:", project);

  const checkProject = (value: boolean) => {
    setIsProject(value);
  };

  useEffect(() => {
    if (project) {
      setIsProject(true);
    } else {
      setIsProject(false);
    }
  }, [project]);

  if (isLoading) {
    return (
      <div className="maxWidth flex justify-center items-center h-screen">
        <h1 className="text-xl text-gray-700">Loading your project...</h1>
      </div>
    );
  }

  return (
    <div className="pb-10">
      {isProject ? (
        <ProjectDetails project={project} />
      ) : (
        <CreateProject checkProject={checkProject} project={project} />
      )}
      {/* {isProject && (
        <div className="maxWidth flex justify-end">
          <Button onClick={() => setIsProject(false)}>Edit Project</Button>
        </div>
      )} */}
    </div>
  );
};

export default EntrepreneurProjects;
