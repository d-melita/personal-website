import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";

export const paths = [
  { path: "/", label: "/home", element: HomePage },
  { path: "/projects", label: "/projects", element: ProjectsPage },
  { path: "/contact", label: "/contacts", element: ContactPage },
];
