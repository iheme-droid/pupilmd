import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware for PupilMD
 * Handles authentication redirects for the Library and Auth pages.
 */
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // 1. If the user is NOT logged in and tries to access the Library or Modules
  if (!token && (pathname.startsWith('/library') || pathname.startsWith('/module'))) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  // 2. If the user IS logged in and tries to go to the Auth page
  if (token && pathname === '/auth') {
    return NextResponse.redirect(new URL('/library', request.url));
  }

  return NextResponse.next();
}

/**
 * Matcher configuration
 * Optimized to ensure public assets (images, logos) are never blocked.
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (your neural backgrounds)
     * - marables-logo.png
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|marables-logo.png).*)',
  ],
};