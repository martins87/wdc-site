"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import Button from "../Button";
import Container from "../Container";
import Logo from "./Logo";
import SectionsLinks from "../SectionsLinks";
import Hamburger from "../../assets/icons/Hamburger.svg";
import Close from "../../assets/icons/Close.svg";

type MobileMenuProps = {
  open: boolean;
  // links?: any[];
  onClick?: () => void;
};

const MobileMenu: FC<MobileMenuProps> = ({
  open,
  // links,
  onClick,
}) => {
  return (
    <div
      className={twMerge(
        // "md:hidden fixed w-full h-screen flex flex-col gap-y-10 -mt-[100px] origin-top duration-500 transform bg-background",
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
          <div className="flex items-center gap-x-4 font-[family-name:var(--font-montserrat)] text-white font-bold">
            <span className="text-base">01</span>
            <span className="text-3xl">SERVICES</span>
          </div>
          <div className="flex items-center gap-x-4 font-[family-name:var(--font-montserrat)] text-white font-bold">
            <span className="text-base">02</span>
            <span className="text-3xl">ABOUT</span>
          </div>
          <div className="flex items-center gap-x-4 font-[family-name:var(--font-montserrat)] text-white font-bold">
            <span className="text-base">03</span>
            <span className="text-3xl">PROJECTS</span>
          </div>
          <div className="flex items-center gap-x-4 font-[family-name:var(--font-montserrat)] text-white font-bold">
            <span className="text-base">04</span>
            <span className="text-3xl">CONTACT</span>
          </div>
        </div>
        <div className="w-full h-10 bg-main_color" />
      </Container>
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    console.log("clicked to open mobile menu");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    console.log("clicked to close mobile menu");
  };

  return (
    <>
      <Container>
        <div className="w-full h-[100px] flex items-center justify-between sticky top-0 left-0 gap-4 sm:gap-10 lg:gap-2">
          <Logo />
          <SectionsLinks navbar />
          <Link href={"/contact"}>
            <Button label="START PROJECT" outlined />
          </Link>
          {!isMobileMenuOpen && (
            <Image
              className="lg:hidden hover:cursor-pointer"
              src={Hamburger}
              alt="Hamburger icon"
              onClick={openMobileMenu}
            />
          )}
          {/* {isMobileMenuOpen && (
            <Image
              className="lg:hidden hover:cursor-pointer z-10"
              src={Close}
              alt="Close icon"
              onClick={closeMobileMenu}
            />
          )} */}
        </div>
      </Container>
      <MobileMenu open={isMobileMenuOpen} onClick={closeMobileMenu} />
    </>
  );
};

export default Navbar;
