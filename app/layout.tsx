import type { Metadata } from "next";
import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const outfitFont = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-outfit'
});

const ovoFont = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-ovo'
});

export const metadata: Metadata = {
  title: "Aditya Modanwal | Product Manager",
  description: "Portfolio of Aditya Modanwal, Technical Product Manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfitFont.variable} ${ovoFont.variable} antialiased leading-8 overflow-x-hidden
      dark:bg-[#0f172a] dark:text-white bg-slate-50 text-slate-900 transition-colors duration-300`}>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}