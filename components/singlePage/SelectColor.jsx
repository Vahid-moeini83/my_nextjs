import { useState } from "react";
import classes from "./selectColor.module.css";
import { formatPrice } from "@/utils/helpers";
import { HiChevronDown } from "react-icons/hi2";

function SelectColor({ colors, finalPrice }) {
  const [select, setSelect] = useState();

  return (
    <div className={classes.wrapper}>
      <select
        className={classes.select}
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        {colors.map((color) => (
          <option key={color} value={color}>
            {color} - {formatPrice(finalPrice)}
          </option>
        ))}
      </select>
      <span className={classes.icon}>
        <HiChevronDown size={14} />
      </span>
    </div>
  );
}

export default SelectColor;
