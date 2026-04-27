"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";

const TABS = [
  {
    id:"institutional", label:"Institutional Investors",
    img:"/images/RenewableEnergy.jpg",
    title:"Pension Funds, Endowments & Sovereign Wealth",
    desc:"We structure bespoke investment mandates for institutions seeking superior risk-adjusted returns across Africa's emerging markets. Our disciplined approach ensures capital preservation alongside long-term growth.",
    features:[
      { title:"Customised mandate structures", desc:"Tailored to your liability profile, liquidity needs, and return objectives" },
      { title:"Full transparency & reporting", desc:"Quarterly reports with attribution analysis, ESG scoring, and benchmarking" },
      { title:"Direct co-investment opportunities", desc:"Access to proprietary deal flow not available to the broader market" },
      { title:"Dedicated relationship team", desc:"Senior investment professionals as your primary point of contact" },
    ],
  },
  {
    id:"family", label:"Family Offices",
    img:"/images/mobilemoney.png",
    title:"Multigenerational Wealth Preservation",
    desc:"We help family offices build resilient, diversified portfolios that balance growth with protection — securing wealth for generations to come across private and alternative markets.",
    features:[
      { title:"Cross-generational planning", desc:"Investment strategies built for a 10–30 year time horizon" },
      //{ title:"Private market access", desc:"Real estate, private equity, renewable energy, and impact investments" },
      { title:"Values-aligned investing", desc:"Portfolio construction that reflects your family's values and legacy ambitions" },
      { title:"Discretionary management", desc:"Full delegation or advisory-only arrangements to suit your preference" },
    ],
  },
  {
    id:"hnwi", label:"High Net-Worth Individuals",
    img:"https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80&auto=format",
    title:"Grow, Protect & Leave a Legacy",
    desc:"Whether you're building your first serious portfolio or optimising an established one, JCS offers institutional-grade access to Africa's most compelling investment opportunities.",
    features:[
      { title:"Minimum investment from $50,000", desc:"Access to deals previously reserved for institutions" },
      { title:"Impact-first portfolios available", desc:"Align your wealth with your values without sacrificing returns" },
      { title:"Real-time portfolio visibility", desc:"Monitor your investments with full transparency at any time" },
      { title:"Tax-efficient structures", desc:"Investments structured to minimise tax leakage in your jurisdiction" },
    ],
  },
  {
    id:"corporate", label:"Corporate Partners",
    img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format",
    title:"Strategic Capital for Ambitious Businesses",
    desc:"We partner with growth-stage and established businesses seeking strategic capital, advisory support, and access to our network to accelerate expansion across Africa.",
    features:[
      { title:"Growth capital & project finance", desc:"Equity, debt, and hybrid structures from $500K to $10M+" },
      { title:"Strategic advisory", desc:"M&A, restructuring, market entry and expansion strategy" },
      { title:"Network & partnerships", desc:"Access to 500+ corporate and institutional relationships" },
      { title:"Operational support", desc:"Our operating team works inside portfolio companies to drive performance" },
    ],
  },
];

export default function ClientsPage() {
  const [activeTab, setActiveTab] = useState("institutional");
  const tab = TABS.find(t => t.id === activeTab) || TABS[0];

  return (
    <>
      <PageHero
        label="Who We Serve"
        title="Investment Solutions"
        titleEm="Tailored for You"
        subtitle="From sovereign wealth funds to individual investors, JCS Investments creates bespoke investment strategies that align with your unique goals, risk appetite, and values."
        image="https://images.unsplash.com/photo-1560472355-536de3962603?w=1800&q=85&auto=format"
        imageAlt="Clients we serve"
      />

      <section className="section-pad" style={{ background:"var(--dark2)" }}>
        <div className="container">
          {/* Tabs */}
          <FadeUp>
            <div style={{ display:"flex", borderBottom:"1px solid var(--border)", marginBottom:"3rem", overflowX:"auto", gap:0 }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
                  padding:"1rem 1.5rem", whiteSpace:"nowrap",
                  fontSize:"0.8rem", fontWeight:500, letterSpacing:"0.06em", textTransform:"uppercase",
                  color: activeTab === t.id ? "#fff" : "var(--muted)",
                  background:"transparent", border:"none",
                  borderBottom: `2px solid ${activeTab === t.id ? "var(--g)" : "transparent"}`,
                  marginBottom:-1, cursor:"pointer", transition:"color .25s, border-color .25s",
                  fontFamily:"var(--font-body)",
                }}>
                  {t.label}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Tab content */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"4rem", alignItems:"center" }}>
            <FadeUp direction="left" key={activeTab + "img"}>
              <img src={tab.img} alt={tab.title} style={{ width:"100%", height:"clamp(280px,40vw,460px)", objectFit:"cover", borderRadius:4, display:"block" }}/>
            </FadeUp>
            <FadeUp direction="right" key={activeTab + "text"}>
              <div className="section-label">{tab.label}</div>
              <h2 className="section-title" style={{ fontSize:"clamp(1.7rem,3vw,2.4rem)" }}>{tab.title}</h2>
              <p className="section-body" style={{ marginBottom:"2rem" }}>{tab.desc}</p>
              <div style={{ display:"flex", flexDirection:"column", gap:"0" }}>
                {tab.features.map(f => (
                  <div key={f.title} style={{ display:"flex", alignItems:"flex-start", gap:12, padding:"0.9rem 0", borderBottom:"1px solid var(--border)" }}>
                    <div style={{ width:22, height:22, background:"rgba(31,122,90,0.2)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1, fontSize:"0.72rem", color:"var(--g)", fontWeight:700 }}>✓</div>
                    <div>
                      <strong style={{ display:"block", fontSize:"0.9rem", marginBottom:"0.2rem" }}>{f.title}</strong>
                      <span style={{ fontSize:"0.82rem", color:"var(--muted)", lineHeight:1.5 }}>{f.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", gap:"1rem", marginTop:"2rem", flexWrap:"wrap" }}>
                <Link href="/contact" className="btn-primary">Start a Conversation →</Link>
                <Link href="/businesses" className="btn-outline">Explore Our Businesses</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why JCS */}
      <section className="section-pad" style={{ background:"var(--dark)" }}>
        <div className="container">
          <FadeUp style={{ textAlign:"center", maxWidth:600, margin:"0 auto 3.5rem" }}>
            <div className="section-label" style={{ justifyContent:"center" }}>Why JCS</div>
            <h2 className="section-title">What Sets Us <em>Apart</em></h2>
          </FadeUp>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"1.5rem" }}>
            {[
              { icon:"🎯", title:"20+ Years Track Record", desc:"Two decades of consistent outperformance across multiple market cycles and asset classes." },
              { icon:"🌍", title:"Africa-First Expertise", desc:"Unmatched local knowledge and relationships across West Africa's most dynamic markets." },
              { icon:"🔒", title:"Institutional-Grade Rigour", desc:"The same discipline and governance standards used by the world's leading investment firms." },
              { icon:"🌱", title:"Sustainability Embedded", desc:"ESG is not an add-on for us — it is central to how we select, manage, and exit every investment." },
            ].map((f, i) => (
              <FadeUp key={f.title} delay={i * 80}>
                <div style={{ padding:"2rem", border:"1px solid var(--border)", borderRadius:14, height:"100%", transition:"border-color .3s, background .3s, transform .3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="var(--g)"; el.style.background="rgba(31,122,90,0.06)"; el.style.transform="translateY(-5px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="var(--border)"; el.style.background="transparent"; el.style.transform="translateY(0)"; }}
                >
                  <div style={{ fontSize:"1.8rem", marginBottom:"1rem" }}>{f.icon}</div>
                  <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.2rem", fontWeight:600, marginBottom:"0.6rem" }}>{f.title}</h3>
                  <p style={{ fontSize:"0.88rem", color:"var(--muted)", lineHeight:1.65 }}>{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background:"var(--dark3)", textAlign:"center" }}>
        <div className="container">
          <FadeUp>
            <h2 className="section-title">Ready to Become a <em>JCS Client?</em></h2>
            <p className="section-body" style={{ maxWidth:500, margin:"0 auto 2rem" }}>Our team is ready to learn about your goals and design a solution that works for you.</p>
            <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
