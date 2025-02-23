import MainNav from "./MainNav";
import classes from "./sidebarMenu.module.css";
import Button from "@/components/ui/Button";
import { HiPlus } from "react-icons/hi2";
import { BiHeart, BiUser } from "react-icons/bi";
import { IoClose, IoSearch } from "react-icons/io5";
import Link from "next/link";

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
      <MainNav icon={<HiPlus size={16} />} />
      <div className={classes.buttons}>
        <Button
          color="var(--light-color)"
          background="var(--dark-background)"
          rounded="var(--rounded-xs)"
        >
          <BiHeart color="white" size={20} />
          Wishlist
        </Button>
        <Button
          color="var(--light-color)"
          background="var(--dark-background)"
          rounded="var(--rounded-xs)"
        >
          <IoSearch size={20} />
          Search
        </Button>
      </div>
      <div className={classes.help}>
        <Link href="#">Need help?</Link>
        <p>
          Address: 1234 Fashion Street, Suite 567,
          <br />
          New York, NY 10001
          <br />
          Email: <span>info@fashionshop.com</span>
          <br />
          Phone: <span>(212) 555-1234</span>
        </p>
      </div>
      <Button
        color="var(--light-color)"
        background="var(--dark-background)"
        rounded="var(--rounded-xs)"
      >
        <BiUser size={24} />
        Login
      </Button>
    </div>
  );
}

export default SidebarMenu;
