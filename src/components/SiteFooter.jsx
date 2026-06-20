import { Box, Container, Link as MuiLink, Stack, Typography } from "@mui/material";
import { quickLinks, footerTaglines } from "../content/siteContent";
import { useEffect, useState } from "react";

export function SiteFooter() {
  const [tagline, setTagline] = useState(() =>
    footerTaglines[Math.floor(Math.random() * footerTaglines.length)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTagline(
        footerTaglines[Math.floor(Math.random() * footerTaglines.length)]
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        borderTop: "1px solid",
        borderColor: "divider",
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <span className="status-dot" />
            <Typography
              sx={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
              }}
              color="text.secondary"
            >
              system nominal
            </Typography>
            <Typography
              sx={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                opacity: 0.5,
              }}
              color="text.secondary"
            >
              — {tagline}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2.5} alignItems="center">
            <Typography
              color="text.secondary"
              sx={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
              }}
            >
              © 2026 Diogo Melita
            </Typography>
            {quickLinks.map((link) => (
              <MuiLink
                key={link.label}
                color="text.secondary"
                href={link.href}
                target={link.external ? "_blank" : undefined}
                underline="none"
                sx={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  transition: "color 200ms ease",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {link.label}
              </MuiLink>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
