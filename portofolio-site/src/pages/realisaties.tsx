import { Container, Box, Title, Divider, Image, Button, Accordion } from "@mantine/core";
import { Link } from "react-router-dom";
import rurant from "../assets/projects/project4.0/rurant-logo.png"
import php from "../assets/projects/php/PHP_liveKlassement.png"
import bot from "../assets/projects/universityBot/bot.png"
import react from "../assets/projects/React/home_page_react.png"
import roos from "../assets/projects/club-roos/clubroos.png"
import dsh from "../assets/projects/datavisualisatie/page1.png";

function Realisaties() {
  return (
    <Container mt="xl">
      <Box mb="lg">
        <Title order={2}>Projecten</Title>
        <Divider mt="xs" size={"lg"} color="#e14631" />
      </Box>

      <Link to="/frank"><Image src={rurant}/></Link>
      <Link to="/php"><Image src={php}/></Link>
      <Link to="/bot"><Image src={bot}/></Link>
      <Link to="/react"><Image src={react}/></Link>
      <Link to="/roos"><Image src={roos}/></Link>
      <Link to="/dashboard"><Image src={dsh}/></Link>

    </Container>
  );
}

export default Realisaties;
