"use client";
import { useState } from "react";
import FadeUp from "@/components/FadeUp";

const GREEN = "#1F7A5A";
const GOLD  = "#C9A24D";

const SUBJECTS = [
  "Investment Consulting",
  "Project Financing & Development",
  "Market Research & Analysis",
  "Asset Management",
  "Partnership Enquiry",
  "Careers / Job Application",
  "General Inquiry",
];

// SVG Icons — no emojis, no encoding issues
const Icons = {
  Phone: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
    </svg>
  ),
  MapPin: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Linkedin: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Instagram: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  Facebook: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  Mail: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  Star: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Clock: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Check: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Arrow: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
};

function Field({ label, name, type="text", placeholder, value, onChange, required }: {
  label:string; name:string; type?:string; placeholder:string;
  value:string; onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void; required?:boolean;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div style={{ position:"relative" }}>
      <label style={{
        position:"absolute", left:16,
        top: active ? 6 : 16,
        fontSize: active ? "0.68rem" : "0.88rem",
        color: focused ? GREEN : "rgba(255,255,255,0.45)",
        transition:"all .18s", pointerEvents:"none", zIndex:1,
        letterSpacing: active ? "0.1em" : "0",
        textTransform: active ? "uppercase" : "none",
        fontWeight: active ? 600 : 400,
      }}>{label}{required && " *"}</label>
      <input type={type} name={name} value={value} onChange={onChange} required={required}
        onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}
        placeholder={active ? placeholder : ""}
        style={{
          width:"100%", paddingTop: active ? 22 : 16, paddingBottom:10, paddingLeft:16, paddingRight:16,
          fontSize:"0.9rem", background:"rgba(255,255,255,0.05)", outline:"none", color:"#fff",
          border:`1.5px solid ${focused ? GREEN : "rgba(255,255,255,0.1)"}`,
          borderRadius:12, transition:"border-color .2s",
          boxShadow: focused ? `0 0 0 3px ${GREEN}22` : "none",
          fontFamily:"var(--font-body)",
        }}
      />
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);
  const onChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p=>({...p,[e.target.name]:e.target.value}));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");
    formData.append("subject", "New JCS Website Inquiry");
    try {
      const [web3Response] = await Promise.all([
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  }),

  fetch("https://jcsinvestmentslimited.app.n8n.cloud/webhook-test/jcs-leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  }),
]);

