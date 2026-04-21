"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--dark2)",
      borderTop: "1px solid var(--border)",
      padding: "5rem 2rem 3rem",
    }}>
      <div style={{
        maxWidth: 1320, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "3rem",
        marginBottom: "4rem",
      }}>
        {/* Brand */}
        <div>
          <div style={{
            width: 48, height: 48, background: "var(--g)", borderRadius: 12,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, color: "#fff",
            marginBottom: "1.2rem",
          }}>J</div>
          <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7, maxWidth: 280, marginBottom: "1.5rem" }}>
            JCS Investments Limited is Accra's leading sustainable investment firm, deploying strategic capital across renewable energy, circular economy, and financial advisory.
          </p>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            {[
              { label: "in", href: "https://www.linkedin.com/company/jcs-investments-limited/", title: "LinkedIn" },
              { label: "ig", href: "https://www.instagram.com/jcsinvestments_official/", title: "Instagram" },
              { label: "fb", href: "https://web.facebook.com/JcsInvestments", title: "Facebook" },
              { label: "✉", href: "mailto:jcsinvestmentsworkspace@gmail.com", title: "Email" },
            ].map(s => (
              <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer" title={s.title}
                style={{
                  width: 38, height: 38, border: "1px solid var(--border)", borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.85rem", color: "var(--muted)", textDecoration: "none",
                  transition: "border-color .2s, color .2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--g)"; (e.currentTarget as HTMLElement).style.color = "var(--g)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
              >{s.label}</a>
            ))}
          </div>
        </div>

        {/* The Firm */}
        <div>
          <h4 style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--g)", fontWeight: 600, marginBottom: "1.4rem" }}>The Firm</h4>
          {[
            { label: "Our Story", href: "/about" },
            { label: "Leadership Team", href: "/team" },
            { label: "Sustainability", href: "/sustainability" },
            { label: "Our Impact", href: "/impact" },
            { label: "Careers", href: "/careers" },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{
              display: "block", padding: "0.4rem 0",
              fontSize: "0.85rem", color: "var(--muted)", textDecoration: "none", transition: "color .2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >{l.label}</Link>
          ))}
        </div>

        {/* What We Do */}
        <div>
          <h4 style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--g)", fontWeight: 600, marginBottom: "1.4rem" }}>What We Do</h4>
          {[
            { label: "Renewable Energy",   href: "/businesses/renewable-energy" },
            { label: "Circular Economy",   href: "/businesses/circular-economy" },
            { label: "Financial Advisory", href: "/businesses/financial-advisory" },
            { label: "SenHub",             href: "/businesses/SenHub" },
            { label: "Project Financing",  href: "/businesses/project-financing" },
            { label: "Gender Lens",        href: "/businesses/gender-lens-investing" },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{
              display: "block", padding: "0.4rem 0",
              fontSize: "0.85rem", color: "var(--muted)", textDecoration: "none", transition: "color .2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >{l.label}</Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--g)", fontWeight: 600, marginBottom: "1.4rem" }}>Contact</h4>
          <a href="tel:+233541580247" style={{ display: "block", padding: "0.4rem 0", fontSize: "0.85rem", color: "var(--muted)", textDecoration: "none" }}>+233 54 158 0247</a>
       <a
  href="mailto:jcsinvestmentsworkspace@gmail.com?subject=Inquiry from JCS Website"
  style={{
    display: "block",
    padding: "0.4rem 0",
    fontSize: "0.82rem",
    color: "var(--muted)",
    textDecoration: "none",
    wordBreak: "break-word"
  }}
>
  jcsinvestmentsworkspace@gmail.com
</a>

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=jcsinvestmentsworkspace@gmail.com&su=Inquiry%20from%20JCS%20Website"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "block",
    fontSize: "0.8rem",
    color: "#C9A24D",
    marginTop: "6px",
    textDecoration: "underline",
    fontWeight: 600
  }}
>
  Having trouble? Open in Gmail →
</a>
          <span style={{ display: "block", padding: "0.4rem 0", fontSize: "0.85rem", color: "var(--muted)" }}>Accra, Ghana</span>
          <a
  href="https://www.linkedin.com/company/jcs-investments-limited/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "block",
    padding: "0.4rem 0",
    fontSize: "0.85rem",
    color: "var(--muted)",
    textDecoration: "none"
  }}
>
  LinkedIn
</a>

<a
  href="https://www.instagram.com/jcsinvestments_official/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "block",
    padding: "0.4rem 0",
    fontSize: "0.85rem",
    color: "var(--muted)",
    textDecoration: "none"
  }}
>
  Instagram
</a>

<a
  href="https://web.facebook.com/JcsInvestments"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "block",
    padding: "0.4rem 0",
    fontSize: "0.85rem",
    color: "var(--muted)",
    textDecoration: "none"
  }}
>
  Facebook
</a>          <Link href="/contact" style={{ display: "block", padding: "0.4rem 0", fontSize: "0.85rem", color: "var(--g)", textDecoration: "none", fontWeight: 600 }}>Contact Page →</Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: 1320, margin: "0 auto",
        paddingTop: "2rem", borderTop: "1px solid var(--border)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "1rem",
      }}>
        <p style={{ fontSize: "0.78rem", color: "var(--muted)" }}>© 2026 JCS Investments Limited. All rights reserved. Accra, Ghana.</p>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {["Privacy Policy", "Terms of Use", "Disclaimer"].map(t => (
            <Link key={t} href="/contact" style={{ fontSize: "0.78rem", color: "var(--muted)", textDecoration: "none", transition: "color .2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >{t}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
