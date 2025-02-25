"use client";

import { useEffect, useState } from "react";
import classes from "./scrollUpBtn.module.css";
import { BsChevronUp } from "react-icons/bs";

function ScrollUpBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      console.log("Scroll Position:", window.scrollY);
      setVisible(window.scrollY > 100);
    }
    console.log(window.scrollY);

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      className={`${classes.btn} ${visible ? classes.show : ""}`}
      onClick={scrollToTop}
    >
      <BsChevronUp />
    </div>
  );
}

export default ScrollUpBtn;
