import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { paths } from "../paths";

export function SiteHeader() {
  const location = useLocation();

  return (
    <AppBar
      component="header"
      position="sticky"
      sx={{
        background:
          "linear-gradient(135deg, rgba(8, 15, 30, 0.96), rgba(15, 23, 42, 0.85))",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.18)",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 80, gap: 3, py: 1.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography component={Link} to="/" sx={brandSx} variant="h6">
              Diogo Melita
            </Typography>
            <Typography color="rgba(226, 232, 240, 0.72)" variant="body2">
              Blockchain researcher and computer science student
            </Typography>
          </Box>

          <Box sx={navSx}>
            {paths.map((path) => {
              const isActive = location.pathname === path.path;

              return (
                <Button
                  key={path.path}
                  component={Link}
                  to={path.path}
                  variant={isActive ? "contained" : "text"}
                  sx={isActive ? activeButtonSx : inactiveButtonSx}
                >
                  {path.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const brandSx = {
  color: "#f8fafc",
  textDecoration: "none",
  fontWeight: 800,
  letterSpacing: "0.02em",
};

const navSx = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  flexWrap: "wrap",
};

const inactiveButtonSx = {
  color: "#dbeafe",
  borderRadius: 999,
  px: 2,
  py: 1,
};

const activeButtonSx = {
  borderRadius: 999,
  px: 2,
  py: 1,
  color: "#07111f",
  background: "linear-gradient(135deg, #f8fafc, #93c5fd)",
  boxShadow: "0 14px 30px rgba(96, 165, 250, 0.2)",
  "&:hover": {
    background: "linear-gradient(135deg, #f8fafc, #bfdbfe)",
  },
};