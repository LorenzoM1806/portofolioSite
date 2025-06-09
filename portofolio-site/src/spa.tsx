// src/App.tsx
import {
  Container,
} from '@mantine/core';
import Home from './pages/home';
import OverMij from './pages/overMij';
import Stage from './pages/stage';
import Realisaties from './pages/realisaties';
import ContactBar from './pages/contact';

export default function Spa() {
  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* 2) Main content, onder header (margin‐top = header‐hoogte) */}
      <main style={{ marginTop: 60 }}>
        {/* Home‐sectie */}
        <Container id="home" py="xl" fluid>
          <Home />
        </Container>

        {/* Over Mij‐sectie */}
        <Container id="over-mij" py="xl" fluid>
          <OverMij />
        </Container>

        {/* Stage‐sectie */}
        <Container id="stage" py="xl" fluid>
          <Stage />
        </Container>

        {/* Projecten‐sectie */}
        <Container id="projecten" py="xl" fluid>
          <Realisaties />
        </Container>

        {/* Contact‐sectie*/}
        <Container id='contact' py="xl" fluid>
          <ContactBar/>
        </Container>
        
      </main>
    </>
  );
}
