import Category from "./Category";
import classes from "./mainHeaderBelow.module.css";
import MainNav from "./MainNav";
import SupportCenter from "./SupportCenter";

function MainHeaderBelow() {
  return (
    <div className={`container ${classes.header}`}>
      <div className={classes.nav}>
        <Category />
        <MainNav />
      </div>
      <SupportCenter />
    </div>
  );
}

export default MainHeaderBelow;
