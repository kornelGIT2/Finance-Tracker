export const publicRoutes = ["/", "/about"];
export const authRoutes = ["/login", "/register"];
export const protectedRoutes = [
  "/dashboard",
  "/expenses",
  "/incomes",
  "/transactions",
];

/**
 * Prefix for API auth routes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

export const DEFAULT_REDIRECT = "/dashboard";
