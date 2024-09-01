import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/courses']; // Add the protected routes here

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if the route is protected
  if (protectedRoutes.includes(pathname)) {
    const token = request.cookies.get('token'); // Get the token from cookies

    // Redirect to login page if the token is not present
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

// Configure which routes the middleware applies to
export const config = {
  matcher: ['/courses'], // Apply middleware to these routes
};
