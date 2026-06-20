import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";

export const paths = [
  { path: "/", label: "Home", element: HomePage },
  { path: "/projects", label: "Projects", element: ProjectsPage },
  { path: "/contact", label: "Contact", element: ContactPage },
];
