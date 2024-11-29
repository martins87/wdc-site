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
    <div className={twMerge(navbar ? "hidden lg:flex" : "")}>
      <ul className={twMerge("flex items-center", navbar ? "gap-12" : "gap-6")}>
        {links.map((link: PageLink) => (
          <Typography key={link.src} font="manrope">
            <li
              className={twMerge(
                "text-primary_text hover:text-main_color hover:cursor-pointer text-base",
                navbar ? "font-semibold" : "font-normal",
                footer ? "text-white" : ""
              )}
            >
              <Link href={link.src}>{link.label}</Link>
            </li>
          </Typography>
        ))}
      </ul>
    </div>
  );
};

export default SectionsLinks;
