import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export const proxy = async (request) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;

    if (user) {
        return NextResponse.next();
    }

    const currentUrl = request.nextUrl.pathname;

    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", currentUrl);
    return NextResponse.redirect(loginUrl);
};

export const config = {
    matcher: ["/my-profile","/course-details/:id*"],
};
