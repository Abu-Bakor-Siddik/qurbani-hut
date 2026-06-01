import { NextResponse } from "next/server";

export async function proxy(request) {
  const sessionRes = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/get-session`,
    {
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    }
  );

  const session = await sessionRes.json();

  if (session?.user) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: [
    "/animal-details/:path*",
    "/my-profile/:path*",
    "/update-profile/:path*",
  ],
};