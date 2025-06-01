"use client";

import { useEffect } from "react";
import { Project } from "@/types/project";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { SiGooglechrome, SiGoogleplay, SiAppstore } from "react-icons/si";

type Props = {
  open: boolean;
  setOpen: (val: boolean) => void;
  project: Project;
};

const getButtonLabelAndIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case "web":
      return {
        text: "View Web App",
        icon: (
          <SiGooglechrome size={16} className="text-white dark:text-black/50" />
        ),
      };
    case "android":
      return {
        text: "Get on Play Store",
        icon: (
          <SiGoogleplay size={16} className="text-white dark:text-black/50" />
        ),
      };
    case "ios":
      return {
        text: "Download on App Store",
        icon: (
          <SiAppstore size={16} className="text-white/50 dark:text-black/50" />
        ),
      };
    default:
      return {
        text: "Visit Site",
        icon: (
          <SiGooglechrome size={16} className="text-black dark:text-black/50" />
        ),
      };
  }
};

export default function ProjectModal({ open, setOpen, project }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="relative w-[95vw] max-w-6xl overflow-hidden border border-white/10 backdrop-blur-md rounded-xl shadow-xl bg-[rgba(255,255,255,0.85)] dark:bg-white/5"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full border border-white/10 dark:bg-white/5 rounded-xl">
              {/* LEFT: Image */}
              <div className="relative h-[300px] md:h-auto md:min-h-[500px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* RIGHT: Content */}
              <div className="p-6 md:p-10 overflow-y-auto max-h-[90vh] space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {project.title}
                </h2>

                <p className="text-sm text-muted-foreground">
                  {project.caseStudy}
                </p>

                <div>
                  <h4 className="font-semibold text-sm mb-1">Stack Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-1">Achievements</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {project.metrics.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>

                {/* Footer CTAs */}
                <div className="flex gap-3 pt-4 flex-wrap">
                  {project.liveUrl?.map((link) => {
                    const { text, icon } = getButtonLabelAndIcon(link.label);
                    return (
                      <Button key={link.label} variant="default" asChild>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          {icon}
                          {text}
                        </a>
                      </Button>
                    );
                  })}
                  {project.githubUrl && (
                    <Button variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub Repo
                      </a>
                    </Button>
                  )}
                </div>

                {/* Close Icon */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-black dark:text-white hover:text-yellow-400 transition"
                  aria-label="Close modal"
                >
                  <X size={24} strokeWidth={2} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
