import ProductCard from "../products/ProductCard";
import classes from "./productsList.module.css";

function ProductsList({ products, gridValue }) {
  if (!products || products.length === 0)
    return <p className={classes.empty}>No products found :(</p>;

  return (
    <div className={classes.section}>
      <div className="container">
        <div className={`${classes.grid} ${classes[gridValue]}`}>
          {products.map((product, index) => (
            <div
              className={classes.card}
              style={{ animationDelay: `${index * 0.1}s` }}
              key={product.id}
            >
              <ProductCard
                isInGrid={true}
                product={product}
                gridValue={gridValue}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
