import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: 72 }}>
          <h2 style={{ fontSize: "clamp(32px, 6vw, 44px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Featured Projects
          </h2>
          <p style={{ fontSize: 16, color: "#64748b" }}>
            Real-world applications with measurable impact.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {projects.map((proj, i) => (
            <div key={i} className="animate-on-scroll card-dark"
              style={{ transitionDelay: `${i * 100}ms`, padding: "32px" }}>
              <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_280px] xl:gap-10">

              <div>
                {/* Date + type */}
                <div style={{ fontSize: 13, color: "#06b6d4", fontWeight: 600,
                  fontFamily: "JetBrains Mono, monospace", marginBottom: 8 }}>
                  {proj.period}
                </div>
                <h3 style={{ fontSize: "clamp(24px, 4vw, 28px)", fontWeight: 800, color: "#f1f5f9",
                  letterSpacing: "-0.02em", marginBottom: 8 }}>{proj.title}</h3>
                <p style={{ fontSize: 15, color: "#64748b", marginBottom: 28, lineHeight: 1.6 }}>{proj.subtitle}</p>

                {/* Problem / Solution / Impact columns */}
                <div className="mb-6 grid gap-6 lg:grid-cols-2">
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#4b5563", letterSpacing: "0.1em",
                      textTransform: "uppercase", marginBottom: 8 }}>The Problem</div>
                    <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7 }}>{proj.problem}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#4b5563", letterSpacing: "0.1em",
                      textTransform: "uppercase", marginBottom: 8 }}>The Solution</div>
                    <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7 }}>{proj.solution}</p>
                  </div>
                </div>

                {/* Impact box — teal bg like reference */}
                <div style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.2)",
                  borderRadius: 10, padding: "16px 20px", marginBottom: 24 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#06b6d4", letterSpacing: "0.1em",
                    textTransform: "uppercase", marginBottom: 8 }}>The Impact</div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#e2e8f0", lineHeight: 1.6 }}>
                    {proj.impact.map((item, ii) => (
                      <span key={ii}>
                        Achieved a <strong style={{ color: "#06b6d4" }}>{item.metric} {item.label}</strong>
                        {ii < proj.impact.length - 1 ? ", " : "."}
                      </span>
                    ))}
                  </p>
                </div>

                {/* Tech stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                  {proj.tech.map((t) => (
                    <span key={t} className="tag-dark" style={{ borderRadius: 999 }}>{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" className="btn-ghost"
                      style={{ padding: "8px 18px", fontSize: 13, textDecoration: "none", justifyContent: "center" }}>
                      <Github size={14} /> View Code
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer" className="btn-cyan"
                      style={{ padding: "8px 18px", fontSize: 13, textDecoration: "none", justifyContent: "center" }}>
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Right: mock browser window */}
              <div className="mx-auto w-full max-w-sm xl:mx-0 xl:max-w-none" style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                <div style={{ background: "#1f2937", borderRadius: 10, border: "1px solid #374151", overflow: "hidden" }}>
                  {/* Browser chrome */}
                  <div style={{ padding: "10px 14px", background: "#374151", display: "flex", gap: 6 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }} />
                  </div>
                  {/* Mockup content */}
                  <div style={{ padding: 20, minHeight: 160, display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ height: 10, background: "#374151", borderRadius: 4, width: "60%" }} />
                    <div style={{ height: 8, background: "#2d3748", borderRadius: 4, width: "90%" }} />
                    <div style={{ height: 8, background: "#2d3748", borderRadius: 4, width: "75%" }} />
                    <div style={{ height: 40, background: "rgba(6,182,212,0.1)", borderRadius: 6,
                      border: "1px solid rgba(6,182,212,0.2)", marginTop: 8 }} />
                    <div style={{ height: 8, background: "#2d3748", borderRadius: 4, width: "80%" }} />
                    <div style={{ height: 8, background: "#2d3748", borderRadius: 4, width: "55%" }} />
                  </div>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll" style={{ textAlign: "center", marginTop: 48 }}>
          <a href="https://github.com/Tejas7553" target="_blank" rel="noreferrer" className="btn-ghost"
            style={{ textDecoration: "none" }}>
            <Github size={16} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
