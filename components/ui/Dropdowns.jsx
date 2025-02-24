import classes from "./dropdowns.module.css";
import Dropdown from "../layout/header/top-header/Dropdown";

function Dropdowns() {
  return (
    <div className={classes.dropdowns}>
      <Dropdown render="countryUnit" />
      <Dropdown render="languages" />
    </div>
  );
}

export default Dropdowns;
