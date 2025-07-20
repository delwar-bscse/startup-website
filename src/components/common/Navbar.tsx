"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BrandLogo from "@/assets/logo/brandLogo.png";
import UserImage from "@/assets/projects/Entrepreneur/profile.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Menu } from "lucide-react";
import { useGetUserProfileQuery } from "../../Redux/apis/userApi";
import { useRouter } from "next/navigation";
import { getImageUrl } from "@/utils/baseUrl";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [hasToken, setHasToken] = useState<boolean>(false);

  const router = useRouter();

  const { data: userProfile, isLoading, refetch } = useGetUserProfileQuery({});
  const user = userProfile?.data;
  const userRole = user?.role;
  console.log("navbar user", user);
  console.log(userRole);
  // const isLoggedIn = !!user;

  useEffect(() => {
    const checkToken = () => {
      const accessToken = localStorage.getItem("accessToken");
      setHasToken(!!accessToken);

      if (accessToken && !user && !isLoading) {
        refetch();
      }
    };

    checkToken();

    const interval = setInterval(checkToken, 1000);

    return () => clearInterval(interval);
  }, [user, isLoading, refetch]);

  // Update isLoggedIn based on both token and user data
  useEffect(() => {
    setIsLoggedIn(hasToken && !!user && !!userRole);
  }, [hasToken, user, userRole]);

  const imageUrl = getImageUrl();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setHasToken(false);
    setIsLoggedIn(false);
    router.push("/signin");
  };

  console.log(
    "Debug - isLoggedIn:",
    isLoggedIn,
    "user:",
    !!user,
    "userRole:",
    userRole,
    "isLoading:",
    isLoading
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loader text-primary">Loading...</span>
      </div>
    );
  }

  const getProfileImageUrl = () => {
    return user?.profileImg ? `${imageUrl}/${user.profileImg}` : UserImage;
  };

  return (
    <div className="shadow-md">
      <div className="grid grid-cols-2 md:grid-cols-5 maxWidth py-3 px-2">
        {/* Brand Logo */}
        <Link href="/" className="col-span-1 flex justify-start items-center">
          <Image
            src={BrandLogo}
            alt="Vercel Logo"
            width={160}
            height={160}
            className="object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex col-span-3 justify-center items-center gap-5 font-semibold text-gray-700">
          <li className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Sign In / Mobile Menu Trigger */}
        <div className="col-span-1 flex justify-end items-center gap-4 relative">
          {isLoggedIn && userRole ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="max-md:hidden w-12 h-12 block rounded-full overflow-hidden border-2 border-primary cursor-pointer">
                  <Image
                    src={getProfileImageUrl()}
                    alt="User Profile"
                    width={300}
                    height={300}
                    className="object-cover min-w-10 min-h-10"
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60 relative top-4 right-24">
                <Link href={`/${userRole}/portfolio`}>
                  <DropdownMenuItem className="cursor-pointer">
                    <span className="flex gap-2 items-center">
                      <span className="w-12 h-12 block rounded-full overflow-hidden border-2 border-primary">
                        <Image
                          src={getProfileImageUrl()}
                          alt="User Profile"
                          width={100}
                          height={100}
                        />
                      </span>
                      <span className="flex flex-col text-gray-600 text-sm">
                        <span className="font-semibold capitalize text-xl">
                          {user?.name}
                        </span>
                        <span className="font-semibold capitalize">
                          {user?.role}
                        </span>
                      </span>
                    </span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href="/terms-and-conditions" className="cursor-pointer">
                  <DropdownMenuItem className="cursor-pointer text-xl text-gray-600">
                    Terms & Conditions
                  </DropdownMenuItem>
                </Link>
                <Link href="/privacy-policy" className="cursor-pointer">
                  <DropdownMenuItem className="cursor-pointer text-xl text-gray-600">
                    Privacy Policy
                  </DropdownMenuItem>
                </Link>
                <Link href="/faqs">
                  <DropdownMenuItem className="cursor-pointer text-xl text-gray-600">
                    FAQ
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="cursor-pointer text-xl text-gray-600 font-semibold"
                >
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href="/signin"
              className="hidden md:inline-block bg-primary text-white py-2 px-4"
            >
              Sign In
            </Link>
          )}

          {/* ------------ Mobile Menu ------------- */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <SheetHeader>
                  <SheetTitle className="text-left text-lg">
                    <Image
                      src={BrandLogo}
                      alt="Vercel Logo"
                      width={160}
                      height={40}
                    />
                  </SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col mt-6 gap-2 font-medium text-gray-700">
                  {isLoggedIn && userRole && (
                    <li
                      onClick={() => setOpen(false)}
                      className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded"
                    >
                      <Link
                        href={`/${userRole}/portfolio`}
                        className="flex gap-2 items-center"
                      >
                        <span className="w-12 h-12 block rounded-full overflow-hidden border-2 border-primary">
                          <Image
                            src={getProfileImageUrl()}
                            alt="User Profile"
                            width={100}
                            height={100}
                          />
                        </span>
                        <span className="flex flex-col text-gray-600 text-sm">
                          <span className="font-semibold capitalize text-xl">
                            {user?.name}
                          </span>
                          <span className="font-semibold capitalize">
                            {user?.role}
                          </span>
                        </span>
                      </Link>
                    </li>
                  )}
                  <li
                    onClick={() => setOpen(false)}
                    className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded"
                  >
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    onClick={() => setOpen(false)}
                    className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded"
                  >
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li
                    onClick={() => setOpen(false)}
                    className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  {isLoggedIn && userRole && (
                    <li
                      onClick={() => setOpen(false)}
                      className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded"
                    >
                      <Link href="/terms-and-conditions">
                        Terms & Conditions
                      </Link>
                    </li>
                  )}
                  {isLoggedIn && userRole && (
                    <li
                      onClick={() => setOpen(false)}
                      className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded"
                    >
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                  )}
                  {isLoggedIn && userRole && (
                    <li
                      onClick={() => setOpen(false)}
                      className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded"
                    >
                      <Link href="/faqs">FAQ</Link>
                    </li>
                  )}
                  <li className="px-3 py-4">
                    {isLoggedIn && userRole ? (
                      <button
                        onClick={() => {
                          handleLogout();
                          setOpen(false);
                        }}
                        className="block w-full bg-primary text-white px-4 py-2 rounded mt-2 text-center"
                      >
                        Sign Out
                      </button>
                    ) : (
                      <Link
                        href="/signin"
                        onClick={() => setOpen(false)}
                        className="block bg-primary text-white px-4 py-2 rounded mt-2 text-center"
                      >
                        Sign In
                      </Link>
                    )}
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
