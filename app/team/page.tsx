"use client";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";


const LEADERSHIP = [
  {
    name:"Patricia Safo", role:"Founder & Chief Executive Officer",
    img:"/images/Patricia-Safo.jpg",
    bio:"Patricia founded JCS Investments in 2004 with a conviction that Africa's greatest resource is its untapped investment potential. With 25 years of experience spanning investment banking, development finance, and entrepreneurship, he leads the firm's overall strategy and vision.",
    quote:"We invest not just for returns, but for the Africa we want to leave behind.",
  },
   {
    name:"Pedro Velazquez", role:"Chief Financial Officer",
    img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80&auto=format",
    bio:"Karim leads JCS's renewable energy and infrastructure investment practice. With a background in engineering and project finance, he has structured and delivered over 20 clean energy projects across Ghana, Senegal, and Côte d'Ivoire.",
    quote:"Clean energy is the single greatest investment opportunity in Africa today.",
  },
   {
    name:"Mr.Karim Kwara", role:"Head of Energy & Infrastructure",
    img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80&auto=format",
    bio:"Karim leads JCS's renewable energy and infrastructure investment practice. With a background in engineering and project finance, he has structured and delivered over 20 clean energy projects across Ghana, Senegal, and Côte d'Ivoire.",
    quote:"Clean energy is the single greatest investment opportunity in Africa today.",
  },
  {
    name:"Mary Asantewaa Boateng", role:"Head Of Accounts Management",
    img:"/images/Ms-Mary.jpg",
    bio:"Mary brings 18 years of finance and accounting expertise, having previously led treasury operations at a leading pan-African bank. She oversees all financial operations, investor reporting, and fund administration at JCS Investments.",
    quote:"Sustainable returns aren't a trade-off — they're the future of finance.",
  },
 
  {
    name:"Grace Naah", role:"Principal Administrator",
    img:"/images/Ms-Grace.jpg",
    bio:"Grace leads the firm's financial advisory practice, serving institutional investors, family offices, and high net-worth clients. She holds an MBA from INSEAD and brings 15 years of experience in investment management and wealth planning.",
    quote:"Every client's story is different. We listen first, then we build.",
  },
  {
    name:"Ms.Elizabeth Ayim", role:"Head of Circular Economy & Sustainability",
    img:"/images/Ms-Lizy.jpg",
    bio:"Elizabeth leads JCS's circular economy investments and the firm's ESG integration programme. She previously worked with the Ellen MacArthur Foundation and holds a PhD in Environmental Economics from the University of Ghana.",
    quote:"The circular economy isn't just good for the planet — it's one of the best investments on Earth.",
  },
  {
    name:"Mr.William Hunt", role:"Head of Technology Investments",
    img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80&auto=format",
    bio:"William leads JCS's technology and innovation investment practice. A former entrepreneur and software engineer, he has co-founded three technology companies and advised over 40 African startups on strategy and fundraising.",
    quote:"Africa's tech ecosystem is the most exciting investment frontier on the planet right now.",
  },
];

const VALUES_CULTURE = [
  { icon:"🎯", title:"Meritocracy", desc:"Great ideas win here, regardless of seniority or background. We create an environment where the best thinking rises to the top." },
  { icon:"🌍", title:"Africa Pride", desc:"We are deeply proud of Africa's potential and our role in unlocking it. This pride is the source of our conviction and work ethic." },
  { icon:"🤝", title:"Collaboration", desc:"We succeed as a team. Cross-functional collaboration is embedded in everything we do — from deal sourcing to client service." },
  { icon:"📚", title:"Continuous Learning", desc:"Markets evolve. We invest heavily in the professional development of every team member, because our people are our product." },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        label="Our People"
        title="Extraordinary People."
        titleEm="Exceptional Results."
        subtitle="Our team brings together decades of experience in finance, energy, technology, and sustainability — united by a shared mission to build Africa's future."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=85&auto=format"
        imageAlt="JCS Investments leadership team"
        cta={{ label:"Join Our Team", href:"/careers" }}
      />

      {/* Leadership grid */}
      <section className="section-pad" style={{ background:"var(--dark2)" }}>
        <div className="container">
          <FadeUp style={{ maxWidth:580, marginBottom:"3.5rem" }}>
            <div className="section-label">Leadership Team</div>
            <h2 className="section-title">The People Behind <em>JCS Investments</em></h2>
          </FadeUp>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1.5px", background:"var(--border)" }}>
            {LEADERSHIP.map((p, i) => (
              <FadeUp key={p.name} delay={i * 60}>
                <div style={{ background:"var(--dark2)", overflow:"hidden", position:"relative", height:"100%" }}>
                  <div style={{ overflow:"hidden", position:"relative" }}>
                    <img src={p.img} alt={p.name} style={{
                      width:"100%", height:300, objectFit:"cover", objectPosition:"top", display:"block",
                      filter:"grayscale(20%)", transition:"transform .6s cubic-bezier(.22,1,.36,1), filter .4s",
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform="scale(1.05)"; (e.currentTarget as HTMLImageElement).style.filter="grayscale(0)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform="scale(1)"; (e.currentTarget as HTMLImageElement).style.filter="grayscale(20%)"; }}
                    />
                  </div>
                  <div style={{ padding:"1.5rem", borderTop:"1px solid var(--border)" }}>
                    <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.1rem", fontWeight:600, marginBottom:"0.2rem" }}>{p.name}</h3>
                    <div style={{ fontSize:"0.75rem", color:"var(--g)", fontWeight:500, letterSpacing:"0.06em", marginBottom:"0.8rem" }}>{p.role}</div>
                    <p style={{ fontSize:"0.82rem", color:"var(--muted)", lineHeight:1.6, marginBottom:"0.8rem" }}>{p.bio}</p>
                    <div style={{ padding:"0.8rem", background:"rgba(31,122,90,0.08)", borderLeft:"2px solid var(--g)", borderRadius:"0 6px 6px 0" }}>
                      <p style={{ fontSize:"0.8rem", fontStyle:"italic", color:"rgba(255,255,255,0.7)", lineHeight:1.55 }}>&ldquo;{p.quote}&rdquo;</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-pad" style={{ background:"var(--dark)" }}>
        <div className="container">
          <FadeUp style={{ textAlign:"center", maxWidth:600, margin:"0 auto 3.5rem" }}>
            <div className="section-label" style={{ justifyContent:"center" }}>Our Culture</div>
            <h2 className="section-title">What It Means to Work at <em>JCS</em></h2>
            <p className="section-body" style={{ maxWidth:"100%" }}>We have built a culture where exceptional talent can thrive, grow, and make a genuine difference — every single day.</p>
          </FadeUp>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"1.5rem" }}>
            {VALUES_CULTURE.map((v, i) => (
              <FadeUp key={v.title} delay={i * 80}>
                <div style={{ padding:"2rem", border:"1px solid var(--border)", borderRadius:14, height:"100%", transition:"border-color .3s, background .3s, transform .3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor="var(--g)"; el.style.background="rgba(31,122,90,0.06)"; el.style.transform="translateY(-5px)"; }}
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

      {/* Join CTA */}
      <section className="section-pad" style={{ background:"var(--dark3)", textAlign:"center" }}>
        <div className="container">
          <FadeUp>
            <h2 className="section-title">Want to Join the <em>JCS Family?</em></h2>
            <p className="section-body" style={{ maxWidth:500, margin:"0 auto 2rem" }}>We're always looking for exceptional talent who share our passion for Africa and sustainable investing.</p>
            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/careers" className="btn-primary">View Open Roles</Link>
              <Link href="/contact" className="btn-outline">Get in Touch</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
