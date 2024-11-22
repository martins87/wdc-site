import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const montserrat = localFont({
  src: [
    {
      path: "./assets/fonts/Montserrat-Bold.ttf",
      weight: "700",
    },
    {
      path: "./assets/fonts/Montserrat-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-montserrat",
});
const manrope = localFont({
  src: [
    {
      path: "./assets/fonts/Manrope-Regular.ttf",
      weight: "400",
    },
    {
      path: "./assets/fonts/Manrope-Medium.ttf",
      weight: "500",
    },
    {
      path: "./assets/fonts/Manrope-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./assets/fonts/Manrope-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Noble Craft WebDesign",
  description: "We create modern websites for your company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${manrope.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
