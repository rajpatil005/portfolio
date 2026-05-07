"use client";
import { FadeIn } from "./fade-in";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/rajpatil005/", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raj-patil-cse/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:rajvardhan.patil525@gmail.com", icon: Mail },
];

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
    .value;

  const subject = `New Contact Message from ${name}`;

  const body = `
Name: ${name}
Email: ${email}

Message:
${message}
  `;

  const mailtoLink = `mailto:rajvardhan.patil525@gmail.com?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};

export function ContactSection() {
  return (
    <section id="contact" className=" px-6 pt-100 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <FadeIn>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {"Let's work together"}
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                {
                  "Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas."
                }
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="mt-10 flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/10"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
