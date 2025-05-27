"use client";

import { motion } from "framer-motion";
// import { projects } from "@/components/featured/projects"; // ✅ Import from new file
import ProjectCard from "../cards/ProjectCard";
import { projects } from "@/lib/data/projectData";
import SectionHeader from "../SectionHeader";
// import sectionHeader from "../SectionHeader";

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Animated Section Title */}
        <SectionHeader
          title="Featured Projects"
          subtitle="High-impact apps, live deployments, and 20M+ users across Africa."
        />

        {/* Project Cards with Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
