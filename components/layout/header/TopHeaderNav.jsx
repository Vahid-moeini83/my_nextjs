import Link from "next/link";
import classes from "./topHeaderNav.module.css";

function TopHeaderNav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href="#">Contact</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>
        <li>
          <Link href="#">Order Tracking</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopHeaderNav;
