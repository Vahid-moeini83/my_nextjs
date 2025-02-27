import SearchProducts from "@/components/products/SearchProducts";
import classes from "./searchBox.module.css";
import SearchBoxInput from "./SearchBoxInput";
import { getProducts } from "@/lib/faker";

function SearchBox() {
  const products = getProducts(5);

  return (
    <div className={classes.search}>
      <SearchBoxInput />
      <SearchProducts products={products} />
    </div>
  );
}

export default SearchBox;
