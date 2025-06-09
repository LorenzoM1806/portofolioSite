import { Group, Anchor, Text, Container, Box } from '@mantine/core';
import {
  IconMail,
  IconPhone,
  IconBrandLinkedin,
  IconLicense,
} from '@tabler/icons-react';

export default function ContactBar() {
  const items = [
    {
      icon: <IconMail size={20} />,
      text: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: <IconPhone size={20} />,
      text: '+31 6 1234 5678',
      href: 'tel:+1234567890',
    },
    {
      icon: <IconBrandLinkedin size={20} />,
      text: 'linkedin.com/in/yourprofile',
      href: 'https://www.linkedin.com/in/yourprofile',
    },
    {
      icon: <IconLicense size={20} />,
      text: 'Rijbewijs B',
      href: null,
    },
  ];

  return (
    <Box bg="#1c2123" py="xl" px="md">
      <Container size="lg">
        <Group justify="space-around" wrap="wrap">
          {items.map(({ icon, text, href }) =>
            href ? (
              <Anchor
                key={text}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                {icon}
                <Text size="sm">{text}</Text>
              </Anchor>
            ) : (
              <Group key={text} gap={8} style={{ color: 'white' }}>
                {icon}
                <Text size="sm">{text}</Text>
              </Group>
            )
          )}
        </Group>
      </Container>
    </Box>
  );
}
