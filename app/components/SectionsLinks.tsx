import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { links } from "../constants/links";
import { PageLink } from "../types/PageLink";
import Typography from "./Typography";

type SectionsLinksProps = {
  navbar?: boolean;
  footer?: boolean;
};

const SectionsLinks: FC<SectionsLinksProps> = ({ navbar, footer }) => {
  return (
    <div className={twMerge(navbar ? "hidden tablet:flex" : "")}>
      <ul className={twMerge("flex items-center", navbar ? "gap-12" : "gap-6")}>
        {links.map((link: PageLink) => (
          <li
            key={link.src}
            className={twMerge(
              "text-primary_text hover:text-main_color hover:cursor-pointer text-base",
              navbar ? "font-semibold" : "font-normal",
              footer ? "text-white" : ""
            )}
          >
            <Link href={link.src}>
              <Typography font="manrope">{link.label}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionsLinks;
