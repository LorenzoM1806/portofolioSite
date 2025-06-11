import {
  Container,
  Box,
  Title,
  Divider,
  Grid,
  Card,
  Text,
  Stack,
  Badge,
  Image,
  Group,
  Anchor,
} from "@mantine/core";
import { Link } from "react-router-dom";

import rurant from "../assets/projects/project4.0/rurant-logo.png";
import php from "../assets/projects/php/PHP_liveKlassement.png";
import bot from "../assets/projects/universityBot/bot.png";
import react from "../assets/projects/React/home_page_react.png";
import roos from "../assets/projects/club-roos/clubroos.png";
import dsh from "../assets/projects/datavisualisatie/page1.png";


// voorbeeld icons
import { IconExternalLink } from "@tabler/icons-react";

// Voorbeeldprojecten met extra info
const projecten = [
  {
    titel: "Rurant",
    afbeelding: rurant,
    beschrijving:
      "Ondersteuningsproject voor plattelandsontwikkeling in samenwerking met RURANT.",
    labels: ["Research"],
    tags: ["Angular", "Python", "AI", "Azure", "Github", "Raspberry Pi"],
    actie: { type: "link", label: "Bekijk", url: "/frank" },
  },
  {
    titel: "PHP Live Klassement",
    afbeelding: php,
    beschrijving:
      "Live sportklassement systeem gebouwd met PHP en MySQL.",
    labels: ["Sport"],
    tags: ["PHP", "MySQL", "Bootstrap"],
    actie: { type: "link", label: "Bekijk", url: "/php" },
  },
  {
    titel: "University Bot",
    afbeelding: bot,
    beschrijving:
      "Een chatbot gebouwd voor universiteitsstudenten, met natuurlijke taalverwerking.",
    labels: ["AI"],
    tags: [".Net", "Azure"],
    actie: { type: "link", label: "Bekijk", url: "/bot" },
  },
  {
    titel: "React Yugioh project",
    afbeelding: react,
    beschrijving:
      "Een moderne React site voor een Yugioh card search.",
    labels: ["Web"],
    tags: ["React"],
    actie: { type: "link", label: "Bekijk", url: "/react" },
  },
  {
    titel: "Club Roos",
    afbeelding: roos,
    beschrijving:
      "Website voor Club Roos.",
    labels: ["Business"],
    tags: ["WordPress"],
    actie: { type: "link", label: "Bekijk", url: "/roos" },
  },
  {
    titel: "Data Visualisatie Dashboard",
    afbeelding: dsh,
    beschrijving:
      "Interactief dashboard voor datavisualisatie met grafieken en filters.",
    labels: ["Data"],
    tags: ["Qlick"],
    actie: { type: "link", label: "Bekijk", url: "/dashboard" },
  },
];

function Realisaties() {
  return (
    <Container mt="xl" fluid>
      <Box mb="lg">
        <Title order={2}>Projecten</Title>
        <Divider mt="xs" size="lg" color="#e14631" />
      </Box>

      <Grid gutter="md">
        {projecten.map((project) => (
          <Grid.Col key={project.titel} span={{ base: 12, sm: 6, md: 4 }}>
            <Card shadow="sm" radius="md" withBorder p="md" h="100%">
              <Stack gap="sm">
                {/* Label (optioneel) */}
                {project.labels?.length > 0 && (
                  <Badge color="red" variant="light" w="fit-content">
                    {project.labels[0]}
                  </Badge>
                )}

                {/* Afbeelding */}
                <Image
                  src={project.afbeelding}
                  alt={project.titel}
                  height={160}
                  radius="md"
                  fit="cover"
                />

                {/* Titel */}
                <Text fw={600} size="lg">
                  {project.titel}
                </Text>

                {/* Beschrijving */}
                <Text size="sm" c="dimmed" lineClamp={2}>
                  {project.beschrijving}
                </Text>

                {/* Tags */}
                <Group gap="xs" mt="xs" wrap="wrap">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="light" color="gray">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="light" color="gray">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </Group>

                {/* Actie */}
                {project.actie?.type === "link" && (
                  <Anchor
                    component={Link}
                    to={project.actie.url}
                    mt="sm"
                    c="red"
                    fw={500}
                  >
                    <Group gap={4}>
                      <IconExternalLink size={14} />
                      {project.actie.label}
                    </Group>
                  </Anchor>
                )}
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default Realisaties;
