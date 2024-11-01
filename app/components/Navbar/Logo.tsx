import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-1 lg:flex-initial text-white font-[family-name:var(--font-manrope)]">
      <div className="sm:hidden">
        <span className="font-bold">Logo</span>
      </div>
      <div className="hidden sm:flex">
        <span className="font-bold">WebDesign</span>Company
      </div>
    </div>
  );
};

export default Logo;
