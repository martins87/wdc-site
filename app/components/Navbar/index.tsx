"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import Button from "../Button";
import Container from "../Container";
import Logo from "./Logo";
import SectionsLinks from "../SectionsLinks";
import MobileMenu from "./MobileMenu";
import Hamburger from "../../assets/icons/Hamburger.svg";
import Close from "../../assets/icons/Close.svg";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    console.log("open!");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    console.log("close!");
  };

  return (
    <>
      <Container className="w-full tablet:sticky top-0 left-0 z-20">
        <div className="w-full h-[80px] sm:h-[100px] flex items-end gap-x-5 sm:gap-8 lg:gap-10">
          <div
            className={twMerge(
              "w-full flex items-center justify-between px-6 py-2 rounded-3xl sm:rounded-[32px] border-[2px] border-white bg-white z-20",
              isScrolling
                ? "transition-all duration-1000 tablet:border-[2px] tablet:border-main_color"
                : ""
            )}
          >
            <Logo onClick={closeMobileMenu} />
            <SectionsLinks navbar />
            <Link href={"/contact"} onClick={closeMobileMenu}>
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
            {isMobileMenuOpen && (
              <Image
                className="lg:hidden hover:cursor-pointer z-10"
                src={Close}
                alt="Close icon"
                onClick={closeMobileMenu}
              />
            )}
          </div>
        </div>
      </Container>
      <MobileMenu open={isMobileMenuOpen} onClick={closeMobileMenu} />
    </>
  );
};

export default Navbar;
