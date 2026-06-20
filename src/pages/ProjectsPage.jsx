import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { SectionCard } from "../components/SectionCard";

const projects = [
  {
    title: "Blockchain.PT research",
    description:
      "Investigating controlled mutability in blockchain systems while preserving protocol guarantees and security assumptions.",
  },
  {
    title: "Personal website rebuild",
    description:
      "A React frontend with shared layout, route-driven pages, and a more polished presentation layer.",
  },
  {
    title: "Security and systems prototypes",
    description:
      "Smaller experiments around distributed systems, privacy, and security tooling.",
  },
];

export function ProjectsPage() {
  return (
    <Box component="main" sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <SectionCard
          eyebrow="Projects"
          title="Selected work and experiments."
          description="A few things I’m currently focused on or have been exploring recently."
        >
          <Grid container spacing={2.5} sx={{ mt: 1 }}>
            {projects.map((project) => (
              <Grid item key={project.title} xs={12} md={4}>
                <Box
                  sx={{
                    height: "100%",
                    p: 3,
                    borderRadius: 4,
                    border: "1px solid rgba(148, 163, 184, 0.14)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                  }}
                >
                  <Typography color="#f8fafc" gutterBottom fontWeight={700} variant="h6">
                    {project.title}
                  </Typography>
                  <Typography color="#a8b3c7" sx={{ lineHeight: 1.75 }} variant="body2">
                    {project.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </SectionCard>
      </Container>
    </Box>
  );
}