"use client";
import { getArticleBySlug } from "@/lib/articles";
import ArticlePage from "@/components/ArticlePage";
import Link from "next/link";

export default function Page() {
  const article = getArticleBySlug("west-africa-wind-energy");
  if (!article) return (
    <div style={{ paddingTop:120, textAlign:"center", minHeight:"60vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
      <h1 style={{ fontFamily:"var(--font-display)", fontSize:"2rem", marginBottom:"1rem" }}>Article not found</h1>
      <Link href="/insights" style={{ color:"var(--g)", fontWeight:600, textDecoration:"none" }}>← Back to Insights</Link>
    </div>
  );
  return <ArticlePage article={article as any} />;
}
