import classes from "./overlay.module.css";

function Overlay({ onClose }) {
  return <div onClick={onClose} className={classes.overlay}></div>;
}

export default Overlay;
