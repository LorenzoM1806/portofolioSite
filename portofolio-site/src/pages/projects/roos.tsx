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

function Roos() {
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
            <Title order={2}>Club Roos</Title>
          </Center>
        </Group>

        <Divider mt="xs" size={"lg"} color="#e14631" />
      </Box>

      <Grid>
        <Grid.Col span={7}>
          <Text>
            In het kader van mijn <strong>graduaatsopleiding Programmeren</strong> hebben wij in
            teamverband een website ontwikkeld voor een echte klant: <strong>Club Roos </strong>
            (Atelier Marjelle Roose). De site moest de volgende delen aanwezig
            hebben:
            <Space h={"xs"} />
            <List>
              <List.Item>Interieur pagina</List.Item>
              <List.Item>Over mij pagina</List.Item>
              <List.Item>Instagram pagina</List.Item>
              <List.Item>Contact pagina</List.Item>
              <List.Item>Webshop pagina</List.Item>
              <List.Item>Workshop pagina</List.Item>
              <List.Item>Keramiek pagina</List.Item>
            </List>
            <Space h={"md"} />
            Aan het einde van het project koos de opdrachtgever onze inzending
            als <strong>winnende website. </strong> Met enkele kleine aanpassingen wordt deze site
            nog steeds gebruikt als de officiële online aanwezigheid van Club
            Roos.
          </Text>
        </Grid.Col>

        <Grid.Col span={5}>
          <Paper shadow="xl" w={"100%"} withBorder>
            <Container>
              <Title order={2}>Project informatie</Title>
              <Divider my={"sm"} w={"99%"} />
              <Text>Opleiding: Graduaat Programmeren</Text>
              <Text>Vak: Projecten voor het werkveld</Text>
              <Space h={'md'}/>
              <Text>
                Gebruikte Technologiën:
                <List>
                  <List.Item>WordPress</List.Item>
                </List>
              </Text>
              <Space h={'md'}/>
              <Text>
                Het Team:
                <List>
                  <List.Item>Stijn Van Hees</List.Item>
                  <List.Item>Yenebeb Daniel Fikre</List.Item>
                  <List.Item>Majid Khadim Ali</List.Item>
                  <List.Item>Jessica Van Craen</List.Item>
                </List>
              </Text>
              <Space h={'md'}/>
              <Text>
                De website:{" "}
                <Anchor
                  href="https://www.clubroos.be/"
                  target="_blank"
                  rel="noopener noreferrer"
                  c={"#e14631"}
                >
                  https://www.clubroos.be/
                </Anchor>
              </Text>
            </Container>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Roos;
