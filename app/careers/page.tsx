"use client";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";


const ROLES = [
  { title:"Investment Analyst – Renewable Energy", dept:"Energy & Infrastructure", location:"Accra, Ghana", type:"Full-time", level:"Mid-level" },
  { title:"Senior Associate – Financial Advisory", dept:"Financial Advisory", location:"Accra, Ghana", type:"Full-time", level:"Senior" },
  { title:"Associate – SenHub", dept:"SenHub", location:"Accra, Ghana", type:"Full-time", level:"Mid-level" },
  { title:"ESG & Sustainability Analyst", dept:"Sustainability", location:"Accra, Ghana (Hybrid)", type:"Full-time", level:"Junior–Mid" },
  { title:"Gender Lens Consultant", dept:"Gender Lens", location:"Accra, Ghana", type:"Full-time", level:"Senior" },
  { title:"Investor Relations Associate", dept:"Investor Relations", location:"Accra, Ghana", type:"Full-time", level:"Mid-level" },
];

const BENEFITS = [
  { icon:"💰", title:"Competitive Compensation", desc:"Top-of-market salary and performance bonus structures aligned with firm and individual success." },
  { icon:"📈", title:"Carry & Equity Participation", desc:"Senior team members are offered meaningful carry in our funds — sharing in the long-term value we create." },
  { icon:"🎓", title:"Learning & Development", desc:"An annual L&D budget, access to global conferences, and a structured mentorship programme." },
  { icon:"🌍", title:"Global Exposure", desc:"Work on transactions and projects that span the African continent and engage with global investors and partners." },
  { icon:"🌱", title:"Mission-Driven Work", desc:"Come to work every day knowing your work is building a better Africa. Purpose and profit are not in conflict here." },
  { icon:"🏥", title:"Health & Wellbeing", desc:"Comprehensive health insurance, mental health support, and flexible working arrangements." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers at JCS"
        title="Build Your Career."
        titleEm="Build Africa."
        subtitle="At JCS Investments, we offer exceptional talent the opportunity to work at the forefront of Africa's most exciting investment themes — with purpose, autonomy, and the tools to succeed."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=85&auto=format"
        imageAlt="JCS team working"
        cta={{ label:"View Open Roles", href:"#roles" }}
      />

      {/* Why JCS */}
      <section className="section-pad" style={{ background:"var(--dark2)" }}>
        <div className="container">
          <FadeUp style={{ textAlign:"center", maxWidth:620, margin:"0 auto 3.5rem" }}>
            <div className="section-label" style={{ justifyContent:"center" }}>Why Join JCS</div>
            <h2 className="section-title">More Than a Job. <em>A Mission.</em></h2>
          </FadeUp>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"1.5rem" }}>
            {BENEFITS.map((b, i) => (
              <FadeUp key={b.title} delay={i * 70}>
                <div style={{ padding:"2rem", border:"1px solid var(--border)", borderRadius:14, height:"100%", transition:"border-color .3s, background .3s, transform .3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="var(--g)"; el.style.background="rgba(31,122,90,0.06)"; el.style.transform="translateY(-5px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="var(--border)"; el.style.background="transparent"; el.style.transform="translateY(0)"; }}
                >
                  <div style={{ fontSize:"1.8rem", marginBottom:"1rem" }}>{b.icon}</div>
                  <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.1rem", fontWeight:600, marginBottom:"0.5rem" }}>{b.title}</h3>
                  <p style={{ fontSize:"0.85rem", color:"var(--muted)", lineHeight:1.65 }}>{b.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="roles" className="section-pad" style={{ background:"var(--dark)" }}>
        <div className="container">
          <FadeUp style={{ maxWidth:580, marginBottom:"3rem" }}>
            <div className="section-label">Open Positions</div>
            <h2 className="section-title">Current <em>Opportunities</em></h2>
          </FadeUp>
          <div style={{ display:"flex", flexDirection:"column", gap:"1px", background:"var(--border)" }}>
            {ROLES.map((r, i) => (
              <FadeUp key={r.title} delay={i * 60}>
                <div style={{
                  background:"var(--dark)", padding:"1.8rem 2rem",
                  display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1rem",
                  transition:"background .3s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background="var(--dark2)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background="var(--dark)"}
                >
                  <div style={{ flex:"1 1 300px" }}>
                    <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.2rem", fontWeight:600, marginBottom:"0.4rem" }}>{r.title}</h3>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:"0.8rem", fontSize:"0.78rem", color:"var(--muted)" }}>
                      <span>{r.dept}</span>
                      <span>·</span>
                      <span>{r.location}</span>
                      <span>·</span>
                      <span>{r.level}</span>
                    </div>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:"1rem", flexWrap:"wrap" }}>
                    <div style={{ padding:"0.25rem 0.8rem", background:"rgba(31,122,90,0.15)", color:"var(--g)", fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:600, borderRadius:50 }}>{r.type}</div>
                    <Link href="/contact" className="btn-primary" style={{ fontSize:"0.75rem", padding:"0.55rem 1.2rem" }}>Apply Now</Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp style={{ marginTop:"3rem", padding:"2.5rem", background:"var(--dark2)", borderRadius:14, border:"1px solid var(--border)" }}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"2rem", alignItems:"center" }}>
              <div>
                <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.4rem", fontWeight:600, marginBottom:"0.6rem" }}>Don't See Your Role?</h3>
                <p style={{ fontSize:"0.9rem", color:"var(--muted)", lineHeight:1.65 }}>We're always looking for exceptional talent. Send us your CV and a note about what excites you about JCS Investments — we'd love to hear from you.</p>
              </div>
              <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
                <Link href="/contact" className="btn-primary">Send Your CV</Link>
                <Link href="/team" className="btn-outline">Meet the Team</Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Quote */}
      <section className="section-pad" style={{ background:"var(--g)", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.06, backgroundImage:"radial-gradient(circle,white 1px,transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" }}/>
        <div style={{ position:"relative", zIndex:1, maxWidth:680, margin:"0 auto" }}>
          <FadeUp>
            <div style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontStyle:"italic", fontWeight:300, lineHeight:1.4, marginBottom:"1.5rem" }}>
              &ldquo;To work at JCS Investments means being at the forefront of Africa's most important economic transformation. The work is hard, meaningful, and genuinely exciting every single day.&rdquo;
            </div>
            <div style={{ fontSize:"0.85rem", fontWeight:600, letterSpacing:"0.06em", color:"rgba(255,255,255,0.8)" }}>Patricia Safo — Founder & CEO</div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
