import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { Link, useLocation } from "react-router-dom";
import { paths } from "../paths";
import { useThemeMode } from "../theme/ThemeModeProvider";
import styles from "./SiteHeader.module.scss";

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
  const { isDark, toggleMode } = useThemeMode();

  return (
    <AppBar component="header" position="sticky" className={styles.appBar}>
      <Container maxWidth="lg">
        <Toolbar disableGutters className={styles.toolbar}>
          {/* Left: nav comment + links */}
          <div className={styles.leftSection}>
            <span className={styles.comment}>{"//"}</span>

            <nav className={styles.nav}>
              {paths.map((path) => {
                const isActive = location.pathname === path.path;
                return (
                  <Link
                    key={path.path}
                    to={path.path}
                    className={
                      isActive ? styles.navLinkActive : styles.navLink
                    }
                  >
                    {path.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: social icons + theme toggle */}
          <div className={styles.rightSection}>
            {socialIcons.map((social) => (
              <Tooltip key={social.label} title={social.label} arrow>
                <IconButton
                  component="a"
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={social.label}
                  size="small"
                  className={styles.socialButton}
                >
                  <social.icon className={styles.socialIcon} />
                </IconButton>
              </Tooltip>
            ))}

            <span className={styles.divider} />

            <IconButton
              aria-label="toggle theme"
              onClick={toggleMode}
              size="small"
              className={styles.themeToggle}
            >
              {isDark ? (
                <LightModeOutlinedIcon className={styles.themeIcon} />
              ) : (
                <DarkModeOutlinedIcon className={styles.themeIcon} />
              )}
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
