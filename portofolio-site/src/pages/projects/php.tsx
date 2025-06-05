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
import klassement from "../../assets/projects/php/PHP_liveKlassement.png";
import tijd from "../../assets/projects/php/PHP_tijdsregistratie.png";
import { IconArrowBigLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function Php() {
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
            <Title order={2}>Ploegentijdrit Roeland</Title>
          </Center>
        </Group>

        <Divider mt="xs" size={"lg"} color="#e14631" />
      </Box>

      <Grid>
        <Grid.Col span={7}>
          <Text>
            In het tweede semester van het academiejaar 2023-2024 hebben wij
            voor het vak PHP een groepsproject uitgewerkt, voortbouwend op de
            design-rapporten die in het eerste semester door andere teams waren
            opgesteld. Onze opdrachtgever was Hans Bartholomeus.
          </Text>
          <Space h={"md"} />
          <Text>
            Voor dit project ontwikkelden we een website ter ondersteuning van
            een jaarlijkse wielerwedstrijd. De site diende de organisatie
            verschillende functionaliteiten te bieden.
          </Text>
          <Space h={"md"} />
          <Text>
            Teams moesten zich via de website kunnen registreren. Na het
            inschrijving ontvangen zij automatisch een bevestigingsmail met alle
            benodigde gegevens, waaronder de betalingsinstructies. Indien een
            team binnen de gestelde termijn geen betaling verrichtte, genereerde
            het systeem een herinneringsmail met een betalingsverzoek.
          </Text>
          <Space h={"md"} />
          <Text>
            Er is een login‐module opgezet waarmee enkel bevoegde organisatoren
            toegang kregen tot hun toegewezen pagina’s. Op deze manier bleven
            vertrouwelijke onderdelen, zoals deelnemerslijsten en
            administratieve gegevens, afgeschermd voor publiek.
          </Text>
          <Space h={"md"} />
          <Text>
            De verantwoordelijke organisator kon via een drag-and-drop interface
            de startvolgorde van de teams samenstellen. Zodra de volgorde
            definitief was, werd een PDF-bestand gegenereerd en per e-mail naar
            alle betrokken partijen verzonden.
          </Text>
          <Space h={"md"} />
          <Text>
            Tijdens de wedstrijddag kon een gebruiker (bijvoorbeeld een
            wedstrijdsecretaris) de deelnemende ploegen aanmelden en voor elk
            team een rugnummer toewijzen. Dit vereenvoudigde de herkenning op de
            baan en zorgde voor een gestructureerd verloop van de wedstrijd.
          </Text>
          <Space h={"md"} />
          <Text>
            Op een aparte pagina konden motors worden toegewezen aan de teams,
            waarna de wedstrijdleiding de starttijden toekende. Daarnaast was er
            een tijdspagina ingericht waarop per team de tijd gestart kon
            worden. Elke keer dat een team een ronde afrondde, werd automatisch
            een rondetijd opgeslagen.
          </Text>
          <Space h={"md"} />
          <Text>
            Tot slot werd er een live-klassementspagina ontwikkeld waarop de
            actuele standen tijdens de wedstrijd zichtbaar waren. Na afloop kon
            het definitieve klassement via e-mail als PDF-verslag worden
            verstuurd of door de organisatie worden afgedrukt.
          </Text>
        </Grid.Col>
        <Grid.Col span={5}>
          <Paper shadow="xl" w={"100%"}>
            <Container>
              <Title order={2}>Project informatie</Title>
              <Divider my={"sm"} w={"99%"} />
              <Text>Opleiding: Bachelor Toegepaste Informatica</Text>
              <Text>Vak: PhP</Text>
              <Text>
                Technologiën:
                <List>
                  <List.Item>PhP</List.Item>
                  <List.Item>bootstrap</List.Item>
                </List>
              </Text>
              <Text>
                Groep:
                <List>
                  <List.Item>Robbe Verbist</List.Item>
                  <List.Item>Bradley Vandenweyer</List.Item>
                  <List.Item>Illias Safiullien</List.Item>
                </List>
              </Text>
              <Text>
                Github:{" "}
                <Anchor
                  href="https://github.com/itfactory-tm/2024-ProjectPHP-503 "
                  target="_blank"
                  rel="noopener noreferrer"
                  c={"#e14631"}
                >
                  https://github.com/itfactory-tm/2024-ProjectPHP-503
                </Anchor>
              </Text>
              <Text>
                De site:{" "}
                <Anchor
                  href="https://roland.smo2024.be/"
                  target="_blank"
                  rel="noopener noreferrer"
                  c={"#e14631"}
                >
                  https://roland.smo2024.be/
                </Anchor>
              </Text>
            </Container>
          </Paper>
          <Space h={"md"}></Space>
          <Image src={klassement} w={600} />
          <Space h={"md"}></Space>
          <Image src={tijd} w={600} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
export default Php;
