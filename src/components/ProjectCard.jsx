import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState, forwardRef, useRef } from "react";
import { useThemeMode } from "../theme/ThemeModeProvider";

function useRevealOnView(externalRef) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = externalRef?.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [externalRef]);

  return visible;
}

// Terminal accent colors per card
const termColors = [
  { accent: { dark: "#10b981", light: "#059669" }, dot: "#3b82f6" },
  { accent: { dark: "#a78bfa", light: "#7c3aed" }, dot: "#ef4444" },
  { accent: { dark: "#facc15", light: "#ca8a04" }, dot: "#eab308" },
  { accent: { dark: "#10b981", light: "#059669" }, dot: "#22c55e" },
  { accent: { dark: "#f472b6", light: "#db2777" }, dot: "#8b5cf6" },
];

export const ProjectCard = forwardRef(({ project, index }, ref) => {
  const internalRef = useRef(null);
  const visible = useRevealOnView(internalRef);
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const colors = termColors[index % termColors.length];
  const t = isDark ? "dark" : "light";

  const hasGithub = !!project.github;
  const githubUrl = hasGithub
    ? (project.github.startsWith("http") ? project.github : `https://github.com/${project.github}`)
    : "";
  const githubRepoPath = hasGithub
    ? project.github.replace(/https?:\/\/(www\.)?github\.com\//, "").replace(/\/$/, "")
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
      sx={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 450ms ease, transform 450ms ease",
          transitionDelay: `${index * 80}ms`,
        }}
      >
        {/* Terminal Card wrapper */}
        <Box
          sx={{
            borderRadius: "12px",
            border: "1px solid",
            borderColor: "divider",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            backgroundColor: isDark
              ? "rgba(10, 14, 26, 0.65)"
              : "rgba(248, 250, 252, 0.85)",
            backdropFilter: "blur(12px)",
            transition:
              "border-color 300ms ease, box-shadow 300ms ease, transform 200ms ease",
            "&:hover": {
              borderColor: colors.accent[t],
              boxShadow: isDark
                ? `0 12px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px ${colors.accent[t]}25`
                : `0 12px 32px rgba(6, 182, 212, 0.06), 0 0 0 1px ${colors.accent[t]}25`,
              transform: "translateY(-4px)",
            },
          }}
        >
          {/* macOS title bar */}
          <Box
            sx={{
              px: 1.75,
              py: 1.25,
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              borderBottom: "1px solid",
              borderColor: "divider",
              backgroundColor: isDark
                ? "rgba(15, 23, 42, 0.7)"
                : "rgba(241, 245, 249, 0.9)",
            }}
          >
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#ef4444" }} />
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#eab308" }} />
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#22c55e" }} />
            <Typography
              sx={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "text.secondary",
                opacity: 0.6,
                ml: 0.5,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              ~/{project.title.toLowerCase().replace(/\s+/g, "-")}
            </Typography>
          </Box>

          {/* Terminal body */}
          <Box
            sx={{
              p: { xs: 2.5, sm: 3 },
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Stack spacing={2.5} sx={{ flexGrow: 1 }}>
              {/* Command 1: Title (whoami) */}
              <Box>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)",
                    mb: 0.5,
                  }}
                >
                  <Box component="span" sx={{ color: "primary.main" }}>$</Box> whoami
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    color: "text.primary",
                    fontSize: { xs: "1.05rem", sm: "1.15rem" },
                    pl: 1.5,
                    borderLeft: "2px solid",
                    borderColor: colors.accent[t],
                  }}
                >
                  {project.title.toLowerCase().replace(/\s+/g, "-")}
                </Typography>
              </Box>

              {/* Command 2: Description (echo description) */}
              <Box>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)",
                    mb: 0.5,
                  }}
                >
                  <Box component="span" sx={{ color: "primary.main" }}>$</Box> echo $DESCRIPTION
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    lineHeight: 1.6,
                    pl: 1.5,
                  }}
                >
                  "{project.description}"
                </Typography>
              </Box>

              {/* Command 3: Tags (ls tags/) */}
              <Box>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)",
                    mb: 0.5,
                  }}
                >
                  <Box component="span" sx={{ color: "primary.main" }}>$</Box> ls -l tags/
                </Typography>
                <Box sx={{ pl: 1.5 }}>
                  <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        icon={<FolderOpenOutlinedIcon style={{ fontSize: 12, color: colors.accent[t] }} />}
                        size="small"
                        sx={{
                          bgcolor: `${colors.accent[t]}12`,
                          color: colors.accent[t],
                          border: "1px solid",
                          borderColor: `${colors.accent[t]}25`,
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          fontWeight: 500,
                          height: 24,
                          borderRadius: "6px",
                          "& .MuiChip-icon": {
                            marginLeft: "4px",
                          }
                        }}
                        variant="filled"
                      />
                    ))}
                  </Stack>
                </Box>
              </Box>

              {/* Command 3.5: Paper (cat publication.txt) */}
              {project.paper && (
                <Box>
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)",
                      mb: 0.5,
                    }}
                  >
                    <Box component="span" sx={{ color: "primary.main" }}>$</Box> cat publication.txt
                  </Typography>
                  <Box sx={{ pl: 1.5 }}>
                    <Button
                      component="a"
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 11 }} />}
                      size="small"
                      sx={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: colors.accent[t],
                        textTransform: "none",
                        p: 0,
                        minWidth: 0,
                        textAlign: "left",
                        "&:hover": {
                          textDecoration: "underline",
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      Bonsai: A Recovery Approach for Ethereum ERC-20 Transactions (IEEE NCA)
                    </Button>
                  </Box>
                </Box>
              )}
            </Stack>

            {/* Command 4: GitHub Link (git clone) */}
            <Box
              sx={{
                mt: 3,
                pt: 2.5,
                borderTop: "1px dashed",
                borderColor: "divider",
              }}
            >
              <Typography
                component="div"
                sx={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)",
                  mb: 0.5,
                }}
              >
                <Box component="span" sx={{ color: "primary.main" }}>$</Box> git clone {cloneDisplayPath}
              </Typography>
              
              <Box sx={{ pl: 1.5 }}>
                {project.github ? (
                  <Button
                    component="a"
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 11 }} />}
                    size="small"
                    sx={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "primary.main",
                      textTransform: "none",
                      p: 0,
                      minWidth: 0,
                      "&:hover": {
                        textDecoration: "underline",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    Cloning... click to open repository
                  </Button>
                ) : (
                  <Typography
                    sx={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      color: "error.main",
                      opacity: 0.8,
                    }}
                  >
                    fatal: repo status private. Permission denied (publickey)
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
});

ProjectCard.displayName = "ProjectCard";
