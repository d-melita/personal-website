import styles from "./SectionCard.module.scss";

export function SectionCard({ eyebrow, title, description, children }) {
  return (
    <section className={styles.card}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>{"// "}{eyebrow}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        {children}
      </div>
    </section>
  );
}
