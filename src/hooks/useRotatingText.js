import { useEffect, useState } from "react";

/**
 * Rotates through an array of items on a timer.
 * @param {Array} items - items to rotate through
 * @param {number} intervalMs - ms between rotations (default 3000)
 * @returns {*} the current item
 */
export function useRotatingText(items, intervalMs = 3000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [items.length, intervalMs]);

  return items[index];
}
