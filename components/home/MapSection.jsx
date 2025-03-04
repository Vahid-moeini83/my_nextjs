"use client";

import MapInfo from "./MapInfo";
import classes from "./mapSection.module.css";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./Map"), { ssr: false });

function MapSection() {
  return (
    <section>
      <div className={classes.wrapper}>
        <DynamicMap />
        <MapInfo />
      </div>
    </section>
  );
}

export default MapSection;
