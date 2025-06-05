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
import home from "../../assets/projects/React/home_page_react.png";
import random from "../../assets/projects/React/randomizer.png";
import searcher from "../../assets/projects/React/searcher.png";
import { IconArrowBigLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function React() {
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
            <Title order={2}>Yugioh card site</Title>
          </Center>
        </Group>

        <Divider mt="xs" size={"lg"} color="#e14631" />
      </Box>

      <Grid>
        <Grid.Col span={7}>
          <Text>
            Dit is een van de projecten uit een eerdere opleiding, graduaat
            programmeren. Hierbij hebben wij de opdracht gekregen om een
            eenvoudige React-website met drie pagina’s te ontwikkelen, waarvan
            er twee interactief moesten zijn. Voor deze opdracht heb ik een
            Yu-Gi-Oh-card-site gerealiseerd met de volgende opzet:
          </Text>
          <Space h={"md"} />
          <Text>
            De homepagina fungeert als navigatiemenu: gebruikers kunnen vanuit
            hier doorklikken naar de andere pagina’s.
          </Text>
          <Space h={"md"} />
          <Text>
            Op deze pagina heeft de gebruiker de mogelijkheid om met één klik
            een willekeurige kaart te genereren. Bij iedere gegenereerde kaart
            wordt alle relevante informatie (naam, afbeelding, type,
            aanval/defense, enz.) direct getoond. Dit is gerealiseerd door een
            API-aanroep naar een publieke Yu-Gi-Oh-database, zodat de
            kaartgegevens real-time worden opgehaald.
          </Text>
          <Space h={"md"} />
          <Text>
            Deze pagina biedt een zoekfunctie waarmee de gebruiker een archetype
            kan invoeren (bijvoorbeeld “Blue-Eyes” of “Dark Magician”). Na het
            uitvoeren van de zoekopdracht wordt een galerij getoond met alle
            kaarten die aan het ingevoerde archetype voldoen, inclusief hun
            afbeeldingen. De gebruiker kan op een individuele kaart klikken,
            waarna deze in een nieuw tabblad wordt geopend met de volledige
            kaartdetails. Ook deze data wordt live opgehaald via dezelfde
            publieke API.
          </Text>
          <Space h={"md"} />
          <Text>
            De website is volledig gebouwd met React en maakt gebruik van
            functionele componenten en hooks om de state-beheer- en
            API-communicatie te verzorgen. Door middel van fetch-calls worden
            alle kaartgegevens uit de publieke API geladen wanneer een gebruiker
            een actie uitvoert. Het resultaat is een gebruiksvriendelijke
            interface die eenvoudig navigeert en vlot reageert op
            gebruikersinput.
          </Text>
        </Grid.Col>
        <Grid.Col span={5}>
          <Paper shadow="xl" w={"100%"}>
            <Container>
              <Title order={2}>Project informatie</Title>
              <Divider my={"sm"} w={"99%"} />
              <Text>Opleiding: Graduaat Programmeren</Text>
              <Text>Vak: React</Text>
              <Text>
                Technologiën:
                <List>
                  <List.Item>React</List.Item>
                </List>
              </Text>
              <Text>Solo opdracht</Text>
              <Text>
                Github:{" "}
                <Anchor
                  href="https://github.com/it-graduaten/permanente-evaluatieopdracht-dagopleiding-LorenzoM1806 "
                  target="_blank"
                  rel="noopener noreferrer"
                  c={"#e14631"}
                >
                  https://github.com/it-graduaten/permanente-evaluatieopdracht-dagopleiding-LorenzoM1806
                </Anchor>
              </Text>
            </Container>
          </Paper>
          <Space h={"md"} />
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
        </Grid.Col>
      </Grid>
    </Container>
  );
}
export default React;
