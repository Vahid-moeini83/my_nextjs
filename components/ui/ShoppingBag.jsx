"use client";

import Link from "next/link";
import classes from "./shoppingBag.module.css";
import { RiShoppingBag3Line } from "react-icons/ri";
import useWindowWidth from "@/hooks/useWindowWidth";

function ShoppingBag() {
  const windowWidth = useWindowWidth();

  return (
    <div className={classes.bag}>
      <Link href="#">
        <RiShoppingBag3Line
          className={classes.icon}
          size={windowWidth < 1150 ? 20 : 32}
        />
        <span>0</span>
      </Link>
    </div>
  );
}

export default ShoppingBag;
