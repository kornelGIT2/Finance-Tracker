import { Footer } from "@/components/footer/Footer";
import { Links } from "@/components/navbar/Links";
import DashboardNavbar from "@/components/dashboard/Navbar";
import { auth } from "../../../auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <main className="overflow-hidden md:flex justify-center">
      <DashboardNavbar session={session}>{children}</DashboardNavbar>
    </main>
  );
}
