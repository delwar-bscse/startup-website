/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const SkillsAndExperience = ({ user }: any) => {
  return (
    <>
      {/* ----------- Skills & Experience Section ----------- */}
      <div className="space-y-4 py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Skills & Experience
        </h2>
        <ul className="basis-1/3 grid grid-cols-2 ps-4 lg:ps-0 gap-4 list-disc text-primary2 lg:text-lg">
          {user?.personalInfo?.skills?.map(
            (skill: { id: string; name: string }, index: number) => (
              <li key={skill.id || index}>
                {typeof skill === "string" ? skill : skill.name}
              </li>
            )
          )}
        </ul>
        <div className="w-full flex flex-col sm:flex-row gap-8">
          <p>Experience:</p>
          <p>{user?.personalInfo?.Experience}</p>
        </div>
      </div>
    </>
  );
};

export default SkillsAndExperience;
