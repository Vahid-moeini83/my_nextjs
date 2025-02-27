"use client";

import SidebarMenu from "./SidebarMenu";
import Overlay from "@/components/ui/Overlay";
import { useSidebar } from "@/hooks/useSidebar";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaBarsStaggered } from "react-icons/fa6";

function Sidebar() {
  const { isMenuOpen, handleOpenMenu, handleCloseMenu } = useSidebar();

  useEffect(() => {
    if (isMenuOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
  });

  return (
    <div>
      <FaBarsStaggered onClick={handleOpenMenu} size={20} />
      <SidebarMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
      {isMenuOpen &&
        createPortal(<Overlay onClose={handleCloseMenu} />, document.body)}
    </div>
  );
}

export default Sidebar;
