import {
  Button,
  Container,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Container
        size={"xl"}
        mih={"100vh"}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack align="center" justify="center">
          <Title order={1} mb={"sm"}>
            {" "}
            Welkom op mijn portofolio
          </Title>

          <Text size={"lg"} mb={"lg"}>
            Doorheen dit portofolio zal u mijn vaardigheden kunnen lezen die ik
            tijdens mijn opleiding Toegepaste informatica - Application
            Development heb geleerd. Ook zal u kunnen lezen over mijn meest
            recente stage die ik heb mogen lopen, een aantal projecten die zijn
            gerealizeerd en wat meer over mezelf.
          </Text>

          <Button size="md" onClick={() => navigate("/over-mij")} bg={"#e14631"}>
            Over Mij
          </Button>
        </Stack>
      </Container>
    </>
  );
}

export default Home;
