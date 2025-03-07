import classes from "./productCard.module.css";
import ProductDiscount from "./ProductDiscount";
import ProductImage from "./ProductImage";
import ProductButtons from "./ProductButtons";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";
import ProductColors from "./ProductColors";

function ProductCard({ product, addToCartBtn, border, isInGrid }) {
  const productPath = `/collections/gaming/${product.id}`;

  return (
    <div
      className={`${classes.card} ${isInGrid ? classes.padding : ""} ${
        border && classes.border
      }`}
    >
      <ProductDiscount discount={product.discount} />
      <ProductImage
        images={product.image}
        to={productPath}
        alt={product.name}
        isInGrid={isInGrid}
      />
      <div className={classes.buttons}>
        <ProductButtons addToCartBtn={addToCartBtn} isInGrid={isInGrid} />
      </div>
      <div className={classes.details}>
        <ProductTitle title={product.name} to={productPath} />
        <ProductPrice price={product.price} discount={product.discount} />
        <ProductColors colors={product.colors} />
      </div>
      {addToCartBtn && <button className={classes.add}>ADD TO CART</button>}
    </div>
  );
}

export default ProductCard;
