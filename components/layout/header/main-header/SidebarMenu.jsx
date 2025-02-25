import Link from "next/link";
import classes from "./sidebarMenu.module.css";
import MainNav from "./MainNav";
import Button from "@/components/ui/Button";
import ShopInfo from "@/components/ui/ShopInfo";
import Dropdowns from "@/components/ui/Dropdowns";
import { BiHeart, BiUser } from "react-icons/bi";
import { IoClose, IoSearch } from "react-icons/io5";

function SidebarMenu({ isOpen, onClose }) {
  return (
    <div
      className={`${classes.sidebar} ${isOpen ? classes.open : classes.close}`}
    >
      <IoClose
        className={classes.icon}
        color="black"
        size={24}
        onClick={onClose}
      />
      <div className={classes.main}>
        <MainNav />
        <div className={classes.buttons}>
          <Button
            color="var(--light-color)"
            background="var(--dark-background)"
            rounded="var(--rounded-xs)"
            to="#"
            className={classes.btn}
          >
            <BiHeart color="white" size={20} />
            Wishlist
          </Button>
          <Button
            color="var(--light-color)"
            background="var(--dark-background)"
            rounded="var(--rounded-xs)"
            to="#"
            className={classes.btn}
          >
            <IoSearch size={20} />
            Search
          </Button>
        </div>
        <div className={classes.help}>
          <Link href="#">Need help?</Link>
          <ShopInfo />
        </div>
      </div>
      <div className={classes.footer}>
        <Button
          color="var(--light-color)"
          background="var(--dark-background)"
          rounded="var(--rounded-xs)"
          to="#"
          className={classes.btn}
        >
          <BiUser size={24} />
          Login
        </Button>
        <div className={classes.dropdowns}>
          <Dropdowns />
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
