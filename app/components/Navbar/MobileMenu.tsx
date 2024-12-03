import { FC } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import Container from "../Container";
import { links } from "@/app/constants/links";
import { PageLink } from "@/app/types/PageLink";
import Typography from "../Typography";
import { MobileMenuProps } from "@/app/types/MobileMenu";

const MobileMenu: FC<MobileMenuProps> = ({ open, onClick }) => {
  return (
    <div
      className={twMerge(
        "tablet:hidden fixed w-full h-[calc(100%+32px)] flex flex-col gap-y-0 -mt-[100px] origin-top duration-500 transform bg-background z-10",
        open ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <Container>
        <div className="w-full h-screen flex flex-col gap-y-4 top-[40px] mt-[100px] pt-20">
          {links.map((link: PageLink, index: number) => (
            <Typography key={index} font="montserrat" weight="bold">
              <Link
                className="flex items-center justify-start gap-x-1 text-primary_text"
                href={link.src}
                onClick={onClick}
              >
                <span className="w-8 text-base">{`0${index + 1}`}</span>
                <span className="text-3xl">{link.label}</span>
              </Link>
            </Typography>
          ))}
        </div>
        <div className="w-full h-10 bg-main_color" />
      </Container>
    </div>
  );
};

export default MobileMenu;
