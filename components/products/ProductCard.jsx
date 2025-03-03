import CardColors from "./CardColors";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import classes from "./productCard.module.css";
import ProductDiscount from "./ProductDiscount";
import ProductPrice from "./ProductPrice";

function ProductCard({ product, addToCartBtn }) {
  const productPath = `/collections/gaming/${product.id}`;

  return (
    <div className={classes.card}>
      {product.discount > 0 && <ProductDiscount discount={product.discount} />}
      <CardImage images={product.image} to={productPath} alt={product.name} />
      <div className={classes.details}>
        <CardTitle title={product.name} to={productPath} />
        <ProductPrice price={product.price} discount={product.discount} />
        <CardColors colors={product.colors} />
      </div>
    </div>

    // Post card buttons when hover it
  );
}

export default ProductCard;
