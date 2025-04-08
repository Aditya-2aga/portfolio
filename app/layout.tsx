import type { Metadata } from "next";
import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const outfitFont = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-outfit' // Add this line
});

const ovoFont = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-ovo' // Add this line
});

export const metadata: Metadata = {
  title: "Aditya Modanwal",
  description: "Hello, welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className="scroll-smooth" 
    >
      <body className={`${outfitFont.variable} ${ovoFont.variable} antialiased leading-8 overflow-x-hidden
      dark:{bg-dark-theme} dark:{text-white}`}>
        {children}
      </body>
    </html>
  );
}