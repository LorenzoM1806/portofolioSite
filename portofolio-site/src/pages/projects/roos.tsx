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

function Roos() {
  return (
    <Container mt="xl" w={"100vw"}>
          <Box mb="lg">
            <Center>
              <Title order={2}>Club Roos</Title>
            </Center>
    
            <Divider mt="xs" size={"lg"} color="#e14631" />
          </Box>
    
          <Grid>
            <Grid.Col span={7}>
              <Text>
                In het kader van mijn graduaatsopleiding Programmeren hebben wij in teamverband een website ontwikkeld voor een echte klant: Club Roos (Atelier Marjelle Roose). De site moest de volgende delen aanwezig hebben:
                <List>
                  <List.Item>Interieur pagina</List.Item>
                  <List.Item>Over mij pagina</List.Item>
                  <List.Item>Instagram pagina</List.Item>
                  <List.Item>Contact pagina</List.Item>
                  <List.Item>Webshop pagina</List.Item>
                  <List.Item>Workshop pagina</List.Item>
                  <List.Item>Keramiek pagina</List.Item>
                </List>
                Aan het einde van het project koos de opdrachtgever onze inzending als winnende website. Met enkele kleine aanpassingen wordt deze site nog steeds gebruikt als de officiële online aanwezigheid van Club Roos.
              </Text>
            </Grid.Col>
            <Grid.Col span={5}>
              <Paper shadow="xl" w={"100%"}>
                <Container>
                  <Title order={2}>Project informatie</Title>
                  <Divider my={'sm'} w={"99%"}/>
                  <Text>Opleiding: Graduaat Programmeren</Text>
                  <Text>Vak: Projecten voor het werkveld</Text>
                  <Text>Technologiën:
                    <List>
                      <List.Item>WordPress</List.Item>
                    </List>
                  </Text>
                  <Text>Groep:
                    <List>
                      <List.Item>Stijn Van Hees</List.Item>
                      <List.Item>Yenebeb Daniel Fikre</List.Item>
                      <List.Item>Majid Khadim Ali</List.Item>
                      <List.Item>Jessica Van Craen</List.Item>
                    </List>
                  </Text>
                  <Text>De website: <Anchor href="https://www.clubroos.be/" target="_blank" rel="noopener noreferrer" c={"#e14631"}>https://www.clubroos.be/</Anchor></Text>
                </Container>
                  
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
  );
}

export default Roos;
