import { marqueeSkills } from "../data/portfolioData";

export default function SkillMarquee() {
  const doubled = [...marqueeSkills, ...marqueeSkills];
  return (
    <div style={{ borderTop: "1px solid #1f2937", borderBottom: "1px solid #1f2937",
      background: "#0d0d0d", padding: "14px 0", overflow: "hidden" }}>
      <div style={{ display: "flex", animation: "marquee 25s linear infinite" }}>
        {doubled.map((s, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "0 20px",
            whiteSpace: "nowrap", fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "#4b5563" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#06b6d4", flexShrink: 0 }} />
            {s}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
