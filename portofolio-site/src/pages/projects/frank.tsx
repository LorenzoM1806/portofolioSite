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
  Group,
  ActionIcon,
} from "@mantine/core";
import { IconArrowBigLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function Frank() {
  const navigate = useNavigate();
  return (
    <Container mt="xl" w={"100vw"}>
      <Box mb="lg">
        <Group gap="sm">
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
            <Title order={2}>Frank de Bank</Title>
          </Center>
        </Group>

        <Divider mt="xs" size={"lg"} color="#e14631" />
      </Box>

      <Grid>
        <Grid.Col span={7}>
          <Text>
            Bij het vak Project 4.0 heeft onze groep een opdracht uitgevoerd
            voor het bedrijf Rurant. Het team bestond uit studenten van
            verschillende afstudeerrichtingen: twee vanuit Artificial
            Intelligence, één vanuit Applied Computer Science (ACS) en twee
            vanuit Application Development, waaronder ikzelf en Maarten Marx.
          </Text>
          <Space h={"md"} />
          <Text>
            Rurant zet zich via het traject “Veerkrachtige Dorpen” in voor
            leefbare en toekomstbestendige dorpen waarin inwoners graag wonen en
            leven. Als participatiemedewerkers proberen ze zoveel mogelijk
            bewoners bij dit proces te betrekken. Hiertoe maken ze gebruik van
            digitale tools en sociale media, organiseren ze verdiepingssessies
            en nemen ze deel aan lokale evenementen. Daarnaast zorgen ze voor
            zichtbaarheid in het dorp met krijtsjablonen, banners, affiches en
            infoborden.
          </Text>
          <Space h={"md"} />
          <Text>
            Onze opdracht was het ontwikkelen van “Frank de Bank”: een slimme
            zitbank die met behulp van kunstmatige intelligentie (AI) vragen kan
            stellen en live kan communiceren met gebruikers. Frank verzamelt zo
            informatie over de locatie en de beleving van de omgeving.
          </Text>
          <Space h={"md"} />
          <Text>
            Samen met Maarten Marx (Application Development) heb ik een
            dashboard gerealiseerd waarin Rurant alle conversaties met Frank kan
            inzien en beheren. Dit dashboard is opgebouwd in Angular en biedt de
            mogelijkheid om enerzijds nieuwe vragen en antwoorden (fillers) toe
            te voegen, en anderzijds de door gebruikers gestarte interacties te
            raadplegen. Hiervoor hebben we tevens een REST-API ontwikkeld die
            alle vragenlijstjes en conversaties verwerkt. De API stuurt via
            WebSockets de data door naar onze AI-engine. Bovendien bevat het
            dashboard een aparte pagina waarop alle afgeronde én lopende
            conversaties overzichtelijk worden weergegeven.
          </Text>
          <Space h={"md"} />
          <Text>
            Door deel te nemen aan dit project heb ik niet alleen mijn
            technische (hard) skills kunnen aanscherpen, maar ook mijn soft
            skills verder ontwikkeld. In het kader van peer evaluations
            evalueerden wij elkaars bijdragen regelmatig. Daarnaast werkten we
            continu aan onze presentatievaardigheden, zowel in info sessies voor
            Rurant als tijdens onze eindpresentatie voor Rurant. Ten slotte
            heeft dit project mijn ervaring met teamwork versterkt: ieder
            teamlid had een duidelijke taak, maar we moesten onze afzonderlijke
            onderdelen zo op elkaar afstemmen dat ze tot een geïntegreerd
            eindproduct leidden.
          </Text>
        </Grid.Col>
        <Grid.Col span={5}>
          <Paper shadow="xl" w={"100%"}>
            <Container>
              <Title order={2}>Project informatie</Title>
              <Divider my={"sm"} w={"99%"} />
              <Text>Opleiding: Bachelor Toegepaste Informatica</Text>
              <Text>Vak: Project 4.0</Text>
              <Text>
                Technologiën:
                <List>
                  <List.Item>Angular</List.Item>
                  <List.Item>Python</List.Item>
                  <List.Item>AI</List.Item>
                  <List.Item>Azure</List.Item>
                  <List.Item>Github</List.Item>
                  <List.Item>Raspberry Pi</List.Item>
                </List>
              </Text>
              <Text>
                Groep:
                <List>
                  <List.Item>Maarten Marx</List.Item>
                  <List.Item>Filip Kolb</List.Item>
                  <List.Item>Mark Vaikul</List.Item>
                  <List.Item>Egemen alkan</List.Item>
                </List>
              </Text>
              <Text>
                Github:{" "}
                <Anchor
                  href="https://github.com/egealkan/Project4.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  c={"#e14631"}
                >
                  https://github.com/egealkan/Project4.0
                </Anchor>
              </Text>
              <Text>
                Promo video:{" "}
                <Anchor
                  href="https://www.youtube.com/watch?v=_260Fb4Qc2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  c={"#e14631"}
                >
                  Frank de Bank
                </Anchor>
              </Text>
            </Container>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Frank;
