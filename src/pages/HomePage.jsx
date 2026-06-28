import { Container, Grid } from "@mui/material";
import {
  aboutSummary,
  brandName,
  shortDescription,
  terminalTaglines,
} from "../content/siteContent";
import { useTypewriter } from "../hooks/useTypewriter";
import { useRotatingText } from "../hooks/useRotatingText";
import mePhoto from "../../assets/me.jpg";
import styles from "./HomePage.module.scss";

export function HomePage() {
  const tagline = useRotatingText(terminalTaglines, 3500);
  const { displayed: typedGreeting } = useTypewriter("> hello, world", 70, 400);

  return (
    <main className={`${styles.page} page-transition-enter`}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Left: text content */}
          <Grid item xs={12} sm={7} md={7}>
            <div className={styles.fadeInUp}>
              {/* Eyebrow */}
              <p className={styles.eyebrow}>{"// home"}</p>

              {/* Typewriter heading */}
              <h1 className={styles.heading}>
                {typedGreeting.split("world").map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <span className={styles.worldGradient}>world</span>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  ),
                )}
                <span className={styles.cursor}>_</span>
              </h1>

              {/* Subtitle */}
              <p className={styles.subtitle}>{shortDescription}</p>

              {/* About */}
              <p className={styles.about}>{aboutSummary}</p>

              {/* Interest tags */}
              <div className={styles.tagsRow}>
                {[
                  "Large-scale software systems",
                  "Blockchain & AI curiosity",
                  "Lisbon based",
                ].map((value) => (
                  <span key={value} className={styles.tag}>
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </Grid>

          {/* Right: photo + terminal display */}
          <Grid item xs={12} sm={5} md={5}>
            <div className={styles.fadeInUpDelay}>
              {/* Profile Photo */}
              <img
                src={mePhoto}
                alt={brandName}
                className={styles.photo}
              />

              {/* Terminal tagline */}
              <div className={styles.terminalTagline}>
                <p className={styles.taglineText}>
                  <span className={styles.taglinePrompt}>$</span>
                  {tagline}
                  <span className={styles.cursor}>_</span>
                </p>
              </div>

              <span className={styles.brandInit}>
                {brandName.toLowerCase()}.init()
              </span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
