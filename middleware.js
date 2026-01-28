import { NextResponse } from 'next/server';
export async function middleware(request) {
  const isAuthenticated = request.cookies.has('appwrite-session');

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/bookings', '/rooms/add', '/rooms/my'],
};
