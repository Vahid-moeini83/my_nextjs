"use client";

import Link from "next/link";
import classes from "./navItem.module.css";
import SubList from "./SubList";
import ToggleListIcon from "@/components/ui/ToggleListIcon";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

function NavItem({ title, subList }) {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleSubList() {
    setIsOpen(!isOpen);
  }

  return (
    <li className={classes.item}>
      <Link href="#">
        <span>{title}</span>
        {windowWidth < 1150 && title !== "Buy now" && (
          <ToggleListIcon
            isOpen={isOpen}
            onToggle={handleToggleSubList}
            color="dark"
          />
        )}
        {windowWidth > 1150 && title !== "Buy now" && (
          <HiChevronDown size={16} />
        )}
      </Link>
      {windowWidth < 1150 && title !== "Buy now" && (
        <SubList subList={subList} isOpen={isOpen} />
      )}
    </li>
  );
}

export default NavItem;
