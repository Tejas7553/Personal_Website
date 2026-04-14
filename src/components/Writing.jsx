import { Linkedin, Github, Twitter } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const PeerlistIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.5 17.5h-3v-5H8l4-5 4 5h-2.5v5z"/>
  </svg>
);

const MediumIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const socials = [
  { label: "LinkedIn", sub: "Connect professionally", icon: <Linkedin size={28} />, href: personalInfo.social.linkedin },
  { label: "GitHub", sub: "Browse my code", icon: <Github size={28} />, href: personalInfo.social.github },
  { label: "Medium", sub: "Read my articles", icon: <MediumIcon />, href: personalInfo.social.medium },
  { label: "X (Twitter)", sub: "Follow my thoughts", icon: <Twitter size={28} />, href: personalInfo.social.twitter },
  { label: "Peerlist", sub: "Developer profile", icon: <PeerlistIcon />, href: personalInfo.social.peerlist },
];

export default function Writing() {
  return (
    <section id="writing" className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: 72 }}>
          <h2 style={{ fontSize: "clamp(32px, 6vw, 44px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Find Me Online
          </h2>
          <p style={{ fontSize: 16, color: "#64748b", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            I'm actively involved in developer communities and always open to connecting with fellow engineers.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {socials.map((s, i) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              className="animate-on-scroll card-dark"
              style={{ transitionDelay: `${i * 60}ms`, textDecoration: "none", textAlign: "center",
                padding: "36px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(6,182,212,0.4)"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "#1f2937"}>
              <span style={{ color: "#64748b", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#06b6d4"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#64748b"}>
                {s.icon}
              </span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#f1f5f9", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>{s.sub}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
