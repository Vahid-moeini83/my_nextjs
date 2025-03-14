import { useEffect, useRef, useState } from "react";

export function useStickyHeader(ref) {
  const [isPassed, setIsPassed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      if (ref.current) {
        const { bottom } = ref.current.getBoundingClientRect();

        if (bottom <= 0) {
          setIsPassed(true);

          if (window.scrollY > lastScrollY.current) {
            setIsVisible(false);
          } else if (window.scrollY < lastScrollY.current) {
            setIsVisible(true);
          }
        } else {
          setIsPassed(false);
        }
      }

      lastScrollY.current = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return { isPassed, isVisible };
}
