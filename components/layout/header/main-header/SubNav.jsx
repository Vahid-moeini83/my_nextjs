import Link from "next/link";
import classes from "./subNav.module.css";
import ShoppingBag from "@/components/ui/ShoppingBag";
import { IoSearchSharp } from "react-icons/io5";
import { useSidebar } from "@/hooks/useSidebar";

function SubNav() {
  // const { isMenuOpen, handleOpenMenu, handleCloseMenu } = useSidebar();
  // uncomment above code => then go for search sidebar

  return (
    <div className={classes.nav}>
      <ul>
        <li>
          <Link href="#">
            <IoSearchSharp size={28} />
          </Link>
        </li>
        <li>
          <ShoppingBag />
        </li>
      </ul>
    </div>
  );
}

export default SubNav;
