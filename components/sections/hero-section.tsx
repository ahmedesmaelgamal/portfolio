"use client";

import { useEffect, useState } from "react";
import { site, summary } from "@/lib/site-data";

const roles = [
  "Backend Engineer",
  "Laravel Developer",
  "API Architect",
  "PHP Developer",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setRoleText(currentRole.slice(0, roleText.length + 1));
          if (roleText.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setRoleText(currentRole.slice(0, roleText.length - 1));
          if (roleText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center relative">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Availability badge */}
          <div className="blur-in inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-mono text-muted">
              {site.availability}
            </span>
          </div>

          {/* Name */}
          <h1 className="heading-display text-[clamp(2.5rem,5vw,4.5rem)] blur-in-delay-1">
            {site.name}
          </h1>

          {/* Role with typing effect */}
          <div className="mt-4 blur-in-delay-2">
            <span className="font-mono text-lg md:text-xl text-accent">
              {roleText}
              <span className="cursor-blink text-accent">_</span>
            </span>
          </div>

          {/* Summary */}
          <p className="text-body mt-8 max-w-xl blur-in-delay-3">
            {summary}
          </p>

          {/* Links */}
          <div className="mt-10 flex flex-wrap items-center gap-4 blur-in-delay-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent/10 border border-accent/20 px-5 py-2.5 text-sm font-mono text-accent hover:bg-accent/15 transition-colors duration-200"
            >
              View Projects
              <span className="text-accent/60">→</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-mono text-muted hover:text-foreground hover:border-border-subtle transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Quick info */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 blur-in-delay-4">
            <span className="text-xs font-mono text-muted">
              <span className="text-accent/60">location:</span> {site.location}
            </span>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted hover:text-accent transition-colors duration-200"
            >
              <span className="text-accent/60">github:</span> ahmedesmaelgamal
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted hover:text-accent transition-colors duration-200"
            >
              <span className="text-accent/60">linkedin:</span> ahmed-esmael-gamal
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[0.6rem] font-mono text-muted/40 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
      </div>
    </section>
  );
}
