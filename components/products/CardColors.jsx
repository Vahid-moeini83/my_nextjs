"use client";

import { useState } from "react";
import classes from "./cardColors.module.css";

function CardColors({ colors }) {
  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <div className={classes.buttons}>
      {colors.map((color, index) => (
        <button
          style={{ background: color }}
          className={`${classes.button} ${
            activeColor === color ? classes.active : ""
          }`}
          onClick={() => setActiveColor(color)}
          key={index}
        ></button>
      ))}
    </div>
  );
}

export default CardColors;
