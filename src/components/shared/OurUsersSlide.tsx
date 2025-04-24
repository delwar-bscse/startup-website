"use client"

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import User01 from "@/assets/home/Users01.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Rating from "./Ratings";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div onClick={onClick} className="absolute z-20 top-1/2 transform translate-y-[-50%] right-5 lg:-right-8">
    <FaArrowAltCircleRight className="text-4xl text-primary opacity-70 cursor-pointer" />
  </div>
);

const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div onClick={onClick} className="absolute z-20 top-1/2 transform translate-y-[-50%] left-6 lg:-left-7">
    <FaArrowAltCircleLeft className="text-4xl text-primary opacity-70 cursor-pointer" />
  </div>
);

const CustomSlider: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="maxWidth md:px-20">
      <div className="relative slider-container py-10 max-w-full mx-auto">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="slider-item bg-white p-4 rounded-xl relative overflow-hidden">
              <p className="py-6 text-gray-600">Lorem ipsum dolor sit amet consectetur. Quis vestibulum turpis egestas porta curabitur. Porttitor leo duis fringilla sed id. Volutpat a potenti amet eu. Et felis volutpat elementum diam volutpat cursus lacus. Ut accumsan egestas at nunc gravida amet nunc. Sed habitasse vestibulum ullamcorper pharetra.</p>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-8 py-4">
                <Image src={User01} width={120} height={120} alt="Users Say" />
                <div>
                  <p className="font-semibold text-2xl">Victoria Wotton</p>
                  <p className="font-semibold text-sm text-gray-500">Pementum Odio Co.</p>
                  <div className="py-2">
                    <Rating rating={3.5} />
                  </div>
                </div>
              </div>
              <div className='bg-primary2 w-70 h-70 rounded-full absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 z-0' />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomSlider;
