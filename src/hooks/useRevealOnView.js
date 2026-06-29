import { useEffect, useState } from "react";

/**
 * Triggers a reveal animation when an element enters the viewport.
 * @param {React.RefObject} ref - ref to the element to observe
 * @param {object} options
 * @param {number} options.threshold - IntersectionObserver threshold (default 0.1)
 * @returns {boolean} whether the element is visible
 */
export function useRevealOnView(ref, { threshold = 0.1 } = {}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref?.current;
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
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return visible;
}
