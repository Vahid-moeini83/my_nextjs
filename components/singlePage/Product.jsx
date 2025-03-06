import classes from "./product.module.css";
import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";

function Product({ image, name, price, discount, colors }) {
  return (
    <section className={classes.section}>
      <div className={classes.product}>
        <ProductImages images={image} />
        <ProductDetails
          name={name}
          price={price}
          discount={discount}
          colors={colors}
        />
      </div>
    </section>
  );
}

export default Product;
