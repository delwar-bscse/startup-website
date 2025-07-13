import Image from "next/image";
import React from "react";
import CoverImg from "@/assets/projects/Entrepreneur/cover.png";
import { getImageUrl } from "@/utils/baseUrl";

interface EditUserImageProps {
  user: {
    name?: string;
    profileImg?: string;
    // Add other user properties if needed
  };
}

const EditUserImage: React.FC<EditUserImageProps> = ({ user }) => {
  const imageUrl = getImageUrl(user?.profileImg ?? "");
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
      </div>
      {/* Profile Details */}
      <div className="flex flex-col items-center gap-1 pt-28 text-gray-700">
        <h2 className="text-4xl font-bold">{user?.name}</h2>
      </div>
    </div>
  );
};

export default EditUserImage;
