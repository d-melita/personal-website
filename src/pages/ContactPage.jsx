import { Container, Grid } from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { PageHeader } from "../components/PageHeader";
import { TerminalWindow, CommandLine } from "../components/TerminalWindow";
import { contactLinks } from "../content/siteContent";
import styles from "./ContactPage.module.scss";

const getLinkIcon = (title) => {
  switch (title.toLowerCase()) {
    case "github":
      return <GitHubIcon style={{ fontSize: 16 }} />;
    case "linkedin":
      return <LinkedInIcon style={{ fontSize: 16 }} />;
    default:
      return <EmailOutlinedIcon style={{ fontSize: 16 }} />;
  }
};

export function ContactPage() {
  return (
    <main className={`${styles.page} page-transition-enter`}>
      <Container maxWidth="lg">
        <PageHeader
          eyebrow="contact"
          title="ping(diogo)"
          description="Preferred protocol: email. Fallback: carrier pigeon. Use the links below to reach me, browse my work, or open my CV."
        />

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
          className={styles.gridWrapper}
        >
          {/* Left: CV Card */}
          <Grid item xs={12} sm={6} md={5} className={styles.cardColumn}>
            <TerminalWindow
              title="~/curriculum-vitae"
              className={styles.terminalCard}
            >
              <div className={styles.cvBody}>
                <div className={styles.cvContent}>
                  <CommandLine>cat cv_info.txt</CommandLine>
                  <p className={styles.cvText}>
                    {"Looking for a comprehensive\nsummary of my engineering\nexperience, projects, and skills?\n\nGrab the latest version of my CV."}
                  </p>
                </div>

                <a
                  href="https://cv.melita.pt"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.cvButton}
                >
                  $ open cv.pdf ↗
                </a>
              </div>
            </TerminalWindow>
          </Grid>

          {/* Right: Connections Card */}
          <Grid item xs={12} sm={6} md={5} className={styles.cardColumn}>
            <TerminalWindow
              title="~/connections"
              className={styles.terminalCard}
            >
              <div className={styles.connectionsBody}>
                <div className={styles.connectionsHeader}>
                  <CommandLine>ls -la connections/</CommandLine>
                </div>

                <div className={styles.linksColumn}>
                  {contactLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.connectionLink}
                    >
                      <span className={styles.linkIcon}>
                        {getLinkIcon(link.title)}
                      </span>
                      <span className={styles.linkContent}>
                        <span className={styles.linkTitle}>
                          {link.title.toLowerCase()}
                        </span>
                        <span className={styles.linkDescription}>
                          {link.description}
                        </span>
                      </span>
                      <span className={styles.externalIcon}>
                        <OpenInNewRoundedIcon style={{ fontSize: 10 }} />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </TerminalWindow>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
