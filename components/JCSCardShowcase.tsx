"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function JCSCardShowcase() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5rem",
        position: "relative",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          width: 340,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(31,122,90,0.28) 0%, transparent 70%)",
          filter: "blur(32px)",
          pointerEvents: "none",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />

      {/* Card Stack */}
      <div
        style={{
          position: "relative",
          width: 340,
          height: 215,
          cursor: "pointer",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Back card */}
        <div
          style={{
            position: "absolute",
            top: hovered ? -22 : -16,
            left: hovered ? 26 : 18,
            width: 340,
            height: 215,
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: hovered
              ? "0 32px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(31,122,90,0.25)"
              : "0 20px 48px rgba(0,0,0,0.4)",
            opacity: hovered ? 1 : 0.72,
            transform: hovered ? "rotate(5deg) scale(1.02)" : "rotate(3deg)",
            transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
            zIndex: 1,
          }}
        >
          <Image
            src="/images/jcs-green-card-back.png"
            alt="JCS Green Card — back"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Front card */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: hovered ? -12 : 0,
            width: 340,
            height: 215,
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: hovered
              ? "0 40px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(31,122,90,0.3)"
              : "0 24px 56px rgba(0,0,0,0.5)",
            transform: hovered ? "rotate(-2deg) scale(1.04)" : "rotate(0deg) scale(1)",
            transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
            zIndex: 2,
            animation: "cardFloat 4s ease-in-out infinite",
          }}
        >
          <Image
            src="/images/jcs-green-card-front.png"
            alt="JCS Green Card — front"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          {/* Glare sweep */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.05) 100%)",
              borderRadius: 18,
              pointerEvents: "none",
              opacity: hovered ? 1 : 0.6,
              transition: "opacity 0.45s ease",
            }}
          />
        </div>
      </div>

      {/* CTA Button */}
      <Link
        href="https://card.jcs.com.gh"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.55rem",
          padding: "0.85rem 2rem",
          background: "var(--g)",
          color: "#fff",
          fontSize: "0.82rem",
          fontWeight: 700,
          letterSpacing: "0.09em",
          textTransform: "uppercase",
          borderRadius: 50,
          textDecoration: "none",
          boxShadow: "0 8px 24px rgba(31,122,90,0.4)",
          transition: "transform 0.25s ease, filter 0.25s ease, box-shadow 0.25s ease",
          position: "relative",
          zIndex: 3,
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "scale(1.06)";
          el.style.filter = "brightness(1.15)";
          el.style.boxShadow = "0 14px 32px rgba(31,122,90,0.55)";
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "scale(1)";
          el.style.filter = "brightness(1)";
          el.style.boxShadow = "0 8px 24px rgba(31,122,90,0.4)";
        }}
      >
        Tap To Apply Now
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0 }}
        >
          <path
            d="M1 7h12M8 2l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* Floating animation keyframes injected via style tag */}
      <style>{`
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-8px) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}