"use client";

// components/CollapsibleFAQ.tsx
import React, { useState } from "react";
import faqImg from "@/assets/contact/faq.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useGetFAQsQuery } from "@/Redux/apis/utilityApi";

interface FAQItem {
  _id: string;
  question: string;
  answer: string;
}

const CollapsibleFAQ: React.FC = () => {
  const { data: faqs, isLoading } = useGetFAQsQuery({});
  const faqData = faqs?.data;
  // console.log("FAQs Data:", faqData);

  const [openIndex, setOpenIndex] = useState<string | null>(null); // Changed to string to match _id type

  const toggleOpen = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading FAQs...</div>;
  }

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${faqImg.src})` }}
        className="w-full text-center min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
          FAQ
        </h2>
      </div>
      <div className="max-w-[800px] mx-auto my-16 p-8 bg-secondary">
        <div className="space-y-4 py-8">
          <p className="text-gray-600 text-center">
            Got questions? We’ve got answers! Explore our frequently asked
            questions to learn more about how this website works, from
            subscriptions and gifts to delivery and support.
          </p>
        </div>
        <div className="space-y-4">
          {faqData?.length > 0 ? (
            faqData.map((item: FAQItem) => (
              <div
                key={item._id}
                className="bg-white rounded-md overflow-hidden"
              >
                <button
                  onClick={() => toggleOpen(item._id)}
                  className={`w-full text-left py-2 md:py-4 px-3 md:px-6 text-base md:text-lg font-semibold flex items-center justify-between ${
                    openIndex === item._id
                      ? "bg-primary text-gray-50"
                      : "text-gray-600"
                  }`}
                >
                  <span>{item.question}</span>
                  <span>
                    {openIndex === item._id ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </button>
                {openIndex === item._id && (
                  <p className="py-2 md:py-4 px-4 md:px-6 bg-primary text-gray-50 text-sm md:text-base font-light">
                    {item.answer}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No FAQs available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleFAQ;
