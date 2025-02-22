"use client";

import classes from "./topHeaderHelpers.module.css";
import Dropdown from "./Dropdown";

function TopHeaderHelpers() {
  return (
    <div className={classes.helpers}>
      <span>
        Call Us: <span>+18001090</span>
      </span>
      <Dropdown render="countryUnit" />
      <Dropdown render="languages" />
    </div>
  );
}

export default TopHeaderHelpers;
