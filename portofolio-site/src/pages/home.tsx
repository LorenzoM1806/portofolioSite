import {
  Button,
  Container,
  Stack,
  Text,
  Title,
  Group,
  Anchor,
} from "@mantine/core";

function Home() {

  return (
    <Container
      fluid
      px={"lg"}
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack align="center" justify="center" gap="lg" ta="center">
        <Title order={1}>Portfolio – Lorenzo Miechielsen</Title>

        <Text size="lg">
          Welkom op mijn professionele portfolio, het sluitstuk van mijn
          opleiding Toegepaste Informatica – Application Development. Deze site
          geeft een overzicht van de vaardigheden en kennis die ik heb
          verworven, geïllustreerd met projecten, stages en praktische
          toepassingen.
        </Text>

        <Text size="md">
          Mijn doel is om u als IT-professional een helder beeld te geven van
          mijn capaciteiten, groeitraject en ambities binnen de
          softwareontwikkeling.
        </Text>

        <Group mt="md">
          <Anchor
            href="#over-mij"
            underline="never"
            variant="text"
            c="#e14631"
          >
            Over Mij
          </Anchor>
          <Anchor
            href="#stage"
            underline="never"
            variant="text"
            c="#e14631"
          >
            Stage
          </Anchor>
          <Anchor
            href="#projecten"
            underline="never"
            variant="text"
            c="#e14631"
          >
            Projecten
          </Anchor>
        </Group>
      </Stack>
    </Container>
  );
}

export default Home;
