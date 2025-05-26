"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  // SiNodedotjs,
  SiFigma,
  SiFramer,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiSanity,
  SiStrapi,
} from "react-icons/si";

const skills = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-6 h-6 text-black dark:text-white" />,
  },
  { name: "React", icon: <SiReact className="w-6 h-6 text-sky-500" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-6 h-6 text-blue-600" />,
  },
  {
    name: "NodeJs",
    icon: <SiNodedotjs className="w-6 h-6 text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
  },
  // { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 text-green-600" /> },
  { name: "Figma", icon: <SiFigma className="w-6 h-6 text-pink-500" /> },
  {
    name: "Framer Motion",
    icon: <SiFramer className="w-6 h-6 text-black dark:text-white" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-6 h-6 text-blue-800" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-500" /> },
  { name: "Git", icon: <SiGit className="w-6 h-6 text-orange-500" /> },
  { name: "Strapi", icon: <SiStrapi className="w-6 h-6 text-purple-200" /> },
  {
    name: "Sanity",
    icon: <SiSanity className="w-6 h-6 text-black dark:text-white" />,
  },
];

export default function SkillsSection() {
  return (
    <section className="py-24 md:py-32 bg-background text-foreground">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          I use modern tools and frameworks to craft fast, accessible, and
          responsive applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:shadow-lg transition"
            >
              {skill.icon}
              <span className="mt-3 text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
