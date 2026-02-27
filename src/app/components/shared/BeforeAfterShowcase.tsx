import { useState } from "react";
import { Link } from "react-router";
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BEFORE_AFTER_PROJECTS } from "../../data/siteData";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface BeforeAfterShowcaseProps {
  /** "full" = Portfolio page (all projects, detail cards). "teaser" = Home page (compact grid, CTA to portfolio). */
  variant?: "full" | "teaser";
  /** Max projects to show (teaser defaults to 2) */
  limit?: number;
}

export function BeforeAfterShowcase({ variant = "full", limit }: BeforeAfterShowcaseProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const projects = limit ? BEFORE_AFTER_PROJECTS.slice(0, limit) : BEFORE_AFTER_PROJECTS;

  if (variant === "teaser") {
    return <TeaserGrid projects={projects} />;
  }

  const active = projects[activeIdx];
  const prev = () => setActiveIdx((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setActiveIdx((i) => (i + 1) % projects.length);

  return (
    <div>
      {/* Active project */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Image — full-width composite with before/after already baked in */}
        <div className="lg:col-span-3 relative">
          <div className="rounded-xl overflow-hidden shadow-xl border border-border">
            <div className="relative">
              <ImageWithFallback
                src={active.image}
                alt={`${active.title} — Before and After`}
                className="w-full h-auto"
              />
              {/* Nav arrows */}
              {projects.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#0F172A]" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-5 h-5 text-[#0F172A]" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Thumbnails */}
          {projects.length > 1 && (
            <div className="flex gap-3 mt-4">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActiveIdx(i)}
                  className={`flex-1 aspect-[2/1] rounded-lg overflow-hidden border-2 transition-all ${
                    i === activeIdx
                      ? "border-primary shadow-md shadow-primary/20"
                      : "border-border hover:border-primary/40 opacity-60 hover:opacity-100"
                  }`}
                >
                  <ImageWithFallback
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-[0.75rem] tracking-wider uppercase text-primary"
              style={{ fontWeight: 600 }}
            >
              {active.category} Remodel
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-[0.75rem] text-muted-foreground flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {active.location}
            </span>
          </div>
          <h3
            className="text-[1.25rem] md:text-[1.5rem] mb-4"
            style={{ fontWeight: 700 }}
          >
            {active.title}
          </h3>

          {/* Project highlights */}
          <div className="space-y-2.5 mb-6">
            {active.highlights.map((h) => (
              <div key={h} className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                <span className="text-[0.9rem] text-muted-foreground">{h}</span>
              </div>
            ))}
          </div>

          {/* Counter */}
          <div className="flex items-center gap-3 text-[0.85rem] text-muted-foreground mb-6">
            <span style={{ fontWeight: 600 }} className="text-foreground">
              {activeIdx + 1}
            </span>
            <span>/</span>
            <span>{projects.length} projects</span>
          </div>

          <Link
            to="/get-started"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-[0.9rem] hover:bg-[#1D4ED8] transition-colors"
            style={{ fontWeight: 600 }}
          >
            Start Your Transformation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/** Compact grid for Home page */
function TeaserGrid({
  projects,
}: {
  projects: typeof BEFORE_AFTER_PROJECTS;
}) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all"
          >
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src={p.image}
                alt={`${p.title} — Before and After`}
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Angular overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0">
                <svg
                  viewBox="0 0 400 15"
                  preserveAspectRatio="none"
                  className="w-full block"
                  style={{ height: "15px" }}
                >
                  <polygon
                    points="0,15 400,15 400,3 250,0 150,8 0,3"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-primary text-[0.75rem] tracking-wider uppercase"
                  style={{ fontWeight: 600 }}
                >
                  {p.category}
                </span>
                <span className="text-gray-300 text-[0.7rem]">|</span>
                <span className="text-muted-foreground text-[0.75rem] flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {p.location}
                </span>
              </div>
              <h3
                className="text-[1rem] mb-2"
                style={{ fontWeight: 600 }}
              >
                {p.title}
              </h3>
              <ul className="space-y-1">
                {p.highlights.slice(0, 2).map((h) => (
                  <li
                    key={h}
                    className="text-[0.8rem] text-muted-foreground flex items-start gap-2"
                  >
                    <div className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-primary text-[0.95rem] hover:gap-3 transition-all"
          style={{ fontWeight: 600 }}
        >
          See All Before & After Projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
