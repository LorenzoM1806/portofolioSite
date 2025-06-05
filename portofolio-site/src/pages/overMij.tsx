import {
  Container,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  Title,
  Box,
  Grid,
  List,
  Progress,
  Button,
  Anchor,
  Card,
  Center,
} from "@mantine/core";
import profielFoto from "../assets/profiel foto.jpg";

function OverMij() {
  return (
    <>
      {/* ====================== OVER MIJ ====================== */}
      <Container mt="xl" fluid>
        {/* Header */}
        <Box mb="md">
          <Title order={2}>Over mij</Title>
          <Divider mt="xs" size="lg" color="#e14631" />
        </Box>

        {/* Foto + Introductie */}
        <Group gap="xl">
          <Box w={"40%"}>
            <Center>
              <Image
                radius="lg"
                src={profielFoto}
                alt="Profielfoto Lorenzo"
                w={300}
              />
            </Center>
          </Box>

          <Stack gap="md" style={{ flex: 1 }}>
            <Text>
              Hallo, mijn naam is Lorenzo. Ik woon in Beerse en ben student
              Toegepaste Informatica – Application Development aan de Thomas
              More hogeschool. Momenteel zit ik in het laatste jaar van mijn
              opleiding.
            </Text>

            <Text>
              Mijn eerste kennismaking met programmeren vond plaats tijdens mijn
              middelbare school. Wat begon als een eenvoudige introductie
              groeide snel uit tot een diepgaande interesse. Die fascinatie
              vormde de aanleiding voor mijn keuze om het Graduaat Programmeren
              te volgen. Op lange termijn is het mijn doel om een eigen
              onderneming op te richten die via technologie bijdraagt aan een
              veiligere en toekomstgerichte samenleving.
            </Text>

            <Text>
              Ik ben een leergierige, analytisch denkende ontwikkelaar. Ik werk
              graag in teamverband, maar neem ook zelfstandig
              verantwoordelijkheid voor mijn werk. Wat mij het meeste
              aanspreekt, is het bouwen van praktische toepassingen die echt
              gebruikt worden.
            </Text>

            <Text>
              Tijdens mijn stage kreeg ik de kans om mijn vaardigheden verder in
              de praktijk toe te passen. Meer over deze ervaring lees je op de{" "}
              <strong>Stage</strong>-pagina.
            </Text>

            <Text fw={700}>Contactgegevens:</Text>
            <List spacing="xs" listStyleType="disc" pl="lg">
              <List.Item>
                Email:{" "}
                <Anchor
                  href="mailto:lorenzomiechielsen@hotmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  c={"#e14631"}
                >
                  lorenzomiechielsen@hotmail.com
                </Anchor>
              </List.Item>
              <List.Item>
                LinkedIn:{" "}
                <Anchor
                  href="https://www.linkedin.com/in/lorenzo-miechielsen-82602b27a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  c={"#e14631"}
                >
                  Lorenzo Miechielsen
                </Anchor>
              </List.Item>
              <List.Item>
                GitHub:{" "}
                <Anchor
                  href="https://github.com/LorenzoM1806"
                  target="_blank"
                  rel="noopener noreferrer"
                  c={"#e14631"}
                >
                  https://github.com/LorenzoM1806
                </Anchor>
              </List.Item>
            </List>
          </Stack>
        </Group>
      </Container>

      {/* ====================== CV ====================== */}
      <Container mt="xl" fluid>
        <Box mb="md">
          <Title order={3}>CV</Title>
          <Divider mt="xs" size="lg" color="#e14631" />
        </Box>

        <Grid>
          {/* ---------------------- LINKS: Opleidingen & Ervaringen ---------------------- */}
          <Grid.Col span={6}>
            <Stack gap="lg">
              {/* OPLEIDINGEN */}
              <Title order={4}>Opleidingen</Title>

              <Card shadow="sm" radius="md" withBorder>
                <Card.Section p="md">
                  <Stack gap="xs">
                    <Title order={5}>
                      Professionele Bachelor Toegepaste Informatica
                    </Title>
                    <Text c="dimmed">2023 – Heden</Text>
                    <Text c="dimmed">Thomas More, Campus Geel</Text>
                    <Text c="dimmed">
                      Keuzetraject: Application Development
                    </Text>
                  </Stack>
                </Card.Section>
              </Card>

              <Card shadow="sm" radius="md" withBorder>
                <Card.Section p="md">
                  <Stack gap="xs">
                    <Title order={5}>Graduaat Programmeren</Title>
                    <Text c="dimmed">2021 – 2024</Text>
                    <Text c="dimmed">Thomas More, Campus Turnhout</Text>
                    <Text c="dimmed">Opleiding Programmeren</Text>
                  </Stack>
                </Card.Section>
              </Card>

              <Card shadow="sm" radius="md" withBorder>
                <Card.Section p="md">
                  <Stack gap="xs">
                    <Title order={5}>Diploma Secundair Onderwijs</Title>
                    <Text c="dimmed">2019 – 2021</Text>
                    <Text c="dimmed">Klein Seminarie – Hoogstraten</Text>
                    <Text c="dimmed">
                      Opleiding Boekhouden &amp; Informatica
                    </Text>
                  </Stack>
                </Card.Section>
              </Card>

              <Divider my="xl" />

              {/* ERVARINGEN */}
              <Title order={4}>Ervaringen</Title>

              <Card shadow="sm" radius="md" withBorder>
                <Card.Section p="md">
                  <Stack gap="xs">
                    <Title order={5}>Stage Ventigrate</Title>
                    <Text c="dimmed">2025 (13 weken)</Text>
                    <Text c="dimmed">Kontich</Text>
                    <Text c="dimmed">
                      Opleiding: Bachelor Toegepaste Informatica
                    </Text>
                  </Stack>
                </Card.Section>
              </Card>

              <Card shadow="sm" radius="md" withBorder>
                <Card.Section p="md">
                  <Stack gap="xs">
                    <Title order={5}>Stage Solenco Power</Title>
                    <Text c="dimmed">2023 (13 weken)</Text>
                    <Text c="dimmed">Lille</Text>
                    <Text c="dimmed">Opleiding: Graduaat Programmeren</Text>
                  </Stack>
                </Card.Section>
              </Card>
            </Stack>
          </Grid.Col>

          {/* ---------------------- RECHTS: Skills / Ervaring met ---------------------- */}
          <Grid.Col span={6}>
            <Stack gap="lg">
              <Title order={4}>Ervaring met</Title>

              {/* Front-end */}
              <Card shadow="sm" radius="md" withBorder>
                <Card.Section p="md">
                  <Stack gap="xs">
                    <Title order={5}>Front-end</Title>
                    <List spacing="xs" withPadding>
                      <List.Item>
                        React{" "}
                        <Progress
                          value={65}
                          w={350}
                          style={{ maxWidth: 350 }}
                          color="#e14631"
                          size="xs"
                        />
                      </List.Item>
                      <List.Item>
                        HTML, CSS, Bootstrap, Tailwind, Mantine{" "}
                        <Progress
                          value={65}
                          style={{ maxWidth: 350 }}
                          w={350}
                          color="#e14631"
                          size="xs"
                        />
                      </List.Item>
                      <List.Item>
                        Angular{" "}
                        <Progress
                          value={60}
                          style={{ maxWidth: 350 }}
                          w={350}
                          color="#e14631"
                          size="xs"
                        />
                      </List.Item>
                    </List>
                  </Stack>
                </Card.Section>
              </Card>

              {/* Back-end & Databases */}
              <Card shadow="sm" radius="md" withBorder>
                <Card.Section p="md">
                  <Stack gap="xs">
                    <Title order={5}>Back-end &amp; Databases</Title>
                    <List spacing="xs" withPadding>
                      <List.Item>
                        MySQL, MongoDB, MSSQL{" "}
                        <Progress
                          value={65}
                          style={{ maxWidth: 350 }}
                          w={350}
                          color="#e14631"
                          size="xs"
                        />
                      </List.Item>
                      <List.Item>
                        ASP.Net{" "}
                        <Progress
                          value={65}
                          style={{ maxWidth: 350 }}
                          w={350}
                          color="#e14631"
                          size="xs"
                        />
                      </List.Item>
                      <List.Item>
                        Java{" "}
                        <Progress
                          value={60}
                          style={{ maxWidth: 350 }}
                          w={350}
                          color="#e14631"
                          size="xs"
                        />
                      </List.Item>
                      <List.Item>
                        PHP{" "}
                        <Progress
                          value={55}
                          style={{ maxWidth: 350 }}
                          w={350}
                          color="#e14631"
                          size="xs"
                        />
                      </List.Item>
                      <List.Item>
                        Python{" "}
                        <Progress
                          value={55}
                          style={{ maxWidth: 350 }}
                          w={350}
                          color="#e14631"
                          size="xs"
                        />
                      </List.Item>
                    </List>
                  </Stack>
                </Card.Section>
              </Card>

              {/* Mobile & Hybrid */}
              <Card shadow="sm" radius="md" withBorder>
                <Card.Section p="md">
                  <Stack gap="xs">
                    <Title order={5}>Mobile &amp; Hybrid</Title>
                    <List spacing="xs" withPadding>
                      <List.Item>
                        Flutter{" "}
                        <Progress
                          value={55}
                          style={{ maxWidth: 350 }}
                          w={350}
                          color="#e14631"
                          size="xs"
                        />
                      </List.Item>
                      <List.Item>
                        Kotlin{" "}
                        <Progress
                          value={30}
                          style={{ maxWidth: 350 }}
                          w={350}
                          color="#e14631"
                          size="xs"
                        />
                      </List.Item>
                    </List>
                  </Stack>
                </Card.Section>
              </Card>

              {/* Overige Tools & Systems */}
              <Card shadow="sm" radius="md" withBorder>
                <Card.Section p="md">
                  <Stack gap="xs">
                    <Title order={5}>Overige Tools &amp; Systems</Title>
                    <List spacing="xs" withPadding>
                      <List.Item>
                        Linux{" "}
                        <Progress
                          value={55}
                          style={{ maxWidth: 350 }}
                          w={350}
                          color="#e14631"
                          size="xs"
                        />
                      </List.Item>
                      <List.Item>
                        Qlik{" "}
                        <Progress
                          value={35}
                          style={{ maxWidth: 350 }}
                          w={350}
                          color="#e14631"
                          size="xs"
                        />
                      </List.Item>
                    </List>
                  </Stack>
                </Card.Section>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Download CV-knop */}
        <Group mt="xl">
          <Button color="#e14631">Download CV</Button>
        </Group>
      </Container>
    </>
  );
}

export default OverMij;
