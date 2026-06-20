import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { LinkCard } from "../components/LinkCard";
import { SectionCard } from "../components/SectionCard";
import { contactLinks } from "../content/siteContent";
import { useThemeMode } from "../theme/ThemeModeProvider";

export function ContactPage() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <Box component="main" sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <SectionCard
          eyebrow="contact"
          title="ping(diogo)"
          description="Preferred protocol: email. Fallback: carrier pigeon. Use the links below to reach me, browse my work, or open my CV."
        >
          <Stack spacing={3} sx={{ mt: 3 }}>
            <Button
              component="a"
              href="https://cv.melita.pt"
              rel="noopener noreferrer"
              target="_blank"
              variant="contained"
              disableElevation
              sx={{
                alignSelf: "flex-start",
                borderRadius: "12px",
                px: 3.5,
                py: 1.5,
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: isDark ? "#0a0e1a" : "#ffffff",
                background:
                  "linear-gradient(135deg, #06b6d4, #a78bfa)",
                border: "1px solid rgba(6, 182, 212, 0.3)",
                boxShadow: "0 8px 24px rgba(6, 182, 212, 0.2)",
                transition: "all 250ms ease",
                "&:hover": {
                  boxShadow: "0 12px 32px rgba(6, 182, 212, 0.35)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {"view_cv()"}
            </Button>

            <Typography
              sx={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                opacity: 0.4,
              }}
              color="text.secondary"
            >
              {"// other endpoints"}
            </Typography>

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
