"use client";

import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen text-white">
      {" "}
      {/* BACKGROUND LAYERS */}
      <div
        className="
    absolute inset-0 -z-10 grid
    h-[6000px]
    lg:h-auto
    grid-rows-[830px_1050px_1600px_800px_1200px]
    lg:grid-rows-[100vh_100vh_166.67vh_100vh_100vh]
  "
      >
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
