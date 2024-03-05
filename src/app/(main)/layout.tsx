import { Footer } from "@/components/footer/Footer";
import { Links } from "@/components/navbar/Links";
import { Navbar } from "@/components/navbar/Navbar";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar>
        <Links />
      </Navbar>
      {children}
      <Footer />
    </>
  );
}
