"use client";
import BusinessPageTemplate from "@/components/BusinessPageTemplate";
export default function Page() {
  return <BusinessPageTemplate
    tag="Energy" title="Renewable Energy:" titleEm="Powering Africa's Future"
    subtitle="We deploy strategic capital into solar, wind, and clean energy infrastructure across West Africa — reducing carbon emissions while delivering consistent returns."
    image="/images/RenewableEnergy.jpg"
    imageAlt="Solar farm West Africa"
    overview="West Africa is home to some of the world's most abundant solar and wind resources, yet energy access remains a critical development challenge. JCS Investments bridges this gap by structuring, financing, and developing clean energy projects that deliver power to homes, businesses, and communities."
    detail="Our renewable energy portfolio spans utility-scale solar PV, distributed rooftop systems, off-grid mini-grids, and wind energy installations. We work with government agencies, development finance institutions, and private partners to bring projects from feasibility through to commissioning and long-term asset management."
    features={[
      { icon:"☀️", title:"Solar PV Development", desc:"Utility-scale and distributed solar projects from 50kW to 50MW, serving residential, commercial, and industrial customers." },
      { icon:"🌬️", title:"Wind Energy", desc:"Wind farm development and financing across Ghana's windiest corridors, delivering clean baseload power." },
      { icon:"🏘️", title:"Mini-Grid Systems", desc:"Off-grid solar mini-grids bringing reliable, affordable electricity to rural communities beyond the national grid." },
      { icon:"📈", title:"Carbon Credits & ESG", desc:"Structuring carbon offset programmes to generate additional revenue streams and ESG credentials for portfolio companies." },
    ]}
    stats={[
      { val:"2.4MW", label:"Clean Capacity" },
      { val:"12K+",  label:"CO₂ Tonnes Avoided" },
      { val:"8K+",   label:"Homes Powered" },
      { val:"15+",   label:"Projects Delivered" },
    ]}
    related={[
      { title:"Circular Economy", href:"/businesses/circular-economy", img:"/images/circular-economy.jpg" },
      { title:"Project Financing", href:"/businesses/project-financing", img:"/images/project-finance.jpg" },
      { title:"Gender Lens", href:"/businesses/gender-lens", img:"/images/gender-lens.jpg" },
    ]}
  />;
}
