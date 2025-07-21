import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const role = req.cookies.get("userRole")?.value;

  // console.log("User Role:", role);

  if (!role) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (pathname.startsWith("/investor") && role !== "investor") {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (pathname.startsWith("/entrepreneur") && role !== "entrepreneur") {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (
    pathname.startsWith("/edit-details") &&
    role !== "investor" &&
    role !== "entrepreneur"
  ) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/investor/:path*", "/entrepreneur/:path*", "/edit-details/:path*"],
};
