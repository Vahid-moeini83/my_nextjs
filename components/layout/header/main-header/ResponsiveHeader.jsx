import classes from "./responsiveHeader.module.css";
import Logo from "../../../ui/Logo";
import Sidebar from "./Sidebar";
import SubNav from "./SubNav";

function ResponsiveHeader() {
  return (
    <div className={`container ${classes.header}`}>
      <Sidebar />
      <Logo />
      <SubNav />
    </div>
  );
}

export default ResponsiveHeader;
