import classes from "./pageOptions.module.css";
import ProductsFilter from "./ProductsFilter";
import ProductsGrid from "./ProductsGrid";
import ProductsSort from "./ProductsSort";

function PageOptions({ updateFilter, gridValue, onGridChange }) {
  return (
    <div className="container">
      <div className={classes.options}>
        <ProductsFilter updateFilter={updateFilter} />
        <ProductsGrid gridValue={gridValue} onGridChange={onGridChange} />
        <ProductsSort updateFilter={updateFilter} />
      </div>
    </div>
  );
}

export default PageOptions;
