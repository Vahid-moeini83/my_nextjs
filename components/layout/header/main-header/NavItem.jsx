"use client";

import Link from "next/link";
import classes from "./navItem.module.css";
import SubList from "./SubList";
import useWindowWidth from "@/hooks/useWindowWidth";
import { HiChevronDown, HiMinus, HiPlus } from "react-icons/hi2";
import { useState } from "react";

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
          <>
            {isOpen ? (
              <HiMinus onClick={handleToggleSubList} size={16} />
            ) : (
              <HiPlus onClick={handleToggleSubList} size={16} />
            )}
          </>
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
