export type Project = {
  title: string;
  slug: string;
  image: string;
  tags: string[];
  description: string;
  liveLink?: string;
  caseLink?: string;
  featured?: boolean;
  upcoming?: boolean; // New flag for upcoming projects
};

export const projects: Project[] = [
  {
    title: "Lexstar",
    slug: "lexstar",
    image: "/images/lexstar.png",
    tags: ["Next.js", "Node.js", "AWS", "Tailwind CSS", "Strapi"],
    description:
      "Lexstar is a platform designed to support learners with Dyslexia, ADHD, and Autism by providing personalized tools and assessments.",
    liveLink: "https://lexstar.ng",
    caseLink: "/projects/lexstar",
    featured: true,
    upcoming: false,
  },
  {
    title: "Envalab",
    slug: "envalab",
    image: "/images/envapp.png",
    tags: ["NextJs", "Tailwind CSS", "NodeJS"],
    description:
      "Envalab is a comprehensive inventory management system designed to address the inefficiencies and inaccuracies associated with manual inventory tracking.",
    liveLink: "https://envalab.com",
    caseLink: "/projects/envalab",
    featured: true,
    upcoming: false,
  },
  {
    title: "Debisilia",
    slug: "Debisilia",
    image: "/images/debisilia.png",
    tags: [
      "NextJs",
      "Sanity",
      "Clerk",
      "Stripe",
      "Tailwind CSS",
      "Node.js",
      "LMS",
    ],
    description:
      "Debisilia is a modern Learning Management System (LMS) designed to streamline educational content delivery and management.",
    caseLink: "/projects/Debisilia",
    upcoming: true,
    featured: true,
  },
  {
    title: "Fontier",
    slug: "fontier",
    image: "/images/fontier.png",
    tags: ["Vanilla JS", "HTML", "CSS"],
    description:
      "Fontier is my '2-minute' solution. A tool that lets you style your text and paste it anywhere with formatting intact.",
    liveLink: "https://fontier-pied.vercel.app/",
    caseLink: "/projects/fontier",
    featured: true,
    upcoming: false,
  },

  // {
  //   title: "CSS-only Theme Toggle",
  //   slug: "css-theme-toggle",
  //   image: "/images/css-toggle-preview.png",
  //   tags: ["CSS", "HTML"],
  //   description:
  //     "A zero-JS project that handles theme toggling, responsive navigation, and interactivity using just modern CSS.",
  //   liveLink: "https://css-theme-toggle.vercel.app",
  //   caseLink: "/projects/css-theme-toggle",
  //   featured: true,
  //   upcoming: false,
  // },
];
