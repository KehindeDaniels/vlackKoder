"use client";

import { BsWhatsapp } from "react-icons/bs";
import SectionHeader from "../SectionHeader";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-background text-foreground"
    >
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center mb-12">
          <SectionHeader
            title="Ready to Ship Your Next Product?"
            subtitle="Reach out to discuss your project, team goals, or engineering needs."
          />
        </div>

        {/* Animated Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/xkgrlddb"
          method="POST"
          className="bg-card dark:bg-black/5 border border-border rounded-xl p-6 shadow-md space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full p-3 rounded-lg border bg-background border-border text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full p-3 rounded-lg border bg-background border-border text-sm"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your message..."
            rows={5}
            required
            className="w-full p-3 rounded-lg border bg-background border-border text-sm"
          />
          <button
            type="submit"
            className="bg-[hsl(var(--yellow))] text-black px-6 py-3 rounded-full font-medium hover:brightness-110 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Animated WhatsApp CTA */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/+2348087316297"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--blue))] hover:underline"
          >
            <BsWhatsapp size={20} />
            Message me on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
