import classes from "./supportCenter.module.css";
import { BiSupport } from "react-icons/bi";

function SupportCenter() {
  return (
    <div className={classes.support}>
      <BiSupport size={32} />
      <div>
        <h2>1900100888</h2>
        <span>Support Center</span>
      </div>
    </div>
  );
}

export default SupportCenter;
