import styles from "./TerminalWindow.module.scss";

/**
 * Reusable terminal window with macOS-style title bar.
 *
 * @param {object} props
 * @param {string} props.title - Path shown in the title bar (e.g. "~/my-project")
 * @param {string} [props.status] - Optional status text for the title bar badge
 * @param {string} [props.accentColor] - Override border accent on hover
 * @param {string} [props.className] - Additional class for the outer wrapper
 * @param {React.ReactNode} props.children - Terminal body content
 */
export function TerminalWindow({
  title,
  status,
  accentColor,
  className,
  children,
}) {
  const hoverStyle = accentColor
    ? {
        "--terminal-hover-border": accentColor,
        "--terminal-hover-shadow": `${accentColor}25`,
      }
    : {};

  return (
    <div
      className={`${styles.terminal} ${className || ""}`}
      style={hoverStyle}
    >
      {/* macOS title bar */}
      <div className={styles.titleBar}>
        <span className={`${styles.dot} ${styles.dotRed}`} />
        <span className={`${styles.dot} ${styles.dotYellow}`} />
        <span className={`${styles.dot} ${styles.dotGreen}`} />
        <span className={styles.titlePath}>{title}</span>
        {status && <span className={styles.statusBadge}>{status}</span>}
      </div>

      {/* Terminal body */}
      <div className={styles.body}>{children}</div>
    </div>
  );
}

/**
 * Styled command prompt line: `$ command`
 */
export function CommandLine({ children }) {
  return (
    <div className={styles.commandLine}>
      <span className={styles.prompt}>$</span> {children}
    </div>
  );
}
