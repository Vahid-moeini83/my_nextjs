import classes from "./productsFilter.module.css";
import FilterSidebar from "./FilterSidebar";
import { useSidebar } from "@/hooks/useSidebar";
import { CiFilter } from "react-icons/ci";
import { createPortal } from "react-dom";
import Overlay from "../ui/Overlay";

function ProductsFilter({ updateFilter }) {
  const { isMenuOpen, handleCloseMenu, handleOpenMenu } = useSidebar();

  return (
    <div className={classes.filter}>
      <div className={classes.filterButton} onClick={handleOpenMenu}>
        <CiFilter size={24} />
        Filter
      </div>
      <FilterSidebar
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        updateFilter={updateFilter}
      />
      {isMenuOpen &&
        createPortal(<Overlay onClose={handleCloseMenu} />, document.body)}
    </div>
  );
}

export default ProductsFilter;
