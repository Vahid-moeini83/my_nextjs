import classes from "./responsiveHeader.module.css";
import HeaderLogo from "./Logo";
import Sidebar from "./Sidebar";
import SubNav from "./SubNav";

function ResponsiveHeader() {
  return (
    <div className={`container ${classes.header}`}>
      <Sidebar />
      <HeaderLogo />
      <SubNav />
    </div>
  );
}

export default ResponsiveHeader;
