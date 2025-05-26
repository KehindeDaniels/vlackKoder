"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProjectCardProps = {
  title: string;
  slug: string;
  image: string;
  tags: string[];
  description: string;
  liveLink?: string;
  caseLink?: string;
  upcoming?: boolean;
};

export default function ProjectCard({
  title,
  image,
  tags,
  description,
  liveLink,
  caseLink,
  upcoming = false,
}: ProjectCardProps) {
  return (
    <div className="relative group rounded-xl border border-border bg-card text-card-foreground shadow-sm hover:shadow transition overflow-hidden backdrop-blur-sm dark:bg-[hsl(var(--background)/0.3)]">
      {/* Image */}
      <div className="relative w-full h-52 sm:h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>

      {/* Coming Soon Overlay */}
      {upcoming && (
        <div className="absolute top-0 left-0 right-0 bottom-60 bg-background/60 backdrop-blur-xs flex items-center justify-center z-10">
          <span className="text-lg bottom-0 font-semibold text-foreground bg-muted px-4 py-1 rounded-full shadow-sm border border-border">
            🔒 Coming Soon
          </span>
        </div>
      )}

      {/* Content */}
      <div className={`p-6 ${upcoming ? "opacity-60" : ""}`}>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>

        <div className="mt-6 flex gap-4 flex-wrap">
          {!upcoming && liveLink && (
            <Link
              href={liveLink}
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-md font-medium bg-[hsl(var(--blue))] text-white flex items-center gap-2 hover:brightness-110 transition"
            >
              Preview Site <ExternalLink size={14} />
            </Link>
          )}

          {caseLink && (
            <Link
              href={upcoming ? "#" : caseLink}
              onClick={(e) => upcoming && e.preventDefault()}
              aria-disabled={upcoming}
              className={cn(
                "px-4 py-2 text-sm rounded-md font-medium border border-[hsl(var(--blue))] flex items-center gap-2 transition",
                upcoming
                  ? "text-muted-foreground border-muted cursor-not-allowed opacity-50"
                  : "text-[hsl(var(--blue))] hover:bg-[hsl(var(--blue))] hover:text-white"
              )}
            >
              View Case Study <ExternalLink size={14} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
