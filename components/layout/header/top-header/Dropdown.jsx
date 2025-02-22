"use client";

import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { countries, languages } from "@/utils/data";
import classes from "./dropdown.module.css";
import FlagIcon from "./FlagIcon";

export default function Dropdown({ render }) {
  const [select, setSelect] = useState(render === "countryUnit" ? "usa" : "en");

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
        "& fieldset": { border: "none" },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            mt: 1.5,
            borderRadius: 0,
            overflow: "visible",
          },
        },
      }}
    >
      <span className={classes.arrow}></span>
      {render === "countryUnit" ? renderCountries() : renderLanguages()}
    </Select>
  );
}
