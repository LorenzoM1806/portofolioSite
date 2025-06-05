import { Container, Divider, Group, Image, Stack, Text, Title, Box, Grid, List, Progress, Button } from "@mantine/core";
import profielFoto from "../assets/profiel foto.jpg";

function OverMij() {
    return (
        <>
            <Container mt="xl">
                {/* Header met titel en korte divider van titel-lengte */}
                <Box mb="lg">
                    <Title order={2}>Over mij</Title>
                    <Divider
                        mt="xs"
                        size={'lg'}
                        color="#e14631"
                    />
                </Box>

                {/* Foto en tekst naast elkaar */}
                <Group align="flex-start" gap={'xl'}>
                    <Image
                        radius="lg"
                        src={profielFoto}
                        h={'auto'}
                        w={300}
                        alt="Profielfoto Lorenzo"
                    />
                    <Stack gap={'md'} style={{ flex: 1 }}>
                        <Text>
                            Hallo, mijn naam is Lorenzo. Ik woon in Beerse en ben student Toegepaste Informatica met afstudeerrichting Application Development op Thomas More.
                        </Text>
                        <Text>
                            Hier kun je meer lezen over mijn achtergrond, projecten en vaardigheden.
                        </Text>
                    </Stack>
                </Group>
            </Container>

            <Container mt="xl">
                <Box mb="lg">
                    <Title order={2}>CV</Title>
                    <Divider
                        mt="xs"
                        size={'lg'}
                        color="#e14631"
                    />
                </Box>

                <Grid>
                    <Grid.Col span={6}>
                        <Title order={2}>Opleidingen</Title>
                        <Title order={4}>Profesionele Bachlor Toegepaste Informatica</Title>
                        <List>
                            <List.Item>2023-Heden</List.Item>
                            <List.Item>Thomas More, Campus Geel</List.Item>
                            <List.Item>Keuzetraject: Application Development</List.Item>
                        </List>
                        <Title order={4}>Graduaat Programmeren</Title>
                        <List>
                            <List.Item>2021-2024</List.Item>
                            <List.Item>Thomas More, Campus Turnhout</List.Item>
                            <List.Item>Opleiding programmeren</List.Item>
                        </List>
                        <Title order={4}>Diploma Secundair Onderwijs</Title>
                        <List>
                            <List.Item>2019 - 2021</List.Item>
                            <List.Item>Klein Seminarie - Hoogstraten</List.Item>
                            <List.Item>Opleiding Boekhouden Informatica</List.Item>
                        </List>
                        <Title order={2}>Ervaringen</Title>
                        <Title order={4}>Stage Ventigrate</Title>
                        <List>
                            <List.Item>2025 gedurende 13 weken</List.Item>
                            <List.Item>Kontich</List.Item>
                            <List.Item>Opleiding: Bachlot Toegepaste Informatica</List.Item>
                        </List>
                        <Title order={4}>Stage Solenco Power</Title>
                        <List>
                            <List.Item>2023 gedurende 13 weken</List.Item>
                            <List.Item>Lille</List.Item>
                            <List.Item>Opleiding: Graduaat Programmeren</List.Item>
                        </List>
                    </Grid.Col>

                    <Grid.Col span={6}>
                        <Title order={2}>Ervaring met</Title>
                        <List>
                            <List.Item>React <Progress value={65} w={350} color="#e14631"/></List.Item>
                            <List.Item>MySQL, MongoDB, MSSQL <Progress value={65} w={350} color="#e14631"/></List.Item>
                            <List.Item>HTML, CSS, Bootsstrap, Tailwind, Mantine <Progress value={65} w={350} color="#e14631"/></List.Item>
                            <List.Item>ASP.Net <Progress value={65} w={350} color="#e14631"/></List.Item>
                            <List.Item>Angular <Progress value={60} w={350} color="#e14631"/></List.Item>
                            <List.Item>Java <Progress value={60} w={350} color="#e14631"/></List.Item>
                            <List.Item>Linux <Progress value={55} w={350} color="#e14631"/></List.Item>
                            <List.Item>Flutter <Progress value={55} w={350} color="#e14631"/></List.Item>
                            <List.Item>Python <Progress value={55} w={350} color="#e14631"/></List.Item>
                            <List.Item>PhP <Progress value={55} w={350} color="#e14631"/></List.Item>
                            <List.Item>Qlik <Progress value={35} w={350} color="#e14631"/></List.Item>
                            <List.Item>Kotlin <Progress value={30} w={350} color="#e14631"/></List.Item>
                        </List>
                    </Grid.Col>
                </Grid>

                <Button color="#e14631">Download CV</Button>
                
            </Container>
        </>
    )
}

export default OverMij;