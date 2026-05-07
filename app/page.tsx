"use client";

import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 -z-10 grid grid-rows-[3fr_3fr_5fr_3fr_3fr]">
        <div className="bg-[#2e3446]" />
        <div className="bg-[#252b3a]" />
        <div className="bg-[#2e3446]" />
        <div className="bg-[#252b3a]" />
        <div className="bg-[#2e3446]" />
      </div>

      <HeroSection />

      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
