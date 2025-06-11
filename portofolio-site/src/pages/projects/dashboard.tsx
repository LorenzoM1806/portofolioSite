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
import page1 from "../../assets/projects/datavisualisatie/page1.png";
import page2 from "../../assets/projects/datavisualisatie/page2.png";
import page3 from "../../assets/projects/datavisualisatie/page3.png";
import page4 from "../../assets/projects/datavisualisatie/page4.png";
import page5 from "../../assets/projects/datavisualisatie/page5.png";
import { useNavigate } from "react-router-dom";
import { IconArrowBigLeft } from "@tabler/icons-react";

function Dashboard() {
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
            <Title order={2}>Dashboard verkeersanalyse</Title>
          </Center>
        </Group>

        <Divider mt="xs" size={"lg"} color="#e14631" />
      </Box>

      <Grid>
        <Grid.Col span={7}>
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
        </Grid.Col>
        <Grid.Col span={5}>
          <Paper shadow="xl" w={"100%"} withBorder>
            <Container>
              <Title order={2}>Project informatie</Title>
              <Divider my={"sm"} w={"99%"} />
              <Text><strong>Opleiding:</strong> Bachelor Toegepaste Informatica</Text>
              <Text><strong>Vak:</strong> Data Visualisatie</Text>
              <Space h='md'/>
              <Text>
                <strong>Gebruikte Technologiën:</strong>
                <List>
                  <List.Item>Qlick</List.Item>
                </List>
              </Text>
              <Space h='md'/>
              <Text><strong>Solo opdracht</strong></Text>
              <Space h='md'/>
              <Text>
                <strong>Dashboard info video:{" "}</strong>
                <Anchor
                  href="https://www.youtube.com/watch?v=ux7LZe9QRA4 "
                  target="_blank"
                  rel="noopener noreferrer"
                  c={"#e14631"}
                >
                  Het dashboard
                </Anchor>
              </Text>
            </Container>
          </Paper>
        </Grid.Col>
      </Grid>
      <Text>
        Tijdens mijn <strong>bacheloropleiding Toegepaste Informatica</strong> kregen we de kans
        om te werken met <strong>Qlik</strong>, een krachtig platform voor data-analyse en
        datavisualisatie. Qlik stelt gebruikers in staat om verbinding te maken
        met diverse databronnen, data te transformeren en interactieve
        dashboards en rapporten te bouwen die datagedreven inzichten bieden en
        de besluitvorming ondersteunen.
      </Text>
      <Space h={"md"} />
      <Text>
        Binnen het vak <strong>Datavisualisatie</strong> kregen we een grondige introductie in de
        mogelijkheden van Qlik, waaronder het opstellen van datamodellen, het
        toepassen van filters, het maken van grafieken en het bouwen van
        dashboards die gericht zijn op het vertellen van een verhaal met data.
      </Text>
      <Space h={"md"} />
      <Text>
        Als eindopdracht kregen we de taak om zelf een dashboard te ontwikkelen
        op basis van een uitgebreide dataset over <strong>verkeersongevallen in België. </strong>
        De bedoeling was om een datagedreven <strong>verhaal te vertellen</strong> dat bijdraagt
        aan het <strong>verhogen van het verkeersveiligheidsbewustzijn.</strong>
      </Text>
      <Space h={"md"} />
      <Text>
        Concreet analyseerden we verschillende aspecten van de dataset, zoals
        ongevaltypes, locaties, tijdstippen, weersomstandigheden en betrokken
        weggebruikers. Door middel van interactieve grafieken, kaarten en
        filters hebben we inzichten gevisualiseerd waarmee beleidsmakers of
        veiligheidsdiensten gerichter maatregelen kunnen treffen.
      </Text>
      <Space h={"md"} />
      <Text>
        Deze opdracht bood niet alleen een technische uitdaging op vlak van
        datamodellering en visualisatie, maar legde ook de nadruk op het
        maatschappelijke belang van data-analyse: het omzetten van ruwe data
        naar bruikbare inzichten voor een veiliger Belgisch verkeer.
      </Text>
    </Container>
  );
}

export default Dashboard;
