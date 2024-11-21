import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { links } from "../constants/links";
import { PageLink } from "../types/PageLink";

type SectionsLinksProps = {
  navbar?: boolean;
};

const SectionsLinks: FC<SectionsLinksProps> = ({ navbar }) => {
  return (
    <div className={twMerge(navbar ? "hidden lg:flex" : "")}>
      <ul className={twMerge("flex items-center", navbar ? "gap-12" : "gap-6")}>
        {links.map((link: PageLink) => (
          <li
            className={twMerge(
              "text-white hover:text-main_color hover:cursor-pointer font-[family-name:var(--font-manrope)] text-base",
              navbar ? "font-semibold" : "font-normal"
            )}
            key={link.src}
          >
            <Link href={link.src}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionsLinks;
