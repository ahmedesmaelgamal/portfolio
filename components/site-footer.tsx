import { site } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs text-muted">
              {year} — {site.name}
            </p>
            <p className="text-xs text-muted/60 mt-1">
              Built with Next.js & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted hover:text-accent transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted hover:text-accent transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-xs font-mono text-muted hover:text-accent transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
