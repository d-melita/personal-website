import { Container, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../content/siteContent";
import styles from "./ProjectsPage.module.scss";

export function ProjectsPage() {
  const containerRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const cardRefs = useRef([]);
  const trailRef = useRef(null);
  const trailGlowRef = useRef(null);

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

  // Set trail length for draw animation once paths render
  useEffect(() => {
    [trailRef.current, trailGlowRef.current].forEach((el) => {
      if (el) {
        const length = el.getTotalLength();
        el.style.setProperty("--trail-length", length);
        el.style.strokeDasharray = length;
        el.style.strokeDashoffset = length;
      }
    });
  }, [coords, startCoord, endCoord]);

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
    <main className={`${styles.page} page-transition-enter`}>
      <Container maxWidth="lg">
        <PageHeader
          eyebrow="projects"
          title="Selected commits to public memory."
          description="Each terminal window represents a node in the deployment pipeline. Follow the commit trail."
        />

        {/* Trail container */}
        <div className={styles.trailContainer} ref={containerRef}>
          {/* SVG Trail rendering behind the cards */}
          <svg className={styles.trailSvg}>
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
                  ref={trailGlowRef}
                  className={styles.trailPathGlow}
                  d={pathString}
                  fill="none"
                  stroke="url(#trailGradient)"
                  strokeWidth={6}
                  opacity={0.15}
                  style={{ filter: "url(#glow)" }}
                />

                {/* Dashed Trail */}
                <path
                  ref={trailRef}
                  className={styles.trailPathDashed}
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
          <div className={styles.startNodeWrapper} ref={startRef}>
            <div className={styles.startPill}>
              <span className={styles.startDot} />
              git init --start
            </div>
          </div>

          {/* Projects Grid */}
          <Grid container spacing={4} className={styles.projectsGrid}>
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
          <div className={styles.endNodeWrapper} ref={endRef}>
            <div className={styles.endPill}>
              <span className={styles.endDot} />
              git commit -m &quot;ship_it 🚀&quot;
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
