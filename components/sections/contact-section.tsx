"use client";

import { useScrollReveal } from "@/lib/hooks";
import { site } from "@/lib/site-data";

export function ContactSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="section-pad border-t border-border">
      <div ref={ref} className="container">
        <div className="max-w-xl">
          <div
            className={`reveal ${visible ? "visible" : ""}`}
            style={{ transitionDelay: "0ms" } as React.CSSProperties}
          >
            <span className="label">Contact</span>
            <h2 className="heading-section text-2xl md:text-3xl mt-3">
              Get in Touch
            </h2>
            <p className="text-body mt-4 text-sm">
              I am currently open to new opportunities. Whether you have a
              project in mind or just want to connect, feel free to reach out.
            </p>
          </div>

          <div
            className={`reveal ${visible ? "visible" : ""} mt-10`}
            style={{ transitionDelay: "150ms" } as React.CSSProperties}
          >
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-3 group"
            >
              <span className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs text-muted font-mono">Email</p>
                <p className="text-sm text-foreground group-hover:text-accent transition-colors duration-200">
                  {site.email}
                </p>
              </div>
            </a>
          </div>

          <div
            className={`reveal ${visible ? "visible" : ""} mt-6`}
            style={{ transitionDelay: "250ms" } as React.CSSProperties}
          >
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 group"
            >
              <span className="w-10 h-10 rounded-md bg-surface border border-border flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs text-muted font-mono">Phone</p>
                <p className="text-sm text-foreground group-hover:text-accent transition-colors duration-200">
                  {site.phone}
                </p>
              </div>
            </a>
          </div>

          <div
            className={`reveal ${visible ? "visible" : ""} flex items-center gap-4 mt-10`}
            style={{ transitionDelay: "350ms" } as React.CSSProperties}
          >
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted hover:text-accent transition-colors duration-200"
            >
              GitHub
            </a>
            <span className="text-border">|</span>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted hover:text-accent transition-colors duration-200"
            >
              LinkedIn
            </a>
            <span className="text-border">|</span>
            <span className="text-xs font-mono text-muted">
              {site.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
