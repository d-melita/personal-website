import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { Link, useLocation } from "react-router-dom";
import { paths } from "../paths";
import { useThemeMode } from "../theme/ThemeModeProvider";

const socialIcons = [
  {
    label: "GitHub",
    href: "https://github.com/d-melita",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/diogo-melita/",
    icon: LinkedInIcon,
  },
  {
    label: "CV",
    href: "https://cv.melita.pt",
    icon: DescriptionOutlinedIcon,
  },
];

export function SiteHeader() {
  const location = useLocation();
  const { mode, toggleMode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <AppBar
      component="header"
      position="sticky"
      sx={{
        background: isDark
          ? "rgba(10, 14, 26, 0.85)"
          : "rgba(248, 250, 252, 0.85)",
        color: "text.primary",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            gap: 2,
            py: 1,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: nav comment + links */}
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Typography
              sx={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "text.secondary",
                opacity: 0.5,
                userSelect: "none",
                display: { xs: "none", sm: "block" },
              }}
            >
              {"//"}
            </Typography>

            <Box sx={navSx}>
              {paths.map((path) => {
                const isActive = location.pathname === path.path;

                return (
                  <Button
                    key={path.path}
                    component={Link}
                    to={path.path}
                    disableElevation
                    sx={isActive ? activeButtonSx : inactiveButtonSx}
                  >
                    {path.label}
                  </Button>
                );
              })}
            </Box>
          </Stack>

          {/* Right: social icons + theme toggle */}
          <Stack direction="row" spacing={0.5} alignItems="center">
            {socialIcons.map((social) => (
              <Tooltip key={social.label} title={social.label} arrow>
                <IconButton
                  component="a"
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={social.label}
                  size="small"
                  sx={{
                    color: "text.secondary",
                    width: 36,
                    height: 36,
                    transition: "all 200ms ease",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <social.icon sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            ))}

            <Box
              sx={{
                width: 1,
                height: 20,
                bgcolor: "divider",
                mx: 0.75,
              }}
            />

            <IconButton
              aria-label="toggle theme"
              onClick={toggleMode}
              size="small"
              sx={{
                borderRadius: "10px",
                width: 36,
                height: 36,
                color: "text.secondary",
                transition: "all 200ms ease",
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "transparent",
                },
              }}
            >
              {isDark ? (
                <LightModeOutlinedIcon sx={{ fontSize: 20 }} />
              ) : (
                <DarkModeOutlinedIcon sx={{ fontSize: 20 }} />
              )}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const navSx = {
  display: "flex",
  alignItems: "center",
  gap: 0.5,
};

const inactiveButtonSx = {
  color: "text.secondary",
  borderRadius: "10px",
  px: 2,
  py: 0.75,
  minWidth: 0,
  fontSize: "0.875rem",
  fontFamily: "var(--font-mono)",
  fontWeight: 500,
  transition: "all 200ms ease",
  "&:hover": {
    color: "text.primary",
    backgroundColor: "rgba(6, 182, 212, 0.06)",
  },
};

const activeButtonSx = {
  borderRadius: "10px",
  px: 2,
  py: 0.75,
  minWidth: 0,
  fontSize: "0.875rem",
  fontFamily: "var(--font-mono)",
  fontWeight: 600,
  color: "primary.main",
  backgroundColor: "rgba(6, 182, 212, 0.1)",
  borderBottom: "2px solid",
  borderColor: "primary.main",
  boxShadow: "0 4px 16px rgba(6, 182, 212, 0.12)",
  "&:hover": {
    backgroundColor: "rgba(6, 182, 212, 0.14)",
  },
};
