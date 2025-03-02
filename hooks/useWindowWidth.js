import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(1150);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Initial size check and event handler
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}
