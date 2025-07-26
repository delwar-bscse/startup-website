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
}: {
  checkProject: (value: boolean) => void;
}) => {
  const [stepList, setStepList] = useState<IStep[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<
    (string | number)[]
  >([]);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [storyImage01, setStoryImage01] = useState<string | null>(null);
  const [storyImage02, setStoryImage02] = useState<string | null>(null);
  const [storyImage03, setStoryImage03] = useState<string | null>(null);
  const [missionImage01, setMissionImage01] = useState<string | null>(null);
  const [missionImage02, setMissionImage02] = useState<string | null>(null);
  const [visionImage, setVisionImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [createProject] = useCreateProjectMutation();

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      projectTitle: "",
      projectBio: "",
      storyOfProject: "",
      projectVision: "",
      stepTitle: "",
      stepDescription: "",
      deadline: "",
      targetAmount: "",
      industries: [] as (string | number)[],
      coverImage: undefined,
      storyImage01: undefined,
      storyImage02: undefined,
      storyImage03: undefined,
      missionImage01: undefined,
      missionImage02: undefined,
      visionImage: undefined,
    },
  });

  useEffect(() => {
    form.setValue("industries", selectedIndustries);
  }, [selectedIndustries, form]);

  const onSubmit = async (data: any) => {
    console.log("Create Form Data:", data);
    console.log("stepList:", stepList);
    try {
      setIsSubmitting(true);

      // Validate required fields
      if (!data.projectTitle.trim()) {
        toast.error("Project title is required");
        return;
      }

      if (!data.projectBio.trim()) {
        toast.error("Project bio is required");
        return;
      }

      if (!data.storyOfProject.trim()) {
        toast.error("Project story is required");
        return;
      }

      if (!data.projectVision.trim()) {
        toast.error("Project vision is required");
        return;
      }

      if (data.industries.length === 0) {
        toast.error("Please select at least one industry for your project");
        return;
      }

      if (!data.coverImage) {
        toast.error("Cover image is required");
        return;
      }

      if (!data.targetAmount || data.targetAmount <= 0) {
        toast.error("Please enter a valid target amount");
        return;
      }

      if (!data.deadline) {
        toast.error("Deadline is required");
        return;
      }

      // Create FormData for file upload
      const formData = new FormData();

      // Add text fields
      const textData = {
        projectTitle: data.projectTitle,
        projectBio: data.projectBio,
        storyOfProject: data.storyOfProject,
        projectVision: data.projectVision,
        deadline: data.deadline,
        targetAmount: data.targetAmount.toString(),
        industries: data.industries,
      };
      formData.append("data", JSON.stringify(textData));

      const steps = [...stepList.map((step) => step.stepTitle)];
      formData.append("steps", JSON.stringify(steps));
      // Add image files
      if (data.coverImage) formData.append("coverImage", data.coverImage);

      const storyFiles = [
        data.storyImage01,
        data.storyImage02,
        data.storyImage03,
      ].filter((file) => file !== undefined);
      formData.append(
        "storyFiles",
        JSON.stringify(storyFiles.map((file) => file.name))
      );
      storyFiles.forEach((file, index) => {
        formData.append(`storyFiles[${index}]`, file);
      });

      const missionFiles = [data.missionImage01, data.missionImage02].filter(
        (file) => file !== undefined
      );
      formData.append(
        "missionFiles",
        JSON.stringify(missionFiles.map((file) => file.name))
      );
      missionFiles.forEach((file, index) => {
        formData.append(`missionFiles[${index}]`, file);
      });

      if (data.visionImage) formData.append("visionFile", data.visionImage);
      if (data.primaryFile) formData.append("primaryFile", data.primaryFile);
      if (data.investmentProposal)
        formData.append("investmentProposal", data.investmentProposal);
      if (data.taxComplianceCertificate)
        formData.append(
          "taxComplianceCertificate",
          data.taxComplianceCertificate
        );
      if (data.governmentIssuedID)
        formData.append("governmentIssuedID", data.governmentIssuedID);
      if (data.verifyAddress)
        formData.append("verifyAddress", data.verifyAddress);

      console.log("FormData contents before API call:");
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value instanceof File ? value.name : value);
      }

      // Make API call
      const response = await createProject(formData).unwrap();
      console.log("Response from createProject:", response);
      toast.success("Project created successfully!");

      // Reset form and states
      form.reset();
      setStepList([]);
      setSelectedIndustries([]);
      setCoverImage(null);
      setStoryImage01(null);
      setStoryImage02(null);
      setStoryImage03(null);
      setMissionImage01(null);
      setMissionImage02(null);
      setVisionImage(null);

      checkProject(true);
    } catch (error: any) {
      console.error("Error creating project:", error);
      const errorMessage =
        error?.data?.message || error?.message || "Failed to create project";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStepList = ({ stepTitle, stepDescription }: IStep) => {
    if (!stepTitle.trim() || !stepDescription.trim()) {
      toast.error("Please fill in both step title and description");
      return;
    }

    console.log(stepTitle, stepDescription);
    setStepList([{ stepTitle, stepDescription }, ...stepList]);
    form.resetField("stepTitle");
    form.resetField("stepDescription");
  };

  const removeStep = (stepToRemove: IStep) => {
    setStepList(
      stepList.filter(
        (step) =>
          step.stepTitle !== stepToRemove.stepTitle ||
          step.stepDescription !== stepToRemove.stepDescription
      )
    );
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-[1000px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">
                Create Project
              </h2>

              {/* Project Cover Image */}
              <div>
                <p className="text-gray-700 font-semibold py-2">
                  Project Cover Image <span className="text-red-500">*</span>
                </p>
                <div className="w-full">
                  <ImageField
                    control={form.control}
                    name="coverImage"
                    coverImage={coverImage}
                    setCoverImage={setCoverImage}
                  />
                </div>
              </div>

              {/* Project Title */}
              <TextInputField
                control={form.control}
                name="projectTitle"
                label="Project Title"
                placeholder="Enter your project title"
                required
              />

              {/* Project Bio */}
              <TextInputField
                control={form.control}
                name="projectBio"
                label="Project Bio"
                placeholder="Brief description of your project"
                required
              />

              {/* Project Story */}
              <TextareaInputField
                control={form.control}
                name="storyOfProject"
                label="Project Story"
                placeholder="Tell the story of your project..."
                required
              />

              {/* Project Story Images */}
              <div>
                <p className="text-gray-700 font-semibold py-2">
                  Project&apos;s Story Related Images
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  <ImageField
                    control={form.control}
                    name="storyImage01"
                    coverImage={storyImage01}
                    setCoverImage={setStoryImage01}
                  />
                  <ImageField
                    control={form.control}
                    name="storyImage02"
                    coverImage={storyImage02}
                    setCoverImage={setStoryImage02}
                  />
                  <ImageField
                    control={form.control}
                    name="storyImage03"
                    coverImage={storyImage03}
                    setCoverImage={setStoryImage03}
                  />
                </div>
              </div>

              {/* Step List Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  Project Steps
                </h3>
                <div className="flex items-end gap-2 mb-4">
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="stepTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Step Title</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Enter step title"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-[2]">
                    <FormField
                      control={form.control}
                      name="stepDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Step Description</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Enter step description"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <Button
                      type="button"
                      onClick={() =>
                        handleStepList({
                          stepTitle: form.getValues("stepTitle"),
                          stepDescription: form.getValues("stepDescription"),
                        })
                      }
                      className="bg-primary hover:bg-primary/90"
                    >
                      Add Step
                    </Button>
                  </div>
                </div>

                {/* Display Added Steps */}
                {stepList?.length > 0 && (
                  <div className="space-y-2 border-2 border-gray-300 p-4 rounded-md bg-gray-50">
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Added Steps:
                    </h4>
                    {stepList.map((step, index) => (
                      <div
                        key={`${step.stepTitle}-${index}`}
                        className="flex items-start justify-between bg-white p-3 rounded border"
                      >
                        <div className="flex-1">
                          <p className="text-gray-700 text-lg font-semibold">
                            {index + 1}. {step.stepTitle}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {step.stepDescription}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeStep(step)}
                          className="text-red-500 hover:text-red-600 p-1 ml-2"
                          title="Remove step"
                        >
                          <RiDeleteBinLine className="text-xl" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Mission Images */}
              <div>
                <p className="text-gray-700 font-semibold py-2">
                  Mission Related Images
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <ImageField
                    control={form.control}
                    name="missionImage01"
                    coverImage={missionImage01}
                    setCoverImage={setMissionImage01}
                  />
                  <ImageField
                    control={form.control}
                    name="missionImage02"
                    coverImage={missionImage02}
                    setCoverImage={setMissionImage02}
                  />
                </div>
              </div>

              {/* Project Vision */}
              <TextareaInputField
                control={form.control}
                name="projectVision"
                label="About Your Vision"
                placeholder="Describe your project vision..."
                required
              />

              {/* Vision Image */}
              <div>
                <p className="text-gray-700 font-semibold py-2">Vision Image</p>
                <div className="w-full max-w-md">
                  <ImageField
                    control={form.control}
                    name="visionImage"
                    coverImage={visionImage}
                    setCoverImage={setVisionImage}
                  />
                </div>
              </div>

              {/* Industry Selection */}
              <InterestedIndustryList
                selectedIndustries={
                  selectedIndustries.every((item) => typeof item === "string")
                    ? (selectedIndustries as string[])
                    : (selectedIndustries as number[])
                }
                onIndustrySelect={setSelectedIndustries}
                maxSelection={3}
                required={true}
              />

              {/* Target Amount and Deadline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="targetAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Target Amount ($){" "}
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={1}
                          placeholder="Enter target amount"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value) || 0)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="deadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Deadline <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer text-base md:text-lg bg-primary2 hover:bg-primary2/90 text-gray-900 min-w-[150px] px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                    Creating...
                  </div>
                ) : (
                  "Create Project"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

// Image Input Field Component
const ImageField = ({
  control,
  name,
  coverImage,
  setCoverImage,
}: {
  control: any;
  name: string;
  coverImage: string | null;
  setCoverImage: Dispatch<SetStateAction<string | null>>;
}) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }

      // Generate image preview URL
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);

      // You can also update the file input field if needed
      if (e.target.form && e.target.form.elements[name]) {
        e.target.form.elements[name].files = e.target.files;
      } else {
        console.error("Form or element not found!");
      }
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative w-full h-[150px] bg-purple-100 rounded-md border-2 border-primary border-dashed flex justify-center items-center cursor-pointer overflow-hidden hover:bg-purple-200 transition-colors">
              {!coverImage ? (
                <div className="text-center">
                  <CiImageOn className="text-6xl text-primary mx-auto mb-2" />
                  <p className="text-sm text-primary">Click to upload image</p>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={coverImage}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <p className="absolute inset-0  transition-all flex items-center justify-center">
                    Change Image
                  </p>
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    field.onChange(file);
                    setCoverImage(URL.createObjectURL(file));
                  }
                }}
                ref={field.ref}
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

// Text Input Field Component
const TextInputField = ({
  control,
  name,
  label,
  placeholder = "",
  required = false,
}: {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={
        required
          ? { required: `${label.replace(" *", "")} is required` }
          : undefined
      }
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg">
            {label} {required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

// Textarea Input Field Component
const TextareaInputField = ({
  control,
  name,
  label,
  placeholder = "Type here...",
  required = false,
}: {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={
        required
          ? { required: `${label.replace(" *", "")} is required` }
          : undefined
      }
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg">
            {label} {required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="min-h-[120px] bg-white resize-none"
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
