import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/courses','/cart']; 

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (protectedRoutes.includes(pathname)) {
    const token = request.cookies.get('token'); 
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/courses','/cart'], 
};
