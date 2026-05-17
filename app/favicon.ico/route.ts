import { NextResponse } from "next/server";

export function GET(request: Request) {
  const iconUrl = new URL("/icon.svg", request.url);

  return NextResponse.redirect(iconUrl, {
    status: 308,
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  });
}
