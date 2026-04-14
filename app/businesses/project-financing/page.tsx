"use client";
import BusinessPageTemplate from "@/components/BusinessPageTemplate";
export default function Page() {
  return <BusinessPageTemplate
    tag="Finance" title="Project Financing:" titleEm="From Concept to Commissioning"
    subtitle="Comprehensive structuring and financing solutions for infrastructure, energy, and development projects across all stages of the capital stack."
    image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800&q=85&auto=format"
    imageAlt="Project financing infrastructure"
    overview="Large-scale infrastructure and development projects in Africa often stall not for lack of ideas, but for lack of properly structured financing. JCS Investments fills this critical gap — bringing together equity, debt, and hybrid capital to fund projects that transform communities and deliver strong investor returns."
    detail="Our project finance team has successfully structured transactions ranging from $500,000 community solar installations to $10M+ urban development projects. We originate, structure, arrange, and often co-invest alongside our clients — aligning incentives and ensuring every project has the optimal capital structure for its risk profile."
    features={[
      { icon:"🏗️", title:"Capital Structuring", desc:"Optimal equity, debt, and mezzanine structures tailored to project risk, duration, and return profile." },
      { icon:"🤝", title:"DFI Relationships", desc:"Deep relationships with development finance institutions including AfDB, IFC, and bilateral funders for concessional capital." },
      { icon:"📋", title:"Feasibility & Advisory", desc:"Pre-investment feasibility studies, financial modelling, and bankability assessments for early-stage projects." },
      { icon:"🔧", title:"Construction & Operations", desc:"Project monitoring and asset management through construction and into operations to protect investor capital." },
    ]}
    stats={[
      { val:"$10M+", label:"Projects Financed" },
      { val:"50+",   label:"Transactions Closed" },
      { val:"8",     label:"Sectors Covered" },
      { val:"3",     label:"DFI Partners" },
    ]}
    related={[
      { title:"Renewable Energy", href:"/businesses/renewable-energy", img:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80" },
      { title:"SenHub", href:"/businesses/SenHub", img:"/images/SenHub.jpg" },
      { title:"Financial Advisory", href:"/businesses/financial-advisory", img:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80" },
    ]}
  />;
}
