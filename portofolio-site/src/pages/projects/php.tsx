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
            In het tweede semester van het academiejaar 2023-2024 hebben wij
            voor het <strong>vak PHP</strong> een groepsproject uitgewerkt,
            voortbouwend op de design-rapporten van het eerste semester. Onze
            opdrachtgever was
            <strong> Hans Bartholomeus.</strong>
          </Text>
          <Space h="md" />
          <Text>
            Voor dit project ontwikkelden we een website ter ondersteuning van
            een <strong>jaarlijkse wielerwedstrijd.</strong> De site moest
            verschillende functionaliteiten bieden voor de organisatie.
          </Text>
          <Space h="md" />
          <Text>
            Teams moesten zich via de website kunnen{" "}
            <strong>registreren.</strong> Na inschrijving ontvingen zij
            automatisch een <strong>bevestigingsmail</strong> met
            betalingsinstructies. Bij uitblijvende betaling volgde een
            <strong> herinneringsmail.</strong>
          </Text>
          <Space h="md" />
          <Text>
            Er werd een <strong>login‐module</strong> opgezet zodat enkel
            bevoegde organisatoren toegang kregen tot hun pagina’s. Zo bleven
            vertrouwelijke gegevens zoals deelnemerslijsten afgeschermd.
          </Text>
          <Space h="md" />
          <Text>
            De verantwoordelijke organisator kon via een drag-and-drop interface
            de <strong>startvolgorde</strong> bepalen. Bij bevestiging werd
            automatisch een
            <strong> PDF-bestand</strong> gegenereerd en verzonden.
          </Text>
          <Space h="md" />
          <Text>
            Tijdens de wedstrijddag kon een wedstrijdsecretaris{" "}
            <strong>ploegen aanmelden</strong> en elk team een rugnummer
            toewijzen, voor een vlot wedstrijdverloop.
          </Text>
          <Space h="md" />
          <Text>
            Op een aparte pagina konden motors en starttijden worden toegewezen.
            De tijdspagina liet toe om per team <strong>rondetijden</strong>{" "}
            automatisch op te slaan.
          </Text>
          <Space h="md" />
          <Text>
            Tot slot werd een <strong>live-klassementspagina</strong>{" "}
            ontwikkeld. Na afloop kon het{" "}
            <strong>definitieve klassement</strong> als PDF worden verzonden of
            afgedrukt.
          </Text>
        </Grid.Col>

        <Grid.Col span={5}>
          <Paper shadow="xl" w={"100%"} withBorder>
            <Container>
              <Title order={2}>Project informatie</Title>
              <Divider my={"sm"} w={"99%"} />
              <Text><strong>Opleiding:</strong> Bachelor Toegepaste Informatica</Text>
              <Text>Vak: PhP</Text>
              <Space h={"md"} />
              <Text>
                <strong>Technologiën:</strong>
                <List>
                  <List.Item>PhP</List.Item>
                  <List.Item>bootstrap</List.Item>
                </List>
              </Text>
              <Space h={"md"} />
              <Text>
                <strong>Het Team:</strong>
                <List>
                  <List.Item>Robbe Verbist</List.Item>
                  <List.Item>Bradley Vandenweyer</List.Item>
                  <List.Item>Illias Safiullien</List.Item>
                </List>
              </Text>
              <Space h={"md"} />
              <Text>
                <strong>Github:{" "}</strong>
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
                <strong>De site:{" "}</strong>
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
        </Grid.Col>
      </Grid>
      <Group>
        <Image src={klassement} w={550} />
        <Image src={tijd} w={550} />
      </Group>
    </Container>
  );
}
export default Php;
