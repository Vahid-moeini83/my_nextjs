import classes from "./dropdowns.module.css";
import Dropdown from "../layout/header/top-header/Dropdown";

function Dropdowns({ place }) {
  return (
    <div className={classes.dropdowns}>
      <Dropdown render="countryUnit" place={place} />
      <Dropdown render="languages" place={place} />
    </div>
  );
}

export default Dropdowns;
