import { Footer, Header } from "@/components/layout";
import type { Metadata } from "next";
import { Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kynto - Hire Anyone, Anywhere",
  description:
    "The Operating System for Global HR. Hire, manage, and pay talent in 150+ countries with Kynto's all-in-one platform.",
  keywords: [
    "global HR",
    "employer of record",
    "EOR",
    "hire globally",
    "remote hiring",
    "international payroll",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
