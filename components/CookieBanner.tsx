"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        left: 20,
        right: 20,
        background: "#0B1F17",
        border: "1px solid #1F7A5A",
        borderRadius: 12,
        padding: "1rem",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "0.8rem",
      }}
    >
      <p style={{ fontSize: "0.85rem", color: "#ccc" }}>
        We use cookies to improve your experience and analyze site traffic.
      </p>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          onClick={acceptCookies}
          style={{
            background: "#1F7A5A",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Accept
        </button>

        <button
          onClick={declineCookies}
          style={{
            background: "transparent",
            color: "#ccc",
            border: "1px solid #ccc",
            padding: "0.5rem 1rem",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );
}