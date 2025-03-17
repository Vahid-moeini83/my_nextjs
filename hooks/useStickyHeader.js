import { useState, useEffect, useRef, useCallback } from "react";

export function useStickyHeader(ref) {
  const [isVisible, setIsVisible] = useState(true);
  const [isPassed, setIsPassed] = useState(false);
  const prevScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    if (!ticking.current) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        setIsPassed(currentScrollY > 100);
        setIsVisible(
          prevScrollY.current > currentScrollY || currentScrollY < 100
        );
        prevScrollY.current = currentScrollY;
        ticking.current = false;
      });

      ticking.current = true;
    }
  }, [ref]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isVisible, isPassed };
}
