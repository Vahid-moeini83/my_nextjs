import classes from "./sidebarMenu.module.css";
import { IoClose } from "react-icons/io5";

function SidebarMenu({ isOpen, onClose }) {
  return (
    <div className={`${classes.sidebar} ${isOpen ? classes.open : classes.close}`}>
      <IoClose color="black" onClick={onClose} />
    </div>
  );
}

export default SidebarMenu;
