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
  Image,
  Group,
  ActionIcon,
  Stack,
  SimpleGrid,
} from "@mantine/core";
import { IconArrowBigLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import klassement from "../../assets/projects/php/PHP_liveKlassement.png";
import tijd from "../../assets/projects/php/PHP_tijdsregistratie.png";

// Assets imports blijven hetzelfde...

function Php() {
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
            Ploegentijdrit Roeland
          </Title>
        </Group>
        <Divider mt="xs" size="lg" color="#e14631" />
      </Box>

      <Grid gutter="xl">
        {/* Tekst Kolom */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack gap="md">
            <Text>
              In het tweede semester van het academiejaar 2023-2024 hebben wij
              voor het <strong>vak PHP</strong> een groepsproject uitgewerkt...
            </Text>
            <Text>
              Voor dit project ontwikkelden we een website ter ondersteuning van
              een <strong>jaarlijkse wielerwedstrijd.</strong>
            </Text>
            <Text>
              Teams moesten zich via de website kunnen <strong>registreren.</strong> Na inschrijving 
              ontvingen zij automatisch een <strong>bevestigingsmail</strong> met betalingsinstructies.
            </Text>
            <Text>
              De verantwoordelijke organisator kon via een drag-and-drop interface
              de <strong>startvolgorde</strong> bepalen.
            </Text>
            <Text>
              Tot slot werd een <strong>live-klassementspagina</strong> ontwikkeld. 
              Na afloop kon het <strong>definitieve klassement</strong> als PDF worden verzonden.
            </Text>
          </Stack>
        </Grid.Col>

        {/* Info Kaart Kolom */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Paper shadow="md" withBorder p="lg" radius="md">
            <Title order={3} mb="sm">Project informatie</Title>
            <Divider mb="md" color="#e14631" />
            
            <Stack gap="sm">
              <Box>
                <Text fw={700} size="sm">Opleiding:</Text>
                <Text size="sm">Bachelor Toegepaste Informatica</Text>
              </Box>

              <Box>
                <Text fw={700} size="sm">Vak:</Text>
                <Text size="sm">PHP</Text>
              </Box>

              <Box>
                <Text fw={700} size="sm">Technologieën:</Text>
                <List size="sm" withPadding>
                  <List.Item>PHP</List.Item>
                  <List.Item>Bootstrap</List.Item>
                </List>
              </Box>

              <Box>
                <Text fw={700} size="sm">Het Team:</Text>
                <List size="sm" withPadding>
                  <List.Item>Robbe Verbist</List.Item>
                  <List.Item>Bradley Vandenweyer</List.Item>
                  <List.Item>Illias Safiullien</List.Item>
                </List>
              </Box>

              <Box>
                <Text fw={700} size="sm">Links:</Text>
                <Stack gap={5}>
                  <Anchor
                    href="https://github.com/itfactory-tm/2024-ProjectPHP-503"
                    target="_blank"
                    size="xs"
                    c="#e14631"
                    style={{ wordBreak: 'break-all' }}
                  >
                    GitHub Repository
                  </Anchor>
                  <Anchor
                    href="https://roland.smo2024.be/"
                    target="_blank"
                    size="xs"
                    c="#e14631"
                    style={{ wordBreak: 'break-all' }}
                  >
                    Live Website
                  </Anchor>
                </Stack>
              </Box>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>

      {/* Afbeeldingen Sectie - Responsive Grid */}
      <Box my="xl">
        <Title order={4} mb="md">Screenshots</Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Paper withBorder p="xs" radius="md">
            <Image 
                src={klassement} 
                alt="Live klassement" 
                radius="md"
            />
            <Text size="xs" ta="center" mt="xs" c="dimmed">Live klassement interface</Text>
          </Paper>
          <Paper withBorder p="xs" radius="md">
            <Image 
                src={tijd} 
                alt="Tijdsregistratie" 
                radius="md"
            />
            <Text size="xs" ta="center" mt="xs" c="dimmed">Tijdsregistratie module</Text>
          </Paper>
        </SimpleGrid>
      </Box>
      
      <Space h="xl" />
    </Container>
  );
}

export default Php;