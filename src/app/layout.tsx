import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CandidateJsonLd, WebsiteJsonLd } from "@/components/JsonLd";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Rem Tennessee for Mayor of Bowie, MD — Bowie Forward",
    template: "%s | Rem Tennessee for Mayor of Bowie",
  },
  description:
    "Remington Tennessee is running for Mayor of Bowie, Maryland. A platform focused on youth opportunity, community engagement, and growing local business in Bowie, MD.",
  metadataBase: new URL("https://bowieforward.com"),
  keywords: [
    "Bowie mayor",
    "Bowie MD mayor",
    "Rem Tennessee",
    "Remington Tennessee",
    "Bowie Maryland election",
    "Bowie city election",
    "Bowie Forward",
    "mayor of Bowie",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Rem Tennessee for Mayor of Bowie, MD — Bowie Forward",
    description:
      "Remington Tennessee is running for Mayor of Bowie, Maryland. A platform focused on youth opportunity, community engagement, and growing local business in Bowie, MD.",
    siteName: "Bowie Forward — Rem Tennessee for Mayor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rem Tennessee for Mayor of Bowie, MD — Bowie Forward",
    description:
      "Remington Tennessee is running for Mayor of Bowie, Maryland. A platform focused on youth opportunity, community engagement, and growing local business in Bowie, MD.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased font-sans`}>
        <CandidateJsonLd />
        <WebsiteJsonLd />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
