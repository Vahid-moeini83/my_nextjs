"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import classes from "./searchBox.module.css";

function SearchBox() {
  const [inputValue, setInputValue] = useState("");

  function handleClearInput() {
    setInputValue("");
  }

  return (
    <div className={classes.search}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="search"
        placeholder="Search product"
      />
      <div>
        {inputValue.length > 0 && (
          <span className={classes.close} onClick={handleClearInput}>
            <IoIosCloseCircleOutline color="black" size={24} />
          </span>
        )}
        <span className={classes.submit}>
          <IoSearch size={28} />
        </span>
      </div>
    </div>
  );
}

export default SearchBox;
