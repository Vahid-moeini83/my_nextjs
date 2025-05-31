"use client";

// import { useRef } from "react";
// import { useStickyHeader } from "@/hooks/useStickyHeader";
import classes from "./mainHeader.module.css";
import MainHeaderBelow from "./MainHeaderBelow";
import MainHeaderTop from "./MainHeaderTop";
import ResponsiveHeader from "./ResponsiveHeader";
import ResponsiveMenu from "./ResponsiveMenu";

function MainHeader() {
  // const headerRef = useRef(null);
  // const { isVisible, isPassed } = useStickyHeader(headerRef);

  return (
    <div className={classes.header}>
      <MainHeaderTop />
      <span></span>
      <MainHeaderBelow />
      <ResponsiveHeader />
      <ResponsiveMenu />
    </div>
  );
}

export default MainHeader;
