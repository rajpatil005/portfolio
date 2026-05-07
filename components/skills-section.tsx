import { FadeIn } from "./fade-in";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Express",
  "Tailwind",
  "Docker",
  "AWS",
];

export function SkillsSection() {
  return (
    <section id="skills" className=" px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold [font-family:var(--font-mazzard)]">
            My Toolkit
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {skills.map((skill, i) => (
            <FadeIn key={skill} delay={i * 100}>
              <div className="flex items-center justify-center rounded-lg bg-[#252b3a] border border-white/5 py-6 text-gray-300 hover:text-yellow-400 transition">
                {skill}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
