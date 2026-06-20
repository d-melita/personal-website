import { Box, Container, Stack, Typography } from "@mui/material";
import { SectionCard } from "../components/SectionCard";
import { projects } from "../content/siteContent";
import { ProjectCard } from "../components/ProjectCard";
import { useThemeMode } from "../theme/ThemeModeProvider";

export function ProjectsPage() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <Box component="main" sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <SectionCard
          eyebrow="projects"
          title="Selected commits to public memory."
          description="The newest project sits at the top. Each sticky note is a snapshot from the build log."
        >
          <Stack sx={{ mt: 4, position: "relative" }} spacing={4}>
            {/* Timeline line — dashed, fun */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: 14, md: 18 },
                top: 0,
                bottom: 0,
                width: 2,
                background: isDark
                  ? "repeating-linear-gradient(180deg, #06b6d4 0px, #06b6d4 8px, transparent 8px, transparent 16px)"
                  : "repeating-linear-gradient(180deg, rgba(6, 182, 212, 0.5) 0px, rgba(6, 182, 212, 0.5) 8px, transparent 8px, transparent 16px)",
                borderRadius: 999,
                zIndex: 1,
              }}
            />
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                index={index}
                project={project}
              />
            ))}
          </Stack>
        </SectionCard>
      </Container>
    </Box>
  );
}
