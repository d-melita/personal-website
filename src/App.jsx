import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { paths } from "./paths";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import styles from "./App.module.scss";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app-shell">
      {/* Animated dot grid background */}
      <div className="dot-grid" />

      {/* Subtle radial glow */}
      <div className="radial-glow" />

      <div className={styles.contentWrapper}>
        <ScrollToTop />
        <SiteHeader />

        <Routes>
          {paths.map((path) => (
            <Route key={path.path} element={<path.element />} path={path.path} />
          ))}
          <Route element={<Navigate replace to="/" />} path="*" />
        </Routes>

        <SiteFooter />
      </div>
    </div>
  );
}

export default App;
