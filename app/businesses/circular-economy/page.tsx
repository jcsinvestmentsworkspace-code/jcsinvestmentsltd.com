"use client";
import BusinessPageTemplate from "@/components/BusinessPageTemplate";
export default function Page() {
  return <BusinessPageTemplate
    tag="Sustainability" title="Circular Economy:" titleEm="Turning Waste Into Wealth"
    subtitle="We invest in innovative recycling, upcycling, and sustainable supply chain solutions that generate strong returns while healing the planet."
    image="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1800&q=85&auto=format"
    imageAlt="Circular economy recycling"
    overview="Africa generates enormous quantities of waste that represents an untapped economic opportunity. JCS Investments pioneers circular economy investments across Ghana and West Africa — transforming what was once considered a liability into a valuable resource stream that creates jobs, reduces pollution, and drives growth."
    detail="We invest across the entire circular economy value chain: from collection and sorting infrastructure to processing facilities, upcycled product manufacturers, and the digital platforms that connect these systems. Our portfolio companies are proving that sustainability and profitability are deeply aligned."
    features={[
      { icon:"♻️", title:"Waste Processing", desc:"Industrial-scale recycling and processing facilities for plastics, metals, e-waste, and organic materials." },
      { icon:"🏭", title:"Upcycling Ventures", desc:"Backing innovators who convert waste streams into premium products — from recycled fashion to construction materials." },
      { icon:"🌿", title:"Organic Waste", desc:"Composting and biogas facilities that convert agricultural and food waste into energy and high-value fertiliser." },
      { icon:"📱", title:"Digital Platforms", desc:"Technology platforms that optimise waste collection, sorting, and trading across the circular economy ecosystem." },
    ]}
    stats={[
      { val:"8K+",  label:"Tonnes Diverted/yr" },
      { val:"1.2K", label:"Jobs Created" },
      { val:"6",    label:"Processing Facilities" },
      { val:"3",    label:"Countries Active" },
    ]}
    related={[
      { title:"Renewable Energy", href:"/businesses/renewable-energy", img:"public/images/RenewableEnergy.jpg" },
      { title:"Gender Lens", href:"/businesses/gender-lens-investing", img:"/images/gender-lens.jpg" },
      { title:"Project Financing", href:"/businesses/project-financing", img:"/images/project-finance.jpg" },
    ]}
  />;
}
