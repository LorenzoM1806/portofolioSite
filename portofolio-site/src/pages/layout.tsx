import { 
  AppShell, 
  Burger, 
  NavLink, 
  Text, 
  useMantineTheme, 
  rem, 
  ActionIcon,
  Group,
  Avatar,
  Stack,
  Center,
  Anchor
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useLocation, Link } from 'react-router-dom';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconUser,
  IconBuilding,
  IconPresentation,
  IconMail
} from '@tabler/icons-react';
import foto from "../assets/avatar.jpg"

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const { pathname } = useLocation();

  const navItems = [
    { label: 'Home', path: '/', icon: <IconHome/> },
    { label: 'Over Mij', path: '/over-mij', icon: <IconUser/> },
    { label: 'Stage', path: '/stage', icon: <IconBuilding/> },
    { label: 'Realisaties', path: '/realisaties', icon: <IconPresentation/> },
  ];

  return (
    <AppShell
      padding="lg"
      navbar={{
        width: { sm: 150, lg: 250 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      // Removing the header prop entirely
      styles={{
        navbar: {
          backgroundColor: '#1c2123',
        },
      }}
    >
      <AppShell.Navbar p="md">
        {/* Top section in navbar: Personal branding and burger */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
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
          <Stack align='center'>
            <Avatar src={foto} w={'auto'} h={150}/>
            <Text fw={700} color="white" ml="sm">
              Lorenzo Miechielsen
            </Text>
          </Stack>
          
        </div>

        <AppShell.Section grow>
          {navItems.map(({ label, path, icon }) => (
            <NavLink
              key={path}
              component={Link}
              to={path}
              label={label}
              leftSection={icon}
              active={pathname === path}
              styles={(theme, { active }) => ({
                root: {
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.sm,
                  color: active ? '#fff' : theme.colors.gray[4],
                  backgroundColor: active ? '#e14631' : 'transparent',
                  '&:hover': {
                    backgroundColor: active ? '#e14631' : '#2a2f31',
                  },
                },
                label: {
                  fontWeight: active ? 600 : 400,
                },
              })}
            />
          ))}
        </AppShell.Section>
        <Center>
        <div>
          <Group gap="xl" align="center">
      {/* GitHub-link */}
      <Anchor href="https://github.com/LorenzoM1806" target="_blank" rel="noopener noreferrer">
        <ActionIcon variant="subtle" color="#e14631" size="xl">
          <IconBrandGithub size="xl" />
        </ActionIcon>
      </Anchor>

      {/* LinkedIn-link */}
      <Anchor href="https://www.linkedin.com/in/lorenzo-miechielsen-82602b27a/" target="_blank" rel="noopener noreferrer">
        <ActionIcon variant="subtle" color="#e14631" size="xl">
          <IconBrandLinkedin size="xl" />
        </ActionIcon>
      </Anchor>

      {/* E-mail-link */}
      <Anchor href="mailto:lorenzomiechielsen@hotmail.com">
        <ActionIcon variant="subtle" color="#e14631" size="xl">
          <IconMail size="xl" />
        </ActionIcon>
      </Anchor>
    </Group>
        </div>
        </Center>
      </AppShell.Navbar>

      <AppShell.Main w={"100%"}>{children}</AppShell.Main>
    </AppShell>
  );
}