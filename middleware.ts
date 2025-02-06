import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { clerkMiddleware } from '@clerk/nextjs/server';

const publicRoutes = [
  '/',
  '/about',
  '/contact',
  "/api/webhooks/clerk",
];

const customMiddleware = async (req: NextRequest, event: NextFetchEvent) => {
  const url = req.nextUrl.pathname;

  if (publicRoutes.includes(url)) {
    return NextResponse.next();
  }

  return clerkMiddleware(req, event);
};

export default customMiddleware;

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};