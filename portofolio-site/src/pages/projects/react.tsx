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
            <Title order={2}>Yugioh card site</Title>
          </Center>
        </Group>

        <Divider mt="xs" size={"lg"} color="#e14631" />
      </Box>

      <Grid>
        <Grid.Col span={7}>
          <Text>
            Dit is een van de projecten uit een eerdere opleiding, <strong>graduaat
            programmeren.</strong> Hierbij hebben wij de opdracht gekregen om een
            eenvoudige <strong>React-website</strong> met drie pagina’s te ontwikkelen, waarvan
            er twee interactief moesten zijn. Voor deze opdracht heb ik een
            Yu-Gi-Oh-card-site gerealiseerd met de volgende opzet:
          </Text>
          <Space h="md" />
          <Text>
            De homepagina fungeert als <strong>navigatiemenu</strong>: gebruikers kunnen vanuit
            hier doorklikken naar de andere pagina’s.
          </Text>
          <Space h="md" />
          <Text>
            Op de tweede pagina heeft de gebruiker de mogelijkheid om met één klik
            een <strong>willekeurige kaart</strong> te genereren. Bij iedere gegenereerde kaart
            wordt alle relevante informatie ( naam, afbeelding, type,
            aanval/defense, enz.) direct getoond. Dit is gerealiseerd door een
            API-aanroep naar een <strong>publieke Yu-Gi-Oh-database</strong>, zodat de
            kaartgegevens real-time worden opgehaald.
          </Text>
          <Space h="md" />
          <Text>
            De derde pagina biedt een <strong>zoekfunctie</strong> waarmee de gebruiker een <strong>archetype </strong>
            kan invoeren (bijvoorbeeld “Blue-Eyes” of “Dark Magician”). Na het
            uitvoeren van de zoekopdracht wordt een galerij getoond met alle
            kaarten die aan het ingevoerde archetype voldoen, inclusief hun
            afbeeldingen. De gebruiker kan op een <strong>individuele kaart klikken</strong>,
            waarna deze in een <strong>nieuw tabblad</strong> wordt geopend met de volledige
            kaartdetails. Ook deze data wordt live opgehaald via dezelfde
            publieke API.
          </Text>
          <Space h="md" />
          <Text>
            De website is volledig gebouwd met <strong>React</strong> en maakt gebruik van
            functionele componenten en hooks om de state-beheer en
            API-communicatie te verzorgen. Door middel van <strong>fetch-calls</strong> worden
            alle kaartgegevens uit de publieke API geladen wanneer een gebruiker
            een actie uitvoert. Het resultaat is een gebruiksvriendelijke
            interface die eenvoudig navigeert en vlot reageert op
            gebruikersinput.
          </Text>
        </Grid.Col>

        <Grid.Col span={5}>
          <Paper shadow="xl" w={"100%"} withBorder>
            <Container>
              <Title order={2}>Project informatie</Title>
              <Divider my={"sm"} w={"99%"} />
              <Text>Opleiding: Graduaat Programmeren</Text>
              <Text>Vak: Frontend Frameworks</Text>
              <Space h={'md'}/>
              <Text>
                Gebruikte Technologiën:
                <List>
                  <List.Item>React</List.Item>
                </List>
              </Text>
              <Space h={'md'}/>
              <Text>Solo opdracht</Text>
              <Space h={'md'}/>
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
