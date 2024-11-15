import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add any required weights
  style: ["normal", "italic"], // Optional, include styles if needed
  variable: "--font-poppins", // Define a CSS variable for easy reference
  display: "swap", // Helps avoid layout shift
});

export const metadata: Metadata = {
  title: "SWITS-ATS",
  description: "Revolutionizing application tracking system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
