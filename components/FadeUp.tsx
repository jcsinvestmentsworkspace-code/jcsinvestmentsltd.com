"use client";
import { useEffect, useRef, useState, CSSProperties } from "react";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
  style?: CSSProperties;
  threshold?: number;
}

export default function FadeUp({
  children,
  delay = 0,
  direction = "up",
  className = "",
  style = {},
  threshold = 0.12,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const initial: CSSProperties = {
    opacity: 0,
    transform:
      direction === "left" ? "translateX(-36px)" :
      direction === "right" ? "translateX(36px)" :
      "translateY(36px)",
  };
  const final: CSSProperties = { opacity: 1, transform: "translate(0)" };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(visible ? final : initial),
        transition: `opacity 0.8s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.8s cubic-bezier(.22,1,.36,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
