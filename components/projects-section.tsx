import Image from "next/image";
import { FadeIn } from "./fade-in";

const projects = [
  {
    title: "Bus Tracking System",
    image: "/images/project-1.jpeg",
  },
  {
    title: "Taskora",
    image: "/images/project-2.jpeg",
  },
  {
    title: "Analytics UI",
    image: "/images/project-3.jpg",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className=" px-6 py-32">
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
              <div className="overflow-hidden rounded-xl border border-white/5 bg-[#2e3446]">
                <div className="relative h-[260px] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
