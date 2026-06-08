"use client";
import BusinessPageTemplate from "@/components/BusinessPageTemplate";
export default function Page() {
  return <BusinessPageTemplate
    tag="Advisory" title="Financial Advisory:" titleEm="Counsel You Can Trust"
    subtitle="Strategic investment counsel, portfolio optimisation, and market intelligence for institutions, family offices, and high net-worth individuals across Africa."
    image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1800&q=85&auto=format"
    imageAlt="Financial markets advisory"
    overview="With over 20 years of on-the-ground experience in African markets, JCS Investments' financial advisory practice offers unparalleled insight into the continent's most dynamic investment opportunities. We go beyond generic recommendations — every piece of advice is grounded in deep local knowledge and rigorous analysis."
    detail="Our advisory team works with a diverse range of clients — from pension funds and development finance institutions to family offices and high net-worth entrepreneurs. We help clients navigate market complexity, structure bespoke portfolios, and make investment decisions with clarity and conviction."
    features={[
      { icon:"📊", title:"Portfolio Strategy", desc:"Comprehensive portfolio construction and optimisation aligned to your risk tolerance, time horizon, and return objectives." },
      { icon:"🔍", title:"Market Research", desc:"Proprietary research and intelligence on African markets, sectors, and companies not available from mainstream sources." },
      { icon:"🏛️", title:"Institutional Advisory", desc:"Bespoke mandates for pension funds, endowments, and sovereign wealth funds seeking African market exposure." },
      { icon:"💼", title:"Transaction Advisory", desc:"M&A, capital raising, and deal structuring support from origination through to close." },
    ]}
    stats={[
      { val:"$10M+", label:"Assets Advised" },
      { val:"200+",  label:"Advisory Mandates" },
      { val:"98%",   label:"Client Retention" },
      { val:"20+",   label:"Years Experience" },
    ]}
    related={[
      { title:"Project Financing", href:"/businesses/project-financing", img:"/images/project-finance.jpg" },
      { title:"SenHub", href:"/businesses/SenHub", img:"/images/SenHub.jpg" },
      { title:"Gender Lens", href:"/businesses/gender-lens-investing", img:"public/images/gender-lens.jpg" },
    ]}
  />;
}
