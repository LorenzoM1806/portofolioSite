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

function Php() {
  return (
    <Container mt="xl" w={"100vw"}>
          <Box mb="lg">
            <Center>
              <Title order={2}>Ploegentijdrit Roeland</Title>
            </Center>
    
            <Divider mt="xs" size={"lg"} color="#e14631" />
          </Box>
    
          <Grid>
            <Grid.Col span={7}>
              <Text>
                In het tweede semester van het academiejaar 2023-2024 hebben wij voor het vak PHP een groepsproject uitgewerkt, voortbouwend op de design-rapporten die in het eerste semester door andere teams waren opgesteld. Onze opdrachtgever was Hans Bartholomeus.
              </Text>
              <Text>
                Voor dit project ontwikkelden we een website ter ondersteuning van een jaarlijkse wielerwedstrijd. De site diende de organisatie verschillende functionaliteiten te bieden.
              </Text>
              <Text>
                Teams moesten zich via de website kunnen registreren. Na het inschrijving ontvangen zij automatisch een bevestigingsmail met alle benodigde gegevens, waaronder de betalingsinstructies. Indien een team binnen de gestelde termijn geen betaling verrichtte, genereerde het systeem een herinneringsmail met een betalingsverzoek.
              </Text>
              <Text>
                Er is een login‐module opgezet waarmee enkel bevoegde organisatoren toegang kregen tot hun toegewezen pagina’s. Op deze manier bleven vertrouwelijke onderdelen, zoals deelnemerslijsten en administratieve gegevens, afgeschermd voor publiek.
              </Text>
              <Text>
                De verantwoordelijke organisator kon via een drag-and-drop interface de startvolgorde van de teams samenstellen. Zodra de volgorde definitief was, werd een PDF-bestand gegenereerd en per e-mail naar alle betrokken partijen verzonden.
              </Text>
              <Text>
                Tijdens de wedstrijddag kon een gebruiker (bijvoorbeeld een wedstrijdsecretaris) de deelnemende ploegen aanmelden en voor elk team een rugnummer toewijzen. Dit vereenvoudigde de herkenning op de baan en zorgde voor een gestructureerd verloop van de wedstrijd.
              </Text>
              <Text>
                Op een aparte pagina konden motors worden toegewezen aan de teams, waarna de wedstrijdleiding de starttijden toekende. Daarnaast was er een tijdspagina ingericht waarop per team de tijd gestart kon worden. Elke keer dat een team een ronde afrondde, werd automatisch een rondetijd opgeslagen.
              </Text>
              <Text>
                Tot slot werd er een live-klassementspagina ontwikkeld waarop de actuele standen tijdens de wedstrijd zichtbaar waren. Na afloop kon het definitieve klassement via e-mail als PDF-verslag worden verstuurd of door de organisatie worden afgedrukt.
              </Text>
            </Grid.Col>
            <Grid.Col span={5}>
              <Paper shadow="xl" w={"100%"}>
                <Container>
                  <Title order={2}>Project informatie</Title>
                  <Divider my={'sm'} w={"99%"}/>
                  <Text>Opleiding: Bachelor Toegepaste Informatica</Text>
                  <Text>Vak: PhP</Text>
                  <Text>Technologiën:
                    <List>
                      <List.Item>PhP</List.Item>
                      <List.Item>bootstrap</List.Item>
                    </List>
                  </Text>
                  <Text>Groep:
                    <List>
                      <List.Item>Robbe Verbist</List.Item>
                      <List.Item>Bradley Vandenweyer</List.Item>
                      <List.Item>Illias Safiullien</List.Item>
                    </List>
                  </Text>
                  <Text>Github: <Anchor href="https://github.com/itfactory-tm/2024-ProjectPHP-503 " target="_blank" rel="noopener noreferrer" c={"#e14631"}>https://github.com/itfactory-tm/2024-ProjectPHP-503</Anchor></Text>
                  <Text>De site: <Anchor href="https://roland.smo2024.be/" target="_blank" rel="noopener noreferrer" c={"#e14631"}>https://roland.smo2024.be/</Anchor></Text>
                </Container>
                  
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
  );
}
export default Php;
