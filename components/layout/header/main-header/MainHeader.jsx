import classes from "./mainHeader.module.css";
import MainHeaderBelow from "./MainHeaderBelow";
import MainHeaderTop from "./MainHeaderTop";
import ResponsiveHeader from "./ResponsiveHeader";

function MainHeader() {
  return (
    <div className={classes.header}>
      <MainHeaderTop />
      <span></span>
      <MainHeaderBelow />
      <ResponsiveHeader />
    </div>
  );
}

export default MainHeader;
