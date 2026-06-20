import { Box, Container, Link as MuiLink, Stack, Typography } from "@mui/material";

export function SiteFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        borderTop: "1px solid rgba(148, 163, 184, 0.16)",
        background: "rgba(8, 15, 30, 0.84)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Typography color="rgba(226, 232, 240, 0.78)" variant="body2">
            © 2026 Diogo Melita
          </Typography>
          <Stack direction="row" spacing={2}>
            <MuiLink color="#dbeafe" href="https://github.com/d-melita" target="_blank" underline="hover">
              GitHub
            </MuiLink>
            <MuiLink color="#dbeafe" href="https://www.linkedin.com/in/diogo-melita/" target="_blank" underline="hover">
              LinkedIn
            </MuiLink>
            <MuiLink color="#dbeafe" href="mailto:diogo@melita.pt" underline="hover">
              Email
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}