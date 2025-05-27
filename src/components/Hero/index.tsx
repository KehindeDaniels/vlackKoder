"use client";

import Link from "next/link";
import {
  FaProjectDiagram,
  FaGooglePlay,
  FaBoxOpen,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";

const metrics = [
  {
    icon: <FaProjectDiagram size={24} />,
    title: "7+ Products",
    subtitle: "Shipped",
  },
  {
    icon: <FaGooglePlay size={24} />,
    title: "20M+ Installs",
    subtitle: "Across Africa",
  },
  {
    icon: <FaBoxOpen size={24} />,
    title: "100K+ Downloads",
    subtitle: "Package Downloads",
  },
  {
    icon: <FaGithub size={24} />,
    title: "4+ Contributions",
    subtitle: "Open Source",
  },
];

export default function Hero() {
  return (
    <motion.section
      className="relative w-full bg-background py-24 md:py-32 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Need a software engineer on your team to take your product from idea
          to scale?
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          I help startups and growing tech companies launch mobile and web
          platforms with clean architecture and real-world reliability.
        </motion.p>

        <motion.div
          className="relative mt-10 inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-10 -right-16 rotate-[25deg] animate-bounce text-[28px]">
            ↪️
          </div>
          <Link
            href="/#about"
            className="inline-block rounded-full px-6 py-3 font-medium bg-[hsl(var(--yellow))] text-black shadow hover:brightness-110 transition"
          >
            Find out how
          </Link>
        </motion.div>

        {/* Metrics */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
            hidden: {},
          }}
          viewport={{ once: true }}
        >
          {metrics.map((item, index) => (
            <MetricCard key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

type MetricCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

function MetricCard({ icon, title, subtitle }: MetricCardProps) {
  return (
    <motion.div
      className="backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-xl border border-white/10 p-5 text-center shadow-sm transition-colors"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center items-center text-primary mb-2">
        {icon}
      </div>
      <div className="text-base font-semibold text-foreground">{title}</div>
      <div className="text-sm text-muted-foreground">{subtitle}</div>
    </motion.div>
  );
}
