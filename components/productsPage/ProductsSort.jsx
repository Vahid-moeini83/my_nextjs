import useWindowWidth from "@/hooks/useWindowWidth";
import classes from "./productsSort.module.css";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { sortOptions } from "@/utils/data";
import { useSearchParams } from "next/navigation";

function ProductsSort({ updateFilter }) {
  const [select, setSelect] = useState("alphabetical-asc");
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const windowWidth = useWindowWidth();
  const sortType = searchParams.get("sort_by");

  const baseMenuItemStyles = {
    PaperProps: {
      sx: {
        "& .MuiMenuItem-root": {
          color: "var(--gray-color)",
          fontSize: "14px",
          "&.hover": {
            backgroundColor: "unset !important",
          },
          "&.Mui-selected": {
            backgroundColor: "var(--light-border) !important",
            borderLeft: "3px solid var(--dark-color)",
            color: "var(--dark-color) !important",
          },
        },
      },
    },
  };

  let menuProps;

  if (windowWidth > 768) {
    menuProps = {
      ...baseMenuItemStyles,
      PaperProps: {
        ...baseMenuItemStyles.PaperProps,
        sx: {
          ...baseMenuItemStyles.PaperProps.sx,
          zIndex: 998,
          height: "auto",
          borderRadius: "var(--rounded-xs)",
        },
      },
    };
  }

  if (windowWidth <= 768) {
    menuProps = {
      ...baseMenuItemStyles,
      PaperProps: {
        ...baseMenuItemStyles.PaperProps,
        sx: {
          ...baseMenuItemStyles.PaperProps.sx,
          zIndex: 999,
          position: "fixed",
          top: "unset !important",
          left: "10px !important",
          right: "10px !important",
          bottom: "10px",
          maxWidth: "100%",
          height: "auto",
          borderRadius: "var(--rounded-xs)",
          transform: "translateY(100%)",
        },
        className: open ? "slide-top" : "slide-down",
      },
      BackdropProps: {
        sx: {
          backgroundColor: "var(--dark-color)",
          opacity: "0.5 !important",
        },
      },
    };
  }

  function handleUpdateFilter(e) {
    updateFilter({ sort_by: e.target.value });
    setSelect(e.target.value);
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  }

  return (
    <div className={classes.sort}>
      <Select
        value={windowWidth > 768 && (sortType || select)}
        renderValue={windowWidth < 768 && (() => "Sort")}
        onChange={(e) => handleUpdateFilter(e)}
        onOpen={handleOpen}
        onClose={handleClose}
        className={classes.select}
        MenuProps={menuProps}
        sx={{
          fontSize: "14px",
        }}
        displayEmpty
      >
        {sortOptions.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default ProductsSort;
