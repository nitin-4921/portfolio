import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syneFont = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrainsMonoFont = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "SYSTEM_ERR // CREATIVE DEV & DESIGNER",
  description: "Neo-Brutalist + futuristic minimal personal portfolio and digital art gallery. Editorial-inspired layout with premium interactive motion design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syneFont.variable} ${interFont.variable} ${jetbrainsMonoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        {/* Subtle physical paper grain effect overlay */}
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
