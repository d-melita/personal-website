import { Box, Typography } from "@mui/material";

export function PageHeader({ eyebrow, title, description }) {
  return (
    <Box sx={{ mb: { xs: 4, md: 6 }, animation: "fadeInUp 0.6s ease-out both" }}>
      <Typography
        sx={{
          fontFamily: "var(--font-mono)",
          color: "primary.main",
          letterSpacing: "0.1em",
          textTransform: "lowercase",
          mb: 1,
          fontSize: "0.78rem",
          fontWeight: 500,
          display: "block",
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
          fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
          mb: 2,
        }}
        variant="h3"
      >
        {title}
      </Typography>
      {description && (
        <Typography
          color="text.secondary"
          sx={{
            maxWidth: "680px",
            lineHeight: 1.7,
            fontSize: { xs: "0.88rem", sm: "0.95rem" },
          }}
          variant="body1"
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}
