import Link from "next/link";
import classes from "./shoppingBag.module.css";
import { RiShoppingBag3Line } from "react-icons/ri";

function ShoppingBag() {
  return (
    <div className={classes.bag}>
      <Link href="#">
        <RiShoppingBag3Line className={classes.icon} size={32} />
        <span>0</span>
      </Link>
    </div>
  );
}

export default ShoppingBag;
