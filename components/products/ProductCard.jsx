import classes from "./productCard.module.css";
import ProductImage from "./ProductImage";
import ProductButtons from "./ProductButtons";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";
import ProductColors from "./ProductColors";

function ProductCard({ product, addToCartBtn, border, isInGrid, gridValue }) {
  const productPath = `/collections/gaming/${product.id}`;
  const hasFullWidth = gridValue === "grid-1";
  const hasLongWidth =
    gridValue === "grid-2" || gridValue === "grid-3" || gridValue === "grid-4";

  return (
    <div
      className={`${classes.card} ${
        hasLongWidth ? classes.longCard : classes.shortCard
      } ${hasFullWidth ? classes.flex : ""} ${
        isInGrid ? classes.padding : ""
      } ${border ? classes.border : ""}`}
    >
      <ProductImage
        images={product.image}
        to={productPath}
        alt={product.name}
        discount={product.discount}
        addToCartBtn={addToCartBtn}
        isInGrid={isInGrid}
        gridValue={gridValue}
      />

      <div
        className={`${classes.details} ${hasFullWidth ? classes.gap : ""} ${
          hasFullWidth ? classes.biggerDetails : ""
        }`}
      >
        <ProductTitle
          title={product.name}
          to={productPath}
          gridValue={gridValue}
        />
        <ProductPrice price={product.price} discount={product.discount} />
        <ProductColors gridValue={gridValue} colors={product.colors} />
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
