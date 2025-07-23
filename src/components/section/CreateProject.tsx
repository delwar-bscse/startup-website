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
import { Dispatch, SetStateAction, useState } from "react";
import { Textarea } from "../ui/textarea";
import InterestedIndustryList from "./InterestedIndustryList";
import { RiDeleteBinLine } from "react-icons/ri";

interface IStep {
  stepTitle: string;
  stepDescription: string;
}


const CreateProject = ({checkProject}:{checkProject: (value: boolean) => void}) => {
  const [stepList, setStepList] = useState<IStep[]>([] as IStep[]);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [storyImage01, setStoryImage01] = useState<string | null>(null);
  const [storyImage02, setStoryImage02] = useState<string | null>(null);
  const [storyImage03, setStoryImage03] = useState<string | null>(null);
  const [missionImage01, setMissionImage01] = useState<string | null>(null);
  const [missionImage02, setMissionImage02] = useState<string | null>(null);
  const [visionImage, setVisionImage] = useState<string | null>(null);

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
      visionImage: undefined
    },
  });



  const onSubmit = async (data: any) => {
    console.log("Create Project Submitted Data", data);
    checkProject(true);
  };

  const handleStepList = ({ stepTitle, stepDescription }: IStep) => {
    console.log(stepTitle, stepDescription);
    setStepList([{ stepTitle, stepDescription },...stepList]);
    form.resetField("stepTitle");
    form.resetField("stepDescription");
  };
  

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-[1000px] ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">
                Create Project
              </h2>

              <div>
                <p className="text-gray-700 font-semibold py-2">Project Cover Image</p>
                <div className="w-full">
                  <ImageField control={form.control} name="image1" coverImage={coverImage} setCoverImage={setCoverImage} />
                </div>
              </div>

              {/* Project Title */}
              <TextInputField control={form.control} name="projectTitle" label="Project Title" />

              {/* Project Bio */}
              <TextInputField control={form.control} name="projectBio" label="Project Bio" />

              {/* Project Story */}
              <TextareaInputField control={form.control} name="projectBio" label="Project Bio" />



              {/* Project Story Images */}
              <div>
                <p className="text-gray-700 font-semibold py-2">Project’s Story Related Image</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  <ImageField control={form.control} name="storyImage01" coverImage={storyImage01} setCoverImage={setStoryImage01} />
                  <ImageField control={form.control} name="storyImage02" coverImage={storyImage02} setCoverImage={setStoryImage02} />
                  <ImageField control={form.control} name="storyImage03" coverImage={storyImage03} setCoverImage={setStoryImage03} />
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
                  <Button type="button" onClick={() => handleStepList({ stepTitle: form.getValues("stepTitle"), stepDescription: form.getValues("stepDescription") })} className="">
                    Add
                  </Button>
                </div>
              </div>
              {stepList?.length > 0 && <div className="space-y-2 border-2 border-gray-300 p-2 rounded-sm">
                {stepList.map((step, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-gray-700 text-xl font-semibold">{step.stepTitle}</p>
                      <p className="text-gray-600">{step.stepDescription}</p>
                    </div>
                    <button onClick={() => setStepList(stepList.filter((item) => item.stepTitle !== step?.stepTitle))} className="text-2xl font-extrabold w-10 h-8 cursor-pointer">
                      <RiDeleteBinLine className="text-red-500 hover:text-red-600"/>
                    </button>
                  </div>
                ))}
              </div>}

              {/* Project Mission Images */}
              <div>
                <p className="text-gray-700 font-semibold py-2">Mission Related Image</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <ImageField control={form.control} name="missionImage01" coverImage={missionImage01} setCoverImage={setMissionImage01} />
                  <ImageField control={form.control} name="missionImage02" coverImage={missionImage02} setCoverImage={setMissionImage02} />
                </div>
              </div>

              {/* Project Story */}
              <TextareaInputField control={form.control} name="projectVision" label="About You Vision" />

              {/* Project Story Images */}
              <div>
                <p className="text-gray-700 font-semibold py-2">Vision Image</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <ImageField control={form.control} name="visionImage" coverImage={visionImage} setCoverImage={setVisionImage} />
                </div>
              </div>

              <InterestedIndustryList />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                  name="deadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deadline</FormLabel>
                      <FormControl>
                        <Input type="date" className="block w-full" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>


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
  coverImage,
  setCoverImage

}: {
  control: any;
  name: string;
  coverImage: string | null;
  setCoverImage: Dispatch<SetStateAction<string | null>>
}) => {
  return (
    < FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative w-full h-[150px] bg-purple-100 rounded-md border-2 border-primary flex justify-center items-center cursor-pointer overflow-hidden">
              {!coverImage ? (
                <span className="text-primary">
                  <CiImageOn className="text-8xl" />
                </span>
              ) : (
                <Image
                  src={coverImage} // Use the base64 string for the src
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
                    setCoverImage(URL.createObjectURL(file));
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
              className="min-h-30 bg-white"
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
