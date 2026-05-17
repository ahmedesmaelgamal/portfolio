"use client";

import { useScrollReveal } from "@/lib/hooks";
import { summary, education, site } from "@/lib/site-data";

export function AboutSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="section-pad">
      <div ref={ref} className="container">
        <div
          className={`reveal ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "0ms" } as React.CSSProperties}
        >
          <span className="label">About</span>
          <h2 className="heading-section text-2xl md:text-3xl mt-3">
            Background
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-[1fr_280px] gap-12">
          <div
            className={`reveal ${visible ? "visible" : ""}`}
            style={{ transitionDelay: "100ms" } as React.CSSProperties}
          >
            <p className="text-body max-w-[60ch]">
              {summary}
            </p>
            <p className="text-body mt-4 max-w-[60ch]">
              I focus on building clean, maintainable backend systems. From
              multi-tenant architectures to payment integrations and real-time
              tracking, I enjoy solving complex problems with simple, elegant
              solutions. Currently seeking my next opportunity to build
              impactful products.
            </p>
          </div>

          <div
            className={`reveal ${visible ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" } as React.CSSProperties}
          >
            <div className="space-y-6">
              <div>
                <h3 className="label text-muted">Education</h3>
                <p className="text-sm text-foreground mt-2 font-medium">
                  {education.degree}
                </p>
                <p className="text-sm text-muted mt-1">
                  {education.school}
                </p>
                <p className="text-xs text-muted/60 mt-1">
                  {education.period}
                </p>
              </div>

              <div className="divider" />

              <div>
                <h3 className="label text-muted">Location</h3>
                <p className="text-sm text-foreground mt-2">
                  {site.location}
                </p>
              </div>

              <div className="divider" />

              <div>
                <h3 className="label text-muted">Languages</h3>
                <p className="text-sm text-foreground mt-2">Arabic (Native)</p>
                <p className="text-sm text-muted">English (Professional)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
