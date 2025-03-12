import classes from "./dropdowns.module.css";
import Dropdown from "./Dropdown";

function Dropdowns({ place }) {
  return (
    <div className={classes.dropdowns}>
      <Dropdown render="countryUnit" place={place} />
      <Dropdown render="languages" place={place} />
    </div>
  );
}

export default Dropdowns;
