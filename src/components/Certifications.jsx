import { ShieldCheck } from "lucide-react";
import { certifications } from "../data/portfolioData";

const certMeta = {
  "GitHub Foundations":                                          { abbr: "GH",  bg: "#1f2937", color: "#6b7280" },
  "Microsoft Certified: Azure Fundamentals":                    { abbr: "AZ",  bg: "#2563eb", color: "#fff"    },
  "Google Cloud Certified Professional Cloud Architect":        { abbr: "GCP", bg: "#ea4335", color: "#fff"    },
  "Infosys Certified FullStack – System Admin – Network Beginner": { abbr: "INF", bg: "#7c3aed", color: "#fff" },
  "Fundamentals of HTML5":                                      { abbr: "H5",  bg: "#ea580c", color: "#fff"    },
};

const certDesc = {
  "GitHub Foundations": "Core GitHub concepts including repositories, commits, branching, pull requests, and collaboration workflows.",
  "Microsoft Certified: Azure Fundamentals": "Foundational knowledge of cloud concepts, core Azure services, and Azure management and governance.",
  "Google Cloud Certified Professional Cloud Architect": "GCP core infrastructure, cloud-ready application design, and scalable cloud architecture principles.",
  "Infosys Certified FullStack – System Admin – Network Beginner": "Full-stack development fundamentals, system administration, and networking essentials.",
  "Fundamentals of HTML5": "Core HTML5 concepts, semantic markup, web standards, and modern browser APIs.",
};

export default function Certifications() {
  return (
    <section id="certifications" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="animate-on-scroll" style={{ marginBottom: 64 }}>
          <div className="mb-4 flex items-center gap-4">
            <ShieldCheck size={32} color="#06b6d4" />
            <h2 style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em" }}>
              Certifications
            </h2>
          </div>
          <p style={{ fontSize: 16, color: "#64748b", maxWidth: 500, lineHeight: 1.7 }}>
            Industry-recognised credentials validating my skills across cloud platforms, development, and engineering.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, i) => {
            const meta = certMeta[cert.title] || { abbr: "??", bg: "#1f2937", color: "#fff" };
            const desc = certDesc[cert.title] || "";
            return (
              <div key={i} className="animate-on-scroll card-dark"
                style={{ transitionDelay: `${i * 70}ms`, padding: "28px", position: "relative" }}>
                {/* Shield icon top right */}
                <ShieldCheck size={18} color="#374151" style={{ position: "absolute", top: 20, right: 20 }} />

                {/* Abbr badge */}
                <div style={{ width: 52, height: 52, borderRadius: 12, background: meta.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 800, color: meta.color, marginBottom: 20, fontFamily: "Inter" }}>
                  {meta.abbr}
                </div>

                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 6, lineHeight: 1.4 }}>
                  {cert.title}
                </h3>
                <div style={{ fontSize: 13, color: "#06b6d4", fontWeight: 600, marginBottom: 14 }}>
                  {cert.issuer}
                </div>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 20 }}>
                  {desc}
                </p>

                {/* Certified badge */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)",
                  borderRadius: 999, padding: "4px 12px" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
                  <span style={{ fontSize: 12, color: "#22c55e", fontWeight: 600 }}>Certified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages */}
        <div className="animate-on-scroll card-dark" style={{ marginTop: 24, padding: "20px 28px",
          display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#06b6d4" }}>Languages</span>
          {[["English", "Full Professional"], ["Hindi", "Native / Bilingual"], ["Marathi", "Native / Bilingual"]].map(([l, lv]) => (
            <span key={l} className="flex flex-wrap items-center gap-2">
              <span style={{ fontSize: 14, fontWeight: 600, color: "#e2e8f0" }}>{l}</span>
              <span style={{ fontSize: 11, background: "#1f2937", border: "1px solid #374151",
                borderRadius: 999, padding: "2px 10px", color: "#64748b" }}>{lv}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
