import Container from "./components/Container";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import AboutUs from "./(pages)/about-us/AboutUs";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Clients />
      <AboutUs />
      <Projects />
    </Container>
  );
}
