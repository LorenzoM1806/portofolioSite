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
import home from "../../assets/projects/React/home_page_react.png";
import random from "../../assets/projects/React/randomizer.png";
import searcher from "../../assets/projects/React/searcher.png";

// Assets imports blijven hier...

function React() { // 'React' als functienaam kan conflicten geven met de library import
  const navigate = useNavigate();

  return (
    <Container mt="xl" fluid px={{ base: "xs", sm: "md" }}>
      {/* Header */}
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
            Yugioh Card Site
          </Title>
        </Group>
        <Divider mt="xs" size="lg" color="#e14631" />
      </Box>

      <Grid gutter="xl">
        {/* Linker kolom: De beschrijving */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack gap="md">
            <Text>
              Dit is een van de projecten uit een eerdere opleiding, <strong>graduaat
              programmeren.</strong> Hierbij hebben wij de opdracht gekregen om een
              eenvoudige <strong>React-website</strong> met drie pagina’s te ontwikkelen.
            </Text>
            <Text>
              De homepagina fungeert als <strong>navigatiemenu</strong>: gebruikers kunnen vanuit
              hier doorklikken naar de andere pagina’s.
            </Text>
            <Text>
              Op de tweede pagina kan de gebruiker een <strong>willekeurige kaart</strong> genereren. 
              Dit is gerealiseerd door een API-aanroep naar een <strong>publieke Yu-Gi-Oh-database</strong>.
            </Text>
            <Text>
              De derde pagina biedt een <strong>zoekfunctie</strong> op archetype (bijv. “Blue-Eyes”). 
              De gebruiker krijgt een galerij te zien en kan doorklikken voor volledige kaartdetails in een nieuw tabblad.
            </Text>
            <Text>
              De website is volledig gebouwd met <strong>React</strong> en maakt gebruik van
              functionele componenten en hooks voor state-beheer en API-communicatie via <strong>fetch-calls</strong>.
            </Text>
          </Stack>
        </Grid.Col>

        {/* Rechter kolom: Info kaart + Carousel */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack gap="lg">
            <Paper shadow="md" withBorder p="lg" radius="md">
              <Title order={3} mb="sm">Project informatie</Title>
              <Divider mb="md" color="#e14631" />
              
              <Stack gap="sm">
                <Box>
                  <Text fw={700} size="sm">Opleiding:</Text>
                  <Text size="sm">Graduaat Programmeren</Text>
                </Box>
                <Box>
                  <Text fw={700} size="sm">Vak:</Text>
                  <Text size="sm">Frontend Frameworks</Text>
                </Box>
                <Box>
                  <Text fw={700} size="sm">Technologieën:</Text>
                  <List size="sm" withPadding>
                    <List.Item>React (Hooks & Context)</List.Item>
                    <List.Item>REST API Integration</List.Item>
                  </List>
                </Box>
                <Box>
                  <Text fw={700} size="sm">Type:</Text>
                  <Text size="sm">Solo opdracht</Text>
                </Box>
                <Box>
                  <Text fw={700} size="sm">Github:</Text>
                  <Anchor
                    href="https://github.com/it-graduaten/permanente-evaluatieopdracht-dagopleiding-LorenzoM1806"
                    target="_blank"
                    size="xs"
                    c="#e14631"
                    style={{ wordBreak: 'break-all', display: 'block' }}
                  >
                    Bekijk Code op GitHub
                  </Anchor>
                </Box>
              </Stack>
            </Paper>

            {/* Carousel nu binnen een Paper voor een cleanere look */}
            <Paper shadow="sm" withBorder p="xs" radius="md">
              <Carousel withIndicators h={250} w={"auto"}>
            <Carousel.Slide>
              <Image src={home} alt="home" height={250} fit="contain" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={random} alt="random" height={250} fit="contain" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={searcher} alt="searcher" height={250} fit="contain" />
            </Carousel.Slide>
          </Carousel>
            </Paper>
          </Stack>
        </Grid.Col>
      </Grid>
      <Space h="xl" />
    </Container>
  );
}

export default React;