import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (href, label) => {
    setActive(label);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>

    {/* Mobile menu — full screen overlay */}
      {/* Mobile menu — full screen overlay with smooth transition */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(10,10,10,0.98)",
          backdropFilter: "blur(16px)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "2rem",
          // ✅ Smooth transition
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-10px)",
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "clamp(1rem, 4vw, 2rem)",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#e2e8f0",
            padding: "4px",
          }}
        >
          <X size={26} />
        </button>

        {/* Nav links */}
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href, link.label)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "clamp(20px, 6vw, 28px)",
              fontFamily: "Inter",
              fontWeight: 700,
              color: active === link.label ? "#06b6d4" : "#94a3b8",
              padding: "12px 0",
              transition: "color 0.2s",
              letterSpacing: "-0.01em",
            }}
          >
            {link.label}
          </button>
        ))}

        {/* Download CV */}
        <button
          onClick={() => {
            const a = document.createElement("a");
            a.href = "/resume.pdf";
            a.download = "Tejas_Jadhav_Resume.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setMenuOpen(false);
          }}
          className="btn-cyan"
          style={{
            marginTop: "24px",
            fontSize: "clamp(13px, 3vw, 15px)",
            padding: "12px 32px",
          }}
        >
          Download CV
        </button>
      </div>

    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: menuOpen ? 101 : 50,
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1f2937" : "none",
        transition: "all 0.3s",
      }}
    >
      <nav
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px clamp(1rem, 4vw, 2rem)",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero", "Home");
          }}
          style={{
            fontWeight: 800,
            fontSize: "clamp(18px, 3vw, 22px)",
            letterSpacing: "-0.02em",
            textDecoration: "none",
            fontFamily: "Inter",
            flexShrink: 0,
          }}
        >
          <span style={{ color: "#e2e8f0" }}>tejas</span>
          <span style={{ color: "#06b6d4" }}>.dev</span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            // display: "flex",
            gap: "clamp(16px, 3vw, 32px)",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href, link.label)}
                className={active === link.label ? "nav-underline" : ""}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "clamp(12px, 1.5vw, 14px)",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  color: active === link.label ? "#06b6d4" : "#94a3b8",
                  transition: "color 0.2s",
                  padding: "4px 0",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume button - desktop */}
        <button
          onClick={() => {
            const a = document.createElement("a");
            a.href = "/resume.pdf";
            a.download = "Tejas_Jadhav_Resume.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }}
          className="hidden md:inline-flex btn-cyan"
          style={{ padding: "8px 20px", fontSize: 13, whiteSpace: "nowrap" }}
        >
          Download CV
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#e2e8f0",
            padding: "4px",
            // ✅ Smooth icon rotation
            transition: "transform 0.3s ease",
            transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

          

      
    </header>

    </>
  );
}
