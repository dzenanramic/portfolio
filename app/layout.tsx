import type { Metadata } from "next";
import { Special_Elite } from "next/font/google"; // 👈 import the font
import "./globals.css";

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-special-elite", // optional if you want it in Tailwind theme
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Retro typewriter styled portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${specialElite.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
