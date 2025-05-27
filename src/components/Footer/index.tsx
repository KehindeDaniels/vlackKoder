"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaStackOverflow,
  FaNpm,
} from "react-icons/fa";

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const contributions = [
  {
    name: "Animated Linear Segmented Tab (npm)",
    href: "https://www.npmjs.com/package/linear-segmented-tab",
    icon: FaNpm,
  },
  {
    name: "Camera Kit – Issue #714",
    href: "https://github.com/teslamotors/react-native-camera-kit/issues/714",
    icon: FaGithub,
  },
  {
    name: "Re.Pack – Issue #718",
    href: "https://github.com/callstack/repack/issues/718",
    icon: FaGithub,
  },
  {
    name: "CodePush – Issue #132",
    href: "https://github.com/microsoft/code-push-server/issues/131",
    icon: FaGithub,
  },
];

const socialLinks = [
  {
    href: "https://github.com/adeleke",
    icon: <FaGithub size={20} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/adeleke-joseph",
    icon: <FaLinkedin size={20} />,
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/2348052463881",
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
  },
  {
    href: "https://stackoverflow.com/users/your-profile-id",
    icon: <FaStackOverflow size={20} />,
    label: "Stack Overflow",
  },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-4 text-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-2">Adeleke Joseph</h3>
          <p className="text-sm text-muted-foreground">
            Senior Software Engineer. I build scalable systems and ship reliable
            mobile/web products — from MVPs to super apps.
          </p>
          <div className="flex gap-4 mt-4">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-[hsl(var(--blue))] transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contributions */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="text-sm font-semibold mb-3">Contributions</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {contributions.map(({ name, href, icon: Icon }) => (
              <li key={name} className="flex items-center gap-2">
                <Icon className="text-muted-foreground" />
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="mt-12 text-center text-xs text-muted-foreground"
        data-aos="fade-in"
        data-aos-delay="300"
      >
        &copy; {new Date().getFullYear()} Adeleke Joseph. All rights reserved.
      </div>
    </footer>
  );
}
