import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import Container from "../Container";
import Close from "../../assets/icons/Close.svg";
import { links } from "@/app/constants/links";
import { PageLink } from "@/app/types/PageLink";

type MobileMenuProps = {
  open: boolean;
  onClick?: () => void;
};

const MobileMenu: FC<MobileMenuProps> = ({ open, onClick }) => {
  return (
    <div
      className={twMerge(
        "md:hidden fixed w-full h-[calc(100%+32px)] flex flex-col gap-y-0 -mt-[100px] origin-top duration-500 transform bg-background",
        open ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <Container>
        <div className="w-full h-[100px] flex items-center justify-end">
          {open && (
            <Image
              className="lg:hidden hover:cursor-pointer"
              src={Close}
              alt="Close icon"
              onClick={onClick}
            />
          )}
        </div>
        <div className="w-full h-screen flex flex-col gap-y-4 top-[40px] pt-20">
          {links.map((link: PageLink, index: number) => (
            <Link
              key={index}
              className="flex items-center justify-start gap-x-1 font-[family-name:var(--font-montserrat)] text-white font-bold"
              href={link.src}
              onClick={onClick}
            >
              <span className="w-8 text-base">{`0${index + 1}`}</span>
              <span className="text-3xl">{link.label}</span>
            </Link>
          ))}
        </div>
        <div className="w-full h-10 bg-main_color" />
      </Container>
    </div>
  );
};

export default MobileMenu;
