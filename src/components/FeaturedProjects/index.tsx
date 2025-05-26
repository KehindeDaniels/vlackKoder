"use client";

import { projects } from "@/lib/data/projectData";
import ProjectCard from "@/components/cards/ProjectCard";
import Link from "next/link";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-24 md:py-32 bg-background text-foreground">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Featured Projects
        </h2>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
          {featured.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* View more button */}
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-block bg-[hsl(var(--yellow))] text-black px-6 py-3 rounded-full font-medium hover:brightness-110 transition"
          >
            View More Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
