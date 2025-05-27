"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { asset } from "../../../public/images";

export default function AboutMe() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.section
      id="about"
      className="py-24 md:py-32 bg-background"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* IMAGE + NAME */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-60 h-80 md:w-72 md:h-96 rounded-t-xl overflow-hidden shadow-md bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10">
              <Image
                src={asset.me}
                alt="Adeleke Joseph"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-4 text-sm md:text-base leading-tight">
              <p className="font-semibold text-[hsl(var(--foreground))] dark:text-slate-200">
                Adeleke Joseph
              </p>
              <p className="text-muted-foreground text-xs">
                Senior Mobile/Web Developer · 6+ Years Experience
              </p>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Clean Code Costs Less. Eventually.
            </h2>

            <div
              className={`relative transition-all duration-300 ease-in-out ${
                expanded ? "max-h-[2000px]" : "max-h-[220px] overflow-hidden"
              }`}
            >
              <div className="text-muted-foreground leading-relaxed text-base md:text-lg space-y-4">
                <p>
                  Many teams try to save money by hiring cheap developers. But
                  what they save upfront, they lose in rewrites, bugs, missed
                  deadlines, and technical debt.
                </p>

                <p className="font-semibold text-foreground">
                  Why not do it right the first time?
                </p>

                <p>
                  I’m{" "}
                  <span className="text-foreground font-medium">
                    Joseph Adeleke
                  </span>
                  , a senior software engineer with over 6 years of experience
                  building scalable mobile and web platforms for startups and
                  major tech brands like MTN. My work has powered products used
                  by over 20 million users across 7 African countries—from
                  social platforms to fintech super apps.
                </p>

                <p>
                  I don’t just write code. I architect solutions, build systems
                  that last, and help teams move faster without breaking things.
                  From CI/CD pipelines to cross-platform UI systems, I bring
                  structure, clarity, and real ownership to engineering teams.
                </p>
              </div>

              {!expanded && (
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background/95 to-transparent pointer-events-none" />
              )}
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-sm font-medium text-[hsl(var(--blue))] hover:underline transition-colors"
            >
              {expanded ? "See less" : "Read more"}
            </button>

            {/* CTA */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href="/#projects"
                className="inline-block rounded-full px-6 py-3 font-medium bg-[hsl(var(--yellow))] text-black shadow hover:brightness-110 transition"
              >
                Explore My Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
