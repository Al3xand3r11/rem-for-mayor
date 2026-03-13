import { events } from "@/lib/mock-data";

export function CandidateJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Remington Tennessee",
    alternateName: "Rem Tennessee",
    description:
      "Candidate for Mayor of Bowie, Maryland. Running on a platform of youth opportunity, community engagement, and local business growth.",
    url: "https://bowieforward.com",
    sameAs: ["https://www.instagram.com/vote4rem"],
    jobTitle: "Candidate for Mayor",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bowie",
      addressRegion: "MD",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bowie Forward — Rem Tennessee for Mayor",
    url: "https://bowieforward.com",
    description:
      "Official campaign website for Remington Tennessee, candidate for Mayor of Bowie, Maryland.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function EventsJsonLd() {
  const jsonLdItems = events
    .filter((e) => e.type === "in-person")
    .map((event) => ({
      "@context": "https://schema.org",
      "@type": "Event",
      name: event.title,
      description: event.description,
      startDate: event.date,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: event.location,
        address: {
          "@type": "PostalAddress",
          streetAddress: event.address,
          addressLocality: "Bowie",
          addressRegion: "MD",
          addressCountry: "US",
        },
      },
      organizer: {
        "@type": "Person",
        name: "Remington Tennessee",
        url: "https://bowieforward.com",
      },
    }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItems) }}
    />
  );
}
