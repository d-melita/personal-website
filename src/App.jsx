import { Navigate, Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

function App() {
  return (
    <div className="app-shell">
      <SiteHeader />

      <Routes>
        {paths.map((path) => (
          <Route key={path.path} element={<path.element />} path={path.path} />
        ))}
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>

      <SiteFooter />
    </div>
  );
}

export default App;
