import Image, { StaticImageData } from "next/image";
import React from "react";
import fashionImg from "@/assets/industry/fashion.png";
import technologyImg from "@/assets/industry/technology.png";
import cookingImg from "@/assets/industry/cooking.png";

type Props = {
  id: string;
  name: string;
  image: StaticImageData;
};

const industries: Props[] = [
  {
    id: "1",
    name: "Fashion",
    image: fashionImg,
  },
  {
    id: "2",
    name: "Technology",
    image: technologyImg,
  },
  {
    id: "3",
    name: "Cooking",
    image: cookingImg,
  },
  {
    id: "4",
    name: "Fashion",
    image: fashionImg,
  },
  {
    id: "5",
    name: "Technology",
    image: technologyImg,
  },
  {
    id: "6",
    name: "Cooking",
    image: cookingImg,
  },
];

const InterestedIndustryList = ({selectedIndustry, setSelectedIndustry} : 
  {selectedIndustry: string, setSelectedIndustry: React.Dispatch<React.SetStateAction<string>>}) => {
  
  return (
    <div className="">
      <h1 className="text-xl py-2 text-gray-700">
        Project&apos;s Industry
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((industry) => (
          <div
            key={industry.id}
            onClick={() => setSelectedIndustry(industry.id)}
            className={`${selectedIndustry === industry.id ? "bg-white" : ""} flex items-center gap-2 border border-primary hover:bg-white cursor-pointer transition-colors duration-300 py-2 px-4 rounded-sm`}
          >
            <div className="w-14 h-14 overflow-hidden">
              <Image src={industry.image} alt="" width={100} height={100} />
            </div>
            <p className="text-lg font-semibold">{industry.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestedIndustryList;
