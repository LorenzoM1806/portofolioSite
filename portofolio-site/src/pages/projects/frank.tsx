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
  Group,
  ActionIcon,
  AspectRatio,
  Stack
} from "@mantine/core";
import { IconArrowBigLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function Frank() {
  const navigate = useNavigate();
  return (
    <Container mt="xl" fluid px={{ base: "xs", sm: "md" }}>
      {/* Header met Terug-knop en Titel */}
      <Box mb="lg">
        <Group gap="sm" wrap="nowrap">
          <ActionIcon
            variant="filled"
            color="#e14631" // Direct de kleurcode gebruiken
            size="lg"
            onClick={() => navigate(-1)}
            aria-label="Ga terug"
          >
            <IconArrowBigLeft size={24} />
          </ActionIcon>

          {/* Titel order 2 op mobiel soms iets groot, 
              we laten het staan maar zorgen dat het mee schaalt */}
          <Title order={2} style={{ fontSize: 'calc(1.2rem + 1vw)' }}>
            Frank de Bank
          </Title>
        </Group>

        <Divider mt="xs" size="lg" color="#e14631" />
      </Box>

      <Grid gutter="xl">
        {/* Linker kolom: De Tekst (12 kolommen op mobiel, 7 op desktop) */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack gap="md"> 
            <Text>
              Bij het vak <strong>Project 4.0</strong> heeft onze groep een
              opdracht uitgevoerd voor het bedrijf Rurant. Het team bestond uit
              studenten van <strong> verschillende afstudeerrichtingen</strong>.
            </Text>
            <Text>
              Rurant zet zich via het traject <strong>“Veerkrachtige Dorpen”</strong> in voor
              <strong> leefbare en toekomstbestendige</strong> dorpen...
            </Text>
            <Text>
              Onze opdracht was het ontwikkelen van “Frank de Bank”: een slimme
              zitbank die met behulp van <strong>AI</strong> vragen kan stellen.
            </Text>
            <Text>
              Samen met Maarten Marx heb ik een <strong>dashboard</strong> gerealiseerd...
            </Text>
            <Text>
              Door deel te nemen aan dit project heb ik niet alleen mijn
              technische skills, maar ook mijn soft skills kunnen aanscherpen.
            </Text>
          </Stack>
        </Grid.Col>

        {/* Rechter kolom: Project info (12 kolommen op mobiel, 5 op desktop) */}
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
                  <Text size="sm">Project 4.0</Text>
                </Box>

                <Box>
                  <Text fw={700} size="sm">Gebruikte Technologieën:</Text>
                  <List size="sm" withPadding>
                    <List.Item>Angular</List.Item>
                    <List.Item>Python</List.Item>
                    <List.Item>AI</List.Item>
                    <List.Item>Raspberry Pi</List.Item>
                  </List>
                </Box>

                <Box>
                  <Text fw={700} size="sm">Het Team:</Text>
                  <List size="sm" withPadding>
                    <List.Item>Maarten Marx</List.Item>
                    <List.Item>Filip Kolb</List.Item>
                    <List.Item>Mark Vaikul</List.Item>
                  </List>
                </Box>

                <Box>
                  <Text fw={700} size="sm">Github:</Text>
                  <Anchor
                    href="https://github.com/egealkan/Project4.0"
                    target="_blank"
                    size="xs" // Kleiner op mobiel zodat URL niet afbreekt
                    style={{ wordBreak: 'break-all' }} // Zorgt dat lange links niet uit het kader lopen
                    c="#e14631"
                  >
                    Bekijk Repository
                  </Anchor>
                </Box>
              </Stack>
          </Paper>
        </Grid.Col>
      </Grid>

      {/* Video Sectie: Container breedte responsive maken */}
      <Container size="md" my="xl" px={0}>
        <Title order={4} mb="sm" ta="center">Demo Video</Title>
        <AspectRatio ratio={16 / 9} maw={800} mx="auto">
          <iframe
            src="https://www.youtube.com/embed/_260Fb4Qc2k"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '8px', border: 'none' }}
          />
        </AspectRatio>
      </Container>
    </Container>
  );
}

export default Frank;