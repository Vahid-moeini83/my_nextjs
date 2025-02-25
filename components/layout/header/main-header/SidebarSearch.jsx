import { IoClose } from "react-icons/io5";
import classes from "./sidebarSearch.module.css";
import SearchBox from "./SearchBox";

function SidebarSearch({ isOpen, onClose }) {
  return (
    <div
      className={`${classes.sidebar} ${isOpen ? classes.open : classes.close}`}
    >
      <div className={classes.header}>
        <div>
          <h2>Search our site</h2>
          <IoClose color="black" size={24} onClick={onClose} />
        </div>
        <SearchBox />
      </div>
    </div>
  );
}

export default SidebarSearch;
