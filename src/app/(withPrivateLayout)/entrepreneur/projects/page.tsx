"use client";
import CreateProject from "@/components/section/CreateProject";
import ProjectDetails from "@/components/section/ProjectDetails";
import { Button } from "@/components/ui/button";
import { useGetMyProjectQuery } from "@/Redux/apis/projectsApi";
import { useState } from "react";

const EntrepreneurProjects = () => {
  const [isProject, setIsProject] = useState(false);
  const { data: projectData, isLoading } = useGetMyProjectQuery({});
  console.log("Project Data:", projectData);

  const checkProject = (value: boolean) => {
    setIsProject(value);
  };

  return (
    <div className="pb-10">
      {isProject ? (
        <ProjectDetails />
      ) : (
        <CreateProject checkProject={checkProject} />
      )}
      {isProject && (
        <div className="maxWidth flex justify-end">
          <Button onClick={() => checkProject(false)}>Edit Project</Button>
        </div>
      )}
    </div>
  );
};

export default EntrepreneurProjects;
