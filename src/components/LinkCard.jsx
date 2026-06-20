import { Avatar, CardActionArea, Stack, Typography } from "@mui/material";

export function LinkCard({ href, icon, title, description, external = true }) {
  return (
    <CardActionArea
      component="a"
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      sx={{
        borderRadius: 4,
        p: 2,
        border: "1px solid rgba(148, 163, 184, 0.14)",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar src={icon} sx={{ width: 44, height: 44, bgcolor: "rgba(96, 165, 250, 0.16)" }} variant="rounded" />
        <Stack>
          <Typography color="#f8fafc" fontWeight={700} variant="subtitle1">
            {title}
          </Typography>
          <Typography color="#a8b3c7" variant="body2">
            {description}
          </Typography>
        </Stack>
      </Stack>
    </CardActionArea>
  );
}