import Link from "next/link";
import classes from "./subLinks.module.css";
import { CiHeart, CiUser } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import ShoppingBag from "@/components/ui/ShoppingBag";

function SubLinks() {
  return (
    <div className={classes.links}>
      <ul>
        <li>
          <Link href="#">
            <CiUser size={24} />
            <span>Login</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <IoIosGitCompare size={24} />
            <span>Compare</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <CiHeart size={24} />
            <span>Wishlist</span>
          </Link>
        </li>
      </ul>
      <span></span>
      <ShoppingBag />
    </div>
  );
}

export default SubLinks;
