import { IoClose } from "react-icons/io5";
import classes from "./sidebarSearch.module.css";

function SidebarSearch({ isOpen, onClose }) {
  return (
    <div
      className={`${classes.sidebar} ${isOpen ? classes.open : classes.close}`}
    >
      <IoClose color="black" onClick={onClose} />
    </div>
  );
}

export default SidebarSearch;
