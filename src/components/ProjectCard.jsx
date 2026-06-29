import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import { Grid, Chip } from "@mui/material";
import { forwardRef, useRef } from "react";
import { useRevealOnView } from "../hooks/useRevealOnView";
import { TerminalWindow, CommandLine } from "./TerminalWindow";
import styles from "./ProjectCard.module.scss";

// Terminal accent colors per card
const termColors = [
  { dark: "#10b981", light: "#059669" },
  { dark: "#a78bfa", light: "#7c3aed" },
  { dark: "#facc15", light: "#ca8a04" },
  { dark: "#10b981", light: "#059669" },
  { dark: "#f472b6", light: "#db2777" },
];

export const ProjectCard = forwardRef(({ project, index }, ref) => {
  const internalRef = useRef(null);
  const visible = useRevealOnView(internalRef);
  const isDark =
    document.documentElement.getAttribute("data-theme") === "dark";
  const accent = termColors[index % termColors.length];
  const accentColor = isDark ? accent.dark : accent.light;

  const hasGithub = !!project.github;
  const githubUrl = hasGithub
    ? project.github.startsWith("http")
      ? project.github
      : `https://github.com/${project.github}`
    : "";
  const githubRepoPath = hasGithub
    ? project.github
        .replace(/https?:\/\/(www\.)?github\.com\//, "")
        .replace(/\/$/, "")
    : "";
  const cloneDisplayPath = hasGithub
    ? `https://github.com/${githubRepoPath}.git`
    : `diogo-melita/${project.title.toLowerCase().replace(/\s+/g, "-")}.git`;

  // Combine parent's callback/object ref and internal ref
  const setRefs = (node) => {
    internalRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      ref={setRefs}
      style={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <div
        className={`${styles.revealWrapper} ${visible ? styles.visible : ""}`}
        style={{
          transitionDelay: `${index * 80}ms`,
          "--card-accent": accentColor,
        }}
      >
        <TerminalWindow
          title={`~/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
          status={project.status}
          accentColor={accentColor}
          className={styles.card}
        >
          <div className={styles.commands}>
            {/* Command 1: Title (whoami) */}
            <div>
              <CommandLine>whoami</CommandLine>
              <div className={styles.title}>
                {project.title.toLowerCase().replace(/\s+/g, "-")}
              </div>
            </div>

            {/* Command 2: Description (echo $DESCRIPTION) */}
            <div>
              <CommandLine>echo $DESCRIPTION</CommandLine>
              <p className={styles.description}>
                &ldquo;{project.description}&rdquo;
              </p>
            </div>

            {/* Command 3: Tags (ls -l tags/) */}
            <div>
              <CommandLine>ls -l tags/</CommandLine>
              <div className={styles.tagsWrap}>
                <div className={styles.tagList}>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      icon={
                        <FolderOpenOutlinedIcon
                          style={{ fontSize: 12 }}
                        />
                      }
                      size="small"
                      className={styles.tag}
                      variant="filled"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Command 3.5: Paper (cat publication.txt) */}
            {project.paper && (
              <div>
                <CommandLine>cat publication.txt</CommandLine>
                <div className={styles.paperWrap}>
                  <a
                    href={project.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.paperLink}
                  >
                    Bonsai: A Recovery Approach for Ethereum ERC-20 Transactions
                    (IEEE NCA)
                    <OpenInNewRoundedIcon />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Command 4: GitHub Link (git clone) */}
          <div className={styles.footer}>
            <CommandLine>git clone {cloneDisplayPath}</CommandLine>
            <div className={styles.cloneWrap}>
              {project.github ? (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cloneLink}
                >
                  Cloning... click to open repository
                  <OpenInNewRoundedIcon />
                </a>
              ) : (
                <span className={styles.privateMsg}>
                  fatal: repo status private. Permission denied (publickey)
                </span>
              )}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </Grid>
  );
});

ProjectCard.displayName = "ProjectCard";
