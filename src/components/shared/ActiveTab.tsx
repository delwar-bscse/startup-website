"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const ActiveTab = () => {
  const pathname = usePathname();
  const role = pathname.split("/")[1];
  // console.log(role);

  const isActive = (path: string) => {
    if (pathname === path) return true;

    if (pathname.startsWith(path)) return true;

    // For dynamic routes, you might want to check the path along with query params
    // Example: /entrepreneur/projects?id=123 should match for projects link
    // const queryString = Object.keys(query).map(key => `${key}=${query[key]}`).join('&')
    // if (pathname === path && queryString) return true

    return false;
  };

  return (
    <div className="px-1">
      <div
        className={`maxWidth grid ${
          role === "entrepreneur" ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2"
        } bg-secondary p-1 my-8`}
      >
        <Link
          href={`/${role}/portfolio`}
          className={`${
            isActive(`/${role}/portfolio`)
              ? "bg-primary text-white"
              : "transparent text-gray-700"
          } py-1 md:py-2 lg:py-3 px-1 text-sm md:text-base md:font-semibold text-center`}
        >
          Portfolio
        </Link>

        <Link
          href={`/${role}/projects`}
          className={`${
            isActive(`/${role}/projects`)
              ? "bg-primary text-white"
              : "transparent text-gray-700"
          } py-1 md:py-2 lg:py-3 px-1 text-sm md:text-base md:font-semibold text-center`}
        >
          Projects
        </Link>

        {/* 3rd tab */}
        {role === "entrepreneur" && (
          <Link
            href={`/${role}/investors`}
            className={`${
              isActive(`/${role}/investors`)
                ? "bg-primary text-white"
                : "transparent text-gray-700"
            } py-1 md:py-2 lg:py-3 px-1 text-sm md:text-base md:font-semibold text-center`}
          >
            Investors
          </Link>
        )}
      </div>
    </div>
  );
};

export default ActiveTab;
