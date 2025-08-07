/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CiImageOn } from "react-icons/ci";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import InterestedIndustryList from "./InterestedIndustryList";
import { RiDeleteBinLine } from "react-icons/ri";
import { useCreateProjectMutation } from "@/Redux/apis/projectsApi";
import { toast } from "sonner";

interface IStep {
  stepTitle: string;
  stepDescription: string;
}

const CreateProject = ({
  checkProject,
  project,
}: {
  checkProject: (value: boolean) => void;
  project?: any;
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<any>();
  const [stepList, setStepList] = useState<IStep[]>([] as IStep[]);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [storyImage01, setStoryImage01] = useState<string | null>(null);
  const [storyImage02, setStoryImage02] = useState<string | null>(null);
  const [storyImage03, setStoryImage03] = useState<string | null>(null);
  const [missionImage01, setMissionImage01] = useState<string | null>(null);
  const [missionImage02, setMissionImage02] = useState<string | null>(null);
  const [visionImage, setVisionImage] = useState<string | null>(null);
  const [selectBusinessType, setSelectBusinessType] =
    useState<string>("Online");

  const [createProject] = useCreateProjectMutation();
  console.log("projectttt", project);

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      projectTitle: "",
      projectBio: "",
      storyOfProject: "",
      stepTitle: "",
      stepDescription: "",
      deadline: undefined,
      targetAmount: undefined,
      coverImage: undefined,
      storyImage01: undefined,
      storyImage02: undefined,
      storyImage03: undefined,
      missionImage01: undefined,
      missionImage02: undefined,
      visionImage: undefined,
      businessShareOffered: undefined,
      businessType: "online",
      businessLocationWebsiteUrl: "",
    },
  });

  // useEffect(() => {
  //   if (project) {
  //     console.log("Setting form defaults from project:", project);

  //     // Set form field defaults
  //     form.reset({
  //       projectTitle: project.title || "",
  //       projectBio: project.description || "",
  //       storyOfProject: project.story || "",
  //       stepTitle: "",
  //       stepDescription: "",
  //       deadline: project.deadLine
  //         ? new Date(project.deadLine).toISOString().split("T")[0]
  //         : undefined,
  //       targetAmount: project.fundingGoal || undefined,
  //       coverImage: undefined, // Files can't be pre-populated
  //       storyImage01: undefined,
  //       storyImage02: undefined,
  //       storyImage03: undefined,
  //       missionImage01: undefined,
  //       missionImage02: undefined,
  //       visionImage: undefined,
  //       businessShareOffered: project.equityOffered || undefined,
  //       businessType: project.projectType || "online",
  //       businessLocationWebsiteUrl: project.businessLocation || "",
  //       projectVision: project.vision || "",
  //     });

  //     // Set other state values
  //     if (project.industry) {
  //       // If industry is stored as an object
  //       if (typeof project.industry === "object") {
  //         setSelectedIndustry(project.industry);
  //       } else {
  //         // If industry is stored as ID, you might need to fetch the full object
  //         // For now, create a basic object
  //         setSelectedIndustry({
  //           _id: project.industry,
  //           name: project.industryName || project.industry,
  //         });
  //       }
  //     }

  //     // Set mission steps
  //     if (project.mission && Array.isArray(project.mission)) {
  //       const formattedSteps = project.mission.map((mission: any) => ({
  //         stepTitle:
  //           mission.stepTitle ||
  //           mission.title ||
  //           `Step ${project.mission.indexOf(mission) + 1}`,
  //         stepDescription:
  //           mission.stepDescription || mission.description || mission,
  //       }));
  //       setStepList(formattedSteps);
  //     }

  //     // Set business type
  //     if (project.projectType) {
  //       setSelectBusinessType(project.projectType);
  //     }

  //     // Set image previews if URLs are available
  //     if (project.primaryImageUrl) {
  //       setCoverImage(project.primaryImageUrl);
  //     }

  //     if (project.storyUrls && project.storyUrls.length > 0) {
  //       setStoryImage01(project.storyUrls[0] || null);
  //       setStoryImage02(project.storyUrls[1] || null);
  //       setStoryImage03(project.storyUrls[2] || null);
  //     }

  //     if (project.missionUrls && project.missionUrls.length > 0) {
  //       setMissionImage01(project.missionUrls[0] || null);
  //       setMissionImage02(project.missionUrls[1] || null);
  //     }

  //     if (project.visionImageUrl) {
  //       setVisionImage(project.visionImageUrl);
  //     }
  //   }
  // }, [project, form]);

  // useEffect(() => {
  //   if (project) {
  //     setTimeout(() => {
  //       form.trigger();
  //     }, 100);
  //   }
  // }, [project, form]);

  const onSubmit = async (data: any) => {
    try {
      console.log("Create Project Submitted Data", data);
      console.log("image 00", data.storyImage01);
      console.log("Mission Step List : ", stepList);

      const industry = selectedIndustry?._id;
      const projectData = {
        title: data.projectTitle,
        description: data.projectBio,
        story: data.storyOfProject,
        mission: stepList,
        vision: data.projectVision,
        industry: industry,
        fundingGoal: data.targetAmount,
        equityOffered: data.businessShareOffered,
        deadLine: data.deadline,
        projectType: data.businessType,
        businessLocation: data.businessLocationWebsiteUrl,
      };

      console.log("Project Object Data:", projectData);

      // Create FormData
      const formData = new FormData();
      if (data.coverImage && data.coverImage) {
        formData.append("primaryFile", data.coverImage);
        console.log("Cover image added:", data.coverImage.name);
      }
      if (data.storyImage01) formData.append("storyFiles", data.storyImage01);
      if (data.storyImage02) formData.append("storyFiles", data.storyImage02);
      if (data.storyImage03) formData.append("storyFiles", data.storyImage03);
      if (data.missionImage01)
        formData.append("missionFiles", data.missionImage01);
      if (data.missionImage02)
        formData.append("missionFiles", data.missionImage02);
      if (data.visionImage) formData.append("visionFile", data.visionImage);
      formData.append("data", JSON.stringify(projectData));

      console.log("FormData prepared for submission");

      // Call the API
      const response = await createProject(formData).unwrap();

      console.log("Project created successfully:", response);

      if (response.success) {
        toast.success("Project created successfully!");
        checkProject(true);
      }
    } catch (error: any) {
      console.error("Error creating project:", error);

      if (error.status) {
        console.error("API Error:", error.status, error.data);
        toast.error("Please fill all the required fields correctly.");
      } else {
        // Unknown error
        console.error("Unknown Error:", error);
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  const handleStepList = ({ stepTitle, stepDescription }: IStep) => {
    console.log(stepTitle, stepDescription);
    setStepList([{ stepTitle, stepDescription }, ...stepList]);
    form.resetField("stepTitle");
    form.resetField("stepDescription");
  };

  useEffect(() => {
    console.log(selectBusinessType);
  }, [selectBusinessType]);

  return (
    <div className="flex justify-center w-full px-4 py-10">
      <div className="w-full max-w-[1000px] ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="px-4 py-8 space-y-6 rounded-lg shadow-md md:py-16 sm:px-24 bg-secondary">
              <h2 className="mb-8 text-2xl font-semibold md:text-3xl text-primary">
                Create Project
              </h2>

              <div>
                <p className="py-2 font-semibold text-gray-700">
                  Project Cover Image
                </p>
                <div className="w-full">
                  <ImageField
                    control={form.control}
                    name="coverImage"
                    image={coverImage}
                    setImage={setCoverImage}
                  />
                </div>
              </div>

              {/* Project Title */}
              <TextInputField
                control={form.control}
                name="projectTitle"
                label="Project Title"
              />

              {/* Project Bio */}
              <TextInputField
                control={form.control}
                name="projectBio"
                label="Project Bio"
              />

              {/* Project Story */}
              <TextareaInputField
                control={form.control}
                name="storyOfProject"
                label="Story of Project"
              />

              {/* Project Story Images */}
              <div>
                <p className="py-2 font-semibold text-gray-700">
                  Project’s Story Related Image
                </p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                  <ImageField
                    control={form.control}
                    name="storyImage01"
                    image={storyImage01}
                    setImage={setStoryImage01}
                  />
                  <ImageField
                    control={form.control}
                    name="storyImage02"
                    image={storyImage02}
                    setImage={setStoryImage02}
                  />
                  <ImageField
                    control={form.control}
                    name="storyImage03"
                    image={storyImage03}
                    setImage={setStoryImage03}
                  />
                </div>
              </div>

              <div className="flex items-end gap-2">
                <div>
                  <FormField
                    control={form.control}
                    name="stepTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Step Title</FormLabel>
                        <FormControl>
                          <Input type="text" className="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="stepDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Step Description</FormLabel>
                        <FormControl>
                          <Input type="text" className="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <Button
                    type="button"
                    onClick={() =>
                      handleStepList({
                        stepTitle: form.getValues("stepTitle"),
                        stepDescription: form.getValues("stepDescription"),
                      })
                    }
                    className="cursor-pointer"
                  >
                    Add
                  </Button>
                </div>
              </div>
              {stepList?.length > 0 && (
                <div className="p-2 space-y-2 border-2 border-gray-300 rounded-sm">
                  {stepList.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <p className="text-xl font-semibold text-gray-700">
                          {step.stepTitle}
                        </p>
                        <p className="text-gray-600">{step.stepDescription}</p>
                      </div>
                      <button
                        onClick={() =>
                          setStepList(
                            stepList.filter(
                              (item) => item.stepTitle !== step?.stepTitle
                            )
                          )
                        }
                        className="w-10 h-8 text-2xl font-extrabold cursor-pointer"
                      >
                        <RiDeleteBinLine className="text-red-500 hover:text-red-600" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Project Mission Images */}
              <div>
                <p className="py-2 font-semibold text-gray-700">
                  Mission Related Image
                </p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <ImageField
                    control={form.control}
                    name="missionImage01"
                    image={missionImage01}
                    setImage={setMissionImage01}
                  />
                  <ImageField
                    control={form.control}
                    name="missionImage02"
                    image={missionImage02}
                    setImage={setMissionImage02}
                  />
                </div>
              </div>

              {/* Project Story */}
              <TextareaInputField
                control={form.control}
                name="projectVision"
                label="About Your Vision"
              />

              {/* Project Story Images */}
              <div>
                <p className="py-2 font-semibold text-gray-700">Vision Image</p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <ImageField
                    control={form.control}
                    name="visionImage"
                    image={visionImage}
                    setImage={setVisionImage}
                  />
                </div>
              </div>

              <InterestedIndustryList
                selectedIndustry={selectedIndustry}
                setSelectedIndustry={setSelectedIndustry}
              />

              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="targetAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Amount</FormLabel>
                      <FormControl>
                        <Input type="number" min={0} className="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessShareOffered"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Share Offered</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={0}
                          max={100}
                          className="block w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="deadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deadline</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          className="block w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Type</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          setSelectBusinessType(value);
                          field.onChange(value);
                          console.log(value);
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full bg-white">
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="w-full">
                          <SelectItem value="online">Online</SelectItem>
                          <SelectItem value="offline">Offline</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="businessLocationWebsiteUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {selectBusinessType === "online"
                        ? "Website URL"
                        : "Business Location"}
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit then Next */}
            <div className="flex justify-end">
              <Button
                type="submit"
                className="cursor-pointer text-base md:text-lg bg-primary2 text-gray-900 min-w-[150px] px-3"
              >
                Create
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

// Image Input Fields Components //
const ImageField = ({
  control,
  name,
  image,
  setImage,
}: {
  control: any;
  name: string;
  image: string | null;
  setImage: Dispatch<SetStateAction<string | null>>;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative w-full h-[150px] bg-purple-100 rounded-md border-2 border-primary flex justify-center items-center cursor-pointer overflow-hidden">
              {!image ? (
                <span className="text-primary">
                  <CiImageOn className="text-8xl" />
                </span>
              ) : (
                <Image
                  src={image} // Use the base64 string for the src
                  alt={name}
                  width={300} // Set width and height
                  height={150}
                  objectFit="object-content h-inherit w-inherit" // Make sure it covers the area properly
                />
              )}

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    field.onChange(file);
                    setImage(URL.createObjectURL(file));
                  }
                }}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

// Text Input Fields Components //
const TextInputField = ({
  control,
  name,
  label,
}: {
  control: any;
  name: string;
  label: string;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg">{label}</FormLabel>
          <FormControl>
            <Input placeholder="Enter full name" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

// Textarea Input Fields Components //
const TextareaInputField = ({
  control,
  name,
  label,
}: {
  control: any;
  name: string;
  label: string;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg">{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Type here..."
              className="bg-white min-h-30"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CreateProject;
