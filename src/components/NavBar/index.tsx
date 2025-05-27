"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ModeToggle } from "../ModeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  // { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

function NavLinks({ isMobile = false }: { isMobile?: boolean }) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        isMobile ? "flex flex-col space-y-4" : "flex space-x-8 justify-center"
      )}
    >
      {navItems.map(({ label, href }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "relative inline-block text-base font-medium transition-colors duration-200 text-foreground",
              // underline base
              "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1",
              "after:h-[2px] after:w-1/2 after:bg-[hsl(var(--yellow))]",
              "after:transition-transform after:duration-300 after:origin-center",
              // Active page or hover
              isActive
                ? "after:scale-x-100 after:opacity-100"
                : "after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-100"
            )}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <div className="w-10 h-10 rounded-lg bg-[#0D1321] text-[hsl(var(--blue))] dark:bg-[#0D1321] flex items-center justify-center border border-[hsl(var(--blue))] text-sm font-bold shadow-sm">
              JA
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center items-center">
            <NavLinks />
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <Link
              href="/contact"
              className="px-4 py-2 rounded-md text-sm font-semibold bg-[hsl(var(--blue))] text-white hover:brightness-110 transition dark:bg-[hsl(var(--yellow))] dark:text-black"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-4">
            <ModeToggle />
            <Sheet>
              <SheetTrigger aria-label="Open menu">
                <Menu className="h-6 w-6 text-foreground" />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-64 p-6 space-y-4 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
              >
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <div className="flex flex-col space-y-4">
                  {/* Logo */}
                  <Link href="/" aria-label="Home">
                    <div className="w-10 h-10 rounded-lg bg-[#0D1321] text-[hsl(var(--blue))] dark:bg-[#0D1321] flex items-center justify-center border border-[hsl(var(--blue))] text-sm font-bold shadow-sm">
                      JA
                    </div>
                  </Link>

                  <NavLinks isMobile />

                  <Link
                    href="/contact"
                    className="rounded-md border border-[hsl(var(--blue))] px-4 py-2 text-sm font-medium text-[hsl(var(--blue))] hover:bg-[hsl(var(--blue))] hover:text-white transition dark:border-[hsl(var(--yellow))] dark:text-[hsl(var(--yellow))] dark:hover:bg-[hsl(var(--yellow))] dark:hover:text-black"
                  >
                    Contact Me →
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
