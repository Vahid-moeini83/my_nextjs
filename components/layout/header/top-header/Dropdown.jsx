"use client";

import classes from "./dropdown.module.css";
import FlagIcon from "./FlagIcon";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { countries, languages } from "@/utils/data";
import { IoClose } from "react-icons/io5";

export default function Dropdown({ render, place }) {
  const [select, setSelect] = useState(render === "countryUnit" ? "usa" : "en");
  const windowWidth = useWindowWidth();

  let menuProps;

  if (windowWidth >= 1150) {
    menuProps = {
      PaperProps: {
        sx: {
          mt: 1.5,
          borderRadius: 0,
          overflow: "visible",
        },
      },
    };
  }
  if (windowWidth >= 768 && windowWidth < 1150) {
    menuProps = {
      PaperProps: {
        sx: {
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
      PaperProps: {
        sx: {
          width: "100%",
          borderRadius: "var(--rounded-sm)",
          overflow: "hidden",
          zIndex: 999,
        },
      },
    };
  }

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
      renderValue={
        render === "countryUnit" ? handleRenderCountry : handleRenderLanguage
      }
      onChange={(e) => setSelect(e.target.value)}
      sx={{
        fontSize: "14px",
        position: "relative",
        width: "100px",
        height: "20px",
        color: `${
          place === "footer" ? "var(--light-border)" : "var(--dark-color)"
        }`,
        ".MuiSelect-icon": {
          color:
            place === "footer" ? "var(--light-border)" : "var(--dark-color)",
        },
        "& fieldset": { border: "none" },
      }}
      MenuProps={menuProps}
    >
      <span className={classes.arrow}>
        {windowWidth < 768 && <IoClose color="black" size={24} />}
      </span>
      {render === "countryUnit" ? renderCountries() : renderLanguages()}
    </Select>
  );
}
