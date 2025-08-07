/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const SkillsAndExperience = ({ user }: any) => {
  return (
    <>
      {/* ----------- Skills & Experience Section ----------- */}
      <div className="py-16 space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
          Skills & Experience
        </h2>
        <ul className="grid grid-cols-2 gap-4 list-disc basis-1/3 ps-4 lg:ps-0 text-primary2 lg:text-lg">
          {user?.personalInfo?.skills?.map(
            (skill: { id: string; name: string }, index: number) => (
              <li key={skill.id || index}>
                {typeof skill === "string" ? skill : skill.name}
              </li>
            )
          )}
        </ul>
        <div className="flex flex-col w-full gap-8 sm:flex-row">
          <p>Experience:</p>
          <p>{user?.personalInfo?.experience}</p>
        </div>
      </div>
    </>
  );
};

export default SkillsAndExperience;
