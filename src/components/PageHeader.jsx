import styles from "./PageHeader.module.scss";

export function PageHeader({ eyebrow, title, description }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.eyebrow}>{"// "}{eyebrow}</span>
      <h1 className={styles.title}>{title}</h1>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
