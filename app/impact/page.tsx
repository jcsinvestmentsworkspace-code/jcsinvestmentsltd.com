"use client";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";


const IMPACT_AREAS = [
  {
    id:"community", icon:"🏘️",
    title:"Community Development",
    desc:"We invest with communities, not just in them. Every project we finance includes a community benefit plan, an eco-friendly community bus stop — from local hiring commitments to infrastructure contributions and skills training programmes.",
    stats:[{ val:"50K+", label:"Lives Impacted" },{ val:"3.2K", label:"Jobs Created" }],
    img:"/images/bus-stop.jpeg",
  },
  {
    id:"green", icon:"🌿",
    title:"Green Infrastructure",
    desc:"From solar farms to green buildings, our infrastructure investments are setting new standards for environmental performance across West Africa, proving that sustainable development is also sound investing.",
    stats:[{ val:"2.4MW", label:"Clean Energy" },{ val:"12K+", label:"CO₂ Tonnes Avoided" }],
    img:"/images/green-card.jpeg",
  },
  {
    id:"inclusion", icon:"💳",
    title:"Financial Inclusion",
    desc:"We believe every African entrepreneur deserves access to fair, affordable financial services. Our fintech and microfinance investments have brought banking, credit, and insurance to hundreds of thousands of previously underserved people.",
    stats:[{ val:"120K+", label:"People Banked" },{ val:"85%",   label:"Women Served" }],
    img:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80&auto=format",
  },
];

const ESG_PILLARS = [
  { letter:"E", title:"Environmental", color:"#1F7A5A", items:["Net-zero target for portfolio by 2035","Carbon measurement across all investments","Green building standards for all the community","Biodiversity assessments on all land-use projects"] },
  { letter:"S", title:"Social", color:"#C9A24D", items:["Community benefit plans on every project","Local hiring requirements (min. 60%)","Gender lens investing — 40%+ women-led businesses","Worker safety and health standards"] },
  { letter:"G", title:"Governance", color:"#4a90d9", items:["Full financial transparency and quarterly reporting","Independent audit of all fund structures","Anti-corruption and ethics training","Board diversity requirements for portfolio companies"] },
];

