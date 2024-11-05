import SectionsLinks from "../SectionsLinks";

const Links = () => {
  return (
    <div className="w-full min-h-32 flex flex-col md:flex-row items-center gap-y-2 justify-center md:justify-between">
      <SectionsLinks />
      <span className="flex items-center text-custom_gray">
        All Rights Reserved. Web Design Company
      </span>
    </div>
  );
};

export default Links;
