import Image from "next/image";
import React from "react";
import CoverImg from "@/assets/projects/Entrepreneur/cover.png";
import { FiEdit3 } from "react-icons/fi";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import ActiveTab from "../shared/ActiveTab";
import { getImageUrl } from "@/utils/baseUrl";

const imageUrl = getImageUrl("");

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
  console.log("user", user);
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
        <div className="absolute bottom-0 left-0 md:left-1/2 md:-translate-x-1/2 translate-y-1/2 w-28 h-28 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary2">
          <Image
            src={`${imageUrl}/${user?.profileImg}`}
            width={600}
            height={600}
            alt="Profile"
            sizes="100vw"
          />
        </div>
        <div className="absolute -bottom-8 md:-bottom-12 right-0 bg-secondary text-gray-800 flex items-center gap-2 py-1 md:py-2 px-2 md:px-4">
          <Link href="/edit-details" className="text-sm md:text-base">
            Edit Details
          </Link>
          <FiEdit3 className="text-sm md:text-xl" />
        </div>
      </div>
      {/* Profile Details */}
      <div className="flex flex-col items-center gap-1 pt-28 text-gray-700">
        <h2 className="text-4xl font-bold">{user?.name}</h2>
        {user?.role && <p>{user?.role}</p>}
        {user?.location && (
          <p className="flex items-center gap-2 font-semibold">
            <span>
              <HiOutlineLocationMarker />
            </span>
            <span>Dhaka, Bangladesh</span>
          </p>
        )}
      </div>
      {/* Tab */}
      <ActiveTab />
    </div>
  );
};

export default UserImage;
