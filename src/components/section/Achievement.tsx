/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface AchievementProps {
  user?: {
    businessInfo?: {
      achievement?: string;
    };
  };
}

const Achievement: React.FC<AchievementProps> = ({ user }) => {
  return (
    <>
      {/* ----------- Achievement Section ----------- */}
      <div className="py-10 bg-secondary">
        <div className="flex items-center justify-around space-y-12 items maxWidth">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold lg:text-6xl text-purple-950">
              Achievement
            </h2>
            <p className="text-gray-700">{user?.businessInfo?.achievement}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-6">
                <p className="text-4xl font-semibold sm:text-5xl md:text-7xl text-purple-950">
                  75%
                </p>
                <div className="w-4 border-gray-300 h-18 md:h-22 border-x-3" />
                <div className="flex flex-col gap-1 text-base font-semibold md:text-xl">
                  <p>Total Invested</p>
                  <p className="text-primary">$100000</p>
                </div>
              </div>
              <div>
                <div className="w-full h-4 bg-gray-300 rounded-full">
                  <div
                    className={`relative w-[75%] h-4 bg-primary2 flex items-center rounded-full`}
                  >
                    <div className="absolute right-0 w-8 h-8 bg-white rounded-full border-3 border-primary2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement;
