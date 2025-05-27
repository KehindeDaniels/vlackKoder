"use client";

// import { Section } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  // SiNodedotjs,
  SiFramer,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiSocketdotio,
  Si1001Tracklists,
  SiApplearcade,
  SiCodeblocks,
  SiJira,
  SiAmazon,
  SiGraphql,
  SiFirebase,
} from "react-icons/si";
import SectionHeader from "../SectionHeader";
import { useState } from "react";
import { motion } from "framer-motion";
const skills = [
  { name: "React Native", icon: <SiReact className="w-6 h-6 text-sky-500" /> },
  { name: "React.js", icon: <SiReact className="w-6 h-6 text-sky-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-6 h-6 text-black dark:text-white" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-6 h-6 text-blue-600" />,
  },
  {
    name: "JavaScript",
    icon: <SiNodedotjs className="w-6 h-6 text-yellow-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
  },
  { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 text-green-600" /> },
  { name: "GraphQL", icon: <SiGraphql className="w-6 h-6 text-pink-600" /> },
  { name: "Framer", icon: <SiFramer className="w-6 h-6 " /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-6 h-6 text-orange-500" />,
  },
  { name: "Azure", icon: <SiGit className="w-6 h-6 text-blue-700" /> },
  { name: "AWS", icon: <SiAmazon className="w-6 h-6 text-orange-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-500" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-6 h-6 text-blue-800" />,
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio className="w-6 h-6 text-gray-600" />,
  },
  {
    name: "100ms",
    icon: <Si1001Tracklists className="w-6 h-6 text-gray-400" />,
  },
  {
    name: "AppCenter",
    icon: <SiApplearcade className="w-6 h-6 text-indigo-500" />,
  },
  {
    name: "CodePush",
    icon: <SiCodeblocks className="w-6 h-6 text-blue-400" />,
  },
  { name: "Appsflyer", icon: <SiGit className="w-6 h-6 text-sky-600" /> },
  { name: "Re.Pack", icon: <SiGit className="w-6 h-6 text-purple-600" /> },
  {
    name: "Module Federation",
    icon: <SiGit className="w-6 h-6 text-gray-500" />,
  },
  { name: "GitHub", icon: <SiGit className="w-6 h-6 text-black" /> },
  { name: "Bitbucket", icon: <SiGit className="w-6 h-6 text-blue-700" /> },
  { name: "JIRA", icon: <SiJira className="w-6 h-6 text-blue-600" /> },
];

export default function SkillsSection() {
  const [expanded, setExpanded] = useState(false);
  const visibleSkills = expanded ? skills : skills.slice(0, 12);

  return (
    <section className="py-24 md:py-32 bg-background text-foreground">
      <div className="container mx-auto max-w-6xl px-4 text-center ">
        <SectionHeader
          title="Tech Stack & Skills"
          subtitle="Tools I use to build fast, scalable, and user-centered products."
        />

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {visibleSkills.map((skill, index) => (
            <motion.div
              layout
              key={`${skill.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card/60 dark:bg-black/10 backdrop-blur-sm hover:shadow-lg transition"
            >
              {skill.icon}
              <span className="mt-3 text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-8 text-sm font-medium text-[hsl(var(--blue))] hover:underline"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}
