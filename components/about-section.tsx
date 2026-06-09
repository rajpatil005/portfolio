import { FadeIn } from "./fade-in";
import { Code, Palette, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Product Engineer",
    description:
      "Building scalable full stack systems using modern frameworks and strong backend architecture.",
  },
  {
    icon: Palette,
    title: "Design Focus",
    description:
      "Combining engineering with UI sensibility to create clean and modern digital experiences.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Focused on fast, optimized and maintainable web applications.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 pt-20 pb-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            About
          </p>

          <h2 className="mt-4 text-4xl font-bold [font-family:var(--font-mazzard)]">
            Any Type Of Query
            <br />& Discussion
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <FadeIn delay={100}>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a full stack developer focused on building scalable web
              applications and backend systems. I enjoy designing architectures
              that handle real-world problems and deliver smooth user
              experiences.
            </p>
          </FadeIn>

          <div className="grid gap-6">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={200 + i * 100}>
                <div className="flex gap-5 rounded-xl bg-[#252b3a] p-6 border border-white/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
