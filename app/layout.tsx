import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ahmed Ismail — Backend Engineer",
  description: "Backend Software Engineer specializing in Laravel, PHP, and scalable web applications. Based in Menofia, Egypt.",
  keywords: [
    "backend engineer",
    "laravel developer",
    "php developer",
    "api developer",
    "menofia",
    "egypt",
    "software engineer",
  ],
};

export const viewport: Viewport = {
  themeColor: "#0c1a1e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
