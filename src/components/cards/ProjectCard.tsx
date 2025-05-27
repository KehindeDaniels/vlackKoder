"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types/project";
import { Button } from "@/components/ui/button";
import ProjectModal from "../ProjectModal";
// import ProjectModal from "./ProjectModal";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="rounded-xl border bg-white/10 dark:bg-white/5 backdrop-blur-md border-white/10 text-card-foreground shadow-sm overflow-hidden flex flex-col h-full transition">
        {/* Image */}
        <div className="relative w-full h-48">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="text-sm text-muted-foreground space-y-1 mb-6">
              {project.metrics.map((metric, i) => (
                <div key={i}>• {metric}</div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-auto">
            <Button variant="default" onClick={() => setOpen(true)}>
              View Case Study
            </Button>
            {project.liveUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <ProjectModal open={open} setOpen={setOpen} project={project} />
    </>
  );
}
