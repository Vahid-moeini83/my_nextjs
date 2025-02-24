"use client";

import classes from "./topHeaderHelpers.module.css";
import Dropdown from "./Dropdown";
import Dropdowns from "@/components/ui/Dropdowns";

function TopHeaderHelpers() {
  return (
    <div className={classes.helpers}>
      <span>
        Call Us: <span>+18001090</span>
      </span>
      <Dropdowns />
    </div>
  );
}

export default TopHeaderHelpers;
