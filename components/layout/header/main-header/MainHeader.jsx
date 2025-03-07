"use client";

import { useStickyHeader } from "@/hooks/useStickyHeader";
import classes from "./mainHeader.module.css";
import MainHeaderBelow from "./MainHeaderBelow";
import MainHeaderTop from "./MainHeaderTop";
import ResponsiveHeader from "./ResponsiveHeader";
import ResponsiveMenu from "./ResponsiveMenu";
import { useRef } from "react";

function MainHeader() {
  const headerRef = useRef(null);
  const { isSticky, isVisible, headerHeight } = useStickyHeader(headerRef);

  return (
    <>
      {isSticky && <div style={{ height: `${headerHeight}px` }}></div>}
      <div
        ref={headerRef}
        className={`${classes.header} ${isSticky ? classes.sticky : ""} ${
          isVisible ? classes.visible : classes.hidden
        }`}
      >
        <MainHeaderTop />
        <span></span>
        <MainHeaderBelow />
        <ResponsiveHeader />
        <ResponsiveMenu />
      </div>
    </>
  );
}

export default MainHeader;
