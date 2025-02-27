import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import useWindowWidth from "@/hooks/useWindowWidth";
import classes from "./searchBoxInput.module.css";

function SearchBoxInput() {
  const [inputValue, setInputValue] = useState("");
  const windowWidth = useWindowWidth();

  function handleClearInput() {
    setInputValue("");
  }

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="search"
        placeholder="Search product"
        className={classes.input}
      />
      <div className={classes.icon}>
        {inputValue.length > 0 && (
          <span className={classes.close} onClick={handleClearInput}>
            <IoIosCloseCircleOutline color="black" size={24} />
          </span>
        )}
        <span className={classes.submit}>
          <IoSearch
            color={windowWidth < 1150 ? "black" : "white"}
            size={windowWidth < 1150 ? 20 : 24}
          />
        </span>
      </div>
    </>
  );
}

export default SearchBoxInput;
