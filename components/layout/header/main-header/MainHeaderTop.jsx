import Logo from "./Logo";
import SearchBox from "./SearchBox";
import SubLinks from "./SubLinks";
import classes from "./mainHeaderTop.module.css";

function MainHeaderTop() {
  return (
    <div className={`container ${classes.header}`}>
      <Logo />
      <SearchBox />
      <SubLinks />
    </div>
  );
}

export default MainHeaderTop;
