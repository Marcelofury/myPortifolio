import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "../components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcel Butera - Software Engineer & AI Enthusiast",
  description: "Portfolio of Marcel Butera - Passionate Software Engineer, Data Analyst, and AI Enthusiast from Uganda. Specializing in Python, JavaScript, Machine Learning, and Space Technology. Aspiring to work at SpaceX, NASA, or ESA.",
  keywords: ["Marcel Butera", "Software Engineer", "AI", "Machine Learning", "Data Analytics", "Python", "JavaScript", "Space Technology", "Uganda", "UTAMU"],
  authors: [{ name: "Marcel Butera" }],
  creator: "Marcel Butera",
  openGraph: {
    title: "Marcel Butera - Software Engineer & AI Enthusiast",
    description: "Portfolio of Marcel Butera - Passionate about Software Engineering, Data Analytics, AI, and Space Technology",
    url: "https://marcelbutera.dev",
    siteName: "Marcel Butera Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcel Butera - Software Engineer & AI Enthusiast",
    description: "Portfolio of Marcel Butera - Passionate about Software Engineering, Data Analytics, AI, and Space Technology",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
