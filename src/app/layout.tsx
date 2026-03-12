import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rem for Mayor — A New Vision for Our City",
    template: "%s | Rem for Mayor",
  },
  description:
    "Building a future where every neighborhood thrives, every voice is heard, and every family has the opportunity to succeed.",
  metadataBase: new URL("https://rem-for-mayor.vercel.app"),
  openGraph: {
    title: "Rem for Mayor — A New Vision for Our City",
    description:
      "Building a future where every neighborhood thrives, every voice is heard, and every family has the opportunity to succeed.",
    siteName: "Rem for Mayor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rem for Mayor — A New Vision for Our City",
    description:
      "Building a future where every neighborhood thrives, every voice is heard, and every family has the opportunity to succeed.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
