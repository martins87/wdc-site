"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../Button";
import Container from "../Container";
import Logo from "./Logo";
import SectionsLinks from "../SectionsLinks";
import MobileMenu from "./MobileMenu";
import Hamburger from "../../assets/icons/Hamburger.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const openMobileMenu = () => setIsMobileMenuOpen(true);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
