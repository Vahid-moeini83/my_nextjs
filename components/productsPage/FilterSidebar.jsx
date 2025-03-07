"use client";

import classes from "./filterSidebar.module.css";
import { IoClose } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { Slider } from "@mui/material";
import { useState } from "react";

function FilterSidebar({ isOpen, onClose, updateFilter }) {
  const [range, setRange] = useState([0, 200]);

  function handleChangeRange(e, newValue) {
    if (newValue[1] - newValue[0] >= 5) {
      setRange(newValue);
      updateFilter({
        min_price: String(newValue[0]),
        max_price: String(newValue[1]),
      });
    }
  }

  return (
    <div
      className={`${classes.sidebar} ${isOpen ? classes.open : classes.close}`}
    >
      <div className={classes.header}>
        <div>
          <CiFilter size={24} />
          Filter
        </div>
        <IoClose
          className={classes.icon}
          color="black"
          size={24}
          onClick={onClose}
        />
      </div>
      <div className={classes.main}>
        <h3>Price</h3>
        <div>
          <Slider
            value={range}
            onChange={handleChangeRange}
            min={0}
            max={200}
            step={1}
            sx={{
              width: "100%",
              color: "var(--purple-color)",
              border: "none",
              "& .MuiSlider-track": {
                backgroundColor: "var(--purple-color)",
                height: 3,
                border: "none",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "var(--gray-background)",
                height: 3,
                opacity: 0.5,
              },
              "& .MuiSlider-thumb": {
                width: "16px",
                height: "16px",
              },
            }}
          />
          <div className={classes.range}>
            Price: <span>$ {range[0]}</span> - <span>$ {range[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;
