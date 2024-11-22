import SectionsLinks from "../SectionsLinks";

const Links = () => {
  return (
    <div className="w-full min-h-32 flex flex-col md:flex-row items-center gap-y-2 justify-center md:justify-between">
      <SectionsLinks />
      <span className="flex items-center text-custom_gray text-sm">
        All Rights Reserved. Noble Craft WebDesign
      </span>
    </div>
  );
};

export default Links;
