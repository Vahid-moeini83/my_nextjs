import classes from "./toggleListIcon.module.css";

function ToggleListIcon({ isOpen, onToggle, color }) {
  return (
    <div className={classes.iconBox} onClick={onToggle}>
      <span
        className={`${classes.icon} ${isOpen ? classes.open : ""} ${
          color === "dark" ? classes.dark : classes.light
        }`}
      ></span>
    </div>
  );
}

export default ToggleListIcon;
