import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <FeaturedProjects />
      <SkillsSection />
      {/* <MyDesigns /> */}
      <ContactSection />
    </>
  );
}
