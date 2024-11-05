import Container from "./components/Container";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Clients from "./components/Clients";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Clients />
      <Projects />
    </Container>
  );
}
