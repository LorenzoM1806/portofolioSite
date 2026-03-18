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
  Stack
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconArrowBigLeft } from "@tabler/icons-react";
import bot from "../../assets/projects/universityBot/bot.png";

import entity from "../../assets/projects/universityBot/entities.png";

import event from "../../assets/projects/universityBot/events.png";

import intent from "../../assets/projects/universityBot/intents.png";

// Je imports van de assets blijven hier staan...

function Bot() {
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
            University Bot
          </Title>
        </Group>
        <Divider mt="xs" size="lg" color="#e14631" />
      </Box>

      <Grid gutter="xl">
        {/* Content Kolom */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          {/* Carousel: Hoogte schaalt mee met schermgrootte */}
          <Carousel withIndicators h={250} w={"auto"}>
            <Carousel.Slide>
              <Image src={bot} alt="bot" height={250} fit="contain" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={entity} alt="entity" height={250} fit="contain" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={intent} alt="intent" height={250} fit="contain" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={event} alt="event" height={250} fit="contain" />
            </Carousel.Slide>
          </Carousel>
          <Space h="xl" />

          <Stack gap="md">
            <Text>
              Voor het vak <strong>.NET Advanced</strong> kregen wij de opdracht om in duo’s een
              zelfgekozen bot-idee uit te werken...
            </Text>
            <Text>
              Gebruikers kunnen via de bot aangeven voor welke <strong>specifieke
              opleiding</strong> zij zich willen <strong>inschrijven.</strong>
            </Text>
            <Text>
              De bot toont een <strong>lijst met geplande evenementen</strong> die door de
              organisatie worden georganiseerd.
            </Text>
            <Text>
              Om dit project tot een succes te maken, hebben we de bot op
              <strong> Microsoft Azure</strong> gehost en een <strong>Conversational Language
              Understanding-model (CLU)</strong> geïntegreerd.
            </Text>
          </Stack>
        </Grid.Col>

        {/* Info Kolom */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Paper shadow="md" withBorder p="lg" radius="md">
            <Title order={3} mb="sm">Project informatie</Title>
            <Divider mb="md" color="#e14631" />
            
            <Stack gap="sm">
              <Box>
                <Text fw={700} size="sm">Opleiding:</Text>
                <Text size="sm">Bachelor Toegepaste Informatica</Text>
              </Box>

              <Box>
                <Text fw={700} size="sm">Vak:</Text>
                <Text size="sm">.Net Advanced</Text>
              </Box>

              <Box>
                <Text fw={700} size="sm">Gebruikte Technologieën:</Text>
                <List size="sm" withPadding>
                  <List.Item>.Net</List.Item>
                  <List.Item>Azure (CLU)</List.Item>
                </List>
              </Box>

              <Box>
                <Text fw={700} size="sm">Het Team:</Text>
                <List size="sm" withPadding>
                  <List.Item>Moussa Ramzi</List.Item>
                </List>
              </Box>

              <Box>
                <Text fw={700} size="sm">GitHub repositories:</Text>
                <Stack gap={5} mt={5}>
                  <Anchor
                    href="https://github.com/moussaramzi/UniversityBot"
                    target="_blank"
                    size="sm"
                    c="#e14631"
                    style={{ wordBreak: 'break-word' }}
                  >
                    • Code van de Bot
                  </Anchor>
                  <Anchor
                    href="https://github.com/moussaramzi/UniversityAPI"
                    target="_blank"
                    size="sm"
                    c="#e14631"
                    style={{ wordBreak: 'break-word' }}
                  >
                    • Code van de API
                  </Anchor>
                </Stack>
              </Box>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
      <Space h="xl" />
    </Container>

  );
}

export default Bot;