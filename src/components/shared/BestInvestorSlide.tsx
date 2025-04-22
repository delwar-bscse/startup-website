"use client"

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Investors from "@/assets/home/Investors.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div onClick={onClick} className="absolute z-20 bottom-1/2 transform translate-y-[-50%] right-7 md:right-0">
    <FaArrowAltCircleRight className="text-4xl md:text-5xl text-primary opacity-70" />
  </div>
);

const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div onClick={onClick} className="absolute z-20 bottom-1/2 transform translate-y-[-50%] left-8 md:left-1">
    <FaArrowAltCircleLeft className="text-4xl md:text-5xl text-primary opacity-70" />
  </div>
);

const InvestorsSlider: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <div className="slider-container w-full">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="slider-item bg-white p-4 rounded-xl relative overflow-hidden">
              <div className="relative w-full">
                <div className="z-10 w-full h-100 absolute bottom-0 bg-primary2" />
                <Image src={Investors} width={800} height={900} alt="Users Say" className="relative z-20" />
              </div>
              <div className="flex flex-col items-center gap-3 md:text-xl lg:text-2xl font-semibold py-6">
                <h3 className="text-2xl md:text-3xl lg:text-5xl text-gray-700 font-bold">James Michael</h3>
                <p className=" text-sm md:text-base lg:text-xl">Total Invested - <span className="text-primary2">$78437</span></p>
                <div className="w-full flex flex-col lg:flex-row items-center justify-around text-sm md:text-base lg:text-xl">
                  <p>Invested - <span className="text-primary">4 Projects</span></p>
                  <p>Success Ratio - <span className="text-primary">70%</span></p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default InvestorsSlider;
