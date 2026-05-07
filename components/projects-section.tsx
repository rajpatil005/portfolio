import Image from "next/image";
import { FadeIn } from "./fade-in";

const projects = [
  {
    title: "Bus Tracking System",
    image: "/images/project-1.jpeg",
    link: "https://public-transport-tracking-steel.vercel.app/login",
  },
  {
    title: "Taskora",
    image: "/images/project-2.jpeg",
    link: "https://taskora-rose.vercel.app/",
  },
  {
    title: "Analytics UI",
    image: "/images/project-3.jpg",
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl font-bold [font-family:var(--font-mazzard)]">
            All Creative Works,
            <br />
            Selected Projects
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 150}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#2e3446] transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40"
              >
                <div className="relative h-[260px] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
