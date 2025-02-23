import Category from "./Category";
import classes from "./mainHeaderBelow.module.css";
import MainNav from "./MainNav";
import SupportCenter from "./SupportCenter";
import { HiChevronDown } from "react-icons/hi2";

function MainHeaderBelow() {
  return (
    <div className={`container ${classes.header}`}>
      <div className={classes.nav}>
        <Category />
        <MainNav icon={<HiChevronDown size={16} />} />
      </div>
      <SupportCenter />
    </div>
  );
}

export default MainHeaderBelow;
