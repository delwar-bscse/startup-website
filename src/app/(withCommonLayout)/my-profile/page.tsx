/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MdCameraAlt } from "react-icons/md";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "@/Redux/apis/userApi";
import { toast } from "sonner";
import { getImageUrl } from "@/utils/baseUrl";
import { FaUser } from "react-icons/fa";

const Profile = () => {
  const [imgUrl, setImgUrl] = useState<string | ArrayBuffer | null>(null);
  const [imageFile, setImageFile] = useState<Blob | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { data: profileData, isLoading, refetch } = useGetUserProfileQuery({});
  const profile = profileData?.data;
  console.log(profile);
  const [updateUserProfile, { isLoading: isUpdating }] =
    useUpdateUserProfileMutation();

  const imageUrl = getImageUrl();

  const form = useForm({
    defaultValues: {
      name: profile?.name || "",
      email: profile?.email || "",
      phone: profile?.phone || "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (profile) {
      form.reset({
        name: profile.name || "",
        email: profile.email || "",
        phone: profile.phone || "",
      });
      setImgUrl(profile.profileImg || null);
    }
    setIsMounted(true);
  }, [profile]);

  const handleImgUrl = (file: Blob | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImgUrl(result);
      };
      reader.readAsDataURL(file); // Create image preview from the selected file
      setImageFile(file); // Set the image file for uploading
    } else {
      setImgUrl(null);
      setImageFile(null); // Reset if no file is selected
    }
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    console.log(imageFile);
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
      })
    );

    // Append image if selected
    if (imageFile) {
      formData.append("file", imageFile);
    }

    try {
      const response = await updateUserProfile(formData);
      if (response?.data?.success) {
        refetch();
        toast.success("Profile updated successfully!");
      } else {
        toast.error(response?.data?.message || "Failed to update profile.");
      }
    } catch (error) {
      const errorMessage =
        (error as Error)?.message ||
        (typeof error === "string" ? error : "") ||
        "Something went wrong!";
      toast.error(errorMessage);
    }
  };

  const getProfileImageUrl = () => {
    return profile?.profileImg ? (
      `${imageUrl}${profile.profileImg}`
    ) : (
      <FaUser />
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="w-full flex justify-center items-center py-10 px-4"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <div className="w-full max-w-[1000px] py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md flex gap-4">
        <div>
          {isMounted && (
            <div className="relative">
              <div className="w-56 h-56 mx-auto rounded-lg overflow-hidden border-3 border-gray-300 bg-gray-300">
                {imgUrl ? (
                  <Image
                    src={getProfileImageUrl()}
                    alt="Profile Image"
                    className="object-cover w-full h-full"
                    width={128}
                    height={128}
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              <button
                onClick={() =>
                  document.getElementById("profileImgCtrl")?.click()
                }
                className="absolute bottom-2 right-1.5 w-8 h-8 z-10 cursor-pointer hover:scale-110 transition-all duration-300"
              >
                <MdCameraAlt className="w-full h-full text-gray-500" />
              </button>
              <Input
                id="profileImgCtrl"
                type="file"
                accept="image/*"
                onChange={(e) => handleImgUrl(e.target.files?.[0] ?? null)}
                className="hidden"
              />
            </div>
          )}
        </div>

        <div className="flex-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Type..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled
                        type="text"
                        placeholder="Type..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Type..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="w-30 text-base md:text-lg cursor-pointer"
                  disabled={isUpdating}
                >
                  {isUpdating ? "Updating..." : "Update"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