const result = await web3Response.json();
      if (result.success) {
        alert("Message sent successfully");
        formEl.reset();
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        console.error("Web3Forms error:", result);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      {/* HERO */}
      <section style={{ position:"relative", minHeight:"60vh", display:"flex", alignItems:"flex-end", overflow:"hidden", paddingTop:72 }}>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=85&auto=format"
          alt="Contact JCS Investments"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }}
        />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(8,15,12,.96) 0%,rgba(8,15,12,.5) 55%,rgba(8,15,12,.25) 100%)" }}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(8,15,12,.7) 0%,transparent 60%)" }}/>
        <div style={{ position:"absolute", top:-100, left:-100, width:500, height:500, borderRadius:"50%", background:`radial-gradient(circle,${GREEN}33,transparent 70%)`, animation:"pulse-dot 6s ease-in-out infinite", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", bottom:-80, right:-80, width:400, height:400, borderRadius:"50%", background:`radial-gradient(circle,${GOLD}22,transparent 70%)`, animation:"pulse-dot 8s ease-in-out infinite 2s", pointerEvents:"none" }}/>

        <div style={{ position:"relative", zIndex:2, padding:"0 2rem 5rem", maxWidth:1320, margin:"0 auto", width:"100%" }}>
          <FadeUp><div className="section-label">Get in Touch</div></FadeUp>
          <FadeUp delay={100}>
            <h1 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(2.8rem,6vw,5.5rem)", fontWeight:300, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:"1.2rem" }}>
              Let's Build <em style={{ color:GREEN }}>Wealth</em><br/>
              <span style={{ fontStyle:"italic", color:GOLD }}>Together.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p style={{ fontSize:"1.05rem", color:"rgba(255,255,255,0.7)", maxWidth:520, lineHeight:1.75, marginBottom:"2rem" }}>
              Whether you're ready to invest or just exploring your options, our team is here to guide you every step of the way.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.8rem" }}>
              {[
                { label:"Call (Mobile)", href:"tel:+233554458971" },
                { label:"Call (Office)", href:"tel:+233302960550" },
                { label:"Send Email", href:"mailto:info@jcs.com.gh" },
                { label:"Get Directions", href:"#map" },
              ].map(b => (
                <a key={b.label} href={b.href} style={{
                  display:"inline-flex", alignItems:"center", gap:8, padding:"0.75rem 1.6rem",
                  borderRadius:50, border:`1px solid rgba(255,255,255,0.25)`,
                  color:"#fff", fontSize:"0.82rem", fontWeight:600, textDecoration:"none",
                  background:"rgba(255,255,255,0.06)", transition:"background .3s, border-color .3s",
                  letterSpacing:"0.06em", textTransform:"uppercase",
                }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.background=GREEN; (e.currentTarget as HTMLElement).style.borderColor=GREEN; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.25)"; }}
                >{b.label} <Icons.Arrow /></a>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="section-pad" style={{ background:"var(--dark2)" }}>
        <div className="container">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"1rem", marginBottom:"5rem" }}>
            {[
              { Icon: Icons.Phone, label:"Call Us", value:"+233 302 960550", sub:"Mon-Fri · 8am-6pm GMT", href:"tel:+233302960550", color:GREEN },
              { Icon: Icons.MapPin, label:"Visit Us", value:"JCS Investments Limited", sub:"Accra, Ghana", href:"#map", color:GREEN },
              { Icon: Icons.Linkedin, label:"LinkedIn", value:"JCS Investments", sub:"Connect professionally", href:"https://www.linkedin.com/company/jcs-investments-limited/", color:GOLD },
              { Icon: Icons.Instagram, label:"Instagram", value:"@jcs.com.gh", sub:"See our updates", href:"https://instagram.com/jcs.com.gh", color:GOLD },
              { Icon: Icons.Facebook, label:"Facebook", value:"JCS Investments", sub:"Follow us for news", href:"https://web.facebook.com/JcsInvestments", color:GOLD },
            ].map((card, i) => (
              <FadeUp key={card.label} delay={i*80}>
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display:"block", padding:"1.8rem",
                    border:`1px solid ${card.color}25`, borderRadius:16,
                    textDecoration:"none", background:`${card.color}08`,
                    transition:"transform .3s, box-shadow .3s, border-color .3s"
                  }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform="translateY(-6px)"; el.style.boxShadow=`0 20px 48px rgba(0,0,0,0.4)`; el.style.borderColor=card.color; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform="translateY(0)"; el.style.boxShadow="none"; el.style.borderColor=`${card.color}25`; }}
                >
                  <div style={{ color:card.color, marginBottom:"0.8rem" }}><card.Icon /></div>
                  <div style={{ fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:card.color, marginBottom:"0.5rem" }}>{card.label}</div>
                  <div style={{ fontWeight:600, fontSize:"0.9rem", color:"#fff", marginBottom:"0.3rem", wordBreak:"break-word" }}>{card.value}</div>
                  <div style={{ fontSize:"0.75rem", color:"var(--muted)" }}>{card.sub}</div>
                </a>
              </FadeUp>
            ))}

            {/* Email Card */}
            <FadeUp delay={400}>
              <div style={{ display:"block", padding:"1.8rem", border:`1px solid ${GOLD}25`, borderRadius:16, background:`${GOLD}08` }}>
                <div style={{ color:GOLD, marginBottom:"0.8rem" }}><Icons.Mail /></div>
                <div style={{ fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:GOLD, marginBottom:"0.5rem" }}>Email Us</div>
                <a href="mailto:info@jcs.com.gh?subject=Inquiry from JCS Website" style={{ display:"block", fontWeight:600, fontSize:"0.9rem", color:"#fff", marginBottom:"0.3rem", wordBreak:"break-word", textDecoration:"none" }}>
                  info@jcs.com.gh
                </a>
                <div style={{ fontSize:"0.75rem", color:"var(--muted)" }}>We reply within 24 hours</div>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@jcs.com.gh&su=Inquiry%20from%20JCS%20Website" target="_blank" rel="noopener noreferrer"
                  style={{ display:"inline-block", marginTop:"0.7rem", fontSize:"0.75rem", color:GOLD, textDecoration:"underline" }}>
                  Having trouble? Open in Gmail
                </a>
              </div>
            </FadeUp>
          </div>

          {/* FORM + SIDEBAR */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"3rem", alignItems:"start" }}>

            {/* Sidebar */}
            <FadeUp direction="left">
              <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>

                {/* Info card */}
                <div style={{ background:`linear-gradient(135deg,rgba(31,122,90,0.15),rgba(8,15,12,0.8))`, border:`1px solid ${GREEN}33`, borderRadius:20, padding:"2rem", position:"relative", overflow:"hidden" }}>
                  <div style={{ position:"absolute", top:-40, right:-40, width:140, height:140, borderRadius:"50%", background:`radial-gradient(circle,${GREEN}33,transparent)`, pointerEvents:"none" }}/>
                  <div style={{ position:"relative" }}>
                    <div style={{ color:GOLD, marginBottom:"0.8rem" }}><Icons.Star /></div>
                    <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.4rem", fontWeight:600, marginBottom:"0.8rem" }}>Ready to Invest?</h3>
                    <p style={{ fontSize:"0.85rem", color:"var(--muted)", lineHeight:1.7, marginBottom:"1.5rem" }}>
                      Our seasoned team is ready to build a strategy tailored to your goals — from first-time investors to established institutions.
                    </p>
                    <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                      {[
                        { Icon: Icons.Phone, text:"+233 302 960550", href:"tel:+233302960550" },
                        { Icon: Icons.Mail, text:"info@jcs.com.gh", href:"mailto:info@jcs.com.gh" },
                        { Icon: Icons.MapPin, text:"Accra, Ghana", href:"#map" },
                      ].map(item => (
                        <a key={item.text} href={item.href} style={{ display:"flex", alignItems:"flex-start", gap:10, color:"rgba(255,255,255,0.75)", fontSize:"0.83rem", textDecoration:"none", transition:"color .2s" }}
                          onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color="#fff"}
                          onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,0.75)"}
                        >
                          <span style={{ flexShrink:0, marginTop:1 }}><item.Icon /></span>
                          <span style={{ wordBreak:"break-word" }}>{item.text}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Office hours */}
                <div style={{ border:"1px solid var(--border)", borderRadius:16, padding:"1.8rem" }}>
                  <h4 style={{ fontWeight:600, fontSize:"0.9rem", marginBottom:"1.2rem", display:"flex", alignItems:"center", gap:8 }}>
                    <Icons.Clock /> Office Hours
                  </h4>
                  {[
                    { day:"Monday - Friday", hours:"8:00 AM - 6:00 PM" },
                    { day:"Saturday",        hours:"9:00 AM - 2:00 PM" },
                    { day:"Sunday",          hours:"Closed" },
                  ].map(r => (
                    <div key={r.day} style={{ display:"flex", justifyContent:"space-between", padding:"0.65rem 0", borderBottom:"1px solid var(--border)" }}>
                      <span style={{ fontSize:"0.85rem", color:"var(--muted)" }}>{r.day}</span>
                      <span style={{ fontSize:"0.85rem", fontWeight:600, color: r.hours==="Closed" ? "#444" : GREEN }}>{r.hours}</span>
                    </div>
                  ))}
                </div>

                {/* Socials */}
                <div style={{ border:"1px solid var(--border)", borderRadius:16, padding:"1.8rem" }}>
                  <h4 style={{ fontWeight:600, fontSize:"0.9rem", marginBottom:"1.2rem" }}>Follow JCS Investments</h4>
                  <div style={{ display:"flex", flexDirection:"column", gap:"0.8rem" }}>
                    {[
                      { Icon: Icons.Linkedin, name:"LinkedIn", handle:"JCS Investments Limited", href:"https://www.linkedin.com/company/jcs-investments-limited/", color:"#0A66C2" },
                      { Icon: Icons.Facebook, name:"Facebook", handle:"JCS Investments Limited", href:"https://web.facebook.com/JcsInvestments", color:"#1f771c" },
                      { Icon: Icons.Instagram, name:"Instagram", handle:"@jcs.com.gh", href:"https://www.instagram.com/jcs.com.gh/", color:"#E1306C" },
                    ].map(s => (
                      <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                        style={{ display:"flex", alignItems:"center", gap:12, padding:"0.9rem 1rem", borderRadius:10, border:"1px solid var(--border)", textDecoration:"none", transition:"border-color .3s, transform .3s" }}
                        onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor=s.color; el.style.transform="translateX(4px)"; }}
                        onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="var(--border)"; el.style.transform="translateX(0)"; }}
                      >
                        <div style={{ width:36, height:36, borderRadius:8, background:`${s.color}22`, display:"flex", alignItems:"center", justifyContent:"center", color:s.color }}><s.Icon /></div>
                        <div>
                          <div style={{ fontSize:"0.88rem", fontWeight:600, color:"#fff" }}>{s.name}</div>
                          <div style={{ fontSize:"0.75rem", color:"var(--muted)" }}>{s.handle}</div>
                        </div>
                        <span style={{ marginLeft:"auto", color:"var(--muted)" }}><Icons.Arrow /></span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* FORM */}
            <FadeUp direction="right">
              <div style={{ border:"1px solid var(--border)", borderRadius:20, overflow:"hidden" }}>
                <div style={{ padding:"2rem 2rem 1.5rem", borderBottom:"1px solid var(--border)" }}>
                  <div className="section-label">Send a Message</div>
                  <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,2.5vw,2.2rem)", fontWeight:600, lineHeight:1.2 }}>
                    We'd love to hear<br/>from you.
                  </h2>
                </div>

                {sent ? (
                  <div style={{ padding:"4rem 2rem", textAlign:"center" }}>
                    <div style={{ width:72, height:72, background:`${GREEN}22`, border:`2px solid ${GREEN}`, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1.5rem", color:GREEN }}>
                      <Icons.Check />
                    </div>
                    <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.6rem", fontWeight:600, marginBottom:"0.8rem" }}>Message Sent!</h3>
                    <p style={{ color:"var(--muted)", fontSize:"0.9rem", maxWidth:340, margin:"0 auto 1.5rem", lineHeight:1.65 }}>
                      Thank you for reaching out. A member of the JCS team will be in touch within 24 hours.
                    </p>
                    <button onClick={()=>{ setSent(false); setForm({name:"",email:"",phone:"",subject:"",message:""}); }} className="btn-primary">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ padding:"2rem", display:"flex", flexDirection:"column", gap:"1.2rem" }}>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"1.2rem" }}>
                      <Field label="Full Name" name="name" placeholder="Kwame Mensah" value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} required/>
                      <Field label="Email Address" name="email" type="email" placeholder="kwame@example.com" value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))} required/>
                    </div>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"1.2rem" }}>
                      <Field label="Phone Number" name="phone" type="tel" placeholder="+233 XX XXX XXXX" value={form.phone} onChange={e=>setForm(p=>({...p,phone:e.target.value}))}/>
                      <div style={{ position:"relative" }}>
                        <label style={{ position:"absolute", left:16, top:6, fontSize:"0.68rem", color:GREEN, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", zIndex:1, pointerEvents:"none" }}>Subject *</label>
                        <select name="subject" value={form.subject} onChange={onChange} required style={{
                          width:"100%", paddingTop:24, paddingBottom:10, paddingLeft:16, paddingRight:16,
                          fontSize:"0.88rem", background:"rgba(255,255,255,0.05)", outline:"none",
                          color: form.subject ? "#fff" : "rgba(255,255,255,0.4)",
                          border:`1.5px solid ${form.subject ? GREEN : "rgba(255,255,255,0.1)"}`,
                          borderRadius:12, fontFamily:"var(--font-body)", cursor:"pointer", appearance:"none",
                        }}
                          onFocus={e=>{ (e.target as HTMLSelectElement).style.borderColor=GREEN; (e.target as HTMLSelectElement).style.boxShadow=`0 0 0 3px ${GREEN}22`; }}
                          onBlur={e=>{ (e.target as HTMLSelectElement).style.boxShadow="none"; }}
                        >
                          <option value="" disabled style={{ background:"#1a1a1a" }}>Choose a topic...</option>
                          {SUBJECTS.map(s=><option key={s} value={s} style={{ background:"#1a1a1a" }}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div style={{ position:"relative" }}>
                      <label style={{ position:"absolute", left:16, top:6, fontSize:"0.68rem", color:GREEN, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", zIndex:1, pointerEvents:"none" }}>Message *</label>
                      <textarea name="message" value={form.message} onChange={onChange} required rows={6}
                        placeholder="Tell us about your investment goals or any questions..."
                        style={{ width:"100%", paddingTop:28, paddingBottom:12, paddingLeft:16, paddingRight:16, fontSize:"0.88rem", background:"rgba(255,255,255,0.05)", outline:"none", color:"#fff", border:"1.5px solid rgba(255,255,255,0.1)", borderRadius:12, resize:"none", fontFamily:"var(--font-body)", transition:"border-color .2s" }}
                        onFocus={e=>{ (e.target as HTMLTextAreaElement).style.borderColor=GREEN; (e.target as HTMLTextAreaElement).style.boxShadow=`0 0 0 3px ${GREEN}22`; }}
                        onBlur={e=>{ (e.target as HTMLTextAreaElement).style.borderColor="rgba(255,255,255,0.1)"; (e.target as HTMLTextAreaElement).style.boxShadow="none"; }}
                      />
                    </div>
                    <button type="submit" className="btn-primary" style={{ justifyContent:"center", fontSize:"0.9rem", padding:"1rem" }}>
                      Send Message
                    </button>
                    <p style={{ textAlign:"center", fontSize:"0.75rem", color:"var(--muted)" }}>Your information is kept private and will never be shared.</p>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* LIVE MAP */}
      <section id="map" className="section-pad" style={{ background:"var(--dark)", paddingTop:0 }}>
        <div className="container">
          <FadeUp style={{ textAlign:"center", marginBottom:"2.5rem" }}>
            <div className="section-label" style={{ justifyContent:"center" }}>Our Location</div>
            <h2 className="section-title">Find Us in <em>Accra</em></h2>
            <p className="section-body" style={{ maxWidth:440, margin:"0 auto" }}>Centrally located in Accra. Come visit us or use the map to plan your route.</p>
          </FadeUp>
          <FadeUp delay={100}>
            <div style={{ position:"relative", borderRadius:20, overflow:"hidden", border:`1px solid ${GREEN}44`, boxShadow:`0 0 80px ${GREEN}18, 0 40px 80px rgba(0,0,0,0.4)`, height:520 }}>
              <div style={{ position:"absolute", top:16, left:16, zIndex:10, display:"flex", alignItems:"center", gap:10, padding:"0.7rem 1.2rem", borderRadius:14, background:"rgba(8,15,12,0.92)", border:`1px solid ${GREEN}55`, backdropFilter:"blur(12px)" }}>
                <div style={{ width:10, height:10, borderRadius:"50%", background:GREEN, animation:"pulse-dot 2s ease-in-out infinite" }}/>
                <span style={{ fontSize:"0.82rem", fontWeight:600 }}>JCS Investments Limited · Accra, Ghana</span>
              </div>
              <iframe
                title="JCS Investments Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0805803593!2d-0.14839699999999998!3d5.628514199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf84b43ef91bdf%3A0xe042be6d8b3b5602!2sJCS%20Investments%20Limited!5e0!3m2!1sen!2sgh!4v1711800000000!5m2!1sen!2sgh"
                width="100%" height="100%"
                style={{ border:0, filter:"grayscale(10%) contrast(1.05)" }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center", marginTop:"1.5rem" }}>
              <a href="https://www.google.com/maps/place/JCS+Investments+Limited/@5.6285195,-0.148397,17z" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Open in Google Maps
              </a>
              <a href="tel:+233302960550" className="btn-outline">Call for Directions</a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-pad" style={{ background:"var(--dark3)", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(circle,white 1px,transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:600, borderRadius:"50%", background:`radial-gradient(circle,${GREEN}22,transparent 70%)`, pointerEvents:"none", animation:"pulse-dot 8s ease-in-out infinite" }}/>
        <div style={{ position:"relative", zIndex:1, maxWidth:640, margin:"0 auto" }}>
          <FadeUp>
            <div className="section-label" style={{ justifyContent:"center" }}>Start Your Journey</div>
            <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(2.2rem,4.5vw,3.8rem)", fontWeight:300, lineHeight:1.1, marginBottom:"1.2rem" }}>
              Your Future Starts<br/><em style={{ color:GOLD }}>With One Call.</em>
            </h2>
            <p style={{ color:"var(--muted)", marginBottom:"2.2rem", lineHeight:1.75, fontSize:"1rem" }}>
              Join hundreds of investors who trust JCS Investments to grow their wealth — sustainably and strategically.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center", alignItems:"flex-start" }}>
              <a href="tel:+233302960550" className="btn-primary" style={{ fontSize:"0.9rem" }}>
                Call +233 302 960550
              </a>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
                <a href="mailto:info@jcs.com.gh?subject=Inquiry from JCS Website" className="btn-outline" style={{ fontSize:"0.9rem" }}>
                  Send an Email
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@jcs.com.gh&su=Inquiry%20from%20JCS%20Website" target="_blank" rel="noopener noreferrer"
                  style={{ marginTop:"6px", fontSize:"0.75rem", color:"#1F7A5A", textDecoration:"underline" }}>
                  Having trouble? Open in Gmail
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}