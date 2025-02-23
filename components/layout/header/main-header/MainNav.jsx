import NavItem from "./NavItem";
import classes from "./mainNav.module.css";
import { mainNavItems } from "@/utils/data";

function MainNav({ icon }) {
  return (
    <div className={classes.nav}>
      <ul>
        {mainNavItems.map((item) => (
          <NavItem title={item} icon={item !== "Buy now" && icon} key={item} />
        ))}
        {/* <NavItem title="Home" icon={<HiChevronDown size={16} />} /> */}
      </ul>
    </div>
  );
}

export default MainNav;
