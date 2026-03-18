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
  Timeline,
  Flex,
} from "@mantine/core";
import profielFoto from "../assets/profiel foto.jpg";
import {
  IconBriefcase,
  IconCertificate,
  IconSchool,
} from "@tabler/icons-react";

function OverMij() {
  return (
    <>
      {/* ====================== OVER MIJ ====================== */}
      <Container mt="xl" fluid px={{ base: 'xs', sm: 'md'}}>
        {/* Header */}
        <Box mb="md">
          <Title order={2}>Over mij</Title>
          <Divider mt="xs" size="lg" color="#e14631" />
        </Box>

        {/* Foto + Introductie */}
        <Stack gap="xl">
          <Flex
            direction={{base: 'column', md: 'row'}}
            gap={'xl'}
            align={{ base: 'center', md: 'flex-start'}}  
          >
          <Box w={{ base: '100%', md: '30%' }}>
            <Center>
              <Image
                radius="lg"
                src={profielFoto}
                alt="Profielfoto Lorenzo"
                w={{ base: 200, sm: 250, md: 250 }}
              />
            </Center>
          </Box>

          <Stack gap="md" style={{ flex: 1 }}>
            <Text ta={{ base: 'center', md: 'left' }}>
              Hallo, mijn naam is Lorenzo. Ik woon in <strong>Beerse</strong> en
              ben afgestudeert in de opleiding
              <strong>
                {" "}
                Toegepaste Informatica – Application Development
              </strong>{" "}
              aan de Thomas More hogeschool.
            </Text>

            <Text>
              Mijn eerste kennismaking met programmeren vond plaats tijdens mijn
              middelbare school. Wat begon als een eenvoudige introductie
              groeide snel uit tot een diepgaande interesse. Die fascinatie
              vormde de aanleiding voor mijn keuze om het Graduaat Programmeren
              te volgen. Op lange termijn is het mijn doel om een eigen
              onderneming op te richten die via technologie bijdraagt aan een
              <strong> veiligere en toekomstgerichte samenleving.</strong>
            </Text>

            <Text>
              Ik ben een <strong>leergierige, analytisch</strong> denkende
              ontwikkelaar. Ik werk graag in <strong>teamverband</strong>, maar
              neem ook <strong>zelfstandig </strong>
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
          </Flex>
        </Stack>
      </Container>

      {/* ====================== CV ====================== */}
      <Container mt="50px" fluid px={{ base: 'xs', sm: 'md' }}>
        <Box mb="md">
          <Title order={3}>CV</Title>
          <Divider mt="xs" size="lg" color="#e14631" />
        </Box>

        <Grid gutter={'xl'}>
          {/* ---------------------- LINKS: Opleidingen & Ervaringen ---------------------- */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack>
              <Title order={4}>Overzicht</Title>

              <Timeline active={10} bulletSize={24} lineWidth={2} color="#e14631">
                {/* --- Opleidingen --- */}
                <Timeline.Item
                  title="Opleidingen"
                />

                <Timeline.Item
                  title="Professionele Bachelor Toegepaste Informatica"
                  bullet={<IconSchool size={16} />}
                >
                  <Text size="sm" c="dimmed">
                    2023 – 2025
                  </Text>
                  <Text size="sm" c="dimmed">
                    Thomas More, Campus Geel
                  </Text>
                  <Text size="sm" c="dimmed">
                    Keuzetraject: Application Development
                  </Text>
                </Timeline.Item>

                <Timeline.Item
                  title="Graduaat Programmeren"
                  bullet={<IconSchool size={16} />}
                >
                  <Text size="sm" c="dimmed">
                    2021 – 2024
                  </Text>
                  <Text size="sm" c="dimmed">
                    Thomas More, Campus Turnhout
                  </Text>
                  <Text size="sm" c="dimmed">
                    Opleiding Programmeren
                  </Text>
                </Timeline.Item>

                <Timeline.Item
                  title="Diploma Secundair Onderwijs"
                  bullet={<IconSchool size={16} />}
                >
                  <Text size="sm" c="dimmed">
                    2019 – 2021
                  </Text>
                  <Text size="sm" c="dimmed">
                    Klein Seminarie – Hoogstraten
                  </Text>
                  <Text size="sm" c="dimmed">
                    Opleiding Boekhouden & Informatica
                  </Text>
                </Timeline.Item>

                {/* --- Werkervaring --- */}
                <Timeline.Item
                  title="Werkervaring"
                />

                <Timeline.Item
                  title="Interim Bijrijder - De Valk Distibution"
                  bullet={<IconBriefcase size={16} />}
                >
                  <Text size="sm" c="dimmed">
                    September 2025
                  </Text>
                  <Text size="sm" c="dimmed">
                    Oktober - December 2025 (2-3 dagen/week)
                  </Text>
                  <Text size="sm" c="dimmed">
                    Wijnegem
                  </Text>
                </Timeline.Item>

                <Timeline.Item
                  title="Stage Ventigrate"
                  bullet={<IconBriefcase size={16} />}
                >
                  <Text size="sm" c="dimmed">
                    2025 (13 weken)
                  </Text>
                  <Text size="sm" c="dimmed">
                    Kontich
                  </Text>
                  <Text size="sm" c="dimmed">
                    Opleiding: Bachelor Toegepaste Informatica
                  </Text>
                </Timeline.Item>

                <Timeline.Item
                  title="Stage Solenco Power"
                  bullet={<IconBriefcase size={16} />}
                >
                  <Text size="sm" c="dimmed">
                    2023 (13 weken)
                  </Text>
                  <Text size="sm" c="dimmed">
                    Lille
                  </Text>
                  <Text size="sm" c="dimmed">
                    Opleiding: Graduaat Programmeren
                  </Text>
                </Timeline.Item>

                {/* --- Certificaten --- */}
                <Timeline.Item
                  title="Certificaten"
                />

                <Timeline.Item
                  title="React Native for Mobile Developers"
                  bullet={<IconCertificate size={16} />}
                >
                  <Text size="sm" c="dimmed">
                    2024 – Udemy
                  </Text>
                </Timeline.Item>

                <Timeline.Item
                  title="Essential Kotlin Programming Course (Android Developers)"
                  bullet={<IconCertificate size={16} />}
                >
                  <Text size="sm" c="dimmed">
                    2024 – Udemy
                  </Text>
                </Timeline.Item>
              </Timeline>
            </Stack>
          </Grid.Col>

          {/* ---------------------- RECHTS: Skills / Ervaring met ---------------------- */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg">
              <Title order={4}>Ervaring met</Title>

              {/* Front-end */}
              <Card shadow="sm" radius="md" withBorder>
                <Card.Section p="md">
                  <Stack gap="xs">
                    <Title order={5}>Front-end</Title>
                    <List spacing="xs" withPadding>
                      <List.Item>
                        <Text size="sm">React</Text>
                        <Progress
                          value={65}
                          w={'200%'}
                          style={{ maxWidth: '200%' }}
                          color="#e14631"
                          size="xs"
                          mt={4}
                        />
                      </List.Item>
                      <List.Item>
                        <Text size="sm">HTML, CSS, Bootstrap, Tailwind, Mantine</Text>
                        <Progress
                          value={65}
                          style={{ maxWidth: '100%' }}
                          w={'100%'}
                          color="#e14631"
                          size="xs"
                          mt={4}
                        />
                      </List.Item>
                      <List.Item>
                        <Text size="sm">Angular</Text>
                        <Progress
                          value={60}
                          style={{ maxWidth: '200%' }}
                          w={'200%'}
                          color="#e14631"
                          size="xs"
                          mt={4}
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
                        <Text size="sm">MySQL, MongoDB, MSSQL</Text>
                        <Progress
                          value={65}
                          style={{ maxWidth: '100%' }}
                          w={'100%'}
                          color="#e14631"
                          size="xs"
                          mt={4}
                        />
                      </List.Item>
                      <List.Item>
                        <Text size="sm">ASP.Net</Text>
                        <Progress
                          value={65}
                          style={{ maxWidth: '200%' }}
                          w={'200%'}
                          color="#e14631"
                          size="xs"
                          mt={4}
                        />
                      </List.Item>
                      <List.Item>
                        <Text size="sm">Java</Text>
                        <Progress
                          value={60}
                          style={{ maxWidth: '200%' }}
                          w={'200%'}
                          color="#e14631"
                          size="xs"
                          mt={4}
                        />
                      </List.Item>
                      <List.Item>
                        <Text size="sm">PHP</Text>
                        <Progress
                          value={55}
                          style={{ maxWidth: '200%' }}
                          w={'200%'}
                          color="#e14631"
                          size="xs"
                          mt={4}
                        />
                      </List.Item>
                      <List.Item>
                        <Text size="sm">Python</Text>
                        <Progress
                          value={55}
                          style={{ maxWidth: '200%' }}
                          w={'200%'}
                          color="#e14631"
                          size="xs"
                          mt={4}
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
                        <Text size="sm">Flutter</Text>
                        <Progress
                          value={55}
                          style={{ maxWidth: '200%' }}
                          w={'200%'}
                          color="#e14631"
                          size="xs"
                          mt={4}
                        />
                      </List.Item>
                      <List.Item>
                        <Text size="sm">Kotlin</Text>
                        <Progress
                          value={30}
                          style={{ maxWidth: '200%' }}
                          w={'200%'}
                          color="#e14631"
                          size="xs"
                          mt={4}
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
                        <Text size="sm">Linux</Text>
                        <Progress
                          value={55}
                          style={{ maxWidth: '200%' }}
                          w={'200%'}
                          color="#e14631"
                          size="xs"
                          mt={4}
                        />
                      </List.Item>
                      <List.Item>
                        <Text size="sm">Qlik</Text>
                        <Progress
                          value={35}
                          style={{ maxWidth: '200%' }}
                          w={'200%'}
                          color="#e14631"
                          size="xs"
                          mt={4}
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
          <Button
            href="/Lorenzo Miechielsen.pdf"
            component="a"
            color="#e14631"
            download
            radius={"md"}
            size="md"
          >
            Download CV
          </Button>
        </Group>
      </Container>
    </>
  );
}

export default OverMij;
