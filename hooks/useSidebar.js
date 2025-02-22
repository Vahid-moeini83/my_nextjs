import { useState } from "react";

export function useSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return { isMenuOpen, handleOpenMenu, handleCloseMenu };
}
