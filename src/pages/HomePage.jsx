import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { LinkCard } from "../components/LinkCard";
import { SectionCard } from "../components/SectionCard";

const socialLinks = [
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
];

export function HomePage() {
  return (
    <Box component="main" sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={8}>
            <SectionCard
              eyebrow="Home"
              title="Blockchain researcher and computer science student."
              description="I’m Diogo Melita. I work on blockchain systems, cybersecurity, and distributed systems while building practical tools and experiments along the way."
            >
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3, flexWrap: "wrap" }}>
                <Typography
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 999,
                    border: "1px solid rgba(148, 163, 184, 0.18)",
                    color: "#dbeafe",
                  }}
                  variant="body2"
                >
                  Blockchain Researcher @ INESC-ID
                </Typography>
                <Typography
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 999,
                    border: "1px solid rgba(148, 163, 184, 0.18)",
                    color: "#dbeafe",
                  }}
                  variant="body2"
                >
                  MSc student @ Instituto Superior Técnico
                </Typography>
              </Stack>
            </SectionCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <SectionCard
              eyebrow="Links"
              title="Useful links"
              description="Quick access to my public profiles and contact points."
            >
              <Stack spacing={2.25} sx={{ mt: 3 }}>
                {socialLinks.map((link) => (
                  <LinkCard key={link.title} {...link} />
                ))}
              </Stack>
            </SectionCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}