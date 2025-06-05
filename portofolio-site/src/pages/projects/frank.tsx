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
  Group,
  ActionIcon,
} from "@mantine/core";
import { IconArrowBigLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function Frank() {
  const navigate = useNavigate();
  return (
    <Container mt="xl" fluid>
      <Box mb="lg">
        <Group gap="sm">
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
            <Title order={2}>Frank de Bank</Title>
          </Center>
        </Group>

        <Divider mt="xs" size={"lg"} color="#e14631" />
      </Box>

      <Grid>
        <Grid.Col span={7}>
          <Text>
            Bij het vak <strong>Project 4.0</strong> heeft onze groep een
            opdracht uitgevoerd voor het bedrijf <strong>Rurant</strong>. Het
            team bestond uit studenten van verschillende afstudeerrichtingen:
            twee vanuit Artificial Intelligence, één vanuit Applied Computer
            Science (ACS) en twee vanuit{" "}
            <strong>Application Development</strong>, waaronder{" "}
            <strong>ikzelf</strong> en <strong>Maarten Marx</strong>.
          </Text>
          <Space h="md" />
          <Text>
            Rurant zet zich via het traject{" "}
            <strong>“Veerkrachtige Dorpen”</strong> in voor leefbare en
            toekomstbestendige dorpen waarin inwoners graag wonen en leven. Als
            participatiemedewerkers proberen ze zoveel mogelijk bewoners bij dit
            proces te betrekken. Hiertoe maken ze gebruik van digitale tools en
            sociale media, organiseren ze verdiepingssessies en nemen ze deel
            aan lokale evenementen.
          </Text>
          <Space h="md" />
          <Text>
            Onze opdracht was het ontwikkelen van{" "}
            <strong>“Frank de Bank”</strong>: een{" "}
            <strong>slimme zitbank</strong> die met behulp van{" "}
            <strong>AI</strong> vragen kan stellen en live kan communiceren met
            gebruikers. Frank verzamelt zo informatie over de locatie en de
            beleving van de omgeving.
          </Text>
          <Space h="md" />
          <Text>
            Samen met Maarten Marx heb ik een <strong>dashboard</strong>{" "}
            gerealiseerd waarin Rurant alle conversaties met Frank kan inzien en
            beheren. Dit dashboard is opgebouwd in <strong>Angular</strong> en
            maakt gebruik van een <strong>REST-API</strong> en{" "}
            <strong>WebSockets</strong> om data te verwerken en door te sturen
            naar de <strong>AI-engine</strong>.
          </Text>
          <Space h="md" />
          <Text>
            Door deel te nemen aan dit project heb ik niet alleen mijn{" "}
            <strong>technische skills</strong>, maar ook mijn{" "}
            <strong>soft skills</strong> kunnen aanscherpen. Dankzij{" "}
            <strong>peer evaluations</strong>, presentaties voor Rurant en goede{" "}
            <strong>samenwerking</strong> binnen het team, heb ik mijn ervaring
            op verschillende vlakken kunnen verdiepen.
          </Text>
        </Grid.Col>

        <Grid.Col span={5}>
          <Paper shadow="xl" w={"100%"}>
            <Container>
              <Title order={2}>Project informatie</Title>
              <Divider my={"sm"} w={"99%"} />
              <Text>Opleiding: Bachelor Toegepaste Informatica</Text>
              <Text>Vak: Project 4.0</Text>
              <Text>
                Technologiën:
                <List>
                  <List.Item>Angular</List.Item>
                  <List.Item>Python</List.Item>
                  <List.Item>AI</List.Item>
                  <List.Item>Azure</List.Item>
                  <List.Item>Github</List.Item>
                  <List.Item>Raspberry Pi</List.Item>
                </List>
              </Text>
              <Text>
                Groep:
                <List>
                  <List.Item>Maarten Marx</List.Item>
                  <List.Item>Filip Kolb</List.Item>
                  <List.Item>Mark Vaikul</List.Item>
                  <List.Item>Egemen alkan</List.Item>
                </List>
              </Text>
              <Text>
                Github:{" "}
                <Anchor
                  href="https://github.com/egealkan/Project4.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  c={"#e14631"}
                >
                  https://github.com/egealkan/Project4.0
                </Anchor>
              </Text>
              <Text>
                Promo video:{" "}
                <Anchor
                  href="https://www.youtube.com/watch?v=_260Fb4Qc2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  c={"#e14631"}
                >
                  Frank de Bank
                </Anchor>
              </Text>
            </Container>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Frank;
