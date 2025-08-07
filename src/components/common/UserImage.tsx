import Image from "next/image";
import React from "react";
import CoverImg from "@/assets/projects/Entrepreneur/cover.png";
import { FiEdit3 } from "react-icons/fi";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import ActiveTab from "../shared/ActiveTab";
import { getImageUrl } from "@/utils/baseUrl";
import UserProfileImg from "@/assets/projects/Entrepreneur/profile.png";

const imageUrl = getImageUrl();

interface User {
  name?: string;
  role?: string;
  location?: string;
  profileImg?: string;
}

interface UserImageProps {
  user: User;
}

const UserImage: React.FC<UserImageProps> = ({ user }) => {
  // console.log("user", user);

  const getProfileImageUrl = () => {
    return user?.profileImg ? `${imageUrl}${user.profileImg}` : UserProfileImg;
  };

  return (
    <div>
      {/* Profile & Cover Images */}
      <div className="relative">
        <Image
          src={CoverImg}
          width={2000}
          height={500}
          alt="Cover"
          sizes="100vw"
        />
        <div className="absolute bottom-0 left-0 overflow-hidden translate-y-1/2 border-4 rounded-full md:left-1/2 md:-translate-x-1/2 w-28 h-28 md:w-48 md:h-48 border-primary2">
          <Image
            src={getProfileImageUrl()}
            width={650}
            height={650}
            alt="Profile"
            className=""
          />
        </div>
        <div className="absolute right-0 flex items-center gap-2 px-2 py-1 text-gray-800 -bottom-8 md:-bottom-12 bg-secondary md:py-2 md:px-4">
          <Link href="/edit-details" className="text-sm md:text-base">
            Edit Details
          </Link>
          <FiEdit3 className="text-sm md:text-xl" />
        </div>
      </div>
      {/* Profile Details */}
      <div className="flex flex-col items-center gap-1 text-gray-700 pt-28">
        <h2 className="text-4xl font-bold">{user?.name}</h2>
        {user?.role && <p className="capitalize">{user?.role}</p>}
        {user?.location && (
          <p className="flex items-center gap-2 font-semibold">
            <span>
              <HiOutlineLocationMarker />
            </span>
            <span>{user?.location}h</span>
          </p>
        )}
      </div>
      {/* Tab */}
      <ActiveTab />
    </div>
  );
};

export default UserImage;
