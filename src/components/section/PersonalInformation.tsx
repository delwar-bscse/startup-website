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

import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  useGetPersonalDetailsFieldsQuery,
  useUpdatePersonalInfoMutation,
} from "@/Redux/apis/userApi";

const PersonalInformation: React.FC<any> = ({
  onHandleStep,
  user,
  refetch,
}) => {
  const [imagePreview1, setImagePreview1] = useState<string | null>(null);
  const [imagePreview2, setImagePreview2] = useState<string | null>(null);
  const [newSkill, setNewSkill] = useState("");
  const [newInterest, setNewInterest] = useState("");

  const { data: detailsFields, isLoading } = useGetPersonalDetailsFieldsQuery(
    {}
  );
  console.log("detailsFields", detailsFields);
  const [updatePersonalInfo] = useUpdatePersonalInfoMutation();

  // console.log("user", user);

  type PersonalInfoFormValues = {
    [key: string]: any;
    skills: string[];
    interestedIndustries: string[];
    image1?: File | null;
    image2?: File | null;
    passportOrNIDDocs?: File[] | null;
  };

  const form = useForm<PersonalInfoFormValues>({
    mode: "onChange",
    defaultValues: {
      skills: [],
      interestedIndustries: [],
    },
  });

  useEffect(() => {
    if (user && detailsFields?.data && !isLoading) {
      const newFormValues: any = {};

      detailsFields.data.forEach((field: any) => {
        const fieldName = field.name;
        newFormValues[fieldName] =
          user?.[fieldName] || field.defaultValue || "";
      });

      form.reset(newFormValues);
    }
  }, [user, detailsFields?.data, form, isLoading]);

  const handleAddSkill = (newSkill: string) => {
    if (newSkill.trim()) {
      const currentSkills = form.getValues("skills") ?? [];
      if (!currentSkills.includes(newSkill)) {
        form.setValue("skills", [...currentSkills, newSkill]);
      }
    }
  };

  const handleRemoveSkill = (skill: string) => {
    const currentSkills = form.getValues("skills") ?? [];
    const updatedSkills = currentSkills.filter(
      (item: string) => item !== skill
    );
    form.setValue("skills", updatedSkills);
  };

  const handleAddInterest = (newInterest: string) => {
    if (newInterest.trim()) {
      const currentInterest = form.getValues("interestedIndustries");
      if (!currentInterest.includes(newInterest)) {
        form.setValue("interestedIndustries", [
          ...currentInterest,
          newInterest,
        ]);
      }
    }
  };

  const handleRemoveInterest = (interest: string) => {
    const currentInterest = form.getValues("interestedIndustries");
    const updatedInterest = currentInterest.filter(
      (item: string) => item !== interest
    );
    form.setValue("interestedIndustries", updatedInterest);
  };

  const handleSkillBlur = (newSkill: string) => {
    handleAddSkill(newSkill);
    setNewSkill("");
  };

  const handleInterestBlur = (newInterest: string) => {
    handleAddInterest(newInterest);
    setNewInterest("");
  };

  const onSubmit = async (data: any) => {
    console.log("submitted Data", data);
    try {
      const { email, image1, image2, passportOrNIDDocs, ...newData } = data;
      const formData = new FormData();

      // Only append fields with valid values
      Object.keys(newData).forEach((key) => {
        const value = newData[key as keyof typeof newData];
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });

      formData.append("skills", JSON.stringify(data.skills));
      formData.append(
        "interestedIndustries",
        JSON.stringify(data.interestedIndustries)
      );
      formData.append(
        "passportOrNIDDocs",
        JSON.stringify(data.passportOrNIDDocs)
      );

      if (data.image1) formData.append("images", data.image1);
      if (data.image2) formData.append("images", data.image2);

      formData.append("data", JSON.stringify(newData));

      console.log("new", newData);

      // passportOrNIDDocs?.forEach((doc: File) => {
      //   formData.append("passportOrNIDDocs", doc);
      // });

      const response = await updatePersonalInfo(formData).unwrap();
      console.log(response);
      if (response.error) {
        toast.error("Error updating personal information.");
        console.log(response.error);
      } else {
        toast.success("Personal information updated successfully!");
        refetch();
        onHandleStep(2);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.log("Form Submission Error", error);
    }
  };

  return (
    <div className="flex justify-center w-full px-4 py-10">
      <div className="w-full max-w-[1000px] ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="px-4 py-8 space-y-6 rounded-lg shadow-md md:py-16 sm:px-24 bg-secondary">
              <h2 className="mb-8 text-2xl font-semibold md:text-3xl text-primary">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {detailsFields?.data.map((inputField: any, index: number) => {
                  // console.log("input field", field);
                  return (
                    <FormField
                      key={index}
                      control={form.control}
                      name={inputField.name}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{inputField.label}</FormLabel>
                          <FormControl>
                            {field.name === "interestedIndustries" ? (
                              // Skills input field with dynamic adding
                              <div>
                                <Input
                                  type="text"
                                  value={newInterest}
                                  onChange={(e) =>
                                    setNewInterest(e.target.value)
                                  }
                                  onBlur={(e) =>
                                    handleInterestBlur(e.target.value)
                                  }
                                  placeholder="Add Interested Industries"
                                />
                                <div className="mt-2">
                                  {form
                                    .getValues("interestedIndustries")
                                    .map((interest: string) => (
                                      <span
                                        key={interest}
                                        className="inline-block bg-transparent border border-[#5F46D9] text-[#2C2064] p-3 rounded-lg m-1 font-semibold"
                                      >
                                        {interest}
                                        <span
                                          className="ml-2 text-red-500 cursor-pointer"
                                          onClick={() =>
                                            handleRemoveInterest(interest)
                                          }
                                        >
                                          x
                                        </span>
                                      </span>
                                    ))}
                                </div>
                              </div>
                            ) : (
                              <Input
                                placeholder={inputField.placeholder}
                                // {...field}
                                {...form.register(inputField.name, {
                                  required: `${inputField.label} is required`,
                                })}
                                type={inputField.type}
                              />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );
                })}
              </div>

              {/* Add Skills */}
              <div>
                <Input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onBlur={(e) => handleSkillBlur(e.target.value)}
                  placeholder="Add a skill"
                />
                <div className="mt-2">
                  {form.getValues("skills")?.map((skill: string) => (
                    <span
                      key={skill}
                      className="inline-block bg-transparent border border-[#5F46D9] text-[#2C2064] p-3 rounded-lg m-1 font-semibold"
                    >
                      {skill}
                      <span
                        className="ml-2 text-red-500 cursor-pointer"
                        onClick={() => handleRemoveSkill(skill)}
                      >
                        x
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Upload */}
              <div>
                <p className="py-2 font-semibold text-primary">Add Images</p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {/* Image Upload Field */}
                  <FormField
                    control={form.control}
                    name="image1"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative w-full h-[150px] bg-purple-100 rounded-md border-2 border-primary flex justify-center items-center cursor-pointer overflow-hidden">
                            {!imagePreview1 ? (
                              <span className="text-primary">
                                <CiImageOn className="text-8xl" />
                              </span>
                            ) : (
                              <Image
                                src={imagePreview1} // Use the base64 string for the src
                                alt="Uploaded Preview"
                                width={280} // Set width and height
                                height={140}
                                objectFit="cover" // Make sure it covers the area properly
                              />
                            )}

                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  field.onChange(file);
                                  setImagePreview1(URL.createObjectURL(file));
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
                  {/* Image Upload Field */}
                  <FormField
                    control={form.control}
                    name="image2"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative w-full h-[150px] bg-purple-100 rounded-md border-2 border-primary flex justify-center items-center cursor-pointer overflow-hidden">
                            {!imagePreview2 ? (
                              <span className="text-primary">
                                <CiImageOn className="text-8xl" />
                              </span>
                            ) : (
                              <Image
                                src={imagePreview2} // Use the base64 string for the src
                                alt="Uploaded Preview"
                                width={280} // Set width and height
                                height={140}
                                objectFit="cover" // Make sure it covers the area properly
                              />
                            )}

                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  field.onChange(file);
                                  setImagePreview2(URL.createObjectURL(file));
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
                </div>
              </div>
            </div>
            {/* Submit then Next */}
            <div className="flex justify-end">
              <Button
                type="submit"
                className="cursor-pointer text-base md:text-lg bg-primary2 text-gray-900 min-w-[150px] px-3"
              >
                Next
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PersonalInformation;
