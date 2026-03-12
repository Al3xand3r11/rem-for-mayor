export interface PolicyCategory {
  title: string;
  points: string[];
}

export interface EventData {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  address: string;
  lat: number;
  lng: number;
}

export interface PollingPlace {
  neighborhood: string;
  location: string;
  address: string;
  hours: string;
  color: string;
}

export const CANDIDATE_NAME = "Rem";
export const SLOGAN = "A New Vision for Our City";
export const CAMPAIGN_TAGLINE =
  "Building a future where every neighborhood thrives, every voice is heard, and every family has the opportunity to succeed.";

export const policies: PolicyCategory[] = [
  {
    title: "Housing & Affordability",
    points: [
      "Freeze rent increases for the next two years to stabilize communities",
      "Build 10,000 new affordable housing units through public-private partnerships",
      "Crack down on predatory landlords with a dedicated enforcement task force",
      "Expand down-payment assistance programs for first-time homebuyers",
    ],
  },
  {
    title: "Public Safety",
    points: [
      "Establish a Department of Community Safety with trained crisis responders",
      "Invest in youth mentorship programs to reduce violence at its root",
      "Increase street lighting and infrastructure in underserved neighborhoods",
      "Strengthen community policing with mandatory de-escalation training",
    ],
  },
  {
    title: "Education",
    points: [
      "Universal pre-K for every family regardless of income",
      "Modernize school facilities with technology and green upgrades",
      "Raise teacher pay to attract and retain the best educators",
      "Expand after-school and summer enrichment programs citywide",
    ],
  },
  {
    title: "Infrastructure & Transit",
    points: [
      "Launch a fare-free bus pilot program on the five busiest routes",
      "Repair and repave 200 miles of roads in the first term",
      "Expand protected bike lanes and pedestrian-friendly streetscapes",
      "Invest in broadband internet access for every neighborhood",
    ],
  },
  {
    title: "Economy & Jobs",
    points: [
      "Create a small business incubator fund with zero-interest microloans",
      "Raise the local minimum wage to a livable standard",
      "Partner with trade schools and community colleges for workforce training",
      "Support local hiring requirements for city-funded projects",
    ],
  },
  {
    title: "Environment & Climate",
    points: [
      "Commit to 100% renewable energy for city operations by 2030",
      "Plant 50,000 trees and expand urban green spaces",
      "Launch a citywide composting and zero-waste initiative",
      "Retrofit public buildings for energy efficiency and resilience",
    ],
  },
];

export const events: EventData[] = [
  {
    id: "1",
    title: "Town Hall: Housing Solutions",
    description:
      "Join Rem for an open conversation about affordable housing and what we can do to keep families in their homes.",
    date: "2026-03-14",
    time: "6:00 PM",
    location: "Downtown Community Center",
    address: "100 Main Street",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: "2",
    title: "Rally in the Park",
    description:
      "A family-friendly rally with live music, food trucks, and a chance to hear Rem's vision for the city.",
    date: "2026-03-18",
    time: "4:00 PM",
    location: "Riverside Park Pavilion",
    address: "250 Riverside Drive",
    lat: 40.8015,
    lng: -73.9712,
  },
  {
    id: "3",
    title: "Education Forum",
    description:
      "Teachers, parents, and students are invited to discuss the future of our public schools.",
    date: "2026-03-21",
    time: "7:30 PM",
    location: "Lincoln High School Auditorium",
    address: "450 Lincoln Avenue",
    lat: 40.7484,
    lng: -73.9857,
  },
  {
    id: "4",
    title: "Small Business Roundtable",
    description:
      "Local entrepreneurs share their challenges and ideas. Rem will outline plans to support small businesses.",
    date: "2026-03-25",
    time: "5:30 PM",
    location: "Eastbrook Business Hub",
    address: "78 Commerce Street",
    lat: 40.7282,
    lng: -73.7949,
  },
];

export const pollingPlaces: PollingPlace[] = [
  {
    neighborhood: "Downtown",
    location: "City Hall — Main Lobby",
    address: "100 Main Street",
    hours: "6:00 AM – 9:00 PM",
    color: "#0D7377",
  },
  {
    neighborhood: "Westside",
    location: "Lincoln Community Center",
    address: "320 West Avenue",
    hours: "6:00 AM – 9:00 PM",
    color: "#2E86AB",
  },
  {
    neighborhood: "Northgate",
    location: "Northgate Recreation Center",
    address: "155 North Blvd",
    hours: "6:00 AM – 9:00 PM",
    color: "#A23B72",
  },
  {
    neighborhood: "Eastbrook",
    location: "Eastbrook Public Library",
    address: "78 Commerce Street",
    hours: "6:00 AM – 9:00 PM",
    color: "#F18F01",
  },
  {
    neighborhood: "Southview",
    location: "Southview Elementary School",
    address: "900 South Park Road",
    hours: "6:00 AM – 9:00 PM",
    color: "#C73E1D",
  },
  {
    neighborhood: "Midtown",
    location: "Midtown Fire Station #4",
    address: "210 Central Avenue",
    hours: "6:00 AM – 9:00 PM",
    color: "#3B1F2B",
  },
];
