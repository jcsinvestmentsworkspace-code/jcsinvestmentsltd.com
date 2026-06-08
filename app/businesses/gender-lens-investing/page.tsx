"use client";
import BusinessPageTemplate from "@/components/BusinessPageTemplate";

export default function Page() {
  return (
    <BusinessPageTemplate
      tag="Gender Lens"
      title="Positive"
      titleEm="Gender Lens Investment"
      subtitle="Advancing women’s economic empowerment by supporting women-owned businesses and investing in opportunities that promote gender equity, inclusion, and long-term social impact."
      image="/images/gender-lens.jpg"
      imageAlt="Positive gender lens investment"
      overview="At JCS Investments, gender equity and women’s economic empowerment are central to our values. Our Positive Gender Lens Investment approach focuses on supporting women-owned businesses and promoting inclusive investment opportunities that create measurable social and economic value. We believe that investing in gender equity strengthens communities, expands opportunity, and builds more resilient economies."
      detail="Our gender lens strategy goes beyond capital. We advocate for inclusive business models, support enterprises that empower women, and work to expand access to markets, finance, and opportunities for underrepresented groups. By aligning investment decisions with equity, accountability, and social responsibility, JCS helps build a more inclusive and sustainable future."
      features={[
        {
          icon: "👩‍💼",
          title: "Women-Owned Businesses",
          desc: "Supporting enterprises led by women through investment, visibility, and strategic support to help them scale sustainably.",
        },
        {
          icon: "⚖️",
          title: "Gender Equity",
          desc: "Promoting business practices and investments that advance fairness, inclusion, and equal opportunity across sectors.",
        },
        {
          icon: "🤝",
          title: "Economic Empowerment",
          desc: "Creating pathways for women and underserved groups to participate meaningfully in business, leadership, and the broader economy.",
        },
        {
          icon: "🌍",
          title: "Inclusive Impact",
          desc: "Backing initiatives that generate both financial value and positive social outcomes for communities and future generations.",
        },
      ]}
      stats={[
        { val: "100%", label: "Equity Focused" },
        { val: "Women", label: "Business Priority" },
        { val: "4", label: "Impact Pillars" },
        { val: "Long-Term", label: "Value Approach" },
      ]}
      related={[
        {
          title: "SenHub",
          href: "/businesses/SenHub",
          img: "/images/SenHub.jpg",
        },
        {
          title: "Circular Economy",
          href: "/businesses/circular-economy",
          img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&q=80",
        },
        {
          title: "Financial Advisory",
          href: "/businesses/financial-advisory",
          img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80",
        },
      ]}
    />
  );
}