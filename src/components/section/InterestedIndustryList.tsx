import Image from "next/image";
import React from "react";
import { useGetIndustriesQuery } from "@/Redux/apis/utilityApi";
import { getImageUrl } from "@/utils/baseUrl";
import { Check } from "lucide-react";

interface Industry {
  _id: string | number;
  name: string;
  image: string;
}

interface InterestedIndustryListProps {
  selectedIndustries?: (string | number)[];
  onIndustrySelect?: (industries: (string | number)[]) => void;
  maxSelection?: number;
  required?: boolean;
}

const InterestedIndustryList: React.FC<InterestedIndustryListProps> = ({
  selectedIndustries = [],
  onIndustrySelect,
  maxSelection = 3,
  required = false,
}) => {
  const { data: industryData, isLoading, error } = useGetIndustriesQuery({});
  const industries: Industry[] = industryData?.data || [];
  const imageUrl = getImageUrl();

  const handleIndustryToggle = (industryId: string | number) => {
    // Convert both to strings for consistent comparison
    const selectedIds = selectedIndustries.map((id) => String(id));
    const targetId = String(industryId);

    let updatedSelection: (string | number)[];

    if (selectedIds.includes(targetId)) {
      // Remove industry from selection
      updatedSelection = selectedIndustries.filter(
        (id) => String(id) !== targetId
      );
    } else {
      // Add industry to selection (check if selection limit is reached)
      if (selectedIndustries.length >= maxSelection) {
        console.warn(`You can select a maximum of ${maxSelection} industries`);
        return;
      }
      updatedSelection = [...selectedIndustries, industryId];
    }

    // Update selected industries through the callback
    onIndustrySelect?.(updatedSelection);
  };

  const isIndustrySelected = (industryId: string | number): boolean => {
    return selectedIndustries.includes(industryId);
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl py-2 text-gray-700">
          Project&apos;s Industry {required && "*"}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="flex items-center gap-2 border border-gray-200 py-2 px-4 rounded-sm">
                <div className="w-14 h-14 bg-gray-200 rounded"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
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
        <h1 className="text-xl py-2 text-gray-700">
          Project&apos;s Industry {required && "*"}
        </h1>
        <div className="text-red-500 text-center py-4">
          Failed to load industries. Please try again.
        </div>
      </div>
    );
  }

  if (!industries || industries.length === 0) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl py-2 text-gray-700">
          Project&apos;s Industry {required && "*"}
        </h1>
        <div className="text-gray-500 text-center py-4">
          No industries available.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl py-2 text-gray-700 font-semibold">
          Project&apos;s Industry{" "}
          {required && <span className="text-red-500">*</span>}
        </h1>
        {/* <div className="text-sm text-gray-500">
          {selectedIndustries.length}/{maxSelection} selected
        </div> */}
      </div>

      {/* Selected Industries Summary */}
      {selectedIndustries.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
          <p className="text-sm font-medium text-blue-800 mb-2">
            Selected Industries:
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedIndustries.map((selectedId) => {
              const industry = industries.find(
                (ind) => String(ind._id) === String(selectedId)
              );
              return industry ? (
                <span
                  key={`selected-${selectedId}`}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {industry.name}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleIndustryToggle(selectedId);
                    }}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                    type="button"
                  >
                    ×
                  </button>
                </span>
              ) : null;
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((industry) => {
          const isSelected = isIndustrySelected(industry._id);
          const isDisabled =
            !isSelected && selectedIndustries.length >= maxSelection;

          return (
            <div
              key={`industry-${industry._id}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (!isDisabled) {
                  handleIndustryToggle(industry._id);
                }
              }}
              className={`
                relative flex items-center gap-3 border-2 transition-all duration-300 py-3 px-4 rounded-lg cursor-pointer
                ${
                  isSelected
                    ? "border-primary bg-primary/10 shadow-md"
                    : isDisabled
                    ? "border-gray-200 bg-gray-50 cursor-not-allowed opacity-50"
                    : "border-gray-200 hover:border-primary hover:bg-primary/5 hover:shadow-sm"
                }
              `}
            >
              {/* Selection Indicator */}
              {isSelected && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <Check className="size-5 text-white" />
                </div>
              )}

              {/* Industry Image */}
              <div className="w-12 h-12 overflow-hidden rounded-md flex-shrink-0 bg-gray-100">
                <Image
                  src={`${imageUrl}${industry?.image}`}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback for broken images
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder-industry.png";
                  }}
                />
              </div>

              {/* Industry Name */}
              <div className="flex-1 min-w-0">
                <p
                  className={`text-base font-medium truncate ${
                    isSelected ? "text-primary" : "text-gray-700"
                  }`}
                >
                  {industry.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Validation Message */}
      {required && selectedIndustries.length === 0 && (
        <p className="text-red-500 text-sm mt-2">
          Please select at least one industry for your project.
        </p>
      )}
    </div>
  );
};

export default InterestedIndustryList;
