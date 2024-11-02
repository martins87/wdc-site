import { FC } from "react";
import { twMerge } from "tailwind-merge";

type Link = {
  src: string;
  label: string;
};

const links: Link[] = [
  { src: "/services", label: "SERVICES" },
  { src: "/about", label: "ABOUT" },
  { src: "/projects", label: "PROJECTS" },
  { src: "/contact", label: "CONTACT" },
];

type SectionsLinksProps = {
  navbar?: boolean;
};

const SectionsLinks: FC<SectionsLinksProps> = ({ navbar }) => {
  return (
    <div className={twMerge(navbar ? "hidden lg:flex" : "")}>
      <ul className={twMerge("flex items-center", navbar ? "gap-12" : "gap-6")}>
        {links.map((link: Link) => (
          <li
            className={twMerge(
              "text-white hover:text-main_color hover:cursor-pointer font-[family-name:var(--font-manrope)] text-base",
              navbar ? "font-semibold" : "font-normal"
            )}
            key={link.src}
          >
            {link.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionsLinks;
