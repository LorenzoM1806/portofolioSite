import {
  Container,
  Box,
  Title,
  Divider,
  Grid,
  Text,
  Image,
  Paper,
  Center,
  Space,
  Stack,
  Card,
  Group,
  ThemeIcon,
  Anchor,
} from "@mantine/core";
import ventigratelogo from "../assets/LogoVentigrate.png";
import login from "../assets/login.png";
import home from "../assets/home.png";
import start from "../assets/start.png";
import game501 from "../assets/501-301.mp4";
import cutthroat from "../assets/cutthroat.mp4";
import around from "../assets/aroundtheworld.mp4";
import tornooi from "../assets/tornooi.mp4";
import profile from "../assets/profile.png";
import profilestats from "../assets/statsprofile.png";
import stats from "../assets/homestats.png";
import admin from "../assets/admin.png";
import { Carousel } from "@mantine/carousel";
import { IconClock, IconFileText, IconTarget, IconFile3d, IconUserQuestion } from "@tabler/icons-react";

function Stage() {
  return (
    <Container
      fluid
      mih={"100vh"}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      {/* Page Title */}
      <Box mb="lg">
        <Title order={2}>Stage</Title>
        <Divider mt="xs" size="lg" color="#e14631" />
      </Box>

      <Grid w={"100%"}>
        <Grid.Col span={6}>
          <Box mb="lg">
            <Title order={4}>Het stage bedrijf</Title>
            <Space h="sm" />
            <Text>
              In het laatste jaar van mijn opleiding Toegepaste Informatica had
              ik de kans om gedurende een periode van 13 weken stage te lopen
              bij <strong>Ventigrate</strong>, gevestigd in Kontich. Ventigrate
              maakt deel uit van de Cronos Groep en is actief in de
              consultancysector, met een sterke focus op
              Microsoft-technologieën. Het bedrijf specialiseert zich in
              oplossingen rond SharePoint, Microsoft 365, en het Power Platform.
              Daarnaast zetten ze ook sterk in op Azure Development, waarmee ze
              schaalbare en performante cloudapplicaties ontwikkelen. Ook
              .NET-ontwikkeling maakt deel uit van hun technologische kern. Wat
              Ventigrate kenmerkt, is hun continue inzet op innovatie: ze
              blijven zich voortdurend bijscholen en passen steeds de nieuwste
              technologieën en best practices toe in hun projecten.
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={6}>
          <Paper bg="var(--mantine-color-dark-9)" radius="lg" p="lg" withBorder>
            <Center>
              <Image
                src={ventigratelogo}
                alt="Ventigrate Logo"
                width={250}
                fit="contain"
                style={{ padding: 15 }}
              />
            </Center>
          </Paper>
        </Grid.Col>
      </Grid>

      <Box mb="lg">
        <Title order={4}>De Opdracht</Title>
        <Space h="sm" />
        <Text>
          Tijdens mijn stage kreeg ik de opdracht om een{" "}
          <strong>interne dartsapplicatie</strong>
          te ontwikkelen. Deze applicatie werd opgebouwd met{" "}
          <strong>React</strong> als frontend-framework, waarbij ik
          gebruikmaakte van <strong>Mantine CSS</strong> om een
          gebruiksvriendelijke en moderne interface te creëren. Voor de backend
          werd gekozen voor <strong>Microsoft SQL Server (MSSQL)</strong> als
          databasesysteem, wat zorgde voor een robuuste en betrouwbare
          dataverwerking. Daarnaast kreeg ik de kans om mijn communicatie- en
          overlegvaardigheden verder te ontwikkelen. Dankzij de{" "}
          <strong>dagelijkse stand-up meetings</strong> en de
          <strong> demomeetings</strong> aan het einde van elke sprint kon ik
          regelmatig mijn voortgang delen en actief deelnemen aan het agile
          werkproces.
        </Text>
      </Box>

      <Grid gutter={"md"}>
        <Grid.Col span={6}>
          <Box mb="lg">
            <Title order={4}>Het resultaat</Title>
            <Space h="sm" />
            <Text mb={"md"}>
              Aan de rechterzijde vindt u een aantal afbeeldingen van het
              afgewerkte product. Daarnaast zijn er ook enkele video’s
              beschikbaar die het verloop van de verschillende spelmodi in beeld
              brengen. Hieronder vindt u vijf documenten terug. Drie daarvan –
              <strong>
                {" "}
                het projectplan, realisatieverslag en de reflectie
              </strong>{" "}
              – beschrijven het volledige verloop van de stage. De andere twee
              documenten – de
              <strong> user guide en installation guide</strong> – zijn interne
              handleidingen die specifiek voor het bedrijf werden opgesteld.
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={6}>
          <Carousel withIndicators h={250} w={"100%"} maw={600}>
            <Carousel.Slide>
              <Image
                src={login}
                alt="Login Screen"
                height={250}
                fit="contain"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={home} alt="Home Screen" height={250} fit="contain" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src={start}
                alt="Start Screen"
                height={250}
                fit="contain"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <video
                src={game501}
                height={250}
                controls
                muted
                width={"100%"}
                style={{ display: "block" }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <video
                src={cutthroat}
                height={250}
                controls
                muted
                width={"100%"}
                style={{ display: "block" }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <video
                src={around}
                height={250}
                controls
                muted
                width={"100%"}
                style={{ display: "block" }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <video
                src={tornooi}
                height={250}
                controls
                muted
                width={"100%"}
                style={{ display: "block" }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src={profile}
                alt="Profile Screen"
                height={250}
                fit="contain"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src={profilestats}
                alt="Profile Stats"
                height={250}
                fit="contain"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={stats} alt="Home Stats" height={250} fit="contain" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src={admin}
                alt="Admin Interface"
                height={250}
                fit="contain"
              />
            </Carousel.Slide>
          </Carousel>
        </Grid.Col>
      </Grid>

      <Box mb="lg">
        <Title order={3}>Stage Documenten</Title>
        <Stack gap="md" mt="md" w={"50%"}>
          {/* Projectplan */}
          <Card withBorder shadow="sm" radius="md" p="md">
            <Group justify='space-between'>
              <Group>
                <ThemeIcon variant="light" radius="xl" size="lg">
                  <IconTarget size={20} />
                </ThemeIcon>
                <Box>
                  <Text fw={500}>Projectplan</Text>
                  <Text size="sm" c="dimmed">
                    Uitgebreide planning en doelstellingen van het stageproject
                  </Text>
                </Box>
              </Group>
              <Anchor href="/Projectplan.pdf" download>
                Download
              </Anchor>
            </Group>
          </Card>

          {/* Realisatiedocument */}
          <Card withBorder shadow="sm" radius="md" p="md">
            <Group justify='space-between'>
              <Group>
                <ThemeIcon variant="light" color="green" radius="xl" size="lg">
                  <IconFileText size={20} />
                </ThemeIcon>
                <Box>
                  <Text fw={500}>Realisatiedocument</Text>
                  <Text size="sm" c="dimmed">
                    Technische documentatie en implementatie details
                  </Text>
                </Box>
              </Group>
              <Anchor href="/realizatiedocument.pdf" download>
                Download
              </Anchor>
            </Group>
          </Card>

          {/* Reflectie */}
          <Card withBorder shadow="sm" radius="md" p="md">
            <Group justify='space-between'>
              <Group>
                <ThemeIcon variant="light" color="violet" radius="xl" size="lg">
                  <IconClock size={20} />
                </ThemeIcon>
                <Box>
                  <Text fw={500}>Reflectie</Text>
                  <Text size="sm" c="dimmed">
                    Persoonlijke reflectie op de leerervaring en ontwikkeling
                  </Text>
                </Box>
              </Group>
              <Anchor href="/reflectie.pdf" download>
                Download
              </Anchor>
            </Group>
          </Card>

          {/* User Guide */}
          <Card withBorder shadow="sm" radius="md" p="md">
            <Group justify='space-between'>
              <Group>
                <ThemeIcon variant="light" color="grape" radius="xl" size="lg">
                  <IconUserQuestion size={20} />
                </ThemeIcon>
                <Box>
                  <Text fw={500}>User Guide</Text>
                  <Text size="sm" c="dimmed">
                    Een handleiding om de applicatie te gebruiken
                  </Text>
                </Box>
              </Group>
              <Anchor href="/User guide.pdf" download>
                Download
              </Anchor>
            </Group>
          </Card>
          {/* Installation Guide */}
          <Card withBorder shadow="sm" radius="md" p="md">
            <Group justify='space-between'>
              <Group>
                <ThemeIcon variant="light" color="yellow" radius="xl" size="lg">
                  <IconFile3d size={20} />
                </ThemeIcon>
                <Box>
                  <Text fw={500}>Installation Guide</Text>
                  <Text size="sm" c="dimmed">
                    een handleiding om de applicatie te installeren
                  </Text>
                </Box>
              </Group>
              <Anchor href="/installation guide.pdf" download>
                Download
              </Anchor>
            </Group>
          </Card>
        </Stack>
      </Box>
    </Container>
  );
}

export default Stage;
