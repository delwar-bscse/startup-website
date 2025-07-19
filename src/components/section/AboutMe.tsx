/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const AboutMe: React.FC<any> = ({ user }) => {
  console.log(user);
  return (
    <>
      {/* ----------- About Me Section ----------- */}
      <div className="maxWidth space-y-4 py-16">
        <h2 className="text-4xl lg:text-6xl font-bold text-purple-950">
          About Me
        </h2>
        <p className="text-gray-700">{user?.personalInfo?.about}</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          {user?.personalInfo?.images.map((image: any, index: number) => {
            <Image
              key={index}
              src={image}
              width={500}
              height={360}
              alt="Cover"
              sizes="100vw"
            />;
          })}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
