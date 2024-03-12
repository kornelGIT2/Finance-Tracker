export const publicRoutes = ["/", "/about"];
export const authRoutes = ["/login", "/register"];
export const protectedRoutes = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Expenses", path: "/expenses" },
  { name: "Incomes", path: "/incomes" },
  { name: "Manage Tags", path: "/manage_tags" },
];

/**
 * Prefix for API auth routes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

export const DEFAULT_REDIRECT = "/dashboard";
