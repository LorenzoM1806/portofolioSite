import {
  Container,
  Box,
  Title,
  Divider,
  Grid,
  Paper,
  Text,
  List,
  Anchor,
  Space,
  Group,
  ActionIcon,
  Stack,
  SimpleGrid
} from "@mantine/core";
import { IconArrowBigLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function Roos() {
  const navigate = useNavigate();
  return (
    <Container mt="xl" fluid px={{ base: "xs", sm: "md" }}>
      {/* Header sectie */}
      <Box mb="lg">
        <Group gap="sm" wrap="nowrap">
          <ActionIcon
            variant="filled"
            color="#e14631"
            size="lg"
            onClick={() => navigate(-1)}
            aria-label="Ga terug"
          >
            <IconArrowBigLeft size={24} />
          </ActionIcon>
          <Title order={2} style={{ flex: 1, fontSize: 'calc(1.1rem + 1vw)' }}>
            Club Roos
          </Title>
        </Group>
        <Divider mt="xs" size="lg" color="#e14631" />
      </Box>

      <Grid gutter="xl">
        {/* Linker kolom: De beschrijving */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack gap="md">
            <Text>
              In het kader van mijn <strong>graduaatsopleiding Programmeren</strong> hebben wij in
              teamverband een website ontwikkeld voor een echte klant: <strong>Club Roos </strong>
              (Atelier Marjelle Roose).
            </Text>

            <Box>
              <Text fw={700} mb="xs">De opdracht omvatte de volgende onderdelen:</Text>
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs">
                <List size="sm" withPadding>
                  <List.Item>Interieur pagina</List.Item>
                  <List.Item>Over mij pagina</List.Item>
                  <List.Item>Instagram integratie</List.Item>
                  <List.Item>Contact pagina</List.Item>
                </List>
                <List size="sm" withPadding>
                  <List.Item>Webshop module</List.Item>
                  <List.Item>Workshop beheer</List.Item>
                  <List.Item>Keramiek portfolio</List.Item>
                </List>
              </SimpleGrid>
            </Box>

              <Text>
                Aan het einde van het project koos de opdrachtgever onze inzending
                als <strong>winnende website.</strong> Met enkele kleine aanpassingen wordt deze site
                nog steeds gebruikt als de officiële online aanwezigheid van Club Roos.
              </Text>
          </Stack>
        </Grid.Col>

        {/* Rechter kolom: Info kaart */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Paper shadow="md" withBorder p="lg" radius="md">
            <Title order={3} mb="sm">Project informatie</Title>
            <Divider mb="md" color="#e14631" />
            
            <Stack gap="sm">
              <Box>
                <Text fw={700} size="sm">Opleiding:</Text>
                <Text size="sm">Graduaat Programmeren</Text>
              </Box>

              <Box>
                <Text fw={700} size="sm">Vak:</Text>
                <Text size="sm">Projecten voor het werkveld</Text>
              </Box>

              <Box>
                <Text fw={700} size="sm">Gebruikte Technologieën:</Text>
                <List size="sm" withPadding>
                  <List.Item>WordPress</List.Item>
                  <List.Item>Custom CSS/Theming</List.Item>
                </List>
              </Box>

              <Box>
                <Text fw={700} size="sm">Het Team:</Text>
                <SimpleGrid cols={2} spacing="xs">
                  <Text size="xs">• Stijn Van Hees</Text>
                  <Text size="xs">• Yenebeb Daniel Fikre</Text>
                  <Text size="xs">• Majid Khadim Ali</Text>
                  <Text size="xs">• Jessica Van Craen</Text>
                </SimpleGrid>
              </Box>

              <Box mt="md">
                <Text fw={700} size="sm">Live resultaat:</Text>
                <Anchor
                  href="https://www.clubroos.be/"
                  target="_blank"
                  size="sm"
                  fw={500}
                  c="#e14631"
                  style={{ wordBreak: 'break-all' }}
                >
                  www.clubroos.be
                </Anchor>
              </Box>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
      <Space h="xl" />
    </Container>
  );
}

export default Roos;