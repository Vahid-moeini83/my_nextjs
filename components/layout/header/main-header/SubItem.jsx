import classes from "./subItem.module.css";
import Link from "next/link";

function SubItem({ item }) {
  return (
    <li className={classes.item}>
      <Link href="#">{item}</Link>
    </li>
  );
}

export default SubItem;
