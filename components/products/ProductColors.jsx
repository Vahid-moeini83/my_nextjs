"use client";

import classes from "./productColors.module.css";
import { useState } from "react";
import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

function ProductColors({ colors, hasText }) {
  if (!colors.length) return;

  const [activeColor, setActiveColor] = useState(colors[0]);

  function handleActiveColor(color) {
    setActiveColor(color);
  }

  return (
    <div>
      {hasText && (
        <span className={classes.text}>
          Color: <span>{activeColor}</span>
        </span>
      )}
      <div className={classes.buttons}>
        {colors.map((color, index) => (
          <BootstrapTooltip key={index} title={color} arrow placement="bottom">
            <button
              className={`${hasText ? classes.biggerButton : classes.button} ${
                activeColor === color ? classes.active : ""
              }`}
              onClick={() => setActiveColor(color)}
              onMouseMove={() => handleActiveColor(color)}
            >
              <span
                style={{ background: color }}
                className={classes.color}
              ></span>
            </button>
          </BootstrapTooltip>
        ))}
      </div>
    </div>
  );
}

export default ProductColors;
