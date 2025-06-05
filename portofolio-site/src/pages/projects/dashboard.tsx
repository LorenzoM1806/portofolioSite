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

function Dashboard() {
  return (
    <Container mt="xl" w={"100vw"}>
          <Box mb="lg">
            <Center>
              <Title order={2}>Dashboard verkeersanalyse</Title>
            </Center>
    
            <Divider mt="xs" size={"lg"} color="#e14631" />
          </Box>
    
          <Grid>
            <Grid.Col span={7}>
              <Text>
                Tijdens mijn bacheloropleiding Toegepaste Informatica kregen we de kans om te werken met Qlik, een krachtig platform voor data-analyse en datavisualisatie. Qlik stelt gebruikers in staat om verbinding te maken met diverse databronnen, data te transformeren en interactieve dashboards en rapporten te bouwen die datagedreven inzichten bieden en de besluitvorming ondersteunen.
              </Text>
              <Text>
                Binnen het vak Datavisualisatie kregen we een grondige introductie in de mogelijkheden van Qlik, waaronder het opstellen van datamodellen, het toepassen van filters, het maken van grafieken en het bouwen van dashboards die gericht zijn op het vertellen van een verhaal met data.
              </Text>
              <Text>
                Als eindopdracht kregen we de taak om zelf een dashboard te ontwikkelen op basis van een uitgebreide dataset over verkeersongevallen in België. De bedoeling was om een datagedreven verhaal te vertellen dat bijdraagt aan het verhogen van het verkeersveiligheidsbewustzijn.
              </Text>
              <Text>
                Concreet analyseerden we verschillende aspecten van de dataset, zoals ongevaltypes, locaties, tijdstippen, weersomstandigheden en betrokken weggebruikers. Door middel van interactieve grafieken, kaarten en filters hebben we inzichten gevisualiseerd waarmee beleidsmakers of veiligheidsdiensten gerichter maatregelen kunnen treffen.
              </Text>
              <Text>
                Deze opdracht bood niet alleen een technische uitdaging op vlak van datamodellering en visualisatie, maar legde ook de nadruk op het maatschappelijke belang van data-analyse: het omzetten van ruwe data naar bruikbare inzichten voor een veiliger Belgisch verkeer.
              </Text>
            </Grid.Col>
            <Grid.Col span={5}>
              <Paper shadow="xl" w={"100%"}>
                <Container>
                  <Title order={2}>Project informatie</Title>
                  <Divider my={'sm'} w={"99%"}/>
                  <Text>Opleiding: Bachelor Toegepaste Informatica</Text>
                  <Text>Vak: Data Visualisatie</Text>
                  <Text>Technologiën:
                    <List>
                      <List.Item>Qlick</List.Item>
                    </List>
                  </Text>
                  <Text>Solo opdracht</Text>
                  <Text>Dashboard video: <Anchor href="https://www.youtube.com/watch?v=ux7LZe9QRA4 " target="_blank" rel="noopener noreferrer" c={"#e14631"}>Het dashboard</Anchor></Text>
                </Container>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
  );
}

export default Dashboard;
