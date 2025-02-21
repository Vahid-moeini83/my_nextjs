// Components
import TopHeaderHelpers from "./TopHeaderHelpers";
import TopHeaderSuggestions from "./TopHeaderSuggestions";
import TopHeaderNav from "./TopHeaderNav";

// styles
import classes from "./topHeader.module.css";

function TopHeader() {
  return (
    <div className={classes.header}>
      <TopHeaderNav />
      <TopHeaderSuggestions />
      <TopHeaderHelpers />
    </div>
  );
}

export default TopHeader;
