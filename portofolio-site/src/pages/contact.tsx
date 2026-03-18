import { Group, Anchor, Text, Container, Box, SimpleGrid, Stack } from '@mantine/core';
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
      text: 'lorenzomiechielsen@hotmail.com',
      href: 'mailto:lorenzomiechielsen@hotmail.com',
    },
    {
      icon: <IconPhone size={20} />,
      text: '0476 41 85 47', // Spatiëring voor betere leesbaarheid
      href: 'tel:0476418547',
    },
    {
      icon: <IconBrandLinkedin size={20} />,
      text: 'LinkedIn Lorenzo',
      href: 'https://www.linkedin.com/in/lorenzo-miechielsen-82602b27a/',
    },
    {
      icon: <IconLicense size={20} />,
      text: 'Rijbewijs B',
      href: null,
    },
  ];

  return (
    <Box bg="#1c2123" py={{ base: "xl", md: "lg" }} px="md">
      <Container size="lg">
        {/* SimpleGrid zorgt voor 2 kolommen op mobiel, 4 op desktop */}
        <SimpleGrid 
          cols={{ base: 1, xs: 2, md: 4 }} 
          spacing={{ base: "md", md: "xl" }}
        >
          {items.map(({ icon, text, href }) => {
            const content = (
              <Group gap={8} wrap="nowrap">
                <Box c="#e14631" style={{ display: 'flex' }}>{icon}</Box>
                <Text size="sm" c="white" style={{ whiteSpace: 'nowrap' }}>
                  {text}
                </Text>
              </Group>
            );

            return href ? (
              <Anchor
                key={text}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                underline="hover"
                style={{ textDecoration: 'none' }}
              >
                {content}
              </Anchor>
            ) : (
              <Box key={text}>
                {content}
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}