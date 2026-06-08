"use client";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";


const COMMITMENTS = [
  { icon:"🌱", title:"Net-Zero by 2035", desc:"We are committed to achieving net-zero carbon emissions across our portfolio by 2035, with interim targets set for 2027 and 2030." },
  { icon:"♻️", title:"Circular Investment Thesis", desc:"At least 30% of new investments each year must demonstrate clear circular economy principles — reducing waste, extending product life, and recovering resources." },
  { icon:"🤝", title:"Community Benefit Plans", desc:"Every project we finance includes a mandatory community benefit plan with measurable commitments to local hiring, infrastructure, and skills development." },
  { icon:"⚖️", title:"Governance Standards", desc:"All portfolio companies must meet our minimum governance standards within 12 months of investment, including board diversity, audit independence, and ethics training." },
  { icon:"👩‍💼", title:"Gender Lens Investing", desc:"We target a minimum of 40% women-led businesses in our portfolio and actively support women's economic empowerment across all our investments." },
  { icon:"📊", title:"Annual ESG Reporting", desc:"We publish a comprehensive annual sustainability report with independently verified data on our environmental, social, and governance performance." },
];

const STATS = [
  { val:"2.4MW", label:"Clean Energy Capacity" },
  { val:"12K+",  label:"Tonnes CO₂ Avoided" },
  { val:"3.2K",  label:"Green Jobs Created" },
  { val:"85%",   label:"Portfolio ESG Rated" },
  { val:"8K+",   label:"Tonnes Waste Diverted" },
  { val:"40%+",  label:"Women-Led Portfolio" },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        label="Sustainability"
        title="Building Sustainable"
        titleEm="Businesses for Africa"
        subtitle="At JCS Investments, sustainability is not a checkbox — it is our core investment thesis. We believe businesses built with environmental and social responsibility at their foundation deliver superior long-term returns."
        image="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1800&q=85&auto=format"
        imageAlt="Sustainable investment"
      />

      {/* Philosophy split */}
      <section className="section-pad" style={{ background:"var(--dark2)" }}>
        <div className="container">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"4rem", alignItems:"center" }}>
            <FadeUp direction="left">
              <div className="section-label">Our Philosophy</div>
              <h2 className="section-title">Sustainability Is <em>Not a Trade-Off</em></h2>
              <p className="section-body" style={{ marginBottom:"1.2rem" }}>
                The conventional wisdom that investors must choose between financial returns and positive impact is wrong. At JCS Investments, our 20-year track record proves that the most sustainable businesses are also the most profitable ones over the long run.
              </p>
              <p className="section-body" style={{ marginBottom:"1.5rem" }}>
                Our integrated ESG approach means we are constantly identifying risks that purely financial analysis misses — and capturing opportunities that purely impact-focused investors can't monetise. This dual lens is our edge.
              </p>
              <Link href="/impact" className="btn-primary">See Our Impact Data →</Link>
            </FadeUp>
            <FadeUp direction="right">
              <div style={{ background:"var(--g)", borderRadius:16, padding:"3rem", position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:-60, right:-60, width:200, height:200, background:"rgba(255,255,255,0.06)", borderRadius:"50%", pointerEvents:"none" }}/>
                <div style={{ position:"relative", zIndex:1 }}>
                  <div style={{ fontFamily:"var(--font-display)", fontSize:"1.3rem", fontStyle:"italic", fontWeight:300, lineHeight:1.5, color:"rgba(255,255,255,0.9)", marginBottom:"2rem" }}>
                    &ldquo;We believe the most sustainable businesses are the most profitable businesses. This is not hope — it is 20 years of evidence.&rdquo;
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80" alt="CEO" style={{ width:48, height:48, borderRadius:"50%", objectFit:"cover" }}/>
                    <div>
                      <div style={{ fontWeight:600, fontSize:"0.9rem" }}>Jonathan C. Sarpong</div>
                      <div style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.7)" }}>Founder & CEO, JCS Investments</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background:"var(--dark3)" }}>
        <div style={{ maxWidth:1320, margin:"0 auto", padding:"0 2rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:"1px", background:"var(--border)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
            {STATS.map((s, i) => (
              <FadeUp key={s.label} delay={i * 60}>
                <div style={{ background:"var(--dark3)", padding:"2.5rem 1.5rem", textAlign:"center" }}>
                  <div style={{ fontFamily:"var(--font-display)", fontSize:"2.6rem", fontWeight:300, color:"var(--g)", lineHeight:1, marginBottom:"0.4rem" }}>{s.val}</div>
                  <div style={{ fontSize:"0.72rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--muted)" }}>{s.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section-pad" style={{ background:"var(--dark)" }}>
        <div className="container">
          <FadeUp style={{ textAlign:"center", maxWidth:620, margin:"0 auto 3.5rem" }}>
            <div className="section-label" style={{ justifyContent:"center" }}>Our Commitments</div>
            <h2 className="section-title">Six Promises We Make to <em>Every Stakeholder</em></h2>
          </FadeUp>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.5rem" }}>
            {COMMITMENTS.map((c, i) => (
              <FadeUp key={c.title} delay={i * 70}>
                <div style={{ padding:"2rem", border:"1px solid var(--border)", borderRadius:14, height:"100%", transition:"border-color .3s, background .3s, transform .3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="var(--g)"; el.style.background="rgba(31,122,90,0.06)"; el.style.transform="translateY(-5px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="var(--border)"; el.style.background="transparent"; el.style.transform="translateY(0)"; }}
                >
                  <div style={{ fontSize:"1.8rem", marginBottom:"1rem" }}>{c.icon}</div>
                  <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.2rem", fontWeight:600, marginBottom:"0.6rem" }}>{c.title}</h3>
                  <p style={{ fontSize:"0.88rem", color:"var(--muted)", lineHeight:1.65 }}>{c.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Green split banner */}
      <section style={{ background:"var(--g)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.06, backgroundImage:"radial-gradient(circle,white 1px,transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" }}/>
        <div style={{ maxWidth:1320, margin:"0 auto", padding:"5rem 2rem", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"3rem", alignItems:"center", position:"relative", zIndex:1 }}>
          <FadeUp direction="left">
            <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(2rem,3.5vw,3rem)", fontWeight:300, lineHeight:1.12, marginBottom:"1rem" }}>
              Sustainability Is <strong>Our Competitive Advantage.</strong>
            </h2>
            <p style={{ fontSize:"1rem", color:"rgba(255,255,255,0.8)", lineHeight:1.7 }}>
              By embedding ESG deeply into our investment process, we systematically identify risks before they materialise and capture opportunities that others miss — delivering better returns with less volatility.
            </p>
          </FadeUp>
          <FadeUp direction="right">
            <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
              {[
                { stat:"100%", desc:"of new investments screened against our ESG framework" },
                { stat:"3x",   desc:"higher return on ESG-positive investments vs benchmark" },
                { stat:"Zero", desc:"material ESG controversies in our 20-year history" },
              ].map(s => (
                <div key={s.desc} style={{ display:"flex", alignItems:"center", gap:"1.5rem", padding:"1rem 1.5rem", background:"rgba(255,255,255,0.1)", borderRadius:10 }}>
                  <div style={{ fontFamily:"var(--font-display)", fontSize:"2rem", fontWeight:700, color:"#fff", minWidth:60 }}>{s.stat}</div>
                  <p style={{ fontSize:"0.88rem", color:"rgba(255,255,255,0.85)", lineHeight:1.5 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background:"var(--dark2)", textAlign:"center" }}>
        <div className="container">
          <FadeUp>
            <h2 className="section-title">Want to Invest <em>Sustainably?</em></h2>
            <p className="section-body" style={{ maxWidth:480, margin:"0 auto 2rem" }}>Let's build a portfolio that delivers exceptional returns and a legacy you're proud of.</p>
            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/contact" className="btn-primary">Speak With Our Team</Link>
              <Link href="/impact" className="btn-outline">See Our Impact</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
