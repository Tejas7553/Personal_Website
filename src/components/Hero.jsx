import { useEffect, useState } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const roles = [
  "Next.js Engineer",
  "React.js Developer",
  "Frontend Architect",
  "UI Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  const scroll = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const downloadResume = () => {
    const a = document.createElement("a");
    a.href = "/resume.pdf";
    a.download = "Tejas_Jadhav_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        padding:
          "clamp(100px, 15vw, 128px) clamp(1rem, 5vw, 2rem) clamp(3rem, 8vw, 5rem)",
      }}
    >
      {/* Cyan glow */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "min(600px, 80vw)",
          height: "min(600px, 80vw)",
          pointerEvents: "none",
          zIndex: 0,
          background:
            "radial-gradient(circle at top right, rgba(6,182,212,0.08) 0%, transparent 60%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "72rem",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? "2.5rem" : "3.5rem",
        }}
      >
        {/* Image — top on mobile */}
        {isMobile && (
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img
              src="/TejasAI.png"
              alt="Tejas Jadhav"
              style={{
                width: "clamp(200px, 65vw, 300px)",
                height: "auto", // ✅ natural height, no cropping
                objectFit: "contain", // ✅ full image always visible
                borderRadius: "20px",
                boxShadow:
                  "0 20px 60px rgba(6, 182, 212, 0.15), 0 0 40px rgba(6, 182, 212, 0.1)",
              }}
            />
          </div>
        )}

        {/* Left content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Status badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#111827",
              border: "1px solid #1f2937",
              borderRadius: 999,
              padding: "6px 16px",
              marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                flexShrink: 0,
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontSize: "clamp(11px, 2vw, 13px)",
                color: "#94a3b8",
                fontFamily: "Inter",
                whiteSpace: "nowrap",
              }}
            >
              Available for new opportunities
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "clamp(32px, 6vw, 72px)",
                color: "#f1f5f9",
              }}
            >
              Hi, I'm Tejas Jadhav,
            </span>
            <span
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "8px 12px",
                fontSize: "clamp(22px, 4vw, 52px)",
                marginTop: 8,
              }}
            >
              <span style={{ color: "#64748b", fontWeight: 600 }}>a</span>
              <span style={{ color: "#06b6d4" }}>{displayed}</span>
              <span
                style={{ color: "#06b6d4", animation: "blink 1s infinite" }}
              >
                |
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#94a3b8",
              lineHeight: 1.8,
              maxWidth: 560,
              fontFamily: "Inter",
              marginBottom: "clamp(1.5rem, 2vw, 2.5rem)",
            }}
          >
            Building Fast, Scalable Web Apps That Users Love.
            <br />
            With 3.5+ years crafting high-performance React &amp; Next.js
            applications at Infosys, I turn complex requirements into elegant,
            accessible interfaces — backed by a track record of{" "}
            <strong style={{ color: "#e2e8f0" }}>
              30-40% performance improvements
            </strong>
            .
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: "clamp(1.5rem, 2vw, 3rem)",
            }}
          >
            <button
              className="btn-cyan"
              style={{
                flex: isMobile ? "1 1 100%" : "0 1 auto",
                justifyContent: "center",
              }}
              onClick={() => scroll("#projects")}
            >
              View My Work <ArrowRight size={16} />
            </button>
            <button
              className="btn-ghost"
              style={{
                flex: isMobile ? "1 1 100%" : "0 1 auto",
                justifyContent: "center",
              }}
              onClick={downloadResume}
            >
              <Download size={16} /> Download Resume
            </button>
          </div>

          {/* Social icons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "clamp(16px, 3vw, 24px)",
            }}
          >
            {[
              {
                icon: <Linkedin size={20} />,
                href: personalInfo.social.linkedin,
                label: "LinkedIn",
              },
              {
                icon: <Github size={20} />,
                href: personalInfo.social.github,
                label: "GitHub",
              },
              {
                icon: <Twitter size={20} />,
                href: personalInfo.social.twitter,
                label: "Twitter",
              },
              {
                icon: <Mail size={20} />,
                href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`,
                label: "Email",
              },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                style={{ color: "#4b5563", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#06b6d4")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Image — right on desktop */}
        {!isMobile && (
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/TejasAI.png"
              alt="Tejas Jadhav"
              style={{
                width: "clamp(280px, 28vw, 400px)",
                height: "clamp(540px, 34vw, 500px)",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow:
                  "0 20px 60px rgba(6, 182, 212, 0.15), 0 0 40px rgba(6, 182, 212, 0.1)",
              }}
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </section>
  );
}
