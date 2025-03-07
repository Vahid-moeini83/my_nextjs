import useWindowWidth from "@/hooks/useWindowWidth";
import classes from "./productsSort.module.css";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

function ProductsSort({ updateFilter }) {
  const [select, setSelect] = useState("alphabetical-asc");
  const windowWidth = useWindowWidth();

  const mobileStyle = {
    fontSize: "14px",
  };

  function handleUpdateFilter(e) {
    updateFilter({ sort_by: e.target.value });
    setSelect(e.target.value);
  }

  return (
    <div className={classes.sort}>
      <Select
        value={windowWidth > 768 && select}
        renderValue={windowWidth < 768 && (() => "Sort")}
        onChange={(e) => handleUpdateFilter(e)}
        className={classes.select}
        MenuProps={
          windowWidth < 768 && {
            PaperProps: {
              sx: {
                position: "fixed",
                top: "unset !important",
                bottom: "10px",
                left: "10px",
                right: "10px",
                zIndex: 998,
                width: "100%",
                height: "auto",
                borderRadius: "var(--rounded-xs)",
              },
            },
          }
        }
      >
        <MenuItem value="featured" sx={windowWidth < 768 && mobileStyle}>
          Featured
        </MenuItem>
        <MenuItem value="bestSelling" sx={windowWidth < 768 && mobileStyle}>
          Best selling
        </MenuItem>
        <MenuItem
          value="alphabetical-asc"
          sx={windowWidth < 768 && mobileStyle}
        >
          Alphabetically A-Z
        </MenuItem>
        <MenuItem
          value="alphabetical-dec"
          sx={windowWidth < 768 && mobileStyle}
        >
          Alphabetically Z-A
        </MenuItem>
        <MenuItem value="price-asc" sx={windowWidth < 768 && mobileStyle}>
          Price, low to high
        </MenuItem>
        <MenuItem value="price-dec" sx={windowWidth < 768 && mobileStyle}>
          Price, high to low
        </MenuItem>
      </Select>
    </div>
  );
}

export default ProductsSort;
