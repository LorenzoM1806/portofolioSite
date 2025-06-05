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
            <Title order={2}>Ploegentijdrit Roeland</Title>
          </Center>
        </Group>

        <Divider mt="xs" size={"lg"} color="#e14631" />
      </Box>

      <Grid>
        <Grid.Col span={7}>
          <Text>
            In het tweede semester van het academiejaar{" "}
            <strong>2023-2024</strong> hebben wij voor het vak{" "}
            <strong>PHP</strong> een groepsproject uitgewerkt, voortbouwend op
            de design-rapporten van het eerste semester. Onze opdrachtgever was 
            <strong> Hans Bartholomeus</strong>.
          </Text>
          <Space h="md" />
          <Text>
            Voor dit project ontwikkelden we een <strong>website</strong> ter
            ondersteuning van een jaarlijkse <strong>wielerwedstrijd</strong>.
            De site moest verschillende
            <strong> functionaliteiten</strong> bieden voor de organisatie.
          </Text>
          <Space h="md" />
          <Text>
            Teams moesten zich via de website kunnen{" "}
            <strong>registreren</strong>. Na inschrijving ontvingen zij
            automatisch een <strong>bevestigingsmail</strong> met
            <strong> betalingsinstructies</strong>. Bij uitblijvende betaling
            volgde een
            <strong>herinneringsmail</strong>.
          </Text>
          <Space h="md" />
          <Text>
            Er werd een <strong>login‐module</strong> opgezet zodat enkel
            bevoegde
            <strong> organisatoren</strong> toegang kregen tot hun pagina’s. Zo
            bleven
            <strong> vertrouwelijke gegevens</strong> zoals deelnemerslijsten
            afgeschermd.
          </Text>
          <Space h="md" />
          <Text>
            De verantwoordelijke organisator kon via een{" "}
            <strong>drag-and-drop interface </strong>
             de <strong>startvolgorde</strong> bepalen. Bij bevestiging werd
            automatisch een
            <strong> PDF-bestand</strong> gegenereerd en verzonden.
          </Text>
          <Space h="md" />
          <Text>
            Tijdens de wedstrijddag kon een <strong>wedstrijdsecretaris</strong>{" "}
            ploegen
            <strong> aanmelden</strong> en elk team een{" "}
            <strong>rugnummer</strong> toewijzen, voor een vlot
            wedstrijdverloop.
          </Text>
          <Space h="md" />
          <Text>
            Op een aparte pagina konden <strong>motors</strong> en{" "}
            <strong>starttijden</strong> worden toegewezen. De{" "}
            <strong>tijdspagina</strong> liet toe om per team rondetijden
            <strong> automatisch op te slaan</strong>.
          </Text>
          <Space h="md" />
          <Text>
            Tot slot werd een <strong>live-klassementspagina</strong>{" "}
            ontwikkeld. Na afloop kon het
            <strong> definitieve klassement</strong> als <strong>PDF</strong>{" "}
            worden verzonden of afgedrukt.
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
