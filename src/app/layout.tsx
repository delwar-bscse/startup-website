import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/utils/Providers";

import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Start Up",
  description: "Start Up",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="antialiased relative">
        <Providers>
          <nav className="sticky top-0 z-50 bg-white">
            <Navbar />
          </nav>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
