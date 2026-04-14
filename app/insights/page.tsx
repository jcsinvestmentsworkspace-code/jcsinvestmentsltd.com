"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { ARTICLES } from "@/lib/articles";

const GREEN = "#1F7A5A";

const CATEGORIES = ["All", "Renewable Energy", "Circular Economy", "Financial Advisory", "SenHub", "Impact", "Technology"];

// Dropdown sub-sections that link to filtered views or anchors
const INSIGHT_SECTIONS = [
  { label: "Market Insights",        href: "/insights#market",        desc: "Sector analysis and investment themes" },
  { label: "Press Releases",         href: "/insights#press",         desc: "Company news and announcements" },
  { label: "Investment Reports",     href: "/insights#reports",       desc: "In-depth research publications" },
  { label: "Sustainability Reports", href: "/insights#sustainability", desc: "ESG performance and impact data" },
];

export default function InsightsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? ARTICLES : ARTICLES.filter(a => a.cat === active);
  const featured = filtered.find(a => a.featured) || filtered[0];
  const rest = filtered.filter(a => a !== featured);
  const handleNewsletterSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const form = e.currentTarget;

  try {
    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID!,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    alert("Subscribed successfully ✅");
    form.reset();
  } catch (error) {
    console.error("Newsletter error:", error);
    alert("Subscription failed ❌");
  }
};

  return (
    <>
      <PageHero
        label="News & Insights"
        title="Perspectives on"
        titleEm="African Investment"
        subtitle="Market intelligence, sector research, and thought leadership from the JCS Investments team — keeping you ahead of Africa's most important investment trends."
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=85&auto=format"
        imageAlt="Insights and research"
      />

      {/* ── SECTION NAVIGATION CARDS ── */}
      <section style={{ background: "var(--dark3)", padding: "3rem 2rem", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem" }}>
            {INSIGHT_SECTIONS.map(s => (
              <Link key={s.label} href={s.href} style={{ textDecoration: "none" }}>
                <div style={{
                  padding: "1.2rem 1.5rem", border: "1px solid var(--border)", borderRadius: 12,
                  background: "var(--dark2)", transition: "border-color .25s, background .25s, transform .25s",
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = GREEN; el.style.background = "rgba(31,122,90,0.08)"; el.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.background = "var(--dark2)"; el.style.transform = "translateY(0)"; }}
                >
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN, marginBottom: "0.3rem" }}>{s.label}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.5 }}>{s.desc}</div>
                  <div style={{ fontSize: "0.72rem", color: GREEN, marginTop: "0.6rem", fontWeight: 600 }}>Explore →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section id="market" className="section-pad" style={{ background: "var(--dark2)" }}>
        <div className="container">

          {/* Category filter tabs */}
          <FadeUp>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setActive(cat)} style={{
                  padding: "0.5rem 1.2rem", borderRadius: 50, border: "1px solid",
                  borderColor: active === cat ? GREEN : "var(--border)",
                  background: active === cat ? GREEN : "transparent",
                  color: active === cat ? "#fff" : "var(--muted)",
                  fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em",
                  textTransform: "uppercase", cursor: "pointer", transition: "all .2s",
                  fontFamily: "var(--font-body)",
                }}>
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Featured article */}
          {featured && (
            <FadeUp style={{ marginBottom: "3rem" }}>
              <Link href={`/insights/${featured.slug}`} style={{ textDecoration: "none", display: "block" }}>
                <div style={{
                  display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                  background: "var(--dark3)", borderRadius: 4, overflow: "hidden",
                  border: "1px solid var(--border)", transition: "border-color .3s, transform .3s",
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = GREEN; el.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; }}
                >
                  <div style={{ overflow: "hidden", minHeight: 280 }}>
                    <img src={featured.img} alt={featured.title} style={{
                      width: "100%", height: "100%", minHeight: 320,
                      objectFit: "cover", display: "block",
                      transition: "transform .7s cubic-bezier(.22,1,.36,1)",
                    }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                  <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ display: "inline-block", padding: "0.25rem 0.75rem", background: "rgba(31,122,90,0.15)", color: GREEN, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, borderRadius: 50, marginBottom: "1rem", width: "fit-content" }}>
                      {featured.cat}
                    </div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 600, lineHeight: 1.25, marginBottom: "1rem", color: "#fff" }}>
                      {featured.title}
                    </h2>
                    <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                      {featured.excerpt}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.78rem", color: "var(--muted)", marginBottom: "1.5rem" }}>
                      <span>{featured.date}</span><span>·</span><span>{featured.read}</span>
                      <span>·</span>
                      <span style={{ color: "rgba(255,255,255,0.7)" }}>By {featured.author}</span>
                    </div>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN }}>
                      Read Full Article →
                    </span>
                  </div>
                </div>
              </Link>
            </FadeUp>
          )}

          {/* Article grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
            {rest.map((a, i) => (
              <FadeUp key={a.slug} delay={i * 70}>
                <Link href={`/insights/${a.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div style={{
                    background: "var(--dark3)", borderRadius: 4, overflow: "hidden",
                    border: "1px solid var(--border)", height: "100%",
                    transition: "border-color .3s, transform .3s",
                  }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = GREEN; el.style.transform = "translateY(-5px)"; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <img src={a.img} alt={a.title} style={{
                        width: "100%", height: 200, objectFit: "cover", display: "block",
                        transition: "transform .6s cubic-bezier(.22,1,.36,1)",
                      }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                      />
                    </div>
                    <div style={{ padding: "1.5rem" }}>
                      <div style={{ display: "inline-block", padding: "0.2rem 0.6rem", background: "rgba(31,122,90,0.15)", color: GREEN, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, borderRadius: 50, marginBottom: "0.7rem" }}>
                        {a.cat}
                      </div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 600, lineHeight: 1.3, marginBottom: "0.6rem", color: "#fff" }}>
                        {a.title}
                      </h3>
                      <p style={{ fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
                        {a.excerpt}
                      </p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{a.date} · {a.read}</span>
                        <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN }}>
                          Read →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "5rem 0", color: "var(--muted)" }}>
              <p style={{ fontSize: "1.1rem" }}>No articles in this category yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── PRESS / REPORTS anchors ── */}
      <section id="press" className="section-pad" style={{ background: "var(--dark)" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 3rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Press Releases</div>
            <h2 className="section-title">Latest <em>Company News</em></h2>
          </FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
            {[
              { date: "March 2026", title: "JCS Investments Closes $3M First Close of Impact Infrastructure Fund II", tag: "Fund News" },
              { date: "January 2026", title: "JCS Investments Named Among Ghana's Top 10 Investment Firms for Third Consecutive Year", tag: "Awards" },
              { date: "November 2025", title: "JCS Investments Partners with AfDB on 45MW Wind Energy Project in Ghana", tag: "Partnership" },
              { date: "September 2025", title: "JCS Investments Publishes Inaugural Sustainability Report: 50,000 Lives Impacted", tag: "Sustainability" },
            ].map((p, i) => (
              <FadeUp key={p.title} delay={i * 60}>
                <div style={{ background: "var(--dark)", padding: "1.6rem 2rem", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", justifyContent: "space-between", transition: "background .25s", cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--dark2)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "var(--dark)"}
                >
                  <div style={{ flex: "1 1 300px" }}>
                    <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: GREEN, marginBottom: "0.4rem" }}>{p.date} · {p.tag}</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.35, color: "#fff" }}>{p.title}</h3>
                  </div>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "0.55rem 1.2rem", border: `1px solid ${GREEN}`, borderRadius: 50, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: GREEN, textDecoration: "none", whiteSpace: "nowrap", transition: "background .25s, color .25s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = GREEN; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = GREEN; }}
                  >Request Full Release</Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPORTS anchor ── */}
      <section id="reports" className="section-pad" style={{ background: "var(--dark3)" }}>
        <div className="container">
          <FadeUp style={{ maxWidth: 580, marginBottom: "3rem" }}>
            <div className="section-label">Research & Reports</div>
            <h2 className="section-title">In-Depth <em>Investment Reports</em></h2>
            <p className="section-body">Our research team publishes quarterly and annual reports on key sectors, markets, and themes. Contact us to access our full research library.</p>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.5rem" }}>
            {[
              { title: "West Africa Renewable Energy Report 2026", type: "Annual Report", pages: "48 pages", img: "/images/RenewableEnergy.jpg" },
              { title: "Ghana Circular Economy Investment Landscape", type: "Sector Report", pages: "32 pages", img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&q=80" },
              {title: "Gender Lens Investment in Africa: Advancing Inclusive Growth", type: "Impact Report",pages: "20 pages",img: "/images/gender-lens.jpg"},           

          ].map((r, i) => (
              <FadeUp key={r.title} delay={i * 80}>
                <div style={{ border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden", background: "var(--dark2)", transition: "border-color .3s, transform .3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = GREEN; el.style.transform = "translateY(-5px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; }}
                >
                  <img src={r.img} alt={r.title} style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }} />
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: GREEN, marginBottom: "0.5rem" }}>{r.type} · {r.pages}</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.3, marginBottom: "1rem" }}>{r.title}</h3>
                    <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN, textDecoration: "none" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.7"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                    >Request Report →</Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY REPORTS anchor ── */}
      <section id="sustainability" className="section-pad" style={{ background: "var(--g)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "radial-gradient(circle,white 1px,transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "3rem", alignItems: "center" }}>
          <FadeUp direction="left">
            <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "0.8rem" }}>Sustainability Reporting</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 300, lineHeight: 1.12, marginBottom: "1rem" }}>
              Our <strong>Annual Sustainability Report</strong> Is Now Available
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Every year we publish a comprehensive report on our environmental, social, and governance performance — independently verified and fully transparent.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.9rem 2rem", background: "#fff", color: GREEN, fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 50, textDecoration: "none" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--dark)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.color = GREEN; }}
              >Download Report</Link>
              <Link href="/sustainability" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.9rem 2rem", background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.4)", color: "#fff", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 50, textDecoration: "none" }}>
                Our Sustainability Approach
              </Link>
            </div>
          </FadeUp>
          <FadeUp direction="right">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { val: "12K+", label: "CO₂ Tonnes Avoided" },
                { val: "3.2K", label: "Jobs Created" },
                { val: "85%",  label: "Portfolio ESG Rated" },
                { val: "40%+", label: "Women-Led Portfolio" },
              ].map(s => (
                <div key={s.label} style={{ padding: "1.5rem", background: "rgba(255,255,255,0.12)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 600, color: "#fff", lineHeight: 1, marginBottom: "0.3rem" }}>{s.val}</div>
                  <div style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-pad" style={{ background: "var(--dark2)", textAlign: "center" }}>
        <div className="container">
          <FadeUp>
            <div className="section-label" style={{ justifyContent: "center" }}>Stay Informed</div>
            <h2 className="section-title">Subscribe to Our <em>Investment Insights</em></h2>
            <p className="section-body" style={{ maxWidth: 480, margin: "0 auto 2rem" }}>
              Receive our latest market research, sector reports, and investment insights directly in your inbox.
            </p>
          <form
  onSubmit={handleNewsletterSubmit}
  style={{ display: "flex", maxWidth: 480, margin: "0 auto", flexWrap: "wrap", gap: 0 }}
>
  <input
    type="email"
    name="email"
    placeholder="Your email address"
    required
    style={{
      flex: 1,
      minWidth: 220,
      padding: "0.9rem 1.4rem",
      background: "rgba(255,255,255,0.06)",
      border: "1.5px solid var(--border)",
      borderRight: "none",
      borderRadius: "50px 0 0 50px",
      color: "#fff",
      fontSize: "0.88rem",
      outline: "none",
      fontFamily: "var(--font-body)",
    }}
    onFocus={e => (e.target as HTMLInputElement).style.borderColor = GREEN}
    onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--border)"}
  />
  <button
    type="submit"
    className="btn-primary"
    style={{ borderRadius: "0 50px 50px 0" }}
  >
    Subscribe
  </button>
</form>
</FadeUp>
</div>
</section>
</>
);
}
