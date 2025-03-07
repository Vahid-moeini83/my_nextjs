import classes from "./productCard.module.css";
import ProductImage from "./ProductImage";
import ProductButtons from "./ProductButtons";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";
import ProductColors from "./ProductColors";

function ProductCard({ product, addToCartBtn, border, isInGrid, gridValue }) {
  const productPath = `/collections/gaming/${product.id}`;
  const hasFullWidth = gridValue === "grid-1";

  return (
    <div
      className={`${classes.card} ${hasFullWidth ? classes.flex : ""} ${
        isInGrid ? classes.padding : ""
      } ${border ? classes.border : ""}`}
    >
      <ProductImage
        images={product.image}
        to={productPath}
        alt={product.name}
        discount={product.discount}
        isInGrid={isInGrid}
        gridValue={gridValue}
      />
      {!hasFullWidth && (
        <div className={`${hasFullWidth ? classes.visible : classes.buttons}`}>
          <ProductButtons
            addToCartBtn={addToCartBtn}
            isInGrid={isInGrid}
            gridValue={gridValue}
          />
        </div>
      )}
      <div
        className={`${classes.details} ${hasFullWidth ? classes.gap : ""} ${
          hasFullWidth ? classes.biggerDetails : ""
        }`}
      >
        <ProductTitle title={product.name} to={productPath} />
        <ProductPrice price={product.price} discount={product.discount} />
        <ProductColors colors={product.colors} />
        {hasFullWidth && (
          <ProductButtons
            addToCartBtn={addToCartBtn}
            isInGrid={isInGrid}
            gridValue={gridValue}
          />
        )}
      </div>
      {addToCartBtn && <button className={classes.add}>ADD TO CART</button>}
    </div>
  );
}

export default ProductCard;
