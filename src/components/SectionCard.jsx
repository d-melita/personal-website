import { Card, CardContent, Typography } from "@mui/material";
import { useThemeMode } from "../theme/ThemeModeProvider";

export function SectionCard({ eyebrow, title, description, children }) {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <Card
      component="section"
      sx={{
        height: "100%",
        borderRadius: "20px",
        border: "1px solid",
        borderColor: "divider",
        background: isDark
          ? "rgba(15, 23, 42, 0.6)"
          : "rgba(255, 255, 255, 0.75)",
        boxShadow: isDark
          ? "0 20px 60px rgba(0, 0, 0, 0.3)"
          : "0 20px 60px rgba(15, 23, 42, 0.06)",
        backdropFilter: "blur(24px)",
        transition:
          "border-color 300ms ease, box-shadow 300ms ease",
        "&:hover": {
          borderColor: isDark
            ? "rgba(6, 182, 212, 0.25)"
            : "rgba(6, 182, 212, 0.3)",
          boxShadow: isDark
            ? "0 20px 60px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(6, 182, 212, 0.1)"
            : "0 20px 60px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(6, 182, 212, 0.1)",
        },
      }}
    >
      <CardContent sx={{ p: { xs: 3, md: 5 } }}>
        <Typography
          sx={{
            fontFamily: "var(--font-mono)",
            color: "primary.main",
            letterSpacing: "0.1em",
            textTransform: "lowercase",
            mb: 1,
            fontSize: "0.78rem",
            fontWeight: 500,
          }}
          variant="overline"
        >
          {"// "}{eyebrow}
        </Typography>
        <Typography
          component="h1"
          sx={{
            color: "text.primary",
            fontWeight: 700,
            fontFamily: "var(--font-mono)",
            letterSpacing: "-0.01em",
          }}
          variant="h3"
        >
          {title}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ mt: 2, lineHeight: 1.8 }}
          variant="body1"
        >
          {description}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}
