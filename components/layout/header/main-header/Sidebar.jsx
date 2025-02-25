"use client";

import { FaBarsStaggered } from "react-icons/fa6";
import SidebarMenu from "./SidebarMenu";
import Overlay from "@/components/ui/Overlay";
import { createPortal } from "react-dom";
import { useSidebar } from "@/hooks/useSidebar";

function Sidebar() {
  const { isMenuOpen, handleOpenMenu, handleCloseMenu } = useSidebar();

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
