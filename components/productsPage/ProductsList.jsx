import ProductCard from "../products/ProductCard";
import classes from "./productsList.module.css";

function ProductsList({ products, gridValue }) {
  if (!products || products.length === 0)
    return <p className={classes.empty}>No products found :(</p>;

  return (
    <div className={classes.section}>
      <div className="container">
        <div className={`${classes.grid} ${classes[gridValue]}`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} isInGrid={true} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
