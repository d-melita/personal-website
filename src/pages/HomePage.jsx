import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import {
  aboutSummary,
  brandName,
  shortDescription,
  terminalTaglines,
} from "../content/siteContent";
import { useThemeMode } from "../theme/ThemeModeProvider";
import { useEffect, useState, useRef } from "react";
import mePhoto from "../../assets/me.jpg";

function useRotatingText(items, intervalMs = 3000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [items.length, intervalMs]);

  return items[index];
}

function useTypewriter(text, speed = 60, startDelay = 300) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const prevText = useRef(text);

  useEffect(() => {
    // Reset if text changes
    if (prevText.current !== text) {
      setDisplayed("");
      setDone(false);
      prevText.current = text;
    }

    const timeout = setTimeout(
      () => {
        if (displayed.length < text.length) {
          const timer = setInterval(() => {
            setDisplayed((prev) => {
              const next = text.slice(0, prev.length + 1);
              if (next.length >= text.length) {
                clearInterval(timer);
                setDone(true);
              }
              return next;
            });
          }, speed);

          return () => clearInterval(timer);
        }
      },
      displayed.length === 0 ? startDelay : 0,
    );

    return () => clearTimeout(timeout);
  }, [text, displayed.length, speed, startDelay]);

  return { displayed, done };
}

export function HomePage() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const tagline = useRotatingText(terminalTaglines, 3500);
  const { displayed: typedGreeting, done: greetingDone } = useTypewriter(
    "> hello, world",
    70,
    400,
  );

  return (
    <Box component="main" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Left: text content, no card */}
          <Grid item xs={12} sm={7} md={7}>
            <Box
              sx={{
                animation: "fadeInUp 0.6s ease-out both",
              }}
            >
              {/* Eyebrow */}
              <Typography
                sx={{
                  fontFamily: "var(--font-mono)",
                  color: "primary.main",
                  letterSpacing: "0.1em",
                  textTransform: "lowercase",
                  mb: 2,
                  fontSize: "0.78rem",
                  fontWeight: 500,
                }}
              >
                {"// home"}
              </Typography>

              {/* Typewriter heading */}
              <Typography
                component="h1"
                sx={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  lineHeight: 1.2,
                  color: "text.primary",
                  mb: 2,
                  minHeight: { xs: "2.8rem", sm: "3.4rem", md: "4rem" },
                }}
              >
                {typedGreeting.split("world").map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <Box
                        component="span"
                        sx={{
                          background:
                            "linear-gradient(135deg, #10b981, #06b6d4)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        world
                      </Box>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  ),
                )}
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                    animation: "blink 1s step-end infinite",
                    ml: 0.25,
                  }}
                >
                  _
                </Box>
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontFamily: "var(--font-mono)",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  mb: 4,
                }}
                color="text.secondary"
              >
                {shortDescription}
              </Typography>

              {/* About */}
              <Typography
                sx={{
                  maxWidth: 580,
                  lineHeight: 1.85,
                  fontSize: { xs: "1rem", md: "1.06rem" },
                  mb: 4,
                }}
                color="text.primary"
                variant="body1"
              >
                {aboutSummary}
              </Typography>

              {/* Interest tags */}
              <Stack direction="row" spacing={1.25} flexWrap="wrap" useFlexGap>
                {[
                  "Large-scale software systems",
                  "Blockchain & AI curiosity",
                  "Lisbon based",
                ].map((value) => (
                  <Typography
                    key={value}
                    sx={{
                      px: 2,
                      py: 0.75,
                      borderRadius: "8px",
                      border: "1px solid",
                      borderColor: "divider",
                      color: isDark ? "#6ee7b7" : "#047857",
                      backgroundColor: isDark
                        ? "rgba(16, 185, 129, 0.08)"
                        : "rgba(16, 185, 129, 0.06)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                    }}
                    variant="body2"
                  >
                    {value}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Right: monogram + terminal display */}
          <Grid item xs={12} sm={5} md={5}>
            <Stack
              spacing={3}
              alignItems="center"
              sx={{
                textAlign: "center",
                animation: "fadeInUp 0.6s ease-out 0.2s both",
              }}
            >
              {/* Profile Photo */}
              <Box
                component="img"
                src={mePhoto}
                alt={brandName}
                sx={{
                  width: 300,
                  height: 300,
                  borderRadius: "14px",
                  border: "2px solid",
                  borderColor: isDark
                    ? "rgba(16, 185, 129, 0.3)"
                    : "rgba(16, 185, 129, 0.25)",
                  objectFit: "cover",
                  boxShadow:
                    "0 0 60px rgba(16, 185, 129, 0.08), 0 20px 40px rgba(0, 0, 0, 0.1)",
                  transition: "all 300ms ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    boxShadow:
                      "0 0 80px rgba(16, 185, 129, 0.15), 0 20px 40px rgba(0, 0, 0, 0.15)",
                    transform: "scale(1.03)",
                  },
                }}
              />

              {/* Terminal tagline */}
              <Box
                sx={{
                  px: 2.5,
                  py: 1.25,
                  borderRadius: "12px",
                  border: "1px solid",
                  borderColor: "divider",
                  background: isDark
                    ? "rgba(10, 14, 26, 0.8)"
                    : "rgba(248, 250, 252, 0.9)",
                  width: { xs: 280, sm: 320 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    color: isDark ? "#10b981" : "#059669",
                    transition: "opacity 300ms ease",
                  }}
                >
                  <Box component="span" sx={{ color: "text.secondary", mr: 1 }}>
                    $
                  </Box>
                  {tagline}
                  <Box
                    component="span"
                    sx={{
                      color: "primary.main",
                      animation: "blink 1s step-end infinite",
                    }}
                  >
                    _
                  </Box>
                </Typography>
              </Box>

              <Typography
                color="text.secondary"
                sx={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  opacity: 0.5,
                }}
              >
                {brandName.toLowerCase()}.init()
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
