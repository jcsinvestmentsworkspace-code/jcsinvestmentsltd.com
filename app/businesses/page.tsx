"use client";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";
import Ticker from "@/components/Ticker";


const BUSINESSES = [
  {
    num:"01", tag:"Energy",
    title:"Renewable Energy",
    href:"/businesses/renewable-energy",
    img:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&q=80&auto=format",
    desc:"Solar, wind, and clean energy infrastructure across West Africa. Our energy portfolio powers thousands of homes and reduces carbon emissions at scale.",
  },
  {
    num:"02", tag:"Sustainability",
    title:"Circular Economy",
    href:"/businesses/circular-economy",
    img:"images/sustainability.jpg",
    desc:"Transforming waste into wealth through innovative recycling, upcycling, and sustainable supply chain solutions that generate returns while healing the planet.",
  },
  {
    num:"03", tag:"Advisory",
    title:"Financial Advisory",
    href:"/businesses/financial-advisory",
    img:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80&auto=format",
    desc:"Strategic investment counsel, portfolio optimisation, and market intelligence for institutions, family offices, and high net-worth individuals across Africa.",
  },
  {
    num:"04", tag:"SenHub",
    title:"SenHub",
    href:"/businesses/SenHub",
    img:"/images/SenHub.jpg",
    desc:"Sustainable urban development, affordable housing, and commercial property investments that reshape skylines and strengthen communities.",
 },
  {
    num:"05", tag:"Finance",
    title:"Project Financing",
    href:"/businesses/project-financing",
    img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&auto=format",
    desc:"Comprehensive structuring and financing solutions for infrastructure, energy, and development projects from concept through commissioning.",
  },
 {
  num:"06",
  tag:"Gender Lens",
  title:"Positive Gender Lens Investment",
  href:"/businesses/gender-lens-investing",
  img:"/images/gender-lens.jpg",
  desc:"Advancing women’s economic empowerment by supporting women-owned businesses and investing in opportunities that promote inclusion, equity, and sustainable impact.",
},
];

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Six Businesses."
        titleEm="One Mission."
        subtitle="We invest across sectors where our capital, expertise, and network create transformative, lasting value for investors and communities alike."
        image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&q=85&auto=format"
        imageAlt="Business overview"
      />

      <Ticker />

      {/* Grid */}
      <section className="section-pad" style={{ background:"var(--dark)", paddingTop:"4rem" }}>
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
          gap:"1.5px",
          background:"var(--border)",
          border:"1px solid var(--border)",
        }}>
          {BUSINESSES.map((b, i) => (
            <FadeUp key={b.num} delay={i * 70}>
              <Link href={b.href} style={{ textDecoration:"none", display:"block", height:"100%" }}>
                <div style={{ background:"var(--dark)", padding:"2.5rem 2rem", height:"100%", position:"relative", overflow:"hidden", transition:"background .4s", cursor:"pointer" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background="var(--dark2)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background="var(--dark)"}
                >
                  <div style={{ overflow:"hidden", borderRadius:4, marginBottom:"1.5rem" }}>
                    <img src={b.img} alt={b.title} style={{ width:"100%", height:200, objectFit:"cover", display:"block", transition:"transform .6s cubic-bezier(.22,1,.36,1)" }}
                      onMouseEnter={e => (e.currentTarget.style.transform="scale(1.05)")}
                      onMouseLeave={e => (e.currentTarget.style.transform="scale(1)")}
                    />
                  </div>
                  <div style={{ display:"inline-block", padding:"0.2rem 0.7rem", background:"rgba(31,122,90,.15)", color:"var(--g)", fontSize:"0.68rem", letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:600, borderRadius:50, marginBottom:"0.8rem" }}>{b.tag}</div>
                  <div style={{ fontFamily:"var(--font-display)", fontSize:"0.8rem", color:"var(--g)", fontWeight:600, letterSpacing:"0.1em", marginBottom:"0.4rem" }}>{b.num}</div>
                  <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.5rem", fontWeight:600, marginBottom:"0.7rem", lineHeight:1.2 }}>{b.title}</h3>
                  <p style={{ fontSize:"0.88rem", color:"var(--muted)", lineHeight:1.65, marginBottom:"1.4rem" }}>{b.desc}</p>
                  <span style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:"0.75rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--g)" }}>Learn More →</span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background:"var(--dark2)", textAlign:"center" }}>
        <div className="container">
          <FadeUp>
            <h2 className="section-title">Interested in a <em>Partnership?</em></h2>
            <p className="section-body" style={{ maxWidth:500, margin:"0 auto 2rem" }}>Whether you're an investor, a business seeking capital, or a community partner, we'd love to speak with you.</p>
            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/contact" className="btn-primary">Get in Touch</Link>
              <Link href="/impact" className="btn-outline">See Our Impact</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
