"use client";
import BusinessPageTemplate from "@/components/BusinessPageTemplate";

export default function Page() {
  return (
    <BusinessPageTemplate
      tag="SenHub"
      title="SenHub:"
      titleEm="Empowering Inclusive Innovation"
      subtitle="A transformative platform connecting individuals with disabilities to economic opportunities through entrepreneurship, employment, and digital inclusion."
      image="/images/SenHub.jpg" // ← replace with your real image later
      imageAlt="SenHub platform empowering individuals with disabilities"
      overview="SenHub is a flagship advocacy and empowerment initiative by JCS Investments designed to bridge the gap between individuals with special needs and the broader economy. Through a powerful combination of digital tools, marketplace access, and employment opportunities, SenHub enables individuals with disabilities to showcase their talents, generate income, and participate fully in society."
      detail="SenHub operates through two core platforms: an online marketplace that allows individuals to sell products and services, and a recruitment portal that connects inclusive employers with talented individuals with special needs. By fostering entrepreneurship, promoting inclusivity, and enabling access to dignified work, SenHub is redefining what economic participation looks like in Africa."

      features={[
        {
          icon: "🛍️",
          title: "Online Marketplace",
          desc: "A digital platform where individuals with disabilities can showcase and sell their products and services, creating sustainable income streams.",
        },
        {
          icon: "💼",
          title: "Job Recruitment Portal",
          desc: "Connecting inclusive employers with skilled individuals with special needs, promoting diverse and equitable workplaces.",
        },
        {
          icon: "🌍",
          title: "Economic Inclusion",
          desc: "Breaking barriers to financial participation by providing tools and access to markets for underserved communities.",
        },
        {
          icon: "🚀",
          title: "Entrepreneurship Support",
          desc: "Empowering individuals to build businesses, develop skills, and achieve independence through innovation and opportunity.",
        },
      ]}

      stats={[
        { val: "100+", label: "Users Empowered" },
        { val: "2", label: "Core Platforms" },
        { val: "50+", label: "Products & Services Listed" },
        { val: "∞", label: "Impact Potential" },
      ]}

      related={[
        {
          title: "Impact Initiatives",
          href: "/impact",
          img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80",
        },
        {
          title: "Sustainability",
          href: "/sustainability",
          img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&q=80",
        },
        {
          title: "Contact Us",
          href: "/contact",
          img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&q=80",
        },
      ]}
    />
  );
}
