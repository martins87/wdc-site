import SectionsLinks from "./SectionsLinks";

const Footer = () => {
  return (
    <div className="w-full h-24 flex flex-col sm:flex-row items-center gap-y-2 justify-center sm:justify-between">
      <SectionsLinks />
      <span className="flex items-center text-custom_gray">
        All Rights Reserved. Web Design Company
      </span>
    </div>
  );
};

export default Footer;
