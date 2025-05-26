"use client";

import Image from "next/image";
import Link from "next/link";
import { asset } from "@/../public/images";
import { Code, Palette, Pen } from "lucide-react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-background text-foreground"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image with layered circle background */}
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
            {/* Yellow circle */}
            <div className="absolute inset-0 rounded-full bg-[hsl(var(--yellow))] dark:bg-[hsl(var(--yellow)/0.3)]" />

            {/* Image that scales upward but keeps bottom flush */}
            <div className="absolute inset-0 z-10 overflow-hidden rounded-full">
              <Image
                src={asset.me}
                alt="Kehinde Daniels"
                fill
                className="object-cover transform scale-[1.2] translate-y-[20%]"
                priority
              />
            </div>
          </div>

          {/* Text section */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-muted-foreground font-medium italic mb-2">
              About me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Hello, I’m Kehinde Daniels
            </h2>
            <p className="italic text-muted-foreground mb-4">
              If there’s a problem, there’s an idea. If there’s no problem,
              there’s always room for improvement.
            </p>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              As a front-end developer, this mindset has been my fuel for
              innovation and creativity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              During my 1-year service in Nigeria (NYSC) as an environmental
              scientist, I noticed most processes were paper-based. As someone
              who dislikes paperwork, I found this overwhelming. That’s when I
              came up with the idea for{" "}
              <a
                href="https://envalab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--blue))] font-medium underline underline-offset-2"
              >
                EnvAlab↗
              </a>
              , a Laboratory Management System designed to automate and
              streamline these processes.
            </p>
          </div>
        </div>

        {/* Icon Cards - Frosted Glass Effect */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: (
                <Code className="w-6 h-6 mx-auto mb-2 text-gray-800 dark:text-[hsl(var(--yellow))]" />
              ),
              title: "I code",
              desc: "Go to project",
              href: "/projects",
            },
            {
              icon: (
                <Palette className="w-6 h-6 mx-auto mb-2 text-gray-800 dark:text-[hsl(var(--yellow))]" />
              ),
              title: "I design",
              desc: "View my designs",
              href: "/#designs",
            },
            {
              icon: (
                <Pen className="w-6 h-6 mx-auto mb-2 text-gray-800 dark:text-[hsl(var(--yellow))]" />
              ),
              title: "I write",
              desc: "View my Blog",
              href: "/blog",
            },
          ].map(({ icon, title, desc, href }, i) => (
            <Link
              key={i}
              href={href}
              className="rounded-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md px-6 py-6 text-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] ring-1 ring-white/10 hover:ring-white/20 transition"
            >
              {icon}
              <div className="text-lg font-semibold mb-1">{title}</div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
