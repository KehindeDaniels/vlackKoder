import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import MyDesigns from "@/components/MyDesigns";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <SkillsSection />
      <FeaturedProjects />
      <MyDesigns />
      <ContactSection />
    </>
  );
}
