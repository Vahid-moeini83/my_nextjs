import { useEffect, useState } from "react";

export function useStickyHeader(ref) {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerHeight, setHeaderHeight] = useState();

  useEffect(() => {
    if (!ref.current) return;

    setHeaderHeight(ref.current.offsetHeight);

    function handleScroll() {
      if (!ref.current) return;

      const mainHeaderOffset = ref.current.offsetTop;
      const mainHeaderHeight = ref.current.offsetHeight;

      if (window.scrollY > mainHeaderOffset + mainHeaderHeight + 10) {
        setIsSticky(true);

        if (window.scrollY > lastScrollY + 5) {
          setIsVisible(false);
        } else if (window.scrollY < lastScrollY - 5) {
          setIsVisible(true);
        }
      } else {
        setIsSticky(false);
      }

      setLastScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, ref]);

  return { isSticky, isVisible, headerHeight };
}
