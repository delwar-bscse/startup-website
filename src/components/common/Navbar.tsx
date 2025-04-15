"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import BrandLogo from '@/assets/logo/brandLogo.png'
import UserImage from '@/assets/projects/Entrepreneur/profile.png'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu } from 'lucide-react'
import { getCookie } from "cookies-next/client";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Get the userRole cookie when the component mounts
    const role = getCookie('su_role') as string | undefined; // Ensure it can be string or undefined
    setUserRole(role || null); // If role is undefined, set null
  }, [pathname]);

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
          {!userRole ? (
            <Link href="/signin" className='hidden md:inline-block bg-primary text-white py-2 px-4'>Sign In</Link>
          ) : (
            <Link href={`/${userRole}/portfolio`} className='w-12 h-12 rounded-full overflow-hidden border-2 border-primary'>
              <Image src={UserImage} alt="User Profile" width={100} height={100} />
            </Link>
          )}
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

export default Navbar;
