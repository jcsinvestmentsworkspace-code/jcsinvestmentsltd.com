"use client";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";


const VALUES = [
  { icon:"🎯", title:"Disciplined Investment", desc:"Every decision is backed by rigorous due diligence, market intelligence, and a clear value-creation thesis." },
  { icon:"🌍", title:"Africa-First Perspective", desc:"Deep local knowledge combined with global best practices gives us an edge no foreign firm can replicate." },
  { icon:"🔒", title:"Capital Protection", desc:"Sophisticated risk management frameworks protect your capital while maximising long-term upside potential." },
  { icon:"🤝", title:"Partnership Mindset", desc:"We build long-term relationships — not transactions — with every investor, company, and community we touch." },
  { icon:"⚖️", title:"Integrity & Transparency", desc:"Full transparency in reporting, governance, and fees. Our reputation is our most valuable asset." },
  { icon:"🌱", title:"Sustainability First", desc:"Environmental and social responsibility are embedded in every investment thesis we pursue." },
];

const MILESTONES = [
  { year:"2004", event:"JCS Investments founded in Accra by Jonathan C. Sarpong with a vision to democratise access to high-impact investments." },
  { year:"2008", event:"First major renewable energy project — a 200kW solar installation powering 500 homes in the Eastern Region." },
  { year:"2012", event:"Launched financial advisory division, serving our first institutional client — a pension fund with $5M in assets." },
  { year:"2016", event:"Expanded into circular economy investments, pioneering Ghana's first integrated waste-to-energy facility." },
  { year:"2019", event:"Crossed $5M in total capital deployed. Named one of Ghana's Top 20 Investment Firms by the Ghana Investment Council." },
  { year:"2024", event:"Surpassed 500 projects completed and 50,000 lives impacted. Launched Technology & Innovation division." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="The Firm"
        title="We Build Businesses That"
        titleEm="Deliver Lasting Value"
        subtitle="JCS Investments Limited is Accra's leading sustainable investment firm, combining rigorous financial discipline with a deep commitment to environmental and social impact since 2004."
        image="https://images.unsplash.com/photo-1560472355-536de3962603?w=1800&q=85&auto=format"
        imageAlt="JCS team meeting"
        cta={{ label:"Meet Our Team", href:"/team" }}
      />

      {/* Mission & Vision */}
      <section className="section-pad" style={{ background:"var(--dark2)" }}>
        <div className="container">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"4rem" }}>
            <FadeUp>
              <div className="section-label">Our Mission</div>
              <h2 className="section-title">Investing in Growth. <em>Building Sustainable Futures.</em></h2>
              <p className="section-body" style={{ marginBottom:"1.2rem" }}>
                At JCS Investments, our mission is to deliver exceptional risk-adjusted returns to our investors while building businesses and infrastructure that create lasting positive impact across Africa.
              </p>
              <p className="section-body">
                We believe that financial performance and social responsibility are not trade-offs — they are two sides of the same coin. The businesses we back are built to last, and so are the communities they serve.
              </p>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="section-label">Our Vision</div>
              <h2 className="section-title">Africa's Most <em>Trusted</em> Investment Partner</h2>
              <p className="section-body" style={{ marginBottom:"1.2rem" }}>
                We envision an Africa where every person has access to clean energy, circular economic systems, and sound financial services — powered by a new generation of patient, purposeful capital.
              </p>
              <p className="section-body">
                JCS Investments exists to be the bridge between global capital and Africa's greatest opportunities — earning the trust of investors and communities alike, one investment at a time.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background:"var(--dark)" }}>
        <div className="container">
          <FadeUp style={{ textAlign:"center", maxWidth:600, margin:"0 auto 3.5rem" }}>
            <div className="section-label" style={{ justifyContent:"center" }}>Our Values</div>
            <h2 className="section-title">The Principles That <em>Guide Everything We Do</em></h2>
          </FadeUp>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.5rem" }}>
            {VALUES.map((v, i) => (
              <FadeUp key={v.title} delay={i * 80}>
                <div style={{
                  padding:"2rem", border:"1px solid var(--border)", borderRadius:14, height:"100%",
                  transition:"border-color .3s, background .3s, transform .3s",
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="var(--g)"; el.style.background="rgba(31,122,90,0.06)"; el.style.transform="translateY(-4px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="var(--border)"; el.style.background="transparent"; el.style.transform="translateY(0)"; }}
                >
                  <div style={{ fontSize:"1.8rem", marginBottom:"1rem" }}>{v.icon}</div>
                  <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.2rem", fontWeight:600, marginBottom:"0.6rem" }}>{v.title}</h3>
                  <p style={{ fontSize:"0.88rem", color:"var(--muted)", lineHeight:1.65 }}>{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad" style={{ background:"var(--dark3)" }}>
        <div className="container">
          <FadeUp style={{ maxWidth:560, marginBottom:"3.5rem" }}>
            <div className="section-label">Our Journey</div>
            <h2 className="section-title">20 Years of <em>Building Africa</em></h2>
          </FadeUp>
          <div style={{ position:"relative", paddingLeft:"2rem" }}>
            <div style={{ position:"absolute", left:0, top:0, bottom:0, width:2, background:"var(--border)" }}/>
            {MILESTONES.map((m, i) => (
              <FadeUp key={m.year} delay={i * 80}>
                <div style={{ position:"relative", paddingBottom:"2.5rem", paddingLeft:"2rem" }}>
                  <div style={{ position:"absolute", left:-9, top:4, width:16, height:16, background:"var(--g)", borderRadius:"50%", border:"3px solid var(--dark3)" }}/>
                  <div style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.12em", color:"var(--g)", marginBottom:"0.4rem" }}>{m.year}</div>
                  <p style={{ fontSize:"0.92rem", color:"rgba(255,255,255,0.75)", lineHeight:1.65 }}>{m.event}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background:"var(--dark2)", textAlign:"center" }}>
        <div className="container">
          <FadeUp>
            <h2 className="section-title">Ready to Partner With <em>JCS Investments?</em></h2>
            <p className="section-body" style={{ maxWidth:520, margin:"0 auto 2rem" }}>Speak with our team and discover how we can help you achieve your investment goals.</p>
            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/contact" className="btn-primary">Contact Our Team</Link>
              <Link href="/team" className="btn-outline">Meet Our People</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
