"use client";

import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePic from "../Accessaries/raj_pfp.png";
import { useEffect, useState } from "react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/rajpatil005/", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raj-patil-cse/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:rajvardhan.patil525@gmail.com", icon: Mail },
];

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState("services");

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const sections = ["about", "skills", "contact"];

    const handleScroll = () => {
      let current = "about";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const lenis = (window as any).lenis;

    if (lenis) {
      lenis.scrollTo(el, {
        duration: 1.2,
        offset: 0,
        lock: false,
      });
    } else {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActive(id);
  };

  return (
    <section className="relative min-h-screen w-full overflow-visible px-4 sm:px-6">
      {/* NAV */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 md:right-6 md:left-auto md:translate-x-0 flex gap-4 md:gap-6 text-[10px] sm:text-sm tracking-widest uppercase text-gray-300 z-50 pointer-events-auto">
        {" "}
        {["about", "skills", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className={`flex flex-col items-center transition-all duration-300
text-gray-300 nav-text [text-shadow:
0_2px_10px_rgba(0,0,0,1),
0_10px_30px_rgba(0,0,0,0.95),
0_25px_70px_rgba(0,0,0,0.9),
0_50px_120px_rgba(0,0,0,0.75)]
`}
          >
            {item}
            {active === item && (
              <span className="mt-1 w-1 h-1 bg-white rounded-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 pb-24">
        {/* BACK GLOW */}
        <div className="absolute top-[18%] w-[280px] h-[280px] rounded-full bg-yellow-400/20 blur-[90px] pointer-events-none" />
        {/* IMAGE CONTAINER */}
        <div
          className={`relative z-20 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* IMAGE */}
          <div className="relative">
            <Image
              src={profilePic}
              alt="Raj Patil"
              priority
              className="relative left-10 top-3 w-[260px] h-auto object-cover [filter:drop-shadow(0_0_30px_rgba(0,0,0,0.6))]"
            />
            {/* PREMIUM SEPARATOR */}
            <div className="relative mt-3 flex justify-center">
              {/* deep black glow */}
              <div className="absolute h-[20px] w-screen rounded-full bg-black blur-3xl opacity-90" />
              {/* separator */}
              <div className="relative h-[2px] w-[89vw] rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent shadow-[0_12px_35px_rgba(0,0,0,1)] animate-pulse" />{" "}
            </div>
          </div>

          {/* FLOATING NAME */}
          <div
            className={`absolute left-9 top-23 z-30 transition-all duration-1000 delay-300 ${
              loaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            {" "}
            <div className="text-[52px] leading-[0.9] font-light tracking-tight text-white opacity-80 [text-shadow:0_0_12px_rgba(255,255,255,0.18),0_10px_30px_rgba(0,0,0,0.9)]">
              {" "}
              <div>Raj</div>
              <div>Patil.</div>
            </div>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div
          className={`mt-10 flex gap-4 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400/10"
            >
              <link.icon className="h-4 w-4 text-white group-hover:text-yellow-400" />
            </a>
          ))}
        </div>

        {/* CONTENT */}
        <div
          className={`mt-10 text-center max-w-sm px-6 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-400">
            Introduction
          </p>

          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
            Full Stack Developer
          </p>

          <p className="mt-5 text-sm leading-7 text-gray-300">
            CSE student and MERN stack developer passionate about building
            scalable real-world applications and backend architectures.
          </p>

          <button
            onClick={() => scrollTo("projects")}
            className="mt-7 rounded-full border border-yellow-400 bg-yellow-400 px-6 py-3 text-xs font-medium tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-transparent hover:text-yellow-400"
          >
            View Projects
          </button>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        {/* IMAGE */}
        <div
          className={`absolute top-[8%] left-1/2 -translate-x-1/2 z-20 transition-all duration-1300 ease-out ${
            loaded
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          {" "}
          <Image
            src={profilePic}
            alt="Raj Patil"
            width={700}
            height={980}
            priority
            className="object-contain"
          />
        </div>

        {/* SHADOW */}
        <div className="absolute top-[74%] left-1/2 -translate-x-1/2 w-[420px] h-[70px] bg-black/50 blur-[50px] rounded-full z-10"></div>

        {/* LEFT CONTENT */}
        <div
          className={`absolute left-[15%] top-[25%] z-30 transition-all duration-1000 ${
            loaded ? "translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="text-[170px] leading-[1.1] text-white opacity-80">
            <div>Raj</div>
            <div className="-mt-6">Patil.</div>
          </div>

          <div className="mt-6 flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:text-yellow-400 hover:border-yellow-400"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={`absolute right-[8%] top-[32%] max-w-md text-gray-300 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-gray-400">
            - Introduction
          </p>

          <p className="mb-5 text-lg uppercase tracking-[0.2em] text-yellow-400">
            Full Stack Developer
          </p>

          <p className="text-lg mb-6">
            CSE student and MERN stack developer passionate about building
            scalable real-world applications and backend architectures.
          </p>

          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 bg-yellow-400 text-black text-sm font-medium rounded-full hover:opacity-90 transition"
          >
            View Projects
          </button>
        </div>
      </div>

      {/* SCROLL ICON */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce">
        <ArrowDown size={22} />
      </div>
    </section>
  );
}
