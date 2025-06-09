// src/pages/Layout.tsx
import React from "react";
import {
  AppShell,
  Burger,
  Text,
  useMantineTheme,
  ActionIcon,
  Group,
  Avatar,
  Stack,
  Center,
  Anchor,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconHome,
  IconUser,
  IconBuilding,
  IconPresentation,
} from "@tabler/icons-react";
import foto from "../assets/avatar.jpg";
import { useActiveSection } from "../pages/useActiveSection" // adjust the path

/**
 * Layout met een zijbalk die:
 * - via <Anchor href="#home"> … </Anchor> hash‐scrollt naar de secties
 * - inspeelt op de huidige locatie.hash om icoon‐kleur te veranderen
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const sectionIds = ["home", "over-mij", "stage", "projecten", "contact"];
  const activeHash = useActiveSection(sectionIds);

  // Definieer de navigation items inclusief de anchor‐href
  const navItems = [
    { label: "Home", href: "#home", Icon: IconHome },
    { label: "Over Mij", href: "#over-mij", Icon: IconUser },
    { label: "Stage", href: "#stage", Icon: IconBuilding },
    { label: "Projecten", href: "#projecten", Icon: IconPresentation },
    { label: "Contact", href: "#contact", Icon: IconMail },
  ];

  return (
    <AppShell
      padding="lg"
      navbar={{
        width: { sm: 150, lg: 250 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      styles={{
        navbar: {
          backgroundColor: "#1c2123",
        },
        main: {
          width: "100%",
        },
      }}
    >
      {/* ── Navbar / Zijbalk ───────────────────────────────────────────────────── */}
      <AppShell.Navbar p="md">
        {/* Top‐sectie: burger-menu + avatar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: theme.spacing.md,
          }}
        >
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            color={theme.colors.gray[6]}
          />
          <Stack align="center">
            <Avatar src={foto} w={"auto"} h={80} />
            <Text fw={700} color="white">
              Lorenzo Miechielsen
            </Text>
          </Stack>
        </div>

        {/* Links naar secties: active wordt true als hash === href */}
        <AppShell.Section grow>
          {navItems.map(({ label, href, Icon }) => {
            const isActive = activeHash === href; // true of false

            return (
              <Anchor
                key={href}
                href={href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.sm,
                  color: isActive ? "#fff" : theme.colors.gray[4],
                  backgroundColor: isActive ? "#e14631" : "transparent",
                  textDecoration: "none",
                  marginBottom: theme.spacing.xs,
                }}
                onClick={() => {
                  // op mobiel: sluit burger‐menu
                  if (opened) toggle();
                }}
              >
                {/* Kleur van het icoon aanpassen: rood als actief, anders grijs */}
                <Icon
                  size={20}
                  color={isActive ? "white" : theme.colors.gray[4]}
                />
                <Text ml="sm" fw={isActive ? 600 : 400}>
                  {label}
                </Text>
              </Anchor>
            );
          })}
        </AppShell.Section>

        {/* Social‐iconrij onderaan */}
        <Center>
          <Group gap="xl" align="center">
            <Anchor
              href="https://github.com/LorenzoM1806"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionIcon variant="subtle" color="#e14631" size="xl">
                <IconBrandGithub size="xl" />
              </ActionIcon>
            </Anchor>
            <Anchor
              href="https://www.linkedin.com/in/lorenzo-miechielsen-82602b27a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionIcon variant="subtle" color="#e14631" size="xl">
                <IconBrandLinkedin size="xl" />
              </ActionIcon>
            </Anchor>
            <Anchor href="mailto:lorenzomiechielsen@hotmail.com">
              <ActionIcon variant="subtle" color="#e14631" size="xl">
                <IconMail size="xl" />
              </ActionIcon>
            </Anchor>
          </Group>
        </Center>
      </AppShell.Navbar>

      {/* ── Main content ─────────────────────────────────────────────────────── */}
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
