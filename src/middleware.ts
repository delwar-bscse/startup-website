import { myFetch } from '@/utils copy/myFetch';
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  // const token = req.cookies.get('qwert_accessToken')?.value;

  const user = await myFetch(`/users/me`, {
    method: 'GET',
  })
  
  const role = user?.data?.role;
  // console.log("User Role:", role);
  
  if (!role) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }


  if (pathname.startsWith('/investor') && role !== 'investor') {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  if (pathname.startsWith('/entrepreneur') && role !== 'entrepreneur') {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  if (pathname.startsWith('/edit-details') && (role !== 'investor' && role !== 'entrepreneur')) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/investor/:path*', '/entrepreneur/:path*' , '/edit-details/:path*'],
};