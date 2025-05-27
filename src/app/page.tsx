"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <>
      <Hero />
      <AboutMe />
      <FeaturedProjects />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
