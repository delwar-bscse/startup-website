"use client";

// components/CollapsibleFAQ.tsx
import React, { useState } from 'react';
import ContactUsImg from "@/assets/contact/contact-us.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What types of gifts can I expect from GiftMeIn?',
    answer:
      'Your gifts are thoughtfully selected based on your preferences and subscription plan. From personalized items to luxury surprises, every gift is designed to bring joy.',
  },
  {
    question: 'How do I set my gift preferences?',
    answer: 'You can set your preferences in your account settings under "Gift Preferences."',
  },
  {
    question: 'Can I skip a month or pause my subscription?',
    answer:
      'Yes, you can pause or skip a month through the subscription settings page. Your account balance will remain intact during this period.',
  },
  {
    question: "What happens if I don’t like the gift I receive?",
    answer:
      "If you don’t like your gift, you can reach out to our customer support for a resolution, including a replacement or alternative option.",
  },
  {
    question: 'How does my balance grow with the subscription plan?',
    answer:
      'As part of our subscription model, your balance increases over time depending on the plan you choose, allowing you to redeem higher-value gifts in the future.',
  },
  {
    question: 'Is gift delivery available for international addresses?',
    answer:
      'Yes, we offer international shipping for most countries. Delivery charges may vary depending on the destination.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for payments.',
  },
];

const CollapsibleFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${ContactUsImg.src})` }} className="w-full text-center min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Contact Us</h2>
      </div>
      <div className="max-w-[800px] mx-auto my-16 p-8 bg-secondary">
        <div className='space-y-4 py-8'>
          <h2 className='text-6xl lg:text-8xl font-bold text-gray-800 text-center'>FAQs</h2>
          <p className='text-gray-600 text-center'>Got questions? We’ve got answers! Explore our frequently asked questions to learn more about how this website works, from subscriptions and gifts to delivery and support.</p>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-md overflow-hidden">
              <button
                onClick={() => toggleOpen(index)}
                className={`w-full text-left py-4 px-6 text-lg font-semibold flex items-center justify-between  ${openIndex === index ? 'bg-primary text-gray-50' : ''}`}
              >
                <span>{item.question}</span>
                <span>{openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              </button>
              {openIndex === index && (
                <div className="py-4 px-6 bg-primary text-gray-50 text-base">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleFAQ;
