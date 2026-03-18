import { Carousel } from "@mantine/carousel";
import {
  Container,
  Box,
  Title,
  Divider,
  Grid,
  Paper,
  Text,
  List,
  Anchor,
  Space,
  Image,
  Group,
  ActionIcon,
  Stack,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconArrowBigLeft } from "@tabler/icons-react";
import page1 from "../../assets/projects/datavisualisatie/page1.png";
import page2 from "../../assets/projects/datavisualisatie/page2.png";
import page3 from "../../assets/projects/datavisualisatie/page3.png";
import page4 from "../../assets/projects/datavisualisatie/page4.png";
import page5 from "../../assets/projects/datavisualisatie/page5.png";

// Assets imports blijven hier...

function Dashboard() {
  const navigate = useNavigate();

  return (
    <Container mt="xl" fluid px={{ base: "xs", sm: "md" }}>
      {/* Header sectie */}
      <Box mb="lg">
        <Group gap="sm" wrap="nowrap">
          <ActionIcon
            variant="filled"
            color="#e14631"
            size="lg"
            onClick={() => navigate(-1)}
            aria-label="Ga terug"
          >
            <IconArrowBigLeft size={24} />
          </ActionIcon>
          <Title order={2} style={{ flex: 1, fontSize: 'calc(1.1rem + 1vw)' }}>
            Dashboard verkeersanalyse
          </Title>
        </Group>
        <Divider mt="xs" size="lg" color="#e14631" />
      </Box>

      <Grid gutter="xl">
        {/* Linker kolom: Carousel + Uitgebreide tekst */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Carousel withIndicators h={300} w={"auto"}>
            <Carousel.Slide>
              <Image src={page1} alt="home" height={300} fit="contain" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={page2} alt="random" height={300} fit="contain" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={page3} alt="searcher" height={300} fit="contain" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={page4} alt="searcher" height={300} fit="contain" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={page5} alt="searcher" height={300} fit="contain" />
            </Carousel.Slide>
          </Carousel>

          <Space h={"md"}></Space>

          {/* Tekst in een Stack voor betere leesbaarheid op desktop */}
          <Stack gap="md">
            <Text>
              Tijdens mijn <strong>bacheloropleiding Toegepaste Informatica</strong> kregen we de kans
              om te werken met <strong>Qlik</strong>, een krachtig platform voor data-analyse en
              datavisualisatie.
            </Text>
            <Text>
              Binnen het vak <strong>Datavisualisatie</strong> kregen we een grondige introductie in de
              mogelijkheden van Qlik, waaronder het opstellen van datamodellen en het bouwen van dashboards.
            </Text>
            <Text>
              Als eindopdracht ontwikkelde ik een dashboard op basis van een uitgebreide dataset over 
              <strong> verkeersongevallen in België.</strong> De bedoeling was om een datagedreven 
              <strong> verhaal te vertellen</strong> dat bijdraagt aan verkeersveiligheid.
            </Text>
            <Text>
              Concreet analyseerden we aspecten zoals ongevaltypes, locaties en weersomstandigheden. 
              Door middel van interactieve grafieken en kaarten werden inzichten gevisualiseerd.
            </Text>
            <Text>
              Deze opdracht legde de nadruk op het maatschappelijke belang van data-analyse: 
              het omzetten van ruwe data naar bruikbare inzichten voor een veiliger verkeer.
            </Text>
          </Stack>
        </Grid.Col>

        {/* Rechter kolom: Project informatie kaart */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Paper shadow="md" withBorder p="lg" radius="md" pos="sticky" style={{ top: '20px' }}>
            <Title order={3} mb="sm">Project informatie</Title>
            <Divider mb="md" color="#e14631" />
            
            <Stack gap="sm">
              <Box>
                <Text fw={700} size="sm">Opleiding:</Text>
                <Text size="sm">Bachelor Toegepaste Informatica</Text>
              </Box>

              <Box>
                <Text fw={700} size="sm">Vak:</Text>
                <Text size="sm">Data Visualisatie</Text>
              </Box>

              <Box>
                <Text fw={700} size="sm">Gebruikte Technologieën:</Text>
                <List size="sm" withPadding>
                  <List.Item>Qlik Sense</List.Item>
                </List>
              </Box>

              <Box>
                <Text fw={700} size="sm">Type opdracht:</Text>
                <Text size="sm">Solo opdracht</Text>
              </Box>

              <Box>
                <Text fw={700} size="sm">Video demo:</Text>
                <Anchor
                  href="https://www.youtube.com/watch?v=ux7LZe9QRA4"
                  target="_blank"
                  size="sm"
                  c="#e14631"
                  style={{ fontWeight: 500 }}
                >
                  Bekijk de Dashboard video
                </Anchor>
              </Box>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
      <Space h="xl" />
    </Container>
  );
}

export default Dashboard;