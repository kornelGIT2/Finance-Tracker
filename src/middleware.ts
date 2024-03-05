import authConfig from "../auth.config";
import NextAuth from "next-auth";
import {
  DEFAULT_REDIRECT,
  apiAuthPrefix,
  publicRoutes,
  authRoutes,
} from "../routes";

const { auth } = NextAuth(authConfig);

export default auth((request) => {
  const { nextUrl } = request;
  const isLogged = !!request.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }
  if (isAuthRoute) {
    if (isLogged) {
      return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
    } else {
      return;
    }
  }

  if (isLogged) {
    if (isPublicRoute) {
      return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
    } else {
      return;
    }
  }

  if (!isLogged && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
