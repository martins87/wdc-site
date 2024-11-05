import Container from "../Container";
import CTA from "./CTA";
import Links from "./Links";

const Footer = () => {
  return (
    <Container>
      <footer className="w-full flex flex-col gap-y-10 mt-40">
        <CTA />
        <Links />
      </footer>
    </Container>
  );
};

export default Footer;
