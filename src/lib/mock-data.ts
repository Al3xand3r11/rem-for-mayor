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
