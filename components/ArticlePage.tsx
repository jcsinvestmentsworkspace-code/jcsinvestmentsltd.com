"use client";
import Link from "next/link";
import { ARTICLES, getRelatedArticles } from "@/lib/articles";

const GREEN = "#1F7A5A";
const GOLD  = "#C9A24D";

interface StatRow { val: string; label: string; }
interface BodyBlock {
  type: "intro" | "heading" | "text" | "stat-row";
  text?: string;
  stats?: StatRow[];
}

interface Article {
  slug: string; cat: string; title: string; date: string; read: string;
  img: string; imgHero: string; excerpt: string;
  author: string; authorRole: string; authorImg: string;
  body: BodyBlock[];
  related: string[];
}

export default function ArticlePage({ article }: { article: Article }) {
  const relatedArticles = getRelatedArticles(article.related).filter(Boolean) as Article[];

  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── HERO ── */}
      <div style={{ position: "relative", height: "65vh", minHeight: 440, overflow: "hidden" }}>
        <img src={article.imgHero} alt={article.title}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,15,12,.98) 0%, rgba(8,15,12,.55) 55%, rgba(8,15,12,.2) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,15,12,.5), transparent 60%)" }} />

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 2rem 3rem", maxWidth: 1320, margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.2rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.55)" }}>
            <Link href="/insights" style={{ color: "var(--g)", textDecoration: "none", fontWeight: 600 }}>Insights</Link>
            <span>›</span>
            <span style={{ color: GREEN }}>{article.cat}</span>
            <span>›</span>
            <span style={{ maxWidth: 300, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{article.title}</span>
          </div>

          <div style={{ display: "inline-block", padding: "0.3rem 0.9rem", background: `${GREEN}25`, border: `1px solid ${GREEN}55`, borderRadius: 50, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: GREEN, marginBottom: "1rem" }}>
            {article.cat}
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,4.5vw,3.5rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.5rem", maxWidth: 820 }}>
            {article.title}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src={article.authorImg} alt={article.author}
                style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: `2px solid ${GREEN}` }} />
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{article.author}</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.55)" }}>{article.authorRole}</div>
              </div>
            </div>
            <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.2)" }} />
            <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)" }}>{article.date}</span>
            <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)" }}>· {article.read}</span>
          </div>
        </div>
      </div>

      {/* ── ARTICLE BODY ── */}
      <div style={{ background: "var(--dark2)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>

          {article.body.map((block, i) => {
            if (block.type === "intro") return (
              <p key={i} style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem,1.8vw,1.35rem)",
                fontStyle: "italic", fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.85)",
                borderLeft: `3px solid ${GREEN}`, paddingLeft: "1.5rem",
                marginBottom: "3rem",
              }}>{block.text}</p>
            );

            if (block.type === "heading") return (
              <h2 key={i} style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem,2.5vw,2rem)",
                fontWeight: 600, lineHeight: 1.2, marginBottom: "1.2rem", marginTop: "3rem",
                color: "#fff",
              }}>{block.text}</h2>
            );

            if (block.type === "text") return (
              <p key={i} style={{
                fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.72)",
                marginBottom: "1.5rem",
              }}>{block.text}</p>
            );

            if (block.type === "stat-row" && block.stats) return (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
                gap: "1px", background: "var(--border)",
                margin: "2.5rem 0", border: "1px solid var(--border)", borderRadius: 4,
              }}>
                {block.stats.map(s => (
                  <div key={s.label} style={{ background: "var(--dark3)", padding: "1.8rem 1.2rem", textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 600, color: GREEN, lineHeight: 1, marginBottom: "0.4rem" }}>{s.val}</div>
                    <div style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", lineHeight: 1.4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            );

            return null;
          })}

          {/* Author card */}
          <div style={{ marginTop: "4rem", padding: "2rem", background: "rgba(31,122,90,0.08)", border: "1px solid var(--border)", borderRadius: 14, display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <img src={article.authorImg} alt={article.author}
              style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", border: `2px solid ${GREEN}`, flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GREEN, marginBottom: "0.3rem" }}>Written by</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.15rem" }}>{article.author}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{article.authorRole}, JCS Investments</div>
            </div>
            <Link href="/team" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "0.6rem 1.4rem", border: `1px solid ${GREEN}`,
              borderRadius: 50, fontSize: "0.75rem", fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase", color: GREEN,
              textDecoration: "none", transition: "background .25s, color .25s",
              whiteSpace: "nowrap",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = GREEN; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = GREEN; }}
            >View Profile</Link>
          </div>

          {/* Share / back */}
          <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
            <Link href="/insights" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.82rem", fontWeight: 600, color: "var(--muted)", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", transition: "color .2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--muted)"}
            >← Back to Insights</Link>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.65rem 1.5rem", background: GREEN, color: "#fff", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 50, textDecoration: "none", transition: "background .25s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = GOLD}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = GREEN}
            >Discuss This Insight →</Link>
          </div>
        </div>
      </div>

      {/* ── RELATED ARTICLES ── */}
      {relatedArticles.length > 0 && (
        <section style={{ background: "var(--dark)", padding: "5rem 2rem" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto" }}>
            <div style={{ marginBottom: "2.5rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: GREEN, fontWeight: 600, marginBottom: "0.8rem" }}>
                <span style={{ width: 24, height: 1.5, background: GREEN, display: "inline-block" }} />
                Related Reading
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 300 }}>
                Continue <em style={{ color: GREEN, fontStyle: "italic" }}>Exploring</em>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
              {relatedArticles.map(rel => (
                <Link key={rel.slug} href={`/insights/${rel.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <div style={{
                    background: "var(--dark2)", borderRadius: 4, overflow: "hidden",
                    border: "1px solid var(--border)", height: "100%",
                    transition: "border-color .3s, transform .3s",
                  }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = GREEN; el.style.transform = "translateY(-5px)"; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <img src={rel.img} alt={rel.title}
                        style={{ width: "100%", height: 180, objectFit: "cover", display: "block", transition: "transform .6s cubic-bezier(.22,1,.36,1)" }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                      />
                    </div>
                    <div style={{ padding: "1.4rem" }}>
                      <div style={{ display: "inline-block", padding: "0.2rem 0.6rem", background: "rgba(31,122,90,0.15)", color: GREEN, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, borderRadius: 50, marginBottom: "0.7rem" }}>{rel.cat}</div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.3, marginBottom: "0.6rem" }}>{rel.title}</h3>
                      <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{rel.date} · {rel.read}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ── */}
      <section style={{ background: "var(--g)", padding: "4rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "radial-gradient(circle,white 1px,transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 300, lineHeight: 1.1, marginBottom: "1rem" }}>
            Interested in This Investment Theme?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.82)", marginBottom: "2rem", lineHeight: 1.7 }}>
            Speak with our advisory team to explore how this sector fits into your portfolio strategy.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.9rem 2.2rem", background: "#fff", color: GREEN, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 50, textDecoration: "none", transition: "background .25s, color .25s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--dark)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.color = GREEN; }}
            >Contact Our Team</Link>
            <Link href="/insights" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.5)" }}>More Insights</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
