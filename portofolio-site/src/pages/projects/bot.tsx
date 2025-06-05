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
    <Container mt="xl" fluid>
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
            Voor het vak <strong>.NET Advanced</strong> kregen wij de opdracht
            om in duo’s een zelfgekozen <strong>bot-idee</strong> uit te werken,
            binnen vooraf gestelde
            <strong> randvoorwaarden</strong>. Wij kozen ervoor om een{" "}
            <strong>bot</strong> te ontwikkelen waarmee gebruikers zich kunnen{" "}
            <strong>inschrijven voor opleidingen</strong>, inzicht krijgen in{" "}
            <strong>aankomende evenementen</strong> en een{" "}
            <strong>overzicht</strong> kunnen opvragen van alle beschikbare
            opleidingen.
          </Text>
          <Space h="md" />
          <Text>
            Gebruikers kunnen via de bot aangeven voor welke specifieke
            <strong> opleiding</strong> zij zich willen inschrijven. De bot{" "}
            <strong>verwerkt</strong> deze aanvraag en{" "}
            <strong>bevestigt</strong> de inschrijving.
          </Text>
          <Space h="md" />
          <Text>
            De bot toont een <strong>lijst met geplande evenementen</strong> die
            door de organisatie worden georganiseerd. Zo blijven
            geïnteresseerden op de hoogte van
            <strong> workshops</strong>, <strong>informatiedagen</strong> en
            andere relevante
            <strong> bijeenkomsten</strong>.
          </Text>
          <Space h="md" />
          <Text>
            Via een enkele opdracht kan de gebruiker een{" "}
            <strong>totaaloverzicht </strong>
            opvragen van alle aangeboden <strong>opleidingen</strong>, inclusief
            korte
            <strong> omschrijvingen</strong>.
          </Text>
          <Space h="md" />
          <Text>
            Om dit project tot een succes te maken, hebben we de bot op
            <strong> Microsoft Azure</strong> gehost en een{" "}
            <strong>Conversational Language Understanding-model (CLU)</strong>{" "}
            geïntegreerd. Door de CLU te trainen op
            <strong> specifieke voorbeelden en intenties</strong>, konden we
            zorgen voor een
            <strong> natuurlijke en contextbewuste interactie</strong> met de
            gebruikers. Daarnaast hebben we een <strong>REST-API</strong>{" "}
            ontwikkeld en gekoppeld aan de
            <strong> Azure-hosting</strong>, zodat data zoals inschrijvingen en
            eventinformatie
            <strong> realtime beschikbaar</strong> is voor zowel de bot als
            externe systemen.
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
