import Link from "next/link";
import classes from "./navItem.module.css";

function NavItem({ title, icon = null }) {
  return (
    <li className={classes.item}>
      <Link href="#">
        <span>{title}</span>
        {icon}
      </Link>
    </li>
  );
}

export default NavItem;
