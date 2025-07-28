/* eslint-disable @typescript-eslint/no-explicit-any */
import { getImageUrl } from "@/utils/baseUrl";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

type UserInfoProps = {
  personalInfo: any;
  profileImg: StaticImageData;
  name: string;
  designation: string;
  address: string;
};

const UserInfo = ({ userInfo }: { userInfo: UserInfoProps }) => {
  const imageUrl = getImageUrl();
  return (
    <>
      {/* ----------- Profile Section ----------- */}
      <div className="maxWidth flex flex-col md:flex-row md:items-end">
        <Image
          src={`${imageUrl}/${userInfo.profileImg}`}
          width={400}
          height={200}
          alt="User"
          className="rounded-sm"
        />
        <div className="text-lg font-semibold text-gray-700 ml-4">
          <p className="font-bold text-2xl">{userInfo.name}</p>
          <p className="font-normal text-gray-500 text-lg">
            {userInfo?.personalInfo?.designation}
          </p>
          <p className="flex items-center gap-1">
            <span>
              <HiOutlineLocationMarker />
            </span>
            <span> {userInfo?.personalInfo?.address}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
