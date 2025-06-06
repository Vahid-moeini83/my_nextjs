"use client";

import Link from "next/link";
import classes from "./subNav.module.css";
import SidebarSearch from "./SidebarSearch";
import ShoppingBag from "@/components/ui/ShoppingBag";
import Overlay from "@/components/ui/Overlay";
import { IoSearchSharp } from "react-icons/io5";
import { useSidebar } from "@/hooks/useSidebar";
import { createPortal } from "react-dom";
import { useEffect } from "react";

function SubNav() {
  const { isMenuOpen, handleOpenMenu, handleCloseMenu } = useSidebar();

  useEffect(() => {
    if (isMenuOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
  });

  return (
    <div className={classes.nav}>
      <ul>
        <li>
          <Link href="#">
            <IoSearchSharp onClick={handleOpenMenu} size={20} />
          </Link>
        </li>
        <li>
          <ShoppingBag />
        </li>
      </ul>
      <SidebarSearch isOpen={isMenuOpen} onClose={handleCloseMenu} />
      {isMenuOpen &&
        createPortal(<Overlay onClose={handleCloseMenu} />, document.body)}
    </div>
  );
}

export default SubNav;
