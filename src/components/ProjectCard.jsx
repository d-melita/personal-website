import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useThemeMode } from "../theme/ThemeModeProvider";

function useRevealOnView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// Post-it color palettes per card
const postItStyles = [
  {
    // Yellow sticky
    bg: { dark: "rgba(250, 204, 21, 0.12)", light: "#fef9c3" },
    border: { dark: "rgba(250, 204, 21, 0.3)", light: "rgba(202, 138, 4, 0.3)" },
    accent: { dark: "#facc15", light: "#ca8a04" },
    tape: { dark: "rgba(250, 204, 21, 0.25)", light: "rgba(250, 204, 21, 0.5)" },
    rotate: "-1.2deg",
    hoverRotate: "0deg",
  },
  {
    // Teal sticky
    bg: { dark: "rgba(6, 182, 212, 0.1)", light: "#ccfbf1" },
    border: { dark: "rgba(6, 182, 212, 0.3)", light: "rgba(13, 148, 136, 0.3)" },
    accent: { dark: "#06b6d4", light: "#0d9488" },
    tape: { dark: "rgba(6, 182, 212, 0.25)", light: "rgba(6, 182, 212, 0.45)" },
    rotate: "0.8deg",
    hoverRotate: "0deg",
  },
  {
    // Purple sticky
    bg: { dark: "rgba(167, 139, 250, 0.1)", light: "#ede9fe" },
    border: { dark: "rgba(167, 139, 250, 0.3)", light: "rgba(139, 92, 246, 0.3)" },
    accent: { dark: "#a78bfa", light: "#7c3aed" },
    tape: { dark: "rgba(167, 139, 250, 0.25)", light: "rgba(167, 139, 250, 0.45)" },
    rotate: "1.5deg",
    hoverRotate: "0deg",
  },
  {
    // Pink sticky
    bg: { dark: "rgba(244, 114, 182, 0.1)", light: "#fce7f3" },
    border: { dark: "rgba(244, 114, 182, 0.3)", light: "rgba(219, 39, 119, 0.25)" },
    accent: { dark: "#f472b6", light: "#db2777" },
    tape: { dark: "rgba(244, 114, 182, 0.25)", light: "rgba(244, 114, 182, 0.45)" },
    rotate: "-0.7deg",
    hoverRotate: "0deg",
  },
  {
    // Green sticky
    bg: { dark: "rgba(16, 185, 129, 0.1)", light: "#d1fae5" },
    border: { dark: "rgba(16, 185, 129, 0.3)", light: "rgba(5, 150, 105, 0.3)" },
    accent: { dark: "#10b981", light: "#059669" },
    tape: { dark: "rgba(16, 185, 129, 0.25)", light: "rgba(16, 185, 129, 0.45)" },
    rotate: "1.1deg",
    hoverRotate: "0deg",
  },
];

export function ProjectCard({ project, index }) {
  const { ref, visible } = useRevealOnView();
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const style = postItStyles[index % postItStyles.length];
  const isLatest = index === 0;

  return (
    <Box
      ref={ref}
      sx={{
        pl: { xs: 3, md: 5 },
        position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 500ms ease, transform 500ms ease",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Timeline dot */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: 8, md: 12 },
          top: 32,
          width: 14,
          height: 14,
          borderRadius: "50%",
          bgcolor: style.accent[isDark ? "dark" : "light"],
          border: "3px solid",
          borderColor: isDark ? "#0a0e1a" : "#f8fafc",
          boxShadow: `0 0 12px ${style.accent[isDark ? "dark" : "light"]}40`,
          zIndex: 2,
        }}
      />

      {/* Post-it card */}
      <Box
        sx={{
          position: "relative",
          p: { xs: 2.5, md: 3 },
          borderRadius: "4px",
          border: "1px solid",
          borderColor: style.border[isDark ? "dark" : "light"],
          background: style.bg[isDark ? "dark" : "light"],
          boxShadow: isDark
            ? `4px 4px 0px ${style.border.dark}, 0 8px 24px rgba(0, 0, 0, 0.2)`
            : `4px 4px 0px ${style.border.light}, 0 8px 24px rgba(0, 0, 0, 0.06)`,
          transform: `rotate(${style.rotate})`,
          transition:
            "transform 300ms ease, box-shadow 300ms ease",
          "&:hover": {
            transform: `rotate(${style.hoverRotate}) translateY(-4px)`,
            boxShadow: isDark
              ? `6px 6px 0px ${style.border.dark}, 0 16px 40px rgba(0, 0, 0, 0.3)`
              : `6px 6px 0px ${style.border.light}, 0 16px 40px rgba(0, 0, 0, 0.1)`,
          },
        }}
      >
        {/* Tape strip */}
        <Box
          sx={{
            position: "absolute",
            top: -6,
            left: "50%",
            transform: "translateX(-50%)",
            width: 60,
            height: 12,
            borderRadius: "2px",
            background: style.tape[isDark ? "dark" : "light"],
            opacity: 0.8,
          }}
        />

        <Stack spacing={1.5}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={2}
            flexWrap="wrap"
            alignItems="flex-start"
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.08em",
                  color: style.accent[isDark ? "dark" : "light"],
                  fontWeight: 600,
                }}
              >
                {project.status}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  mt: 0.5,
                  color: "text.primary",
                }}
                variant="h5"
              >
                {project.title}
              </Typography>
            </Box>

            <Button
              component="a"
              href={project.github || undefined}
              target={project.github ? "_blank" : undefined}
              rel={project.github ? "noopener noreferrer" : undefined}
              variant="outlined"
              endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 13 }} />}
              disabled={!project.github}
              size="small"
              sx={{
                borderRadius: "6px",
                textTransform: "none",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                borderColor: style.border[isDark ? "dark" : "light"],
                color: style.accent[isDark ? "dark" : "light"],
                "&:hover": {
                  borderColor: style.accent[isDark ? "dark" : "light"],
                  backgroundColor: `${style.accent[isDark ? "dark" : "light"]}15`,
                },
              }}
            >
              {"<github />"}
            </Button>
          </Stack>

          <Typography
            color="text.secondary"
            sx={{ lineHeight: 1.75, fontSize: "0.92rem" }}
            variant="body1"
          >
            {project.description}
          </Typography>

          <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  bgcolor: `${style.accent[isDark ? "dark" : "light"]}18`,
                  color: style.accent[isDark ? "dark" : "light"],
                  border: "1px solid",
                  borderColor: `${style.accent[isDark ? "dark" : "light"]}30`,
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  height: 26,
                }}
                variant="filled"
              />
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
