"use client";

import { useEffect, useState } from "react";

import Container from "@/app/components/Container";
import SectionTitle from "@/app/components/SectionTitle";
import Input from "@/app/components/Input";
import Textarea from "@/app/components/Textarea";
import Button from "@/app/components/Button";
import SuccessMessage from "./SuccessMessage";
import LoadingModal from "./LoadingModal";

const Contact = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [success]);

  const handleClick = () => {
    setOpenModal(true);

    setTimeout(() => {
      setSuccess(true);
      setOpenModal(false);
    }, 2000);
  };

  return (
    <div>
      <Container className="mt-16">
        <SectionTitle
          inWhite="Get In"
          inRed="Touch"
          description="Reach out with your project details, and we'll get back to you soon. Complete the form or email us at contact@noblecraft.design"
        />
        {success && <SuccessMessage />}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Input placeholder="Your name" />
          <Input placeholder="Your e-mail" />
          <Input placeholder="Your company name" />
          <Input placeholder="Choose a topic of interest" />
          <Input placeholder="Website URL" />
          <Input placeholder="How did you hear about us?" />
        </div>
        <Textarea placeholder="Describe your project goals" />
        <Button
          className="mt-2 mr-auto w-1/2 sm:w-[152px] sm:h-[51px] sm:text-[18px]"
          label="SEND"
          size="big"
          onClick={handleClick}
        />
      </Container>
      {openModal && <LoadingModal />}
    </div>
  );
};

export default Contact;
