import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div
          className="animate-on-scroll"
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2
            style={{
              fontSize: "clamp(32px, 6vw, 44px)",
              fontWeight: 800,
              color: "#f1f5f9",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Let's Build Something
            <span style={{ color: "#06b6d4" }}> Worth Shipping</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#64748b",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            I'm actively exploring frontend engineering roles at product-first
            companies. Reach out — I respond within 24 hours.
          </p>
        </div>

        <div
          className="animate-on-scroll grid gap-8 lg:grid-cols-2 lg:gap-12"
        >
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                icon: <Mail size={18} color="#06b6d4" />,
                label: "Email",
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
              },
              {
                icon: <MapPin size={18} color="#06b6d4" />,
                label: "Location",
                value: "Mumbai, Maharashtra, India",
                href: null,
              },
              {
                icon: <Phone size={18} color="#06b6d4" />,
                label: "Phone",
                value: personalInfo.phone,
                href: `tel:${personalInfo.phone}`,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="card-dark"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: "rgba(6,182,212,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#4b5563",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: 3,
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontSize: 14,
                        color: "#06b6d4",
                        textDecoration: "none",
                        fontWeight: 500,
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: 14, color: "#e2e8f0" }}>
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Social row */}
            <div className="card-dark" style={{ padding: "18px 20px" }}>
              <div
                style={{
                  fontSize: 11,
                  color: "#4b5563",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 14,
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                Find me on
              </div>
              <div className="flex flex-wrap gap-3.5">
                {[
                  {
                    icon: <Linkedin size={18} />,
                    href: personalInfo.social.linkedin,
                  },
                  {
                    icon: <Github size={18} />,
                    href: personalInfo.social.github,
                  },
                  {
                    icon: <Twitter size={18} />,
                    href: personalInfo.social.twitter,
                  },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 8,
                      background: "#1f2937",
                      border: "1px solid #374151",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#64748b",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#06b6d4";
                      e.currentTarget.style.color = "#06b6d4";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#374151";
                      e.currentTarget.style.color = "#64748b";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick info card */}
          <div className="card-dark" style={{ padding: "28px" }}>
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#f1f5f9",
                marginBottom: 20,
              }}
            >
              Quick Facts
            </div>
            {[
              [
                "Status",
                <span style={{ color: "#22c55e", fontWeight: 600 }}>
                  ● Open to opportunities
                </span>,
              ],
              ["Role", "Senior System Engineer @ Infosys"],
              ["Stack", "React.js · Next.js · JavaScript"],
              ["Experience", "3.5+ years"],
              ["Location", "Mumbai, India (remote-friendly)"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between"
                style={{
                  gap: 12,
                  padding: "12px 0",
                  borderBottom: "1px solid #1f2937",
                  fontSize: 13,
                }}
              >
                <span
                  style={{
                    color: "#4b5563",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {k}
                </span>
                <span style={{ color: "#94a3b8", textAlign: "right" }}>
                  {v}
                </span>
              </div>
            ))}

            <button
              className="btn-cyan"
              style={{ width: "100%", marginTop: 24, justifyContent: "center" }}
              onClick={() =>
                window.open(
                  `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`,
                  "_blank",
                )
              }
            >
              <Send size={15} /> Send me a message
            </button>
            <button
              className="btn-ghost"
              style={{ width: "100%", marginTop: 10, justifyContent: "center" }}
              onClick={() => {
                const a = document.createElement("a");
                a.href = "/resume.pdf";
                a.download = "Tejas_Jadhav_Resume.pdf";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              }}
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          style={{
            marginTop: 80,
            paddingTop: 24,
            borderTop: "1px solid #1f2937",
            fontSize: 12,
            color: "#374151",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          <span>© 2026 Tejas Jadhav · Built with React.js + Tailwind CSS</span>
          <span>Mumbai, India 🇮🇳</span>
        </div>
      </div>
    </section>
  );
}
