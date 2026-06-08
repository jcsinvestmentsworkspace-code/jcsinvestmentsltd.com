"use client";
import FadeUp from "./FadeUp";

interface PageHeroProps {
  label: string;
  title: string;
  titleEm?: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  cta?: { label: string; href: string };
}

export default function PageHero({ label, title, titleEm, subtitle, image, imageAlt, cta }: PageHeroProps) {
  return (
    <section className="page-hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={imageAlt} className="page-hero-img" loading="eager" />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <FadeUp>
          <div className="section-label" style={{ marginBottom: "1rem" }}>{label}</div>
        </FadeUp>
        <FadeUp delay={100}>
          <h1 className="section-title" style={{ fontSize: "clamp(2.4rem,5vw,4.5rem)", maxWidth: 700, marginBottom: "1.2rem" }}>
            {title} {titleEm && <em>{titleEm}</em>}
          </h1>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="section-body" style={{ maxWidth: 560, marginBottom: cta ? "2rem" : 0 }}>
            {subtitle}
          </p>
        </FadeUp>
        {cta && (
          <FadeUp delay={300}>
            <a href={cta.href} className="btn-primary">{cta.label} →</a>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
