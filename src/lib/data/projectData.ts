import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "MyMoMo Super App (MTN)",
    description:
      "MTN’s fintech super app serving over 20M users across 7 countries with wallet, business, and agent modules.",
    metrics: [
      "20M+ users",
      "Multi-version (Consumer, Agent, Business)",
      "Live CI/CD + OTA Deployments",
    ],
    stack: ["React Native", "Firebase", "Azure", "CodePush", "Re.Pack"],
    image: "/images/mymomo.png",
    caseStudy:
      "Led the architecture of the MyMoMo Super App, integrating micro-apps via Module Federation and Re.Pack. Designed the in-house design system and CMS used across all app versions. Set up CI/CD pipelines with CodePush for OTA updates and integrated analytics with Firebase and AppsFlyer.",
    liveUrl: [
      {
        label: "iOS",
        url: "https://apps.apple.com/us/app/mymomo/id6532622230",
      },
      {
        label: "Android",
        url: "https://play.google.com/store/apps/details?id=mtnft.momo.consumer&hl=en",
      },
    ],
    githubUrl: "",
  },
  {
    id: "2",
    title: "Student Paddy Platform",
    description:
      "A student engagement platform with live chat, collaborative tools, and video streaming for higher institutions.",
    metrics: [
      "Available on Web, iOS, Android",
      "Real-time video & chat",
      "Improved onboarding UX",
    ],
    stack: ["React Native", "Next.js", "Firebase", "GetStream", "100ms"],
    image: "/images/studentpaddy2.png",
    caseStudy:
      "Contributed to both web and mobile builds of Student Paddy. Implemented SEO-friendly landing page, integrated real-time messaging with GetStream, and added live video streaming using 100ms. Supported Firebase for auth, crash reporting, and messaging.",
    liveUrl: [
      {
        label: "Web",
        url: "https://www.studentpaddy.com/",
      },
      {
        label: "iOS",
        url: "https://apps.apple.com/ng/app/student-paddy-digital-campus/id6444663470",
      },
      {
        label: "Android",
        url: "https://play.google.com/store/apps/details?id=com.paddy_bare&hl=en",
      },
    ],
    githubUrl: "",
  },
  {
    id: "3",
    title: "BrightSpeed Support Dashboard",
    description:
      "An internal dashboard for broadband support agents to track complaints and manage customer queries.",
    metrics: [
      "Used by 50+ agents",
      "Streamlined 23% faster resolutions",
      "Real-time issue tracking",
    ],
    stack: ["React", "Next.js"],
    image: "/images/brightspeed.png",
    caseStudy:
      "Built BrightSpeed's support dashboard with React and Next.js. Designed workflows for ticket resolution and improved app responsiveness. Collaborated with stakeholders to meet usability KPIs.",
    liveUrl: [
      {
        label: "Web",
        url: "https://www.brightspeed.com/",
      },
    ],
    githubUrl: "",
  },
  {
    id: "4",
    title: "Afropolis Social Platform",
    description:
      "A social network for African creatives to share content, connect, and collaborate in real time.",
    metrics: [
      "Integrated Firebase Analytics",
      "Live Messaging",
      "Optimized queries by 60%",
    ],
    stack: ["React Native", "Firebase", "Zoom SDK", "AWS"],
    image: "/images/afropolis.png",
    caseStudy:
      "Built Afropolis’ social platform using Firebase for auth, storage, and messaging. Added Zoom SDK for creator streaming. Indexed database queries to improve response time and reduce cold start lags.",
    liveUrl: [
      {
        label: "Web",
        url: "https://www.afropolis.org/",
      },
    ],
    githubUrl: "",
  },
];
