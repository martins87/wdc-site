import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = localFont({
  src: [
    {
      path: "./assets/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "./assets/fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "./assets/fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./assets/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-poppins",
});

const montserrat = localFont({
  src: [
    {
      path: "./assets/fonts/Montserrat-Regular.ttf",
      weight: "400",
    },
    {
      path: "./assets/fonts/Montserrat-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "./assets/fonts/Montserrat-Black.ttf",
      weight: "900",
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
        className={`${poppins.variable} ${montserrat.variable} ${manrope.variable} antialiased bg-background`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
