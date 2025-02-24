import NavItem from "./NavItem";
import classes from "./mainNav.module.css";
import { mainNavItems } from "@/utils/data";

function MainNav({ icon }) {
  return (
    <div className={classes.nav}>
      <ul>
        {mainNavItems.map((item) => (
          <NavItem
            title={item.name}
            icon={item.name !== "Buy now" && icon}
            key={item.name}
            subList={item.subList}
          />
        ))}
      </ul>
    </div>
  );
}

export default MainNav;
