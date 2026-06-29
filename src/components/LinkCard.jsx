import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import styles from "./LinkCard.module.scss";

export function LinkCard({ href, icon, title, description, external = true }) {
  return (
    <a
      className={styles.card}
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <div className={styles.avatarWrap}>
        <img className={styles.avatarImg} src={icon} alt={title} />
      </div>

      <div className={styles.textWrap}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>

      <ArrowForwardRoundedIcon className={styles.arrow} />
    </a>
  );
}
