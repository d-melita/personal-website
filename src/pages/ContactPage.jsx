import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { PageHeader } from "../components/PageHeader";
import { contactLinks } from "../content/siteContent";
import { useThemeMode } from "../theme/ThemeModeProvider";

const getLinkIcon = (title) => {
  switch (title.toLowerCase()) {
    case "github":
      return <GitHubIcon sx={{ fontSize: 16 }} />;
    case "linkedin":
      return <LinkedInIcon sx={{ fontSize: 16 }} />;
    default:
      return <EmailOutlinedIcon sx={{ fontSize: 16 }} />;
  }
};

export function ContactPage() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <Box component="main" sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <PageHeader
          eyebrow="contact"
          title="ping(diogo)"
          description="Preferred protocol: email. Fallback: carrier pigeon. Use the links below to reach me, browse my work, or open my CV."
        />

        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ mt: 2, maxWidth: 960, mx: "auto" }}
          alignItems="stretch"
        >
          {/* Left: CV Card (Terminal-style) */}
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-end" } }}
          >
            <Box
              sx={{
                flexGrow: 1,
                maxWidth: 400,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: isDark
                  ? "rgba(10, 14, 26, 0.65)"
                  : "rgba(248, 250, 252, 0.85)",
                backdropFilter: "blur(12px)",
                overflow: "hidden",
                boxShadow: isDark
                  ? "0 12px 32px rgba(0, 0, 0, 0.2)"
                  : "0 12px 32px rgba(0, 0, 0, 0.04)",
              }}
            >
              {/* Left Title bar */}
              <Box
                sx={{
                  px: 1.75,
                  py: 1.25,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  backgroundColor: isDark
                    ? "rgba(15, 23, 42, 0.7)"
                    : "rgba(241, 245, 249, 0.9)",
                }}
              >
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#ef4444" }} />
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#eab308" }} />
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#22c55e" }} />
                <Typography
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "text.secondary",
                    opacity: 0.6,
                    ml: 0.5,
                  }}
                >
                  ~/curriculum-vitae
                </Typography>
              </Box>

              {/* Left Body */}
              <Box
                sx={{
                  p: 3,
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Stack spacing={2}>
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <Box component="span" sx={{ color: "primary.main" }}>$</Box> cat cv_info.txt
                  </Typography>
                  <Typography
                    color="text.secondary"
                    variant="body2"
                    sx={{
                      lineHeight: 1.7,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {"Looking for a comprehensive\nsummary of my engineering\nexperience, projects, and skills?\n\nGrab the latest version of my CV."}
                  </Typography>
                </Stack>
                
                <Button
                  component="a"
                  href="https://cv.melita.pt"
                  rel="noopener noreferrer"
                  target="_blank"
                  variant="contained"
                  disableElevation
                  sx={{
                    mt: 4,
                    borderRadius: "8px",
                    py: 1.25,
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    color: isDark ? "#0a0e1a" : "#ffffff",
                    background: "linear-gradient(135deg, #10b981, #06b6d4)",
                    transition: "all 200ms ease",
                    "&:hover": {
                      background: "linear-gradient(135deg, #059669, #0d9488)",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  $ open cv.pdf ↗
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right: Social Media Connections Card (Terminal-style) */}
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}
          >
            <Box
              sx={{
                flexGrow: 1,
                maxWidth: 400,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: isDark
                  ? "rgba(10, 14, 26, 0.65)"
                  : "rgba(248, 250, 252, 0.85)",
                backdropFilter: "blur(12px)",
                overflow: "hidden",
                boxShadow: isDark
                  ? "0 12px 32px rgba(0, 0, 0, 0.2)"
                  : "0 12px 32px rgba(0, 0, 0, 0.04)",
              }}
            >
              {/* Right Title bar */}
              <Box
                sx={{
                  px: 1.75,
                  py: 1.25,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  backgroundColor: isDark
                    ? "rgba(15, 23, 42, 0.7)"
                    : "rgba(241, 245, 249, 0.9)",
                }}
              >
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#ef4444" }} />
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#eab308" }} />
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#22c55e" }} />
                <Typography
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "text.secondary",
                    opacity: 0.6,
                    ml: 0.5,
                  }}
                >
                  ~/connections
                </Typography>
              </Box>

              {/* Right Body */}
              <Box sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)",
                    mb: 2,
                  }}
                >
                  <Box component="span" sx={{ color: "primary.main" }}>$</Box> ls -la connections/
                </Typography>

                <Stack spacing={1.5} sx={{ flexGrow: 1, justifyContent: "center" }}>
                  {contactLinks.map((link) => (
                    <Button
                      key={link.title}
                      component="a"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="text"
                      startIcon={getLinkIcon(link.title)}
                      endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 10, opacity: 0.5 }} />}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontFamily: "var(--font-mono)",
                        textTransform: "none",
                        color: "text.secondary",
                        py: 1.5,
                        px: 2.5,
                        borderRadius: "8px",
                        border: "1px solid",
                        borderColor: "divider",
                        backgroundColor: isDark
                          ? "rgba(15, 23, 42, 0.2)"
                          : "rgba(255, 255, 255, 0.3)",
                        transition: "all 150ms ease",
                        "&:hover": {
                          color: "primary.main",
                          borderColor: "primary.main",
                          backgroundColor: isDark
                            ? "rgba(16, 185, 129, 0.06)"
                            : "rgba(16, 185, 129, 0.04)",
                        },
                      }}
                    >
                      <Box sx={{ textAlign: "left", flex: 1, ml: 0.5 }}>
                        <Typography
                          sx={{
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            fontFamily: "var(--font-mono)",
                            color: "text.primary",
                          }}
                        >
                          {link.title.toLowerCase()}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.68rem",
                            color: "text.secondary",
                            mt: 0.25,
                            lineHeight: 1.3,
                          }}
                        >
                          {link.description}
                        </Typography>
                      </Box>
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
