import {
  Container,
  Box,
  Title,
  Divider,
  Image,
  Grid,
  Card,
  Text,
  Stack,
  Center,
} from "@mantine/core";
import { Link } from "react-router-dom";
import rurant from "../assets/projects/project4.0/rurant-logo.png";
import php from "../assets/projects/php/PHP_liveKlassement.png";
import bot from "../assets/projects/universityBot/bot.png";
import react from "../assets/projects/React/home_page_react.png";
import roos from "../assets/projects/club-roos/clubroos.png";
import dsh from "../assets/projects/datavisualisatie/page1.png";

function Realisaties() {
  // Array met data voor eenvoudiger onderhoud
  const projecten = [
    {
      titel: "Rurant",
      afbeelding: rurant,
      link: "/frank",
    },
    {
      titel: "PHP Live Klassement",
      afbeelding: php,
      link: "/php",
    },
    {
      titel: "University Bot",
      afbeelding: bot,
      link: "/bot",
    },
    {
      titel: "React Home Page",
      afbeelding: react,
      link: "/react",
    },
    {
      titel: "Club Roos",
      afbeelding: roos,
      link: "/roos",
    },
    {
      titel: "Data Visualisatie Dashboard",
      afbeelding: dsh,
      link: "/dashboard",
    },
  ];

  return (
    <Container mt="xl" fluid>
      {/* Header */}
      <Box mb="lg">
        <Title order={2}>Projecten</Title>
        <Divider mt="xs" size="lg" color="#e14631" />
      </Box>

      {/* Grid van 3 kolommen per rij */}
      <Grid gutter="md">
        {projecten.map((project) => (
          <Grid.Col key={project.titel} span={4}>
            <Card shadow="sm" radius="md" withBorder w={"90%"}>
               {/* Titel onder de afbeelding */}
              <Stack align="center" gap="xs" p="sm">
                <Text fw={500} size="md">
                  {project.titel}
                </Text>
              </Stack>
              {/* Klikbare afbeelding */}
              <Center>
              <Link to={project.link}>
                  <Image
                    src={project.afbeelding}
                    alt={project.titel}
                    fit="cover"
                    w={"100%"}
                  />
              </Link>
              </Center>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default Realisaties;
