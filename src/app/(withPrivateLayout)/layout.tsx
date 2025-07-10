"use client";

import UserImage from "@/components/common/UserImage";
import { useGetUserProfileQuery } from "@/Redux/apis/userApi";
import { ReactNode } from "react";

const EntrepreneurLayout = ({ children }: { children: ReactNode }) => {
  const { data: userData } = useGetUserProfileQuery({});
  const user = userData?.data;
  console.log(user);
  return (
    <>
      <UserImage user={user} />
      {children}
    </>
  );
};
export default EntrepreneurLayout;
