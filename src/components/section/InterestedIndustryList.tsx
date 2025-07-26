/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import { useGetIndustriesQuery } from "@/Redux/apis/utilityApi";
import { getImageUrl } from "@/utils/baseUrl";



const InterestedIndustryList = ({
  selectedIndustry,
  setSelectedIndustry,
}: {
  selectedIndustry: any; 
  setSelectedIndustry: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const { data: industryData, isLoading, error } = useGetIndustriesQuery({});
  const industries = industryData?.data;
  const imageUrl = getImageUrl();

  const handleIndustrySelect = (industry: any) => {
    // Get the industry ID for comparison
    const industryId = industry._id || industry.id;
    const selectedId = selectedIndustry?._id || selectedIndustry?.id;

    // Toggle selection - if already selected, deselect it
    if (selectedId === industryId) {
      setSelectedIndustry(null);
    } else {
      setSelectedIndustry(industry);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl py-2 text-gray-700">
          Project&apos;s Industry Loading...
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Loading skeleton */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="flex items-center gap-2 border border-gray-200 py-2 px-4 rounded-sm">
                <div className="w-14 h-14 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl py-2 text-gray-700">Project&apos;s Industry</h1>
        <div className="text-red-500 text-center py-4 bg-red-50 rounded-lg border border-red-200">
          <p className="font-medium">Failed to load industries</p>
          <p className="text-sm mt-1">Please try again later</p>
        </div>
      </div>
    );
  }

  if (!industries || industries.length === 0) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl py-2 text-gray-700">Project&apos;s Industry</h1>
        <div className="text-gray-500 text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
          <p className="font-medium">No industries available</p>
          <p className="text-sm mt-1">Please check back later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl py-2 text-gray-700">Project&apos;s Industry</h1>
        {selectedIndustry && (
          <button
            onClick={() => setSelectedIndustry(null)}
            className="text-sm text-primary hover:text-primary-dark underline cursor-pointer"
          >
            Clear Selection
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((industry: { _id: any; id: any; image: any; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => {
          // Use _id if id doesn't exist, or use the correct property name
          const industryId = industry._id || industry.id;
          const selectedId = selectedIndustry?._id || selectedIndustry?.id;
          const isSelected = selectedId === industryId;

          return (
            <div
              key={industryId}
              onClick={() => handleIndustrySelect(industry)}
              className={`
                flex items-center gap-2 border cursor-pointer transition-all duration-300 py-2 px-4 rounded-sm
                ${
                  isSelected
                    ? "bg-primary text-white border-primary shadow-lg transform"
                    : "bg-white border-primary hover:bg-primary hover:text-white hover:shadow-md"
                }
              `}
            >
              <div className="w-14 h-14 overflow-hidden rounded-sm flex-shrink-0">
                <Image
                  src={`${imageUrl}${industry?.image}`}
                  alt={typeof industry.name === "string" ? industry.name : "Industry Image"}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg font-semibold">{industry.name}</p>
                {isSelected && (
                  <p className="text-xs opacity-90 mt-1">Selected</p>
                )}
              </div>
              {isSelected && (
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedIndustry && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm">
            <span className="font-medium">Selected Industry:</span>{" "}
            {selectedIndustry.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default InterestedIndustryList;
