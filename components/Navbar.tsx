"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  {
    label: "The Firm",
    href: "/about",
    children: [
      { group: "About JCS", links: [
        { label: "Our Story & Mission", href: "/about" },
        { label: "Leadership Team",     href: "/team" },
        { label: "Our Values",          href: "/sustainability" },
      ]},
      { group: "Our Clients", links: [
        { label: "Institutional Investors",    href: "/clients#institutional" },
        { label: "Family Offices",             href: "/clients#family" },
        { label: "High Net-Worth Individuals", href: "/clients#hnwi" },
        { label: "Corporate Partners",         href: "/clients#corporate" },
      ]},
    ],
  },
  {
    label: "What We Do",
    href: "/businesses",
    children: [
      { group: "Our Businesses", links: [
        { label: "Renewable Energy",    href: "/businesses/renewable-energy" },
        { label: "Circular Economy",    href: "/businesses/circular-economy" },
        { label: "Financial Advisory",  href: "/businesses/financial-advisory" },
        { label: "SenHub",              href: "/businesses/SenHub" },
        { label: "Project Financing",   href: "/businesses/project-financing" },
        { label: "Gender Lens",          href: "/businesses/gender-lens-investing" },
      ]},
      { group: "Our Approach", links: [
        { label: "Impact Investing",  href: "/impact" },
        { label: "Sustainability",    href: "/sustainability" },
        { label: "Market Research",   href: "/insights" },
      ]},
    ],
  },
  {
    label: "Our Impact",
    href: "/impact",
    children: [
      { group: "Impact Areas", links: [
        { label: "Sustainable Businesses", href: "/sustainability" },
        { label: "Community Development",  href: "/impact#community" },
        { label: "Green Infrastructure",   href: "/impact#green" },
        { label: "Financial Inclusion",    href: "/impact#inclusion" },
      ]},
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    children: [
      { group: "News & Research", links: [
        { label: "Market Insights",        href: "/insights" },
        { label: "Press Releases",         href: "/insights#press" },
        { label: "Investment Reports",     href: "/insights#reports" },
        { label: "Sustainability Reports", href: "/insights#sustainability" },
      ]},
    ],
  },
  { label: "Careers", href: "/careers", children: [] },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setActiveMenu(null); }, [pathname]);

  // prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 9000,
          height: 72,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 2rem",
          background: scrolled ? "rgba(8,15,12,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(31,122,90,0.18)" : "1px solid transparent",
          transition: "background .4s, border-color .4s, backdrop-filter .4s",
        }}
      >
        {/* LOGO */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <div style={{
            width: 40, height: 40, background: "var(--g)", borderRadius: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, color: "#fff",
            flexShrink: 0,
          }}>J</div>
          <div style={{ fontFamily: "var(--font-display)", lineHeight: 1.15 }}>
            <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "#fff" }}>JCS Investments</div>
            <div style={{ fontSize: "0.6rem", fontWeight: 400, color: "var(--muted)", fontFamily: "var(--font-body)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Limited · Accra, Ghana</div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div style={{ display: "flex", alignItems: "center", gap: 0 }} className="desktop-nav">
          {NAV.map(item => (
            <div
              key={item.label}
              style={{ position: "relative" }}
              onMouseEnter={() => item.children.length > 0 && openMenu(item.label)}
              onMouseLeave={scheduleClose}
            >
              <Link
                href={item.href}
                style={{
                  display: "flex", alignItems: "center", gap: 5,
                  padding: "0 16px", height: 72,
                  fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase",
                  color: pathname.startsWith(item.href) && item.href !== "/" ? "#fff" : "rgba(255,255,255,0.72)",
                  textDecoration: "none",
                  borderBottom: pathname.startsWith(item.href) && item.href !== "/" ? "2px solid var(--g)" : "2px solid transparent",
                  transition: "color .2s, border-color .2s",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
                {item.children.length > 0 && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5"
                    style={{ transition: "transform .25s", transform: activeMenu === item.label ? "rotate(180deg)" : "rotate(0)" }}>
                    <path d="M1 1l4 4 4-4"/>
                  </svg>
                )}
              </Link>

              {/* MEGA DROPDOWN */}
              {item.children.length > 0 && (
                <div
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={scheduleClose}
                  style={{
                    position: "absolute", top: 72,
                    left: "50%", transform: activeMenu === item.label ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-10px)",
                    background: "rgba(8,15,12,0.97)", backdropFilter: "blur(24px)",
                    border: "1px solid rgba(31,122,90,0.2)", borderRadius: 14,
                    padding: "1.8rem",
                    display: "grid",
                    gridTemplateColumns: `repeat(${item.children.length}, 1fr)`,
                    gap: "2rem",
                    minWidth: item.children.length === 1 ? 240 : 520,
                    opacity: activeMenu === item.label ? 1 : 0,
                    pointerEvents: activeMenu === item.label ? "all" : "none",
                    transition: "opacity .25s, transform .25s cubic-bezier(.22,1,.36,1)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                  }}
                >
                  {item.children.map(group => (
                    <div key={group.group}>
                      <div style={{
                        fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase",
                        color: "var(--g)", fontWeight: 600, marginBottom: "0.9rem",
                        paddingBottom: "0.5rem", borderBottom: "1px solid rgba(31,122,90,0.18)",
                      }}>{group.group}</div>
                      {group.links.map(link => (
                        <Link key={link.href} href={link.href} style={{
                          display: "flex", alignItems: "center", gap: 8,
                          padding: "0.45rem 0", fontSize: "0.86rem",
                          color: "rgba(255,255,255,0.7)", textDecoration: "none",
                          transition: "color .2s",
                          whiteSpace: "nowrap",
                        }}
                          onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                        >
                          <span style={{ color: "var(--g)", fontSize: "0.75rem", opacity: 0.8 }}>→</span>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "0.75rem", padding: "0.6rem 1.3rem" }}
            aria-label="Contact us">
            Get in Touch
          </Link>
          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            style={{
              display: "none", flexDirection: "column", gap: 5,
              background: "none", border: "none", cursor: "pointer", padding: 8,
            }}
            className="hamburger-btn"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                width: 24, height: 1.5, background: "#fff", display: "block",
                transform: mobileOpen ? (i===0?"rotate(45deg) translate(4.5px,4.5px)":i===2?"rotate(-45deg) translate(4.5px,-4.5px)":"scaleX(0)") : "none",
                transition: "transform .3s",
                transformOrigin: "center",
              }}/>
            ))}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 8999,
        background: "var(--dark2)",
        transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform .4s cubic-bezier(.22,1,.36,1)",
        overflowY: "auto",
        paddingTop: 80,
        paddingBottom: 40,
      }}>
        <div style={{ padding: "0 1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {NAV.map(item => (
            <div key={item.label}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link href={item.href} style={{
                  fontFamily: "var(--font-display)", fontSize: "1.9rem", fontWeight: 300,
                  color: "#fff", textDecoration: "none", padding: "0.5rem 0", display: "block",
                }}>{item.label}</Link>
                {item.children.length > 0 && (
                  <button onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    style={{ background: "none", border: "none", color: "var(--g)", fontSize: "1.4rem", cursor: "pointer", padding: "0.5rem" }}>
                    {mobileExpanded === item.label ? "−" : "+"}
                  </button>
                )}
              </div>
              {mobileExpanded === item.label && (
                <div style={{ paddingLeft: "1rem", paddingBottom: "0.5rem", borderLeft: "2px solid var(--g)" }}>
                  {item.children.flatMap(g => g.links).map(link => (
                    <Link key={link.href} href={link.href} style={{
                      display: "block", padding: "0.4rem 0",
                      fontSize: "0.92rem", color: "rgba(255,255,255,0.7)", textDecoration: "none",
                    }}>{link.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .hamburger-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
