import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { LinkCard } from "../components/LinkCard";
import { SectionCard } from "../components/SectionCard";

const contactLinks = [
  {
    title: "GitHub",
    description: "Code, experiments, and repositories.",
    href: "https://github.com/d-melita",
    icon: "/assets/github.svg",
  },
  {
    title: "LinkedIn",
    description: "Professional profile and updates.",
    href: "https://www.linkedin.com/in/diogo-melita/",
    icon: "/assets/linkedin.svg",
  },
  {
    title: "Email",
    description: "Direct contact for collaborations or questions.",
    href: "mailto:diogo@melita.pt",
    icon: "/assets/icon.svg",
    external: false,
  },
];

export function ContactPage() {
  return (
    <Box component="main" sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <SectionCard
          eyebrow="Contact"
          title="Useful links and contact details."
          description="Use the links below to reach me, browse my work, or open my CV."
        >
          <Stack spacing={3} sx={{ mt: 3 }}>
            <Button
              component="a"
              href="https://cv.melita.pt"
              rel="noopener noreferrer"
              target="_blank"
              variant="contained"
              sx={{
                alignSelf: "flex-start",
                borderRadius: 999,
                px: 3,
                py: 1.3,
                color: "#06111f",
                fontWeight: 800,
                background: "linear-gradient(135deg, #f8fafc, #93c5fd)",
              }}
            >
              View CV
            </Button>

            <Stack spacing={2}>
              {contactLinks.map((link) => (
                <LinkCard key={link.title} {...link} />
              ))}
            </Stack>
          </Stack>
        </SectionCard>
      </Container>
    </Box>
  );
}