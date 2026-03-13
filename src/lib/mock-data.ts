export interface PolicyDropdown {
  title: string;
  detail: string;
}

export interface PolicyCategory {
  title: string;
  items: PolicyDropdown[];
}

export interface EventData {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  type?: "in-person" | "tv";
  location?: string;
  address?: string;
  lat?: number;
  lng?: number;
  channels?: { provider: string; channel: number }[];
  airTimes?: string[];
}

export interface District {
  id: number;
  neighborhoods: string[];
  pollingPlace: string;
  pollingAddress: string;
  pollingCoords: [number, number];
  color: string;
  bounds: [number, number][];
}

export const CANDIDATE_NAME = "Rem";
export const SLOGAN = "A New Vision for Our City";
export const CAMPAIGN_TAGLINE =
  "Building a future where every neighborhood thrives, every voice is heard, and every family has the opportunity to succeed.";

export const policies: PolicyCategory[] = [
  {
    title: "Youth Opportunity & Development",
    items: [
      {
        title: "Expand after-school programs, mentorship, and career exploration.",
        detail:
          "Partner with Bowie State University, PGCC, and local businesses to create career exploration programs for students. Pilot initiatives like an NSBE Jr. chapter at Bowie High School to connect after-school programs with real career opportunities in STEM and leadership.",
      },
      {
        title: "Establish a Mayor's Youth Advisory Council.",
        detail:
          "Empower teens to have a direct voice in shaping city decisions. The council will give young people a seat at the table and create a pipeline of civic-minded leaders who understand how local government works and how to advocate for their community.",
      },
      {
        title: "Increase summer jobs and internship opportunities.",
        detail:
          "Launch a Mayor's Summer Internship program and young entrepreneur showcases so Bowie youth can build their careers right here at home. Strengthen partnerships with Bowie State to create internships, entrepreneurship opportunities, and job pathways for students and young professionals.",
      },
      {
        title: "Invest in mental health resources and youth counseling.",
        detail:
          "As someone studying school counseling, I believe prevention and opportunity are key. When young people have mentorship, after-school programs, and leadership opportunities, they're much less likely to enter the justice system. Expand youth counseling partnerships in schools and community centers to support students where they are.",
      },
    ],
  },
  {
    title: "Community Engagement & Transparent Government",
    items: [
      {
        title: "Monthly community listening sessions.",
        detail:
          "I want a city government that is accessible and connected to every neighborhood. Regular listening sessions ensure that every voice in Bowie is not only heard, but truly considered—and that city leadership stays accountable to the people it serves.",
      },
      {
        title: "Launch a digital civic engagement platform.",
        detail:
          "Create a Forum for Change where residents can easily share concerns, poll and vote on ideas, and participate in small community improvements—all from their phone or computer. Transparency and accessibility should be the standard, not the exception.",
      },
      {
        title: "Expand participatory budgeting for neighborhood projects.",
        detail:
          "Give residents a direct say in how community dollars are spent. Participatory budgeting puts real decision-making power in the hands of the people who know their neighborhoods best.",
      },
      {
        title: "Senior community engagement and support.",
        detail:
          "Seniors helped build this community into what it is today. We will honor that legacy by expanding monthly community socials, hobby groups, and walking clubs. Connect retired professionals with students through intergenerational mentorship. Support aging-in-place with minor home repair assistance, property tax education, and accessibility improvements. Offer wellness programs including low-impact fitness classes, tai chi, yoga, and health workshops.",
      },
    ],
  },
  {
    title: "Safety, Local Business & Growth",
    items: [
      {
        title: "Small business grants for Bowie entrepreneurs.",
        detail:
          "We should make it easier for small businesses to start and grow by exploring tools like small business grants and promoting local shopping initiatives, whether for produce or services. Increase farmers' markets and emphasize other small businesses to create a community network of goods and services.",
      },
      {
        title: "Partnerships with Bowie State for innovation and startups.",
        detail:
          "Bowie State has entrepreneur programs and we should build on that relationship. Strengthen partnerships that create local innovation and startup pipelines so students and young professionals can build their careers right here in Bowie.",
      },
      {
        title: "Protect green spaces and parks.",
        detail:
          "Bowie's green spaces are part of what residents love about this city. We will protect parks like Allen Pond and invest in maintaining safe, vibrant neighborhoods where families can thrive and the community can gather.",
      },
      {
        title: "Improve traffic flow and pedestrian safety.",
        detail:
          "Address traffic and congestion concerns that affect daily life for Bowie residents. Invest in infrastructure improvements that make our streets safer for pedestrians, cyclists, and drivers alike.",
      },
      {
        title: "Continue investments in recreation and cultural events.",
        detail:
          "Keep the community lively with culture days and festive events held on a regular basis. Continue investing in recreation centers, youth sports, and programming that brings neighbors together and strengthens Bowie's identity.",
      },
    ],
  },
];

export const events: EventData[] = [
  {
    id: "1",
    title: "TV Interview",
    description:
      "Catch Rem's television interview airing on local cable channels. Tune in to hear about the vision for Bowie's future.",
    date: "2026-03-13",
    time: "5:30 PM, 8:30 PM & 11:30 PM",
    type: "tv",
    channels: [
      { provider: "Comcast", channel: 76 },
      { provider: "Verizon", channel: 42 },
    ],
    airTimes: ["5:30 PM", "8:30 PM", "11:30 PM"],
  },
  {
    id: "2",
    title: "Bowie City Council Meeting",
    description:
      "Join Rem at the Bowie City Council meeting to engage with local leadership and hear plans for the city's future.",
    date: "2026-03-16",
    time: "8:00 PM",
    type: "in-person",
    location: "Bowie City Hall",
    address: "15901 Fred Robinson Way, Bowie, MD 20716",
    lat: 38.9427,
    lng: -76.7302,
  },
  {
    id: "3",
    title: "Bowie City Forum",
    description:
      "Come out and make your voice heard at the Bowie City Forum. An open discussion on the issues that matter most to our community.",
    date: "2026-03-26",
    time: "7:00 PM – 8:30 PM",
    type: "in-person",
    location: "St. Matthews United Methodist Church",
    address: "14900 Annapolis Road (Rt. 450, next to the high school tennis courts)",
    lat: 38.9573,
    lng: -76.7197,
  }
];

export const districts: District[] = [
  {
    id: 1,
    neighborhoods: [
      "Adnell Woods",
      "Belair Greens",
      "Belair Towns II",
      "Bowie Station",
      "Chapel Forge",
      "Heartfields (Asst. Living)",
      "Huntington",
      "Huntington Crest",
      "Idlewild",
      "Meadowbrook (North & East of Millstream Dr)",
      "Northridge",
      "Old Chapel",
      "Old Chapel Estates",
      "Overbrook",
      "Rockledge",
      "Rollings Hills",
      "Saddlebrook",
      "Saddlebrook West",
      "Victoria Heights",
      "Whitehall",
      "Yorktown",
    ],
    pollingPlace: "Kenhill Center",
    pollingAddress: "2614 Kenhill Drive",
    pollingCoords: [38.9567, -76.7277],
    color: "#2b70e4",
    bounds: [
      [38.9725, -76.7340],
      [38.9710, -76.6920],
      [38.9540, -76.6850],
      [38.9445, -76.6950],
      [38.9445, -76.7340],
    ],
  },
  {
    id: 2,
    neighborhoods: [
      "Belair Town",
      "Bowie Forest",
      "Buckingham",
      "Derbyshire",
      "Fairview",
      "Forest Hills",
      "Foxhill",
      "Glenridge",
      "Grady's Walk",
      "Highbridge Park",
      "Kenilworth",
      "Longridge",
      "Meadowbrook (South & West of Millstream Dr)",
      "Melford",
      "Somerset",
      "Somerset Park (Seniors)",
      "Stewart's Landing",
      "Tulip Grove",
    ],
    pollingPlace: "Kenhill Center",
    pollingAddress: "2614 Kenhill Drive",
    pollingCoords: [38.9567, -76.7277],
    color: "#2b70e4",
    bounds: [
      [38.9725, -76.7840],
      [38.9725, -76.7340],
      [38.9445, -76.7340],
      [38.9445, -76.7580],
      [38.9380, -76.7840],
    ],
  },
  {
    id: 3,
    neighborhoods: [
      "Allen Pond Townhouses",
      "Bowie Commons",
      "Bowie New Town Center Condos",
      "Brookdale Woodward Estates (Asst. Living)",
      "Covington (North of Excalibur Rd)",
      "Dixon Crossing",
      "Enfield Chase",
      "Ensleigh",
      "Essington",
      "Evergreen Apts. (Seniors)",
      "Evergreen Estates",
      "Governors Green Apts.",
      "Heather Hills",
      "Heather Ridge Apts.",
      "Longleaf",
      "Mill Branch Crossing",
      "Northview",
      "Oakpond",
      "Old Stage",
      "Palisades",
      "Patuxent Overlook",
      "Pin Oak Village (Seniors)",
      "Princeton Square",
      "Spring Meadows",
      "The Willows (Seniors)",
      "Vistas at Bowie",
      "Westview",
      "Woodland Lake Condos",
      "Woodmore Estates",
      "Woodmore Highlands",
    ],
    pollingPlace: "Bowie Gymnasium",
    pollingAddress: "4100 Northview Drive",
    pollingCoords: [38.9375, -76.7356],
    color: "#7B2D8E",
    bounds: [
      [38.9445, -76.7840],
      [38.9445, -76.7340],
      [38.9380, -76.7340],
      [38.9300, -76.7200],
      [38.9120, -76.7350],
      [38.9120, -76.7840],
    ],
  },
  {
    id: 4,
    neighborhoods: [
      "Amber Meadows",
      "Amber Meadows II",
      "Ashleigh",
      "Ashleigh Station",
      "Collington Manor",
      "Collington Ridge",
      "Collington Station",
      "Covington (South of Excalibur Rd)",
      "Devonshire Estates",
      "Glen Allen",
      "Graystone",
      "Grovehurst",
      "Lake Village Manor",
      "Mitchellville East",
      "Oaktree",
      "Peach Preserve",
      "Pointer Ridge",
      "Ridgeview Estates",
      "South Lake",
      "Tall Oaks Crossing",
      "Ternberry",
      "The Hamptons at Woodmore",
    ],
    pollingPlace: "Bowie Gymnasium",
    pollingAddress: "4100 Northview Drive",
    pollingCoords: [38.9375, -76.7356],
    color: "#D4762C",
    bounds: [
      [38.9445, -76.7340],
      [38.9445, -76.6950],
      [38.9300, -76.6850],
      [38.9120, -76.6950],
      [38.9120, -76.7350],
      [38.9300, -76.7200],
      [38.9380, -76.7340],
    ],
  },
];
