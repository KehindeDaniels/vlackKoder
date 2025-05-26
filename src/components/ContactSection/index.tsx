"use client";

import { BsWhatsapp } from "react-icons/bs";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-background text-foreground"
    >
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Let’s Connect</h2>
          <p className="text-muted-foreground mt-4">
            Have a project in mind? Let’s talk. I’m open to collaborations,
            freelance opportunities, or just geeking out over cool UI ideas.
          </p>
        </div>

        <form
          action="https://formspree.io/f/meogdrkk"
          method="POST"
          className="bg-card border border-border rounded-xl p-6 shadow-md space-y-4"
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
        </form>

        {/* WhatsApp CTA */}
        <div className="text-center mt-8">
          <a
            href="https://wa.me/2348052463881"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--blue))] hover:underline"
          >
            <BsWhatsapp size={20} />
            Message me on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
