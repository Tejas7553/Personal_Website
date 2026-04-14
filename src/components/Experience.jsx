import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "../data/portfolioData";

const bulletsByRole = {
  "Senior System Engineer": [
    { text: "Engineered a scalable multi-role recruitment portal using React.js (Hooks, Context API), improving UI performance and usability by ", highlight: "25-30%." },
    { text: "Built reusable component-based architecture and integrated REST APIs (Java + MySQL), reducing development time by ", highlight: "20-25%." },
    { text: "Optimised performance using lazy loading and efficient state management, reducing page load time by ", highlight: "30-40%." },
    { text: "Implemented code splitting to improve core Web Vitals and significantly reduce initial JavaScript bundle size.", highlight: null },
    { text: "Collaborated with back-end, database, and testing teams to ensure seamless system integration.", highlight: null },
  ],
  "Project Engineer Intern": [
    { text: "Developed and supported a student management system using Java, improving data handling efficiency by ", highlight: "20%." },
    { text: "Identified and resolved ", highlight: "10+ bugs,", text2: " enhancing system stability and overall performance." },
    { text: "Collaborated with team members to deliver project modules on time, ensuring ", highlight: "100% task completion", text2: " within deadlines." },
  ],
};

function getDuration(period) {
  const map = {
    "Oct 2022 – Present": "3 yr 3 mos",
    "Mar 2023 – Dec 2024": "1 yr 10 mos",
    "Oct 2022 – Feb 2023": "5 mos",
    "Mar 2022 – May 2022": "3 mos",
  };
  return map[period] || "";
}

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: 72 }}>
          <h2 style={{ fontSize: "clamp(32px, 6vw, 44px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Professional Experience
          </h2>
          <p style={{ fontSize: 16, color: "#64748b" }}>
            My career journey and the measurable impact I've delivered.
          </p>
        </div>

        <div className="flex gap-4 sm:gap-8 lg:gap-12">
          {/* Timeline spine */}
          <div className="hidden flex-col items-center pt-2 sm:flex">
            <div style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid #06b6d4",
              display: "flex", alignItems: "center", justifyContent: "center", background: "#111827", flexShrink: 0 }}>
              <Briefcase size={18} color="#06b6d4" />
            </div>
            <div style={{ width: 2, flex: 1, background: "linear-gradient(#1f2937, transparent)", marginTop: 8 }} />
          </div>

          {/* Cards */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
            {experience.map((exp, i) => {
              const bullets = bulletsByRole[exp.role] || [];
              return (
                <div key={i} className="animate-on-scroll card-dark"
                  style={{ transitionDelay: `${i * 80}ms`, padding: "28px 32px" }}>
                  {/* Header */}
                  <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: "#f1f5f9" }}>{exp.role}</h3>
                    {getDuration(exp.period) && (
                      <span style={{ background: "#1f2937", border: "1px solid #374151", borderRadius: 6,
                        padding: "4px 12px", fontSize: 12, color: "#94a3b8", flexShrink: 0, marginLeft: 12, whiteSpace: "nowrap" }}>
                        {getDuration(exp.period)}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 16, color: "#06b6d4", fontWeight: 600, marginBottom: 12 }}>{exp.company}</div>

                  {/* Meta row */}
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-5">
                    <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#64748b" }}>
                      <Calendar size={13} /> {exp.period}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#64748b" }}>
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>

                  {/* Project badge */}
                  {exp.project && (
                    <div style={{ background: "#1f2937", borderRadius: 8, padding: "10px 16px",
                      fontSize: 13, color: "#94a3b8", marginBottom: 20 }}>
                      <strong style={{ color: "#64748b" }}>Project: </strong>
                      <span style={{ color: "#e2e8f0", fontWeight: 500 }}>{exp.project}</span>
                    </div>
                  )}

                  {/* Bullet points */}
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {bullets.map((b, bi) => (
                      <li key={bi} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#06b6d4",
                          flexShrink: 0, marginTop: 8 }} />
                        <span style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.7 }}>
                          {b.text}
                          {b.highlight && <strong style={{ color: "#06b6d4" }}>{b.highlight}</strong>}
                          {b.text2 && b.text2}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
                    {exp.tech.map((t) => (
                      <span key={t} className="tag-dark">{t}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
