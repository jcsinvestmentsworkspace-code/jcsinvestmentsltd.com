"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import Ticker from "@/components/Ticker";

const SLIDES = [
  {
    img: "/images/green-wallet.png",
    alt: "Solar energy fields",
    heading: "<strong>Building Wealth.</strong><br/><em>Sustaining Futures.</em>",
    sub: "Africa's premier sustainable investment firm — deploying strategic capital in renewable energy, circular economy, and high-impact financial solutions.",
  },
  {
    img: "/images/accra-independence-square07.jpg",
    alt: "Wind energy",
    heading: "<strong>Clean Energy.</strong><br/><em>Brighter Tomorrow.</em>",
    sub: "Leading West Africa's energy transition through disciplined investment in solar, wind, and clean infrastructure.",
  },
  {
    img: "/images/RenewableEnergy.jpg",
    alt: "Urban development",
    heading: "<strong>Strategic Capital.</strong><br/><em>Sustainable Returns.</em>",
    sub: "We partner with visionary investors to unlock transformative opportunities across Africa's fastest-growing sectors.",
  },
  {
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1800&q=85&auto=format",
    alt: "Financial markets",
    heading: "<strong>Expert Advisory.</strong><br/><em>Proven Results.</em>",
    sub: "Two decades of delivering exceptional risk-adjusted returns for institutions, family offices, and individuals.",
  },
];

const STATS = [
  { val: "$10M+", label: "Capital Deployed" },
  { val: "500+",  label: "Projects Delivered" },
  { val: "20+",   label: "Years of Excellence" },
  { val: "98%",   label: "Client Satisfaction" },
];

const BUSINESSES = [
  { num:"01", tag:"Energy",       title:"Renewable Energy",    href:"/businesses/renewable-energy",   img:"/images/RenewableEnergy.jpg",  desc:"Solar, wind, and clean energy infrastructure across West Africa." },
  { num:"02", tag:"Sustainability",title:"Circular Economy",  href:"/businesses/circular-economy",   img:"/images/sustainability.jpg",  desc:"Transforming waste into wealth through innovative recycling solutions." },
  { num:"03", tag:"Advisory",     title:"Financial Advisory",  href:"/businesses/financial-advisory", img:"/images/financial-advisory.jpg",  desc:"Strategic counsel and portfolio optimisation for institutional and individual investors." },
  { num:"04", tag:"SenHub",       title:"SenHub",             href:"/businesses/SenHub",              img:"/images/SenHub.jpg",  desc:"Sustainable urban development and commercial property investments." },
  { num:"05", tag:"Finance",      title:"Project Financing",   href:"/businesses/project-financing",  img:"/images/project-finance.jpg",  desc:"End-to-end structuring and financing for large-scale infrastructure." },
 {
  num:"06",
  tag:"Gender Lens",
  title:"Gender Lens Investment",
  href:"/businesses/gender-lens-investing",
  img:"/images/gender-lens.jpg",
  desc:"Driving inclusive growth by investing in women-owned businesses and advancing gender equity through sustainable, impact-focused investment strategies.",
},
];

