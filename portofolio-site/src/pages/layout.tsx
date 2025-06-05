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
  Stack
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

        <div>
          <Group gap="xs">
            <ActionIcon variant="filled" color="#e14631">
              <IconBrandGithub />
            </ActionIcon>
            <ActionIcon variant="filled" color="#e14631">
              <IconBrandLinkedin />
            </ActionIcon>
            <ActionIcon variant="filled" color="#e14631">
              <IconMail/>
            </ActionIcon>
          </Group>
        </div>
      </AppShell.Navbar>

      <AppShell.Main w={"100%"}>{children}</AppShell.Main>
    </AppShell>
  );
}