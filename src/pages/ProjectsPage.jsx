import { Box, Container, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../content/siteContent";
import { useThemeMode } from "../theme/ThemeModeProvider";

export function ProjectsPage() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  const containerRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const cardRefs = useRef([]);

  const [coords, setCoords] = useState([]);
  const [startCoord, setStartCoord] = useState(null);
  const [endCoord, setEndCoord] = useState(null);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();

      // Measure cards
      const cardCoords = cardRefs.current
        .map((card) => {
          if (!card) return null;
          const rect = card.getBoundingClientRect();
          return {
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top + rect.height / 2,
          };
        })
        .filter(Boolean);

      setCoords(cardCoords);

      // Measure start node
      if (startRef.current) {
        const rect = startRef.current.getBoundingClientRect();
        setStartCoord({
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        });
      }

      // Measure end node
      if (endRef.current) {
        const rect = endRef.current.getBoundingClientRect();
        setEndCoord({
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        });
      }
    };

    // Run measurement
    measure();

    // Use ResizeObserver for responsive layout updates
    const observer = new ResizeObserver(() => {
      measure();
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener("resize", measure);

    // Run deferred to account for lazy-loading/rendering timings
    const t1 = setTimeout(measure, 100);
    const t2 = setTimeout(measure, 600);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Generate SVG path connecting the nodes
  const getPathString = () => {
    if (!startCoord || !endCoord || coords.length === 0) return "";

    let path = `M ${startCoord.x} ${startCoord.y}`;

    // Connect from start node to first card center
    const p0 = coords[0];
    path += ` Q ${(startCoord.x + p0.x) / 2} ${(startCoord.y + p0.y) / 2}, ${p0.x} ${p0.y}`;

    // Connect between project cards
    for (let i = 1; i < coords.length; i++) {
      const prev = coords[i - 1];
      const curr = coords[i];
      // Generate a smooth s-curve transition between card centers
      const cx1 = prev.x;
      const cy1 = (prev.y + curr.y) / 2;
      const cx2 = curr.x;
      const cy2 = (prev.y + curr.y) / 2;
      path += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${curr.x} ${curr.y}`;
    }

    // Connect from last card center to end node
    const pLast = coords[coords.length - 1];
    path += ` Q ${(pLast.x + endCoord.x) / 2} ${(pLast.y + endCoord.y) / 2}, ${endCoord.x} ${endCoord.y}`;

    return path;
  };

  const pathString = getPathString();

  return (
    <Box component="main" sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <PageHeader
          eyebrow="projects"
          title="Selected commits to public memory."
          description="Each terminal window represents a node in the deployment pipeline. Follow the commit trail."
        />

        {/* Trail container */}
        <Box sx={{ position: "relative", width: "100%", mt: 2 }} ref={containerRef}>
          
          {/* SVG Trail rendering behind the cards */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            <defs>
              <linearGradient id="trailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {pathString && (
              <>
                {/* Glow Path backing */}
                <path
                  d={pathString}
                  fill="none"
                  stroke="url(#trailGradient)"
                  strokeWidth={6}
                  opacity={0.15}
                  style={{ filter: "url(#glow)" }}
                />
                
                {/* Dashed Trail */}
                <path
                  d={pathString}
                  fill="none"
                  stroke="url(#trailGradient)"
                  strokeWidth={2}
                  strokeDasharray="6,6"
                  opacity={0.5}
                />

                {/* Animated flowing signal packets */}
                <circle r="4" fill="#34d399" style={{ filter: "drop-shadow(0 0 3px #10b981)" }}>
                  <animateMotion dur="6s" repeatCount="indefinite" path={pathString} />
                </circle>
                <circle r="3.5" fill="#3b82f6" style={{ filter: "drop-shadow(0 0 3px #3b82f6)" }}>
                  <animateMotion dur="6s" begin="3s" repeatCount="indefinite" path={pathString} />
                </circle>
              </>
            )}
          </svg>

          {/* Start Node: git init */}
          <Box
            ref={startRef}
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 5,
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                px: 2,
                py: 0.75,
                borderRadius: "20px",
                border: "1px solid",
                borderColor: "primary.main",
                bgcolor: isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.05)",
                color: "primary.main",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 1,
                boxShadow: isDark
                  ? "0 0 15px rgba(16, 185, 129, 0.15)"
                  : "0 0 10px rgba(16, 185, 129, 0.08)",
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  bgcolor: "#10b981",
                  boxShadow: "0 0 8px #10b981",
                }}
              />
              git init --start
            </Box>
          </Box>

          {/* Projects Grid */}
          <Grid container spacing={4} sx={{ position: "relative", zIndex: 1 }}>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                index={index}
                project={project}
                ref={(el) => (cardRefs.current[index] = el)}
              />
            ))}
          </Grid>

          {/* End Node: git commit */}
          <Box
            ref={endRef}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 6,
              pb: 2,
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                px: 2,
                py: 0.75,
                borderRadius: "20px",
                border: "1px solid",
                borderColor: "#3b82f6",
                bgcolor: isDark ? "rgba(59, 130, 246, 0.12)" : "rgba(59, 130, 246, 0.05)",
                color: "#3b82f6",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 1,
                boxShadow: isDark
                  ? "0 0 15px rgba(59, 130, 246, 0.15)"
                  : "0 0 10px rgba(59, 130, 246, 0.08)",
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  bgcolor: "#3b82f6",
                  boxShadow: "0 0 8px #3b82f6",
                }}
              />
              git commit -m "ship_it 🚀"
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
