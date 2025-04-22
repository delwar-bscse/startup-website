import React from 'react';
import BrandLogo from '@/assets/logo/brandLogo2.png';
import Image from 'next/image';
import FooterTitle from '../shared/FooterTitle';
import { browseCategory, contactInfo, followUs, quickLinks } from '@/constants/navDatas';
import FooterBg from '@/assets/footer/background.png';
import { AiOutlineCopyright } from "react-icons/ai";
import Link from 'next/link';


const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${FooterBg.src})` }} className='bg-cover bg-no-repeat py-16 text-white'>
      <div className='maxWidth grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-20'>
        <div>
          <h3>
            <Image src={BrandLogo} alt="Start Up Logo" width={200} height={50} />
          </h3>
          <p className='py-2 tracking-wide leading-8 text-base md:text-lg'>GiftEase makes thoughtful gifting simple and stress-free. From birthdays to holidays, we help you celebrate every special moment with personalized gifts and seamless delivery.</p>
        </div>
        <div>
          <FooterTitle title="Quick Links" />
          <ul className='space-y-3'>
            {quickLinks?.map((item, index) => (
              <li key={index} className='text-base cursor-pointer'>
                <Link href={item?.url} className='hover:text-gray-300 text-white delay-200'>{item?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <FooterTitle title="Browse Category" />
          <ul className='space-y-3'>
            {browseCategory?.map((item, index) => (
              <li key={index} className='text-base cursor-pointer'>
                <Link href={item?.url} className='hover:text-gray-300 text-white delay-200'>{item?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <FooterTitle title="Contact Info" />
          <ul className='space-y-2'>
            {contactInfo?.map((item, index) => (
              <li key={index} className='flex items-center gap-2'>
                <span className='p-2 rounded-full bg-primary'>{item?.icon}</span>
                <span>{item?.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='maxWidth h-[1px] bg-gray-400/40 my-10' />
      <div className='maxWidth flex flex-col md:flex-row justify-between items-center gap-4'>
        <p className='flex items-center justify-center gap-1 text-sm md:text-base flex-wrap'><AiOutlineCopyright size={16} /> Copyright 2025 <span className='text-primary font-semibold'>MOON PARTNER</span> All Rights Reserved.</p>
        <div className='flex items-center gap-2'>
          <p>Follow Us : </p>
          <ul className="flex gap-2">
            {followUs?.map((item, index) => (
              <li key={index} className="cursor-pointer bg-white p-2 rounded-full">
                <a href={item?.url} target="_blank" rel="noopener noreferrer" className="text-gray-700">
                  {item?.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer