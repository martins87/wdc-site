import SectionTitle from "@/app/components/SectionTitle";
import ServiceCard from "./ServiceCard";
import WebsiteDesign from "../../assets/icons/Website-design.svg";
import Development from "../../assets/icons/development.svg";
import SEO from "../../assets/icons/SEO.svg";
import AppDesign from "../../assets/icons/AppDesign.svg";

const Services = () => {
  return (
    <div className="w-full">
      <SectionTitle
        inWhite="Our"
        inRed="Services"
        description="We focus on user goals to craft meaningful digital solutions for every need."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ServiceCard
          icon={WebsiteDesign}
          label="Website Design"
          description="We design modern, responsive websites that align with your brand identity. By prioritizing usability and aesthetics, we create digital spaces that captivate and engage your audience."
        />
        <ServiceCard
          icon={Development}
          label="Development"
          description="We build scalable and efficient digital solutions tailored to your goals. Our development team ensures seamless functionality and top-tier performance."
        />
        <ServiceCard
          icon={SEO}
          label="SEO"
          description="We optimize your website to improve visibility and rankings. By analyzing search trends and your goals, we craft SEO strategies tailored to drive organic growth and engagement for your brand."
        />
        <ServiceCard
          icon={AppDesign}
          label="App Design"
          description="From concept to prototype, we craft innovative app interfaces that align with user needs and deliver impactful digital interactions."
        />
      </div>
    </div>
  );
};

export default Services;
