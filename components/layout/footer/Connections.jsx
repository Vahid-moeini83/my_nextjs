import Link from "next/link";
import Logo from "../../ui/Logo";
import classes from "./connections.module.css";
import ShopInfo from "@/components/ui/ShopInfo";
import SocialMedia from "./SocialMedia";
import { MdArrowOutward } from "react-icons/md";
import GetDirectionLink from "@/components/ui/GetDirectionLink";

function Connections() {
  return (
    <div className={classes.connections}>
      <Logo />
      <ShopInfo />
      <GetDirectionLink />
      <SocialMedia />
    </div>
  );
}

export default Connections;
