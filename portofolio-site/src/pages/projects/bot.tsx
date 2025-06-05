import { Carousel } from "@mantine/carousel";
import {
  Container,
  Box,
  Title,
  Divider,
  Grid,
  Paper,
  Center,
  Text,
  List,
  Anchor,
  Space,
  Image,
  Group,
  ActionIcon,
} from "@mantine/core";
import bot from "../../assets/projects/universityBot/bot.png";
import entity from "../../assets/projects/universityBot/entities.png";
import event from "../../assets/projects/universityBot/events.png";
import intent from "../../assets/projects/universityBot/intents.png";
import { useNavigate } from "react-router-dom";
import { IconArrowBigLeft } from "@tabler/icons-react";

function Bot() {
  const navigate = useNavigate();
  return (
    <Container mt="xl" w={"100vw"}>
      <Box mb="lg">
        <Group gap={"sm"}>
          <ActionIcon
            variant="filled"
            c={"white"}
            bg={"red"}
            size="lg"
            onClick={() => navigate(-1)}
            aria-label="Ga terug"
          >
            <IconArrowBigLeft size={24} />
          </ActionIcon>

          <Center style={{ flex: 1 }}>
            <Title order={2}>University bot</Title>
          </Center>
        </Group>

        <Divider mt="xs" size={"lg"} color="#e14631" />
      </Box>

      <Grid>
        <Grid.Col span={7}>
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
          <Space h={"md"} />
          <Text>
            Voor het vak .NET Advanced kregen wij de opdracht om in duo’s een
            zelfgekozen bot-idee uit te werken, binnen vooraf gestelde
            randvoorwaarden. Wij kozen ervoor om een bot te ontwikkelen waarmee
            gebruikers zich kunnen inschrijven voor opleidingen, inzicht krijgen
            in aankomende evenementen en een overzicht kunnen opvragen van alle
            beschikbare opleidingen.
          </Text>
          <Space h={"md"} />
          <Text>
            Gebruikers kunnen via de bot aangeven voor welke specifieke
            opleiding zij zich willen inschrijven. De bot verwerkt deze aanvraag
            en bevestigt de inschrijving.
          </Text>
          <Space h={"md"} />
          <Text>
            De bot toont een lijst met geplande evenementen die door de
            organisatie worden georganiseerd. Zo blijven geïnteresseerden op de
            hoogte van workshops, informatiedagen en andere relevante
            bijeenkomsten.
          </Text>
          <Space h={"md"} />
          <Text>
            Via een enkele opdracht kan de gebruiker een totaaloverzicht
            opvragen van alle aangeboden opleidingen, inclusief korte
            omschrijvingen.
          </Text>
          <Space h={"md"} />
          <Text>
            Om dit project tot een succes te maken, hebben we de bot op
            Microsoft Azure gehost en een Conversational Language
            Understanding-model (CLU) geïntegreerd. Door de CLU te trainen op
            specifieke voorbeelden en intenties, konden we zorgen voor een
            natuurlijke en contextbewuste interactie met de gebruikers.
            Daarnaast hebben we een REST-API ontwikkeld en gekoppeld aan de
            Azure-hosting, zodat data zoals inschrijvingen en eventinformatie
            realtime beschikbaar is voor zowel de bot als externe systemen.
          </Text>
        </Grid.Col>
        <Grid.Col span={5}>
          <Paper shadow="xl" w={"100%"}>
            <Container>
              <Title order={2}>Project informatie</Title>
              <Divider my={"sm"} w={"99%"} />
              <Text>Opleiding: Bachelor Toegepaste Informatica</Text>
              <Text>Vak: .Net Advanced</Text>
              <Text>
                Technologiën:
                <List>
                  <List.Item>.Net</List.Item>
                  <List.Item>Azure</List.Item>
                </List>
              </Text>
              <Text>
                Groep:
                <List>
                  <List.Item>Moussa Ramzi</List.Item>
                </List>
              </Text>
              <Text>
                Github:
                <List>
                  <List.Item>
                    <Anchor
                      href="https://github.com/moussaramzi/UniversityBot"
                      target="_blank"
                      rel="noopener noreferrer"
                      c={"#e14631"}
                    >
                      code van de Bot
                    </Anchor>
                  </List.Item>
                  <List.Item>
                    <Anchor
                      href="https://github.com/moussaramzi/UniversityAPI "
                      target="_blank"
                      rel="noopener noreferrer"
                      c={"#e14631"}
                    >
                      code van de api
                    </Anchor>
                  </List.Item>
                </List>
              </Text>
            </Container>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Bot;