const SDGS = ["1 – No Poverty","7 – Clean Energy","8 – Decent Work","9 – Industry & Innovation","11 – Sustainable Cities","13 – Climate Action","17 – Partnerships"];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        label="Our Impact"
        title="Investing for"
        titleEm="People & Planet"
        subtitle="At JCS Investments, impact is not a by-product of our work — it is the foundation of our investment thesis. Every decision we make is measured against its financial return and its human and environmental value."
        image="/images/bus-stop.jpeg"
        imageAlt="Wind energy impact"
      />

      {/* Numbers */}
      <section className="section-pad" style={{ background:"var(--dark2)" }}>
        <div className="container">
          <FadeUp style={{ textAlign:"center", maxWidth:620, margin:"0 auto 3.5rem" }}>
            <div className="section-label" style={{ justifyContent:"center" }}>Impact at a Glance</div>
            <h2 className="section-title">Numbers That <em>Tell Our Story</em></h2>
          </FadeUp>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"1px", background:"var(--border)" }}>
            {[
              { val:"$10M+", label:"Capital Deployed" },
              { val:"500+",  label:"Projects Delivered" },
              { val:"50K+",  label:"Lives Impacted" },
              { val:"3.2K",  label:"Jobs Created" },
              { val:"2.4MW", label:"Clean Energy" },
              { val:"12K+",  label:"CO₂ Tonnes Avoided" },
              { val:"98%",   label:"Client Satisfaction" },
              { val:"20+",   label:"Years of Excellence" },
            ].map((s, i) => (
              <FadeUp key={s.label} delay={i * 60}>
                <div style={{ background:"var(--dark2)", padding:"2.5rem 1.5rem", textAlign:"center" }}>
                  <div style={{ fontFamily:"var(--font-display)", fontSize:"2.8rem", fontWeight:300, color:"var(--g)", lineHeight:1, marginBottom:"0.4rem" }}>{s.val}</div>
                  <div style={{ fontSize:"0.72rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--muted)" }}>{s.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="section-pad" style={{ background:"var(--dark)" }}>
        <div className="container">
          <FadeUp style={{ maxWidth:580, marginBottom:"3.5rem" }}>
            <div className="section-label">Impact Areas</div>
            <h2 className="section-title">Where We Make a <em>Difference</em></h2>
          </FadeUp>
          <div style={{ display:"flex", flexDirection:"column", gap:"5rem" }}>
            {IMPACT_AREAS.map((area, i) => (
              <FadeUp key={area.id} delay={80}>
                <div id={area.id} style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"3.5rem", alignItems:"center" }}>
                  {i % 2 === 0 ? (
                    <>
                      <div>
                        <div style={{ fontSize:"2.5rem", marginBottom:"1rem" }}>{area.icon}</div>
                        <div className="section-label">{area.title}</div>
                        <h3 className="section-title" style={{ fontSize:"clamp(1.6rem,3vw,2.4rem)" }}>{area.title}</h3>
                        <p className="section-body" style={{ marginBottom:"2rem" }}>{area.desc}</p>
                        <div style={{ display:"flex", gap:"2rem" }}>
                          {area.stats.map(s => (
                            <div key={s.label}>
                              <div style={{ fontFamily:"var(--font-display)", fontSize:"2.2rem", fontWeight:600, color:"var(--g)", lineHeight:1, marginBottom:"0.3rem" }}>{s.val}</div>
                              <div style={{ fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--muted)" }}>{s.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div style={{ overflow:"hidden", borderRadius:4 }}>
                        <img src={area.img} alt={area.title} style={{ width:"100%", height:380, objectFit:"cover", display:"block", transition:"transform .6s cubic-bezier(.22,1,.36,1)" }}
                          onMouseEnter={e => (e.currentTarget.style.transform="scale(1.04)")}
                          onMouseLeave={e => (e.currentTarget.style.transform="scale(1)")}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ overflow:"hidden", borderRadius:4 }}>
                        <img src={area.img} alt={area.title} style={{ width:"100%", height:380, objectFit:"cover", display:"block", transition:"transform .6s cubic-bezier(.22,1,.36,1)" }}
                          onMouseEnter={e => (e.currentTarget.style.transform="scale(1.04)")}
                          onMouseLeave={e => (e.currentTarget.style.transform="scale(1)")}
                        />
                      </div>
                      <div>
                        <div style={{ fontSize:"2.5rem", marginBottom:"1rem" }}>{area.icon}</div>
                        <div className="section-label">{area.title}</div>
                        <h3 className="section-title" style={{ fontSize:"clamp(1.6rem,3vw,2.4rem)" }}>{area.title}</h3>
                        <p className="section-body" style={{ marginBottom:"2rem" }}>{area.desc}</p>
                        <div style={{ display:"flex", gap:"2rem" }}>
                          {area.stats.map(s => (
                            <div key={s.label}>
                              <div style={{ fontFamily:"var(--font-display)", fontSize:"2.2rem", fontWeight:600, color:"var(--g)", lineHeight:1, marginBottom:"0.3rem" }}>{s.val}</div>
                              <div style={{ fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--muted)" }}>{s.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Framework */}
      <section className="section-pad" style={{ background:"var(--dark3)" }}>
        <div className="container">
          <FadeUp style={{ textAlign:"center", maxWidth:600, margin:"0 auto 3.5rem" }}>
            <div className="section-label" style={{ justifyContent:"center" }}>ESG Framework</div>
            <h2 className="section-title">Our <em>Environmental, Social & Governance</em> Approach</h2>
          </FadeUp>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1.5rem" }}>
            {ESG_PILLARS.map((p, i) => (
              <FadeUp key={p.letter} delay={i * 100}>
                <div style={{ padding:"2.5rem", border:"1px solid var(--border)", borderRadius:14, height:"100%", transition:"border-color .3s, transform .3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor=p.color; el.style.transform="translateY(-5px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="var(--border)"; el.style.transform="translateY(0)"; }}
                >
                  <div style={{ fontFamily:"var(--font-display)", fontSize:"4rem", fontWeight:700, color:p.color, lineHeight:1, marginBottom:"0.5rem" }}>{p.letter}</div>
                  <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.4rem", fontWeight:600, marginBottom:"1.2rem" }}>{p.title}</h3>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.6rem" }}>
                    {p.items.map(item => (
                      <li key={item} style={{ display:"flex", alignItems:"flex-start", gap:8, fontSize:"0.85rem", color:"rgba(255,255,255,0.7)", lineHeight:1.5 }}>
                        <span style={{ color:p.color, fontWeight:700, flexShrink:0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SDGs */}
      <section className="section-pad" style={{ background:"var(--dark2)" }}>
        <div className="container">
          <FadeUp style={{ textAlign:"center", maxWidth:600, margin:"0 auto 3rem" }}>
            <div className="section-label" style={{ justifyContent:"center" }}>Global Goals</div>
            <h2 className="section-title">Aligned with the <em>UN Sustainable Development Goals</em></h2>
          </FadeUp>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.8rem", justifyContent:"center" }}>
            {SDGS.map((sdg, i) => (
              <FadeUp key={sdg} delay={i * 50}>
                <div style={{ padding:"0.6rem 1.2rem", background:"rgba(31,122,90,0.12)", border:"1px solid var(--g)", borderRadius:50, fontSize:"0.82rem", fontWeight:600, color:"var(--g)" }}>
                  SDG {sdg}
                </div>
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
              Invest With <em style={{ color:"rgba(255,255,255,0.85)" }}>Purpose.</em> Earn With <em style={{ color:"rgba(255,255,255,0.85)" }}>Pride.</em>
            </h2>
            <p style={{ fontSize:"1rem", color:"rgba(255,255,255,0.8)", marginBottom:"2rem", maxWidth:500, margin:"0 auto 2rem" }}>
              Partner with JCS Investments and build wealth that makes a genuine difference.
            </p>
            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"0.9rem 2.2rem", background:"#fff", color:"var(--g)", fontSize:"0.85rem", fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", borderRadius:50, textDecoration:"none" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="var(--dark)"; (e.currentTarget as HTMLElement).style.color="#fff"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="#fff"; (e.currentTarget as HTMLElement).style.color="var(--g)"; }}
              >Contact Our Team</Link>
              <Link href="/sustainability" className="btn-outline" style={{ borderColor:"rgba(255,255,255,0.5)" }}>Our Sustainability Approach</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