const INSIGHTS = [
  { cat:"Renewable Energy", title:"West Africa's Wind Energy Revolution",                       date:"March 2026",    img:"/images/RenewableEnergy.jpg",  featured:true },
  { cat:"Circular Economy", title:"Turning Waste Into Wealth: Ghana's Circular Economy",        date:"Feb 2026",      img:"/images/sustainability.jpg",  featured:false },
{
  slug: "africa-investment-outlook-2026",
  cat: "Advisory",
  title: "2026 Africa Investment Outlook",
  date: "Jan 2026",
  img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80&auto=format",
  featured: false,
},
{
  slug: "patient-capital-reshaping-west-africa",
  cat: "Impact",
  title: "Patient Capital Reshaping West Africa",
  date: "Dec 2025",
  img: "https://images.unsplash.com/photo-1560472355-536de3962603?w=500&q=80&auto=format",
  featured: false,
},
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(p => (p + 1) % SLIDES.length);
      setAnimKey(k => k + 1);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const goTo = (n: number) => { setCurrent(n); setAnimKey(k => k + 1); };

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position:"relative", height:"100vh", minHeight:600, display:"flex", alignItems:"flex-end", overflow:"hidden", paddingTop:72 }}>
        {SLIDES.map((s, i) => (
          <div key={i} style={{
            position:"absolute", inset:0,
            opacity: i === current ? 1 : 0,
            transition:"opacity 1.4s cubic-bezier(.22,1,.36,1)",
            pointerEvents: i === current ? "auto" : "none",
          }}>
            <img src={s.img} alt={s.alt} style={{
              width:"100%", height:"100%", objectFit:"cover",
              transform: i === current ? "scale(1)" : "scale(1.08)",
              transition:"transform 8s cubic-bezier(.22,1,.36,1)",
            }}/>
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(8,15,12,.93) 0%,rgba(8,15,12,.45) 55%,rgba(8,15,12,.2) 100%)" }}/>
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(8,15,12,.65) 0%,transparent 65%)" }}/>
          </div>
        ))}

        {/* Content */}
        <div style={{ position:"relative", zIndex:2, padding:"0 2rem 5rem", maxWidth:1320, margin:"0 auto", width:"100%" }}>
          <div key={animKey} style={{ maxWidth:820 }}>
            <div className="section-label fade-up-anim" style={{ marginBottom:"1.4rem" }}>
              Welcome to JCS Investments
            </div>
            <h1
              className="fade-up-anim delay-100"
              style={{ fontFamily:"var(--font-display)", fontSize:"clamp(2.6rem,6vw,5.5rem)", fontWeight:300, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:"1.5rem" }}
              dangerouslySetInnerHTML={{ __html: SLIDES[current].heading }}
            />
            <p className="fade-up-anim delay-200" style={{ fontSize:"clamp(0.95rem,1.5vw,1.1rem)", color:"rgba(255,255,255,0.7)", maxWidth:520, lineHeight:1.75, marginBottom:"2.2rem" }}>
              {SLIDES[current].sub}
            </p>
            <div className="fade-up-anim delay-300" style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
              <Link href="/businesses" className="btn-primary">Explore Our Businesses</Link>
              <Link href="/about" className="btn-outline">Discover Our Story</Link>
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div style={{ position:"absolute", bottom:"2.5rem", right:"2rem", zIndex:3, display:"flex", flexDirection:"column", gap:8 }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i+1}`} style={{
              width: i===current ? 44 : 28, height:2,
              background: i===current ? "var(--g)" : "rgba(255,255,255,0.3)",
              border:"none", cursor:"pointer",
              transition:"width .4s, background .4s",
              borderRadius:2,
            }}/>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)", zIndex:3, display:"flex", flexDirection:"column", alignItems:"center", gap:8, opacity:0.55 }}>
          <span style={{ fontSize:"0.62rem", letterSpacing:"0.2em", textTransform:"uppercase" }}>Scroll</span>
          <div style={{ width:1, height:48, background:"linear-gradient(to bottom,#fff,transparent)", animation:"scrollLine 2s ease-in-out infinite" }}/>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background:"rgba(14,26,21,0.95)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
        <div style={{ maxWidth:1320, margin:"0 auto", padding:"0 2rem", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))" }}>
          {STATS.map((s, i) => (
            <FadeUp key={s.label} delay={i*80}>
              <div style={{
                padding:"2rem 1.5rem", textAlign:"center",
                borderRight: i < STATS.length-1 ? "1px solid var(--border)" : "none",
              }}>
                <div style={{ fontFamily:"var(--font-display)", fontSize:"2.5rem", fontWeight:600, color:"var(--g)", lineHeight:1, marginBottom:"0.35rem" }}>{s.val}</div>
                <div style={{ fontSize:"0.72rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--muted)" }}>{s.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* ── ABOUT SNAPSHOT ── */}
      <section className="section-pad" style={{ background:"var(--dark2)" }}>
        <div className="container">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>
            <FadeUp direction="left">
              <div style={{ position:"relative" }}>
                <img src="/images/green-card.jpeg"
                  alt="JCS Investments team"
                  style={{ width:"100%", height:"clamp(300px,50vw,520px)", objectFit:"cover", borderRadius:4, display:"block" }}/>
                <div style={{
                  position:"absolute", bottom:-24, left:-24,
                  background:"var(--dark)", border:"1px solid var(--border)", borderRadius:12,
                  padding:"1.2rem 1.5rem", display:"flex", alignItems:"center", gap:14,
                }}>
                  <div style={{ width:44, height:44, background:"var(--g)", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem" }}>🏆</div>
                  <div>
                    <strong style={{ display:"block", fontSize:"1.5rem", lineHeight:1 }}>20+</strong>
                    <span style={{ fontSize:"0.75rem", color:"var(--muted)" }}>Years of Excellence</span>
                  </div>
                </div>
              </div>
            </FadeUp>
            <FadeUp direction="right">
              <div className="section-label">About JCS Investments</div>
              <h2 className="section-title">We Build Businesses That <em>Deliver Lasting Value</em></h2>
              <p className="section-body" style={{ marginBottom:"1rem" }}>
                JCS Investments Limited is Accra's leading sustainable investment firm. We partner with institutions, family offices, and forward-thinking individuals to unlock transformative investment opportunities across Africa's fastest-growing sectors.
              </p>
              <p className="section-body" style={{ marginBottom:"2rem" }}>
                With over two decades of on-the-ground experience, we combine rigorous financial discipline with a deep commitment to environmental and social impact.
              </p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem", marginBottom:"2rem" }}>
                {[
                  { icon:"⚡", title:"Renewable Energy", desc:"Solar, wind & clean energy across West Africa" },
                  { icon:"♻️", title:"Circular Economy", desc:"Waste-to-value and sustainable supply chains" },
                  { icon:"📊", title:"Financial Advisory", desc:"Strategic capital allocation and portfolio management" },
                  { icon:"🏗️", title:"Project Financing", desc:"End-to-end structuring for infrastructure" },
                ].map(p => (
                  <div key={p.title} style={{
                    display:"flex", alignItems:"flex-start", gap:10, padding:"1rem",
                    border:"1px solid var(--border)", borderRadius:12,
                    transition:"border-color .3s, background .3s",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor="var(--g)"; (e.currentTarget as HTMLElement).style.background="rgba(31,122,90,0.06)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor="var(--border)"; (e.currentTarget as HTMLElement).style.background="transparent"; }}
                  >
                    <span style={{ fontSize:"1.1rem", marginTop:2 }}>{p.icon}</span>
                    <div>
                      <strong style={{ display:"block", fontSize:"0.85rem", marginBottom:3 }}>{p.title}</strong>
                      <span style={{ fontSize:"0.75rem", color:"var(--muted)", lineHeight:1.5 }}>{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary">Learn Our Story →</Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── BUSINESSES GRID ── */}
      <section className="section-pad" style={{ background:"var(--dark)", paddingTop:0 }}>
        <div className="container" style={{ paddingBottom:"3.5rem" }}>
          <FadeUp style={{ textAlign:"center", maxWidth:640, margin:"0 auto" }}>
            <div className="section-label" style={{ justifyContent:"center" }}>What We Do</div>
            <h2 className="section-title">Our <em>Businesses</em></h2>
            <p className="section-body" style={{ maxWidth:"100%" }}>We invest across sectors where our capital, expertise, and network can create transformative, lasting value.</p>
          </FadeUp>
        </div>
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
          gap:"1.5px", background:"var(--border)",
          border:"1px solid var(--border)",
        }}>
          {BUSINESSES.map((b, i) => (
            <FadeUp key={b.num} delay={i * 70}>
              <Link href={b.href} style={{ textDecoration:"none", display:"block", height:"100%" }}>
                <div style={{
                  background:"var(--dark)", padding:"2.5rem 2rem", height:"100%",
                  position:"relative", overflow:"hidden",
                  transition:"background .4s",
                  cursor:"pointer",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="var(--dark2)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="var(--dark)"; }}
                >
                  <img src={b.img} alt={b.title} style={{
                    width:"100%", height:180, objectFit:"cover", borderRadius:4, marginBottom:"1.5rem",
                    display:"block",
                    transition:"transform .6s cubic-bezier(.22,1,.36,1)",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.transform="scale(1.04)")}
                    onMouseLeave={e => (e.currentTarget.style.transform="scale(1)")}
                  />
                  <div style={{ display:"inline-block", padding:"0.2rem 0.7rem", background:"rgba(31,122,90,.15)", color:"var(--g)", fontSize:"0.68rem", letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:600, borderRadius:50, marginBottom:"0.8rem" }}>{b.tag}</div>
                  <div style={{ fontFamily:"var(--font-display)", fontSize:"0.8rem", color:"var(--g)", fontWeight:600, letterSpacing:"0.1em", marginBottom:"0.5rem" }}>{b.num}</div>
                  <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.45rem", fontWeight:600, marginBottom:"0.7rem", lineHeight:1.2 }}>{b.title}</h3>
                  <p style={{ fontSize:"0.85rem", color:"var(--muted)", lineHeight:1.65, marginBottom:"1.2rem" }}>{b.desc}</p>
                  <span style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--g)" }}>Learn More →</span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* TICKER */}
      <Ticker />

      {/* ── IMPACT NUMBERS ── */}
      <section className="section-pad" style={{ background:"var(--dark3)" }}>
        <div className="container">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"4rem", alignItems:"start" }}>
            <FadeUp direction="left">
              <div className="section-label">Our Impact</div>
              <h2 className="section-title">Numbers That <em>Tell Our Story</em></h2>
              <p className="section-body" style={{ marginBottom:"2.5rem" }}>Every figure represents real people, real communities, and real futures we've helped build across the African continent.</p>
              <Link href="/impact" className="btn-primary">See Full Impact Report →</Link>
            </FadeUp>
            <FadeUp direction="right">
              <div style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>
                {[
                  //{ val:"$10M+", desc:"Total capital deployed across renewable energy, real estate, and advisory mandates" },
                  { val:"500+",  desc:"Projects successfully delivered spanning 8 sectors across West Africa" },
                  { val:"50K+",  desc:"Lives directly impacted through energy access, jobs, and community programmes" },
                  { val:"98%",   desc:"Client satisfaction rate — the highest in our 20-year history" },
                ].map(n => (
                  <div key={n.val} style={{ borderTop:"1px solid var(--border)", paddingTop:"1.5rem" }}>
                    <div style={{ fontFamily:"var(--font-display)", fontSize:"3rem", fontWeight:300, color:"var(--g)", lineHeight:1, marginBottom:"0.35rem" }}>{n.val}</div>
                    <p style={{ fontSize:"0.85rem", color:"var(--muted)", lineHeight:1.6 }}>{n.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section className="section-pad" style={{ background:"var(--dark2)" }}>
        <div className="container">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"3rem", flexWrap:"wrap", gap:"1rem" }}>
            <FadeUp>
              <div className="section-label">News & Insights</div>
              <h2 className="section-title" style={{ marginBottom:0 }}>Latest from <em>JCS</em></h2>
            </FadeUp>
            <FadeUp delay={100}>
              <Link href="/insights" className="btn-outline" style={{ fontSize:"0.78rem", padding:"0.65rem 1.5rem" }}>View All Insights</Link>
            </FadeUp>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1.5px", background:"var(--border)" }}>
            {INSIGHTS.map((ins, i) => (
              <FadeUp key={ins.title} delay={i*80}>
                <Link href="/insights" style={{ textDecoration:"none", display:"block", height:"100%" }}>
                  <div style={{ background:"var(--dark2)", overflow:"hidden", height:"100%", cursor:"pointer" }}
                    onMouseEnter={e => { const img = (e.currentTarget as HTMLElement).querySelector("img") as HTMLImageElement; if(img) img.style.transform="scale(1.05)"; }}
                    onMouseLeave={e => { const img = (e.currentTarget as HTMLElement).querySelector("img") as HTMLImageElement; if(img) img.style.transform="scale(1)"; }}
                  >
                    <div style={{ overflow:"hidden" }}>
                      <img src={ins.img} alt={ins.title} style={{ width:"100%", height:200, objectFit:"cover", display:"block", transition:"transform .7s cubic-bezier(.22,1,.36,1)" }}/>
                    </div>
                    <div style={{ padding:"1.5rem" }}>
                      <div style={{ fontSize:"0.68rem", letterSpacing:"0.16em", textTransform:"uppercase", color:"var(--g)", fontWeight:600, marginBottom:"0.5rem" }}>{ins.cat}</div>
                      <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.2rem", fontWeight:600, lineHeight:1.3, marginBottom:"0.5rem" }}>{ins.title}</h3>
                      <div style={{ fontSize:"0.78rem", color:"var(--muted)" }}>{ins.date}</div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{ background:"var(--g)", padding:"5rem 2rem", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.06, backgroundImage:"radial-gradient(circle,white 1px,transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" }}/>
        <div style={{ position:"relative", zIndex:1, maxWidth:720, margin:"0 auto" }}>
          <FadeUp>
            <div className="section-label" style={{ justifyContent:"center", color:"rgba(255,255,255,0.8)" }}>Start Your Journey</div>
            <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(2.2rem,4.5vw,3.8rem)", fontWeight:300, lineHeight:1.1, marginBottom:"1.2rem" }}>
              Ready to Build <em>Lasting Wealth</em> with Purpose?
            </h2>
            <p style={{ fontSize:"1rem", color:"rgba(255,255,255,0.8)", marginBottom:"2.2rem", lineHeight:1.7 }}>
              Partner with JCS Investments and gain access to Africa's most compelling sustainable investment opportunities.
            </p>
            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/contact" style={{
                display:"inline-flex", alignItems:"center", gap:8, padding:"0.9rem 2.2rem",
                background:"#fff", color:"var(--g)", fontSize:"0.85rem", fontWeight:700,
                letterSpacing:"0.06em", textTransform:"uppercase", borderRadius:50, textDecoration:"none",
                transition:"background .25s, transform .25s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="var(--dark)"; (e.currentTarget as HTMLElement).style.color="#fff"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="#fff"; (e.currentTarget as HTMLElement).style.color="var(--g)"; }}
              >Contact Our Team</Link>
              <Link href="/businesses" className="btn-outline" style={{ borderColor:"rgba(255,255,255,0.5)", color:"#fff" }}>Explore Our Businesses</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
