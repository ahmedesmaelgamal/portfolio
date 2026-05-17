"use client";

import { useScrollReveal } from "@/lib/hooks";
import { projects, type Project } from "@/lib/site-data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` } as React.CSSProperties}
    >
      <div className="card p-6 md:p-8 h-full flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="heading-section text-lg">{project.name}</h3>
          {project.featured && (
            <span className="tag text-[0.6rem] shrink-0 mt-1">Featured</span>
          )}
        </div>

        <p className="text-body mt-3 text-sm leading-relaxed flex-1">
          {project.longDescription}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-6 pt-5 border-t border-border">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted hover:text-accent transition-colors duration-200"
            >
              {link.label}
              <span className="ml-1 text-accent/40">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-pad border-t border-border">
      <div className="container">
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? "visible" : ""}`}
        >
          <span className="label">Projects</span>
          <h2 className="heading-section text-2xl md:text-3xl mt-3">
            Selected Work
          </h2>
          <p className="text-body mt-3 max-w-lg text-sm">
            Production applications I built or contributed to. Each one
            presented unique architectural challenges.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
        </div>

        {projects.filter((p) => !p.featured).length > 0 && (
          <>
            <h3 className="label mt-16 mb-6">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {projects
                .filter((p) => !p.featured)
                .map((project) => (
                  <div
                    key={project.slug}
                    className="flex items-center justify-between py-4 px-5 rounded-md border border-border hover:border-accent/20 transition-colors duration-200"
                  >
                    <div>
                      <h4 className="text-sm font-medium text-foreground">
                        {project.name}
                      </h4>
                      <p className="text-xs text-muted mt-1">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="tag-neutral hidden sm:inline-flex">
                          {t}
                        </span>
                      ))}
                      <a
                        href={project.links[0]?.href || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors duration-200"
                        aria-label={`View ${project.name}`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
