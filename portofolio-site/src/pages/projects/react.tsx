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
  Anchor
} from "@mantine/core";

function React() {
  return (
    <Container mt="xl" w={"100vw"}>
          <Box mb="lg">
            <Center>
              <Title order={2}>Yugioh card site</Title>
            </Center>
    
            <Divider mt="xs" size={"lg"} color="#e14631" />
          </Box>
    
          <Grid>
            <Grid.Col span={7}>
              <Text>
                Dit is een van de projecten uit een eerdere opleiding, graduaat programmeren. Hierbij hebben wij de opdracht gekregen om een eenvoudige React-website met drie pagina’s te ontwikkelen, waarvan er twee interactief moesten zijn. Voor deze opdracht heb ik een Yu-Gi-Oh-card-site gerealiseerd met de volgende opzet:
              </Text>
              <Text>
                De homepagina fungeert als navigatiemenu: gebruikers kunnen vanuit hier doorklikken naar de andere pagina’s.
              </Text>
              <Text>
                Op deze pagina heeft de gebruiker de mogelijkheid om met één klik een willekeurige kaart te genereren. Bij iedere gegenereerde kaart wordt alle relevante informatie (naam, afbeelding, type, aanval/defense, enz.) direct getoond. Dit is gerealiseerd door een API-aanroep naar een publieke Yu-Gi-Oh-database, zodat de kaartgegevens real-time worden opgehaald.
              </Text>
              <Text>
                Deze pagina biedt een zoekfunctie waarmee de gebruiker een archetype kan invoeren (bijvoorbeeld “Blue-Eyes” of “Dark Magician”). Na het uitvoeren van de zoekopdracht wordt een galerij getoond met alle kaarten die aan het ingevoerde archetype voldoen, inclusief hun afbeeldingen. De gebruiker kan op een individuele kaart klikken, waarna deze in een nieuw tabblad wordt geopend met de volledige kaartdetails. Ook deze data wordt live opgehaald via dezelfde publieke API.
              </Text>
              <Text>
                De website is volledig gebouwd met React en maakt gebruik van functionele componenten en hooks om de state-beheer- en API-communicatie te verzorgen. Door middel van fetch-calls worden alle kaartgegevens uit de publieke API geladen wanneer een gebruiker een actie uitvoert. Het resultaat is een gebruiksvriendelijke interface die eenvoudig navigeert en vlot reageert op gebruikersinput.
              </Text>
            </Grid.Col>
            <Grid.Col span={5}>
              <Paper shadow="xl" w={"100%"}>
                <Container>
                  <Title order={2}>Project informatie</Title>
                  <Divider my={'sm'} w={"99%"}/>
                  <Text>Opleiding: Graduaat Programmeren</Text>
                  <Text>Vak: React</Text>
                  <Text>Technologiën:
                    <List>
                      <List.Item>React</List.Item>
                    </List>
                  </Text>
                  <Text>Solo opdracht</Text>
                  <Text>Github: <Anchor href="https://github.com/it-graduaten/permanente-evaluatieopdracht-dagopleiding-LorenzoM1806 " target="_blank" rel="noopener noreferrer" c={"#e14631"}>https://github.com/it-graduaten/permanente-evaluatieopdracht-dagopleiding-LorenzoM1806</Anchor></Text>
                </Container>
                  
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
  );
}
export default React;
