import { useEffect, useRef, useState } from "react";

/**
 * Typewriter effect that reveals text character by character.
 * @param {string} text - the full text to type
 * @param {number} speed - ms between characters (default 60)
 * @param {number} startDelay - ms before typing begins (default 300)
 * @returns {{ displayed: string, done: boolean }}
 */
export function useTypewriter(text, speed = 60, startDelay = 300) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const prevText = useRef(text);

  useEffect(() => {
    if (prevText.current !== text) {
      setDisplayed("");
      setDone(false);
      prevText.current = text;
    }

    const timeout = setTimeout(
      () => {
        if (displayed.length < text.length) {
          const timer = setInterval(() => {
            setDisplayed((prev) => {
              const next = text.slice(0, prev.length + 1);
              if (next.length >= text.length) {
                clearInterval(timer);
                setDone(true);
              }
              return next;
            });
          }, speed);

          return () => clearInterval(timer);
        }
      },
      displayed.length === 0 ? startDelay : 0,
    );

    return () => clearTimeout(timeout);
  }, [text, displayed.length, speed, startDelay]);

  return { displayed, done };
}
