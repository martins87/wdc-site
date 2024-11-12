import Container from "@/app/components/Container";
import SectionTitle from "@/app/components/SectionTitle";
import Input from "@/app/components/Input";
import Textarea from "@/app/components/Textarea";
import Button from "@/app/components/Button";

const Contact = () => {
  return (
    <Container className="my-20">
      <SectionTitle
        inWhite="Get In"
        inRed="Touch"
        description="Reach out with your project details, and we’ll get back to you soon. Complete the form or email us at"
      />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
        <Input placeholder="Your name" />
        <Input placeholder="Your e-mail" />
        <Input placeholder="Your company name" />
        <Input placeholder="Choose a topic of interest" />
        <Input placeholder="Website URL" />
        <Input placeholder="How did you hear about us?" />
      </div>
      <Textarea placeholder="Describe your project goals" />
      <Button className="mt-2 ml-auto" label="SEND" size="big" />
    </Container>
  );
};

export default Contact;
