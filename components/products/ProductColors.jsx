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

function ProductColors({ colors }) {
  if (!colors.length) return;

  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <div className={classes.buttons}>
      {colors.map((color, index) => (
        <BootstrapTooltip key={index} title={color} arrow placement="bottom">
          <button
            style={{ background: color }}
            className={`${classes.button} ${
              activeColor === color ? classes.active : ""
            }`}
            onClick={() => setActiveColor(color)}
          ></button>
        </BootstrapTooltip>
      ))}
    </div>
  );
}

export default ProductColors;
