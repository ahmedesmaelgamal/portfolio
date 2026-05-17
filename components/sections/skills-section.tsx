"use client";

import { useScrollReveal } from "@/lib/hooks";
import { skills } from "@/lib/site-data";

const skillCategories = [
  { label: "Languages", items: skills.languages },
  { label: "Frameworks", items: skills.frameworks },
  { label: "Databases", items: skills.databases },
  { label: "Backend", items: skills.backend },
  { label: "Integrations", items: skills.integrations },
  { label: "Tools", items: skills.tools },
  { label: "Practices", items: skills.practices },
];

export function SkillsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section-pad-sm border-t border-border">
      <div ref={ref} className="container">
        <div
          className={`reveal ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "0ms" } as React.CSSProperties}
        >
          <span className="label">Skills</span>
          <h2 className="heading-section text-2xl md:text-3xl mt-3">
            Technical Stack
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={cat.label}
              className={`reveal ${visible ? "visible" : ""}`}
              style={
                { transitionDelay: `${(catIdx + 1) * 80}ms` } as React.CSSProperties
              }
            >
              <h3 className="label text-muted">{cat.label}</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {cat.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
