"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types/project";
import { Button } from "@/components/ui/button";
import ProjectModal from "../ProjectModal";
import { X } from "lucide-react";
import { SiGoogleplay, SiAppstore, SiGooglechrome } from "react-icons/si";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const [open, setOpen] = useState(false);
  const [showLinksModal, setShowLinksModal] = useState(false);

  const handleLiveClick = () => {
    if (project.liveUrl && project.liveUrl.length === 1) {
      window.open(project.liveUrl[0].url, "_blank");
    } else {
      setShowLinksModal(true);
    }
  };

  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "web":
        return (
          <SiGooglechrome
            size={18}
            // color="black"
            className="text-black dark:text-white/50"
          />
        );
      case "ios":
        return (
          <SiAppstore size={18} className="text-black dark:text-white/50" />
        );
      case "android":
        return (
          <SiGoogleplay size={18} className="text-black dark:text-white/50" />
        );
      default:
        return null;
    }
  };

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

          <div className="flex gap-3 mt-auto flex-wrap">
            <Button variant="default" onClick={() => setOpen(true)}>
              View Case Study
            </Button>

            {project.liveUrl && project.liveUrl.length > 0 && (
              <Button variant="outline" onClick={handleLiveClick}>
                Live Link
              </Button>
            )}
          </div>
        </div>
      </div>

      <ProjectModal open={open} setOpen={setOpen} project={project} />

      {/* Live Links Modal */}
      {showLinksModal && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/50"
          onClick={() => setShowLinksModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white dark:bg-black/50 backdrop-blur-sm text-foreground rounded-xl shadow-xl p-6 w-[90vw] max-w-sm space-y-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowLinksModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h3 className="text-lg font-semibold">Choose a Platform</h3>
            <ul className="space-y-3">
              {project.liveUrl?.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:underline"
                  >
                    {getIcon(link.label)} {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
