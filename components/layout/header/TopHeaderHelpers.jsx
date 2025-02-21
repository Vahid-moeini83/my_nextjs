"use client";

import { useEffect, useState } from "react";
import FlagIcon from "./FlagIcon";
import classes from "./topHeaderHelpers.module.css";
import { GoChevronDown } from "react-icons/go";

const countries = [
  { id: "usd", name: "United States", countryUnit: "USD" },
  { id: "vtn", name: "Vietnam", countryUnit: "VTN" },
];
const languages = ["English", "العربیه"];

function TopHeaderHelpers() {
  const [countryName, setCountryName] = useState("United States");
  const [language, setLanguage] = useState("English");

  // Opening and Closing dropdowns
  function closeAllDropdowns() {
    document
      .querySelectorAll(`.${classes.dropdown}`)
      .forEach((dropdown) => dropdown.classList.remove(classes.show));
  }

  function handleToggleDropdown(e) {
    e.stopPropagation();
    const el = e.target.closest(`.${classes.select}`);
    const dropdown = el.querySelector(`.${classes.dropdown}`);
    const dropdowns = document.querySelectorAll(`.${classes.dropdown}`);

    dropdowns.forEach((d) => {
      if (d !== dropdown) d.classList.remove(classes.show);
    });

    dropdown.classList.toggle(classes.show);
  }

  function handleSelectLanguage(e) {
    closeAllDropdowns();
    setLanguage(e.target.innerHTML);
  }

  function handleSelectUnit(e) {
    closeAllDropdowns();
    setCountryName(e.target.innerHTML.split(" | ")[1].split(">")[1]);
  }

  // Handle click outside of dropdowns
  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest(`.${classes.select}`)) {
        closeAllDropdowns();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={classes.helpers}>
      <span>
        Need help? Call Us: <span>+18001090</span>
      </span>
      <div className={classes.select}>
        <span onClick={handleToggleDropdown}>
          <FlagIcon countryName={countryName} />
          <GoChevronDown size={16} />
        </span>
        <ul className={`${classes.dropdown} ${classes.language}`}>
          <span></span>
          {countries.map((country) => (
            <li onClick={handleSelectUnit} key={country.id}>
              <FlagIcon countryName={country.name} />
              {" | "}
              {country.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.select}>
        <span onClick={handleToggleDropdown}>
          {language}
          <GoChevronDown size={16} />
        </span>
        <div className={classes.dropdown}>
          <span></span>
          {languages.map((language) => (
            <li onClick={handleSelectLanguage} key={language}>
              {language}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopHeaderHelpers;
