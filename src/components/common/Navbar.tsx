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
import { deleteCookie, getCookie, setCookie } from "cookies-next/client";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [hasToken, setHasToken] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  const router = useRouter();

  const { data: userProfile, isLoading, refetch } = useGetUserProfileQuery({});
  const user = userProfile?.data;
  // console.log("navbar user", user);
  // const isLoggedIn = !!user;

  useEffect(() => {
    const checkToken = () => {
      const accessToken = localStorage.getItem("accessToken");
      const storedRole = getCookie("userRole")?.toString() || null;
      setHasToken(!!accessToken);
      setUserRole(storedRole);

      if (accessToken && !user && !isLoading) {
        refetch();
      }
      if (user?.role && user.role !== storedRole) {
        setCookie("userRole", user.role, {
          maxAge: 7 * 24 * 60 * 60, // 7 days
          path: "/",
          sameSite: "strict",
        });
      }
    };

    checkToken();

    const interval = setInterval(checkToken, 2000);
    return () => clearInterval(interval);
  }, [user, isLoading, refetch]);

  // Update isLoggedIn based on both token and user data
  useEffect(() => {
    setIsLoggedIn(hasToken && !!user && !!userRole);
  }, [hasToken, user, userRole]);

  const imageUrl = getImageUrl();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    deleteCookie("userRole", {
      path: "/",
      sameSite: "strict",
    });
    setHasToken(false);
    setIsLoggedIn(false);
    setUserRole(null);
    setTimeout(() => {
      router.push("/signin");
    }, 500);
  };

  // console.log(
  //   "Debug - isLoggedIn:",
  //   isLoggedIn,
  //   "user:",
  //   !!user,
  //   "userRole:",
  //   userRole,
  //   "isLoading:",
  //   isLoading
  // );

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center">
  //       <span className="loader text-primary">Loading...</span>
  //     </div>
  //   );
  // }

  const getProfileImageUrl = () => {
    return user?.profileImg ? `${imageUrl}${user.profileImg}` : UserImage;
  };

  return (
    <div className="shadow-md">
      <div className="grid grid-cols-2 px-2 py-3 md:grid-cols-5 maxWidth">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center justify-start col-span-1">
          <Image
            src={BrandLogo}
            alt="Vercel Logo"
            width={160}
            height={160}
            className="object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="items-center justify-center hidden col-span-3 gap-5 font-semibold text-gray-700 md:flex">
          <li className="px-2 py-1 rounded-sm cursor-pointer hover:bg-gray-100">
            <Link href="/">Home</Link>
          </li>
          <li className="px-2 py-1 rounded-sm cursor-pointer hover:bg-gray-100">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="px-2 py-1 rounded-sm cursor-pointer hover:bg-gray-100">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Sign In / Mobile Menu Trigger */}
        <div className="relative flex items-center justify-end col-span-1 gap-4">
          {isLoggedIn && userRole && !isLoading ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="block w-12 h-12 overflow-hidden border-2 rounded-full cursor-pointer max-md:hidden border-primary">
                  <Image
                    src={getProfileImageUrl()}
                    alt="User Profile"
                    width={300}
                    height={300}
                    className="object-cover min-w-10 min-h-10"
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="relative w-60 top-4 right-24">
                <Link href={`/${userRole}/portfolio`}>
                  <DropdownMenuItem className="cursor-pointer">
                    <span className="flex items-center gap-2">
                      <span className="block w-12 h-12 overflow-hidden border-2 rounded-full border-primary">
                        <Image
                          src={getProfileImageUrl()}
                          alt="User Profile"
                          width={100}
                          height={100}
                        />
                      </span>
                      <span className="flex flex-col text-sm text-gray-600">
                        <span className="text-xl font-semibold capitalize">
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
                <Link href="/my-profile" className="cursor-pointer">
                  <DropdownMenuItem className="text-xl text-gray-600 cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                </Link>
                <Link href="/terms-and-conditions" className="cursor-pointer">
                  <DropdownMenuItem className="text-xl text-gray-600 cursor-pointer">
                    Terms & Conditions
                  </DropdownMenuItem>
                </Link>
                <Link href="/privacy-policy" className="cursor-pointer">
                  <DropdownMenuItem className="text-xl text-gray-600 cursor-pointer">
                    Privacy Policy
                  </DropdownMenuItem>
                </Link>
                <Link href="/faqs">
                  <DropdownMenuItem className="text-xl text-gray-600 cursor-pointer">
                    FAQ
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-xl font-semibold text-gray-600 cursor-pointer"
                >
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href="/signin"
              className="hidden px-4 py-2 text-white md:inline-block bg-primary"
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
                  <SheetTitle className="text-lg text-left">
                    <Image
                      src={BrandLogo}
                      alt="Vercel Logo"
                      width={160}
                      height={40}
                    />
                  </SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col gap-2 mt-6 font-medium text-gray-700">
                  {isLoggedIn && userRole && (
                    <li
                      onClick={() => setOpen(false)}
                      className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
                    >
                      <Link
                        href={`/${userRole}/portfolio`}
                        className="flex items-center gap-2"
                      >
                        <span className="block w-12 h-12 overflow-hidden border-2 rounded-full border-primary">
                          <Image
                            src={getProfileImageUrl()}
                            alt="User Profile"
                            width={100}
                            height={100}
                          />
                        </span>
                        <span className="flex flex-col text-sm text-gray-600">
                          <span className="text-xl font-semibold capitalize">
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
                    className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
                  >
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
                  >
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  {isLoggedIn && userRole && (
                    <li
                      onClick={() => setOpen(false)}
                      className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
                    >
                      <Link href="/terms-and-conditions">
                        Terms & Conditions
                      </Link>
                    </li>
                  )}
                  {isLoggedIn && userRole && (
                    <li
                      onClick={() => setOpen(false)}
                      className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
                    >
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                  )}
                  {isLoggedIn && userRole && (
                    <li
                      onClick={() => setOpen(false)}
                      className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
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
                        className="block w-full px-4 py-2 mt-2 text-center text-white rounded bg-primary"
                      >
                        Sign Out
                      </button>
                    ) : (
                      <Link
                        href="/signin"
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 mt-2 text-center text-white rounded bg-primary"
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
