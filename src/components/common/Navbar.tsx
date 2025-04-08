"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import BrandLogo from '@/assets/logo/brandLogo.png'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-md'>
      <div className='grid grid-cols-2 md:grid-cols-5 maxWidth py-3 px-2'>
        {/* Brand Logo */}
        <div className='col-span-1 flex justify-start items-center'>
          <Image src={BrandLogo} alt="Vercel Logo" width={160} height={30} />
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex col-span-3 justify-center items-center gap-5 font-semibold text-gray-700'>
          <li className='cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm'>
            <Link href="/">Home</Link>
          </li>
          <li className='cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm'>
            <Link href="/projects">Projects</Link>
          </li>
          <li className='cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm'>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Sign In / Mobile Menu Trigger */}
        <div className='col-span-1 flex justify-end items-center gap-4'>
          <Link href="/signin" className='hidden md:inline-block bg-primary text-white py-2 px-4'>Sign In</Link>
          <div className='md:hidden'>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <SheetHeader>
                  <SheetTitle className="text-left text-lg">
                    <Image src={BrandLogo} alt="Vercel Logo" width={160} height={40} />
                  </SheetTitle>
                </SheetHeader>
                <ul className='flex flex-col mt-6 gap-4 font-medium text-gray-700'>
                  <li onClick={() => setOpen(false)} className='cursor-pointer hover:bg-gray-100 px-3 py-2 rounded'>
                    <Link href="/">Home</Link>
                  </li>
                  <li onClick={() => setOpen(false)} className='cursor-pointer hover:bg-gray-100 px-3 py-2 rounded'>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li onClick={() => setOpen(false)} className='cursor-pointer hover:bg-gray-100 px-3 py-2 rounded'>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li className='px-3 py-4'>
                    <Link href="/signin" className='block bg-primary text-white px-4 py-2 rounded mt-2 text-center'>Sign In</Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
