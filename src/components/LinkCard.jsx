import { Avatar, CardActionArea, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useThemeMode } from "../theme/ThemeModeProvider";

export function LinkCard({ href, icon, title, description, external = true }) {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <CardActionArea
      component="a"
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      sx={{
        borderRadius: "14px",
        p: 2.5,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: isDark
          ? "rgba(15, 23, 42, 0.4)"
          : "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        transition:
          "all 250ms ease",
        "&:hover": {
          borderColor: "primary.main",
          borderLeft: "3px solid",
          borderLeftColor: "primary.main",
          backgroundColor: isDark
            ? "rgba(6, 182, 212, 0.06)"
            : "rgba(6, 182, 212, 0.04)",
          boxShadow: isDark
            ? "0 8px 24px rgba(6, 182, 212, 0.08)"
            : "0 8px 24px rgba(6, 182, 212, 0.06)",
          "& .link-arrow": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          src={icon}
          sx={{
            width: 44,
            height: 44,
            bgcolor: isDark
              ? "rgba(6, 182, 212, 0.12)"
              : "rgba(6, 182, 212, 0.08)",
            borderRadius: "12px",
          }}
          variant="rounded"
        />
        <Stack sx={{ flex: 1 }}>
          <Typography
            color="text.primary"
            sx={{
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
            }}
            variant="subtitle1"
          >
            {title}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {description}
          </Typography>
        </Stack>
        <ArrowForwardRoundedIcon
          className="link-arrow"
          sx={{
            color: "primary.main",
            fontSize: 20,
            opacity: 0,
            transform: "translateX(-8px)",
            transition: "all 250ms ease",
          }}
        />
      </Stack>
    </CardActionArea>
  );
}
