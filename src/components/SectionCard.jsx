import { Card, CardContent, Typography } from "@mui/material";

export function SectionCard({ eyebrow, title, description, children }) {
  return (
    <Card
      component="section"
      sx={{
        height: "100%",
        borderRadius: 6,
        border: "1px solid rgba(148, 163, 184, 0.16)",
        background:
          "linear-gradient(180deg, rgba(15, 23, 42, 0.9), rgba(8, 15, 30, 0.92))",
        boxShadow: "0 30px 80px rgba(2, 6, 23, 0.34)",
      }}
    >
      <CardContent sx={{ p: { xs: 3, md: 5 } }}>
        <Typography
          sx={{
            color: "#8da3d6",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            mb: 1,
          }}
          variant="overline"
        >
          {eyebrow}
        </Typography>
        <Typography component="h1" sx={{ color: "#f8fafc", fontWeight: 800 }} variant="h3">
          {title}
        </Typography>
        <Typography color="#cbd5e1" sx={{ mt: 2, lineHeight: 1.8 }} variant="body1">
          {description}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}