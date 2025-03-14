"use client";

import classes from "./dropdown.module.css";
import FlagIcon from "../layout/header/top-header/FlagIcon";
import useWindowWidth from "@/hooks/useWindowWidth";
import { forwardRef, useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { countries, languages } from "@/utils/data";
import { IoClose } from "react-icons/io5";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

const CustomDropdownIcon = forwardRef(function CustomDropdownIcon(props, ref) {
  const { open, className, ...rest } = props;

  return (
    <span ref={ref} {...rest} className={`${className} ${classes.selectIcon}`}>
      {open ? <HiChevronUp size={14} /> : <HiChevronDown size={14} />}
    </span>
  );
});

export default function Dropdown({ render, place }) {
  const [select, setSelect] = useState(render === "countryUnit" ? "usa" : "en");
  const [open, setOpen] = useState(false);
  const windowWidth = useWindowWidth();

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  }

  const selectBoxStyles = {
    fontSize: "14px",
    width: "100px",
    height: "20px",
    color: `${
      place === "footer" ? "var(--gray-medium-color)" : "var(--dark-color)"
    }`,
    ".MuiSelect-icon": {
      color:
        place === "footer" ? "var(--gray-medium-color)" : "var(--dark-color)",
    },
    "& fieldset": { border: "none" },
  };

  const baseMenuProps = {
    PaperProps: {
      sx: {
        "& .MuiMenuItem-root": {
          fontSize: "14px",
          "&.hover": {
            backgroundColor: "unset !important",
          },
          "&.Mui-selected": {
            backgroundColor: "unset !important",
            color: "var(--purple-color)",
          },
        },
      },
    },
  };

  let menuProps;

  if (windowWidth >= 1150) {
    menuProps = {
      ...baseMenuProps,
      PaperProps: {
        ...baseMenuProps.PaperProps,
        sx: {
          ...baseMenuProps.PaperProps.sx,
          mt: 1.5,
          borderRadius: 0,
          overflow: "visible",
        },
      },
    };
  }

  if (windowWidth >= 768 && windowWidth < 1150) {
    menuProps = {
      ...baseMenuProps,
      PaperProps: {
        ...baseMenuProps.PaperProps,
        sx: {
          ...baseMenuProps.PaperProps.sx,
          borderRadius: 0,
          overflow: "visible",
        },
      },
      anchorOrigin: {
        vertical: "top",
      },
      transformOrigin: {
        vertical: "bottom",
      },
    };
  }

  if (windowWidth < 768) {
    menuProps = {
      ...baseMenuProps,
      PaperProps: {
        ...baseMenuProps.PaperProps,
        sx: {
          ...baseMenuProps.PaperProps.sx,
          zIndex: 999,
          position: "fixed",
          top: "unset !important",
          left: "10px !important",
          right: "10px !important",
          bottom: "-92px",
          maxWidth: "100%",
          borderRadius: "var(--rounded-xs)",
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

  const renderValue =
    render === "countryUnit" ? handleRenderCountry : handleRenderLanguage;

  function handleRenderCountry(selected) {
    if (!selected) return;

    const country = countries.find((c) => c.id === selected);
    return country ? <FlagIcon countryId={country.id} /> : "";
  }

  function renderCountries() {
    return countries?.map((country) => (
      <MenuItem className={classes.item} value={country.id} key={country.id}>
        <FlagIcon countryId={country.id} />
        <span>|</span>
        {country.name}
      </MenuItem>
    ));
  }

  function handleRenderLanguage(selected) {
    if (!selected) return;

    const language = languages.find((lang) => lang.id === selected);
    return language ? language.name : "";
  }

  function renderLanguages() {
    return languages?.map((language) => (
      <MenuItem className={classes.item} value={language.id} key={language.id}>
        {language.name}
      </MenuItem>
    ));
  }

  return (
    <Select
      value={select}
      sx={selectBoxStyles}
      MenuProps={menuProps}
      renderValue={renderValue}
      onOpen={handleOpen}
      onClose={handleClose}
      onChange={(e) => setSelect(e.target.value)}
      displayEmpty
      IconComponent={CustomDropdownIcon}
    >
      <span className={classes.arrow}>
        {windowWidth < 768 && <IoClose color="black" size={24} />}
      </span>
      {render === "countryUnit" ? renderCountries() : renderLanguages()}
    </Select>
  );
}
