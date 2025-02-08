// src/app/layout.tsx

"use client"
import React from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";  // Ensure you're using the correct hook
import Hero from "@/components/Hero"; // Hero component
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();  // Get the current path
  const isHomePage = pathname === "/";  // Check if we're on the homepage

  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>
          {isHomePage && <Hero />}  {/* Only display Hero on homepage */}
          {children}  {/* Render page content for other routes */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
