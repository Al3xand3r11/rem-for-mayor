import type { Metadata } from "next";
import { EventsJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Upcoming Events — Meet Rem Tennessee in Bowie, MD",
  description:
    "Attend upcoming campaign events for Rem Tennessee, candidate for Mayor of Bowie, Maryland. Town halls, forums, and community meetings in Bowie, MD.",
  openGraph: {
    title: "Upcoming Events — Rem Tennessee for Mayor of Bowie",
    description:
      "Attend upcoming campaign events for Rem Tennessee, candidate for Mayor of Bowie, Maryland. Town halls, forums, and community meetings in Bowie, MD.",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EventsJsonLd />
      {children}
    </>
  );
}
