"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        {title}
      </h2>

      <div className="mt-3 flex items-center justify-center gap-4">
        <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-muted-foreground to-muted-foreground/10" />
        <p className="text-sm md:text-base text-muted-foreground whitespace-nowrap">
          {subtitle}
        </p>
        <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-muted-foreground to-muted-foreground/10" />
      </div>
    </motion.div>
  );
}
