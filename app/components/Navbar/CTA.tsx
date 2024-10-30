import React from "react";

const style = `
  w-[200px] h-[51px]
  flex items-center justify-center
  rounded-2xl
  border-2 border-main_color
  bg-inherit hover:bg-main_color
  text-white font-[family-name:var(--font-montserrat)]
`;

const CTA = () => {
  return <button className={style}>START PROJECT</button>;
};

export default CTA;
