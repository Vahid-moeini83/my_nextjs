import Link from "next/link";
import Logo from "../../ui/Logo";
import classes from "./connections.module.css";
import ShopInfo from "@/components/ui/ShopInfo";
import SocialMedia from "./SocialMedia";
import { MdArrowOutward } from "react-icons/md";

function Connections() {
  return (
    <div className={classes.connections}>
      <Logo />
      <ShopInfo />
      <Link href="#">
        Get Direction
        <MdArrowOutward size={18} />
      </Link>
      <SocialMedia />
    </div>
  );
}

export default Connections;
