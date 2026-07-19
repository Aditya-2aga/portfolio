import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Modanwal | Technical Product Manager",
  description: "Portfolio of Aditya Modanwal, Technical Product Manager building AI-native SaaS products from 0->1.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${inter.variable} font-sans antialiased bg-[#0a0a0a] text-slate-200 overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200`}>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}