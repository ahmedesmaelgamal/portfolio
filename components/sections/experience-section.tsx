"use client";

import { useScrollReveal } from "@/lib/hooks";
import { experience } from "@/lib/site-data";

export function ExperienceSection() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();

  return (
    <section id="experience" className="section-pad border-t border-border">
      <div className="container">
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""}`}
        >
          <span className="label">Experience</span>
          <h2 className="heading-section text-2xl md:text-3xl mt-3">
            Work History
          </h2>
        </div>

        <div className="mt-12 space-y-0">
          {experience.map((exp, i) => {
            return (
              <ExperienceItem key={i} exp={exp} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  exp,
  index,
}: {
  exp: (typeof experience)[0];
  index: number;
}) {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} relative pl-8 pb-10 last:pb-0`}
      style={{ transitionDelay: `${index * 100}ms` } as React.CSSProperties}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3px] rounded-full bg-accent/60" />

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <div>
          <h3 className="text-sm font-medium text-foreground">{exp.role}</h3>
          <p className="text-sm text-accent/80 mt-0.5">{exp.company}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-mono text-muted">{exp.period}</span>
          <span className="text-xs text-muted/50">{exp.location}</span>
        </div>
      </div>
      <p className="text-body text-sm mt-2 max-w-[60ch]">{exp.description}</p>
    </div>
  );
}
