import classes from "./connections.module.css";
import Logo from "../../ui/Logo";
import SocialMedia from "./SocialMedia";
import ShopInfo from "@/components/ui/ShopInfo";
import GetDirectionLink from "@/components/ui/GetDirectionLink";

function Connections() {
  return (
    <div className={classes.connections}>
      <Logo isCenter={false} />
      <ShopInfo />
      <GetDirectionLink />
      <SocialMedia />
    </div>
  );
}

export default Connections;
