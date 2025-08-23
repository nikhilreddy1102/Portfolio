import "./globals.css";
import type { Metadata } from "next";
import GlobalBackground from "./components/GlobalBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-transparent">
        {/* One global background layer */}
        <GlobalBackground />

        {/* Global UI */}
        <div className="relative z-10 flex flex-col min-h-dvh">{/* was min-h-screen */}
          {/* Navbar always at the top */}
          <Navbar />

          {/* Page content with padding to avoid overlapping sticky nav */}
          {/* FIX: give main a real top padding matching your nav height (assume 64px / h-16) */}
          <main className="flex-1 pt-0">{children}</main>{/* was flex-grow pt- */}
          
          {/* Footer always at the bottom */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
