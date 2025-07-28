/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const AboutMe: React.FC<any> = ({ user }) => {
  console.log("about user", user);
  return (
    <>
      {/* ----------- About Me Section ----------- */}
      <div className="maxWidth space-y-4 py-16">
        <h2 className="text-4xl lg:text-6xl font-bold text-purple-950">
          About
        </h2>
        <p className="text-gray-700">{user?.personalInfo?.About}</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          {user?.personalInfo?.images.map((image: any, index: number) => {
            return (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={image}
                  width={300}
                  height={216}
                  alt={`Cover ${index + 1}`}
                  sizes="(max-width: 600px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
