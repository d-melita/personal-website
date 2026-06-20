import { Navigate, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { paths } from "./paths";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { useThemeMode } from "./theme/ThemeModeProvider";

function App() {
  const { mode } = useThemeMode();

  return (
    <Box
      className="app-shell"
      sx={{
        bgcolor: "background.default",
        transition: "background-color 300ms ease",
      }}
    >
      {/* Animated dot grid background */}
      <div className="dot-grid" />

      {/* Subtle radial glow */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            mode === "dark"
              ? "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(6, 182, 212, 0.06), transparent), radial-gradient(ellipse 40% 30% at 80% 100%, rgba(167, 139, 250, 0.04), transparent)"
              : "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(6, 182, 212, 0.05), transparent), radial-gradient(ellipse 40% 30% at 80% 100%, rgba(167, 139, 250, 0.03), transparent)",
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <SiteHeader />

        <Routes>
          {paths.map((path) => (
            <Route key={path.path} element={<path.element />} path={path.path} />
          ))}
          <Route element={<Navigate replace to="/" />} path="*" />
        </Routes>

        <SiteFooter />
      </Box>
    </Box>
  );
}

export default App;
