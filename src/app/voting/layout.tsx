import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Your Polling Place in Bowie, MD",
  description:
    "Find your polling location for the Bowie, Maryland city election. Look up your neighborhood's designated polling place and voting information.",
  openGraph: {
    title: "Find Your Polling Place — Bowie, MD City Election",
    description:
      "Find your polling location for the Bowie, Maryland city election. Look up your neighborhood's designated polling place and voting information.",
  },
};

export default function VotingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
