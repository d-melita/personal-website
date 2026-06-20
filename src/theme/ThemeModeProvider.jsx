import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeModeContext = createContext(null);

const monoFamily =
  '"JetBrains Mono", ui-monospace, "Cascadia Code", "Fira Code", monospace';
const sansFamily =
  '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

function buildTheme(mode) {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#10b981",
        light: "#34d399",
        dark: "#059669",
      },
      secondary: {
        main: isDark ? "#a78bfa" : "#7c3aed",
      },
      background: {
        default: isDark ? "#0a0e1a" : "#f8fafc",
        paper: isDark
          ? "rgba(15, 23, 42, 0.75)"
          : "rgba(255, 255, 255, 0.82)",
      },
      text: {
        primary: isDark ? "#e2e8f0" : "#0f172a",
        secondary: isDark ? "#94a3b8" : "#475569",
      },
      divider: isDark
        ? "rgba(148, 163, 184, 0.12)"
        : "rgba(148, 163, 184, 0.2)",
    },
    shape: {
      borderRadius: 14,
    },
    typography: {
      fontFamily: sansFamily,
      h1: {
        fontFamily: monoFamily,
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontFamily: monoFamily,
        fontWeight: 700,
        letterSpacing: "-0.01em",
      },
      h3: {
        fontFamily: monoFamily,
        fontWeight: 700,
        letterSpacing: "-0.01em",
      },
      h4: {
        fontFamily: monoFamily,
        fontWeight: 600,
      },
      h5: {
        fontFamily: monoFamily,
        fontWeight: 600,
      },
      h6: {
        fontFamily: monoFamily,
        fontWeight: 600,
      },
      overline: {
        fontFamily: monoFamily,
        fontWeight: 500,
        letterSpacing: "0.12em",
      },
      button: {
        fontFamily: sansFamily,
        fontWeight: 600,
        textTransform: "none",
      },
      body1: {
        lineHeight: 1.75,
      },
      body2: {
        lineHeight: 1.65,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition:
              "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            borderRadius: 20,
            border: isDark
              ? "1px solid rgba(148, 163, 184, 0.1)"
              : "1px solid rgba(148, 163, 184, 0.18)",
            backdropFilter: "blur(20px)",
            transition:
              "border-color 300ms ease, box-shadow 300ms ease, transform 200ms ease",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            textTransform: "none",
            fontWeight: 600,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontFamily: monoFamily,
            fontSize: "0.78rem",
            fontWeight: 500,
            borderRadius: 8,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
    },
  });
}

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return window.localStorage.getItem("theme-mode") || "dark";
  });

  useEffect(() => {
    window.localStorage.setItem("theme-mode", mode);

    // Set CSS custom property for the dot grid color
    document.documentElement.style.setProperty(
      "--dot-color",
      mode === "dark" ? "rgba(148, 163, 184, 0.15)" : "rgba(15, 23, 42, 0.06)"
    );
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      toggleMode: () =>
        setMode((current) => (current === "light" ? "dark" : "light")),
    }),
    [mode]
  );

  const theme = useMemo(() => buildTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error("useThemeMode must be used within ThemeModeProvider");
  }

  return context;
}
