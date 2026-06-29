import { quickLinks, footerTaglines } from "../content/siteContent";
import { useEffect, useState, useCallback } from "react";
import styles from "./SiteFooter.module.scss";

export function SiteFooter() {
  const [tagline, setTagline] = useState(() =>
    footerTaglines[Math.floor(Math.random() * footerTaglines.length)],
  );
  const [fading, setFading] = useState(false);

  const cycleTagline = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setTagline(
        footerTaglines[Math.floor(Math.random() * footerTaglines.length)],
      );
      setFading(false);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(cycleTagline, 8000);
    return () => clearInterval(interval);
  }, [cycleTagline]);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.statusGroup}>
            <span className="status-dot" />
            <span className={styles.statusText}>system nominal</span>
            <span className={fading ? styles.taglineFading : styles.tagline}>
              — {tagline}
            </span>
          </div>

          <div className={styles.linksGroup}>
            <span className={styles.copyright}>© 2026 Diogo Melita</span>
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={styles.quickLink}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
