import CTA from "./CTA";
import Links from "./Links";

const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-y-10 mt-40">
      <CTA />
      <Links />
    </div>
  );
};

export default Footer;
