import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const response = NextResponse.redirect(new URL('/auth', url.origin));

  // 1. Tell the browser to wipe EVERYTHING for this site
  response.headers.set('Clear-Site-Data', '"cookies", "storage"');
  
  // 2. Explicitly kill the session cookie just in case
  response.cookies.set('auth_session', '', {
    path: '/',
    maxAge: 0,
    expires: new Date(0),
  });

  // 3. Prevent any caching of this logout request
  response.headers.set('Cache-Control', 'no-store, max-age=0');

  return response;
}