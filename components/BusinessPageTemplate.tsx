"use client";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";

interface Feature { icon: string; title: string; desc: string; }
interface Stat    { val: string; label: string; }
interface Related { title: string; href: string; img: string; }

interface BusinessPageProps {
  tag: string;
  title: string;
  titleEm: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  overview: string;
  detail: string;
  features: Feature[];
  stats: Stat[];
  related: Related[];
}

export default function BusinessPageTemplate({
  tag, title, titleEm, subtitle, image, imageAlt,
  overview, detail, features, stats, related,
}: BusinessPageProps) {
  return (
    <>
      <PageHero
        label={tag}
        title={title}
        titleEm={titleEm}
        subtitle={subtitle}
        image={image}
        imageAlt={imageAlt}
        cta={{ label:"Explore Partnership Opportunities", href:"/contact" }}
      />

      {/* Overview */}
      <section className="section-pad" style={{ background:"var(--dark2)" }}>
        <div className="container">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"4rem", alignItems:"center" }}>
            <FadeUp direction="left">
              <div className="section-label">Overview</div>
              <h2 className="section-title">Why <em>This Sector?</em></h2>
              <p className="section-body" style={{ marginBottom:"1.2rem" }}>{overview}</p>
              <p className="section-body">{detail}</p>
              <Link href="/contact" className="btn-primary" style={{ marginTop:"2rem", display:"inline-flex" }}>Start a Conversation →</Link>
            </FadeUp>
            <FadeUp direction="right">
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                {stats.map(s => (
                  <div key={s.label} style={{ padding:"1.8rem 1.4rem", border:"1px solid var(--border)", borderRadius:14, textAlign:"center", transition:"border-color .3s", cursor:"default" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor="var(--g)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor="var(--border)"}
                  >
                    <div style={{ fontFamily:"var(--font-display)", fontSize:"2.4rem", fontWeight:600, color:"var(--g)", lineHeight:1, marginBottom:"0.4rem" }}>{s.val}</div>
                    <div style={{ fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--muted)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad" style={{ background:"var(--dark)" }}>
        <div className="container">
          <FadeUp style={{ textAlign:"center", maxWidth:580, margin:"0 auto 3.5rem" }}>
            <div className="section-label" style={{ justifyContent:"center" }}>Our Approach</div>
            <h2 className="section-title">How We <em>Create Value</em></h2>
          </FadeUp>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1.5rem" }}>
            {features.map((f, i) => (
              <FadeUp key={f.title} delay={i * 80}>
                <div style={{ padding:"2rem", border:"1px solid var(--border)", borderRadius:14, height:"100%", transition:"border-color .3s, background .3s, transform .3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="var(--g)"; el.style.background="rgba(31,122,90,0.06)"; el.style.transform="translateY(-5px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="var(--border)"; el.style.background="transparent"; el.style.transform="translateY(0)"; }}
                >
                  <div style={{ fontSize:"2rem", marginBottom:"1rem" }}>{f.icon}</div>
                  <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.2rem", fontWeight:600, marginBottom:"0.6rem" }}>{f.title}</h3>
                  <p style={{ fontSize:"0.88rem", color:"var(--muted)", lineHeight:1.65 }}>{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-pad" style={{ background:"var(--dark3)" }}>
        <div className="container">
          <FadeUp style={{ marginBottom:"2.5rem" }}>
            <div className="section-label">Explore More</div>
            <h2 className="section-title">Related <em>Businesses</em></h2>
          </FadeUp>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1.5px", background:"var(--border)" }}>
            {related.map((r, i) => (
              <FadeUp key={r.title} delay={i * 80}>
                <Link href={r.href} style={{ textDecoration:"none", display:"block" }}>
                  <div style={{ background:"var(--dark3)", overflow:"hidden", transition:"background .3s", cursor:"pointer" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background="var(--dark2)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background="var(--dark3)"}
                  >
                    <div style={{ overflow:"hidden" }}>
                      <img src={r.img} alt={r.title} style={{ width:"100%", height:200, objectFit:"cover", display:"block", transition:"transform .6s cubic-bezier(.22,1,.36,1)" }}
                        onMouseEnter={e => (e.currentTarget.style.transform="scale(1.05)")}
                        onMouseLeave={e => (e.currentTarget.style.transform="scale(1)")}
                      />
                    </div>
                    <div style={{ padding:"1.5rem" }}>
                      <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.3rem", fontWeight:600, marginBottom:"0.5rem" }}>{r.title}</h3>
                      <span style={{ fontSize:"0.75rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--g)" }}>Learn More →</span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background:"var(--g)", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.06, backgroundImage:"radial-gradient(circle,white 1px,transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" }}/>
        <div style={{ position:"relative", zIndex:1 }}>
          <FadeUp>
            <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:300, lineHeight:1.1, marginBottom:"1.2rem" }}>
              Ready to Invest in <em style={{ color:"rgba(255,255,255,0.9)" }}>this Sector?</em>
            </h2>
            <p style={{ fontSize:"1rem", color:"rgba(255,255,255,0.8)", marginBottom:"2rem", maxWidth:520, margin:"0 auto 2rem" }}>
              Contact our team to learn about investment opportunities and partnership structures available in this business.
            </p>
            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"0.9rem 2.2rem", background:"#fff", color:"var(--g)", fontSize:"0.85rem", fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", borderRadius:50, textDecoration:"none", transition:"background .25s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="var(--dark)"; (e.currentTarget as HTMLElement).style.color="#fff"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="#fff"; (e.currentTarget as HTMLElement).style.color="var(--g)"; }}
              >Get in Touch</Link>
              <Link href="/businesses" className="btn-outline" style={{ borderColor:"rgba(255,255,255,0.5)" }}>All Businesses</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
