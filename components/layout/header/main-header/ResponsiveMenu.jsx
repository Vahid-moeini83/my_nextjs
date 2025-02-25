import Link from "next/link";
import classes from "./responsiveMenu.module.css";
import ShoppingBag from "@/components/ui/ShoppingBag";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { IoHeartOutline, IoSearch } from "react-icons/io5";

function ResponsiveMenu() {
  return (
    <div className={classes.menu}>
      <ul>
        <li>
          <Link href="#">
            <HiOutlineSquares2X2 size={20} />
            Shop
          </Link>
        </li>
        <li>
          <Link href="#">
            <IoSearch size={20} />
            Search
          </Link>
        </li>
        <li>
          <Link href="#">
            <HiOutlineUser size={20} />
            Account
          </Link>
        </li>
        <li>
          <Link href="#">
            <IoHeartOutline size={20} />
            Whishlist
          </Link>
        </li>
        <li className={classes.shop}>
          <ShoppingBag />
          Cart
        </li>
      </ul>
    </div>
  );
}

export default ResponsiveMenu;
