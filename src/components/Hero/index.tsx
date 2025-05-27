"use client";

import Link from "next/link";
import {
  FaProjectDiagram,
  FaGooglePlay,
  FaBoxOpen,
  FaGithub,
} from "react-icons/fa";

const metrics = [
  {
    icon: <FaProjectDiagram size={24} />,
    title: "7+ Products",
    subtitle: "Shipped",
    delay: 0,
  },
  {
    icon: <FaGooglePlay size={24} />,
    title: "20M+ Installs",
    subtitle: "Across Africa",
    delay: 100,
  },
  {
    icon: <FaBoxOpen size={24} />,
    title: "100K+ Downloads",
    subtitle: "Package Downloads",
    delay: 200,
  },
  {
    icon: <FaGithub size={24} />,
    title: "4+ Contributions",
    subtitle: "Open Source",
    delay: 300,
  },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-background py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight text-foreground"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Need a software engineer on your team to take your product from idea
          to scale?
        </h1>

        <p
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          I help startups and growing tech companies launch mobile and web
          platforms with clean architecture and real-world reliability.
        </p>

        <div
          className="relative mt-10 inline-block"
          data-aos="zoom-in"
          data-aos-delay="300"
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
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {metrics.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={item.delay}
              className="backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-xl border border-white/10 p-5 text-center shadow-sm transition-colors"
            >
              <div className="flex justify-center items-center text-primary mb-2">
                {item.icon}
              </div>
              <div className="text-base font-semibold text-foreground">
                {item.title}
              </div>
              <div className="text-sm text-muted-foreground">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
