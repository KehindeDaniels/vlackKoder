export type Project = {
  id: string;
  title: string;
  description: string;
  metrics: string[];
  stack: string[];
  image: string;
  caseStudy: string;
  liveUrl?: {
    label: "Web" | "iOS" | "Android";
    url: string;
  }[];
  githubUrl?: string;
};
