"use client";

import ProjectCard from "../cards/ProjectCard";
import { projects } from "@/lib/data/projectData";
import SectionHeader from "../SectionHeader";

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <SectionHeader
          title="Featured Projects"
          subtitle="High-impact apps, live deployments, and 20M+ users across Africa."
        />

        {/* Project Cards with AOS Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100} // Stagger effect
              className="aos-init aos-animate"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
