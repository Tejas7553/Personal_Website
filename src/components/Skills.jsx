const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "State & Architecture",
    skills: ["React Hooks", "Context API", "React Router", "Component Architecture", "Lazy Loading", "Code Splitting"],
  },
  {
    title: "Testing & Quality",
    skills: ["Jest", "React Testing Library", "Performance Optimization", "Accessibility (a11y)"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "REST APIs", "Java 8", "MySQL", "SQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub Actions", "JIRA", "VS Code", "Google Cloud Platform", "Microsoft Azure"],
  },
  {
    title: "Practices",
    skills: ["Agile / Scrum", "Sprint Planning", "Cross-functional Collaboration", "Code Review"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: 72 }}>
          <h2 style={{ fontSize: "clamp(32px, 6vw, 44px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Core Competencies
          </h2>
          <p style={{ fontSize: 16, color: "#64748b", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Technologies and methodologies I use to build modern, scalable web applications.
            Click any skill to explore its official documentation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <div key={cat.title} className="animate-on-scroll card-dark"
              style={{ transitionDelay: `${i * 60}ms` }}>
              {/* Category header with cyan dash */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 28, height: 2, background: "#06b6d4", borderRadius: 2, flexShrink: 0 }} />
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "#f1f5f9" }}>{cat.title}</h3>
              </div>
              {/* Skill tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag-dark"
                    style={{ cursor: "pointer", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#06b6d4"; e.currentTarget.style.color = "#06b6d4"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#374151"; e.currentTarget.style.color = "#94a3b8"; }}>
                    {skill}
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
