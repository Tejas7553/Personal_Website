import { Code2, Target, Zap, Clock } from "lucide-react";
import { education } from "../data/portfolioData";

const stats = [
  { icon: <Code2 size={24} color="#06b6d4" />, value: "3.5+ Yrs", label: "Experience", sub: "Professional dev" },
  { icon: <Target size={24} color="#06b6d4" />, value: "95%", label: "Delivery", sub: "On-time rate" },
  { icon: <Zap size={24} color="#06b6d4" />, value: "40%", label: "Performance", sub: "Load time reduction" },
  { icon: <Clock size={24} color="#06b6d4" />, value: "25%", label: "Efficiency", sub: "Dev time saved" },
];

const coreSkills = ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML / CSS", "GCP"];
const strengths = ["Problem-solving", "Performance Optimization", "Clean UI/UX", "Continuous Learning"];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
        {/* Left: Stats + skills */}
        <div className="animate-on-scroll">
          {/* 2x2 stat grid */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            {stats.map((s) => (
              <div key={s.label} className="card-dark" style={{ padding: "24px" }}>
                <div style={{ marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em" }}>{s.value}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#e2e8f0", marginTop: 4 }}>{s.label}</div>
                <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Core skills pill strip */}
          <div className="card-dark" style={{ padding: "20px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <Code2 size={14} color="#06b6d4" />
              <span style={{ fontSize: 11, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.15em",
                textTransform: "uppercase", color: "#06b6d4" }}>Core Skills</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {coreSkills.map((s) => (
                <span key={s} style={{ background: "#1f2937", border: "1px solid #374151", borderRadius: 999,
                  padding: "5px 14px", fontSize: 13, color: "#06b6d4", fontFamily: "Inter" }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Bio */}
        <div className="animate-on-scroll" style={{ transitionDelay: "100ms" }}>
          <h2 style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 800, color: "#f1f5f9", marginBottom: 28, letterSpacing: "-0.02em" }}>
            About Me
          </h2>
          <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.8, marginBottom: 20 }}>
            I'm a <strong style={{ color: "#f1f5f9" }}>Frontend Developer</strong> skilled in React.js, Next.js, JavaScript,
            Tailwind CSS, HTML, and CSS — with a strong focus on building modern, responsive, and user-centric web applications.
          </p>
          <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.8, marginBottom: 20 }}>
            My journey in technology began with <strong style={{ color: "#f1f5f9" }}>Java and SQL</strong>, which gave me a solid
            foundation in programming and databases. Over time, I transitioned into frontend development, where I enjoy creating
            intuitive UIs, improving performance, and ensuring seamless user experiences across devices.
          </p>
          <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.8, marginBottom: 20 }}>
            Currently at <strong style={{ color: "#f1f5f9" }}>Infosys</strong> as a Senior System Engineer, I also bring knowledge of{" "}
            <strong style={{ color: "#f1f5f9" }}>Google Cloud Platform (GCP)</strong> essentials, supporting cloud-ready applications
            and scalable solutions.
          </p>
          <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.8, marginBottom: 28 }}>
            I'm passionate about turning ideas into high-quality, impactful applications and constantly exploring ways to grow as a developer.
          </p>

          {/* Strength tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {strengths.map((s) => (
              <span key={s} style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: 8,
                padding: "8px 16px", fontSize: 14, color: "#e2e8f0", fontFamily: "Inter" }}>{s}</span>
            ))}
          </div>

          {/* Education */}
          <div className="card-dark" style={{ marginTop: 28 }}>
            <div style={{ fontSize: 11, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.15em",
              textTransform: "uppercase", color: "#06b6d4", marginBottom: 10 }}>Education</div>
            {education.map((e) => (
              <div key={e.institution}>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#f1f5f9" }}>{e.degree}</div>
                <div style={{ fontSize: 13, color: "#64748b", marginTop: 3 }}>{e.institution}</div>
                <div className="mt-2 flex flex-wrap justify-between gap-2">
                  <span style={{ fontSize: 12, color: "#06b6d4", fontFamily: "JetBrains Mono, monospace" }}>{e.grade}</span>
                  <span style={{ fontSize: 12, color: "#4b5563" }}>{e.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
