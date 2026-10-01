import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "iAccountant.io | AI-Powered Bookkeeping & Accounting",
  description:
    "Bookkeeping, accounts payable/receivable, and tax preparation — automated by AI, verified by real accountants.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="iaccounts">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}