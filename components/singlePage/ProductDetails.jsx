import classes from "./productDetails.module.css";
import ProductName from "./ProductName";
import ProductValue from "./ProductValue";
import ProductColors from "../products/ProductColors";
import ProductAddToCart from "./ProductAddToCart";
import ProductServices from "./ProductServices";
import ServicesDescription from "./ServicesDescription";
import ProductGuarantee from "./ProductGuarantee";

function ProductDetails({ name, image, price, discount, colors }) {
  const finalPrice = discount !== 0 ? price - price * (discount / 100) : price;

  return (
    <div className={classes.details}>
      <ProductName name={name} />
      <ProductValue price={price} discount={discount} finalPrice={finalPrice} />
      <ProductColors colors={colors} hasText={true} />
      <ProductAddToCart
        name={name}
        image={image}
        finalPrice={finalPrice}
        colors={colors}
      />
      <ProductServices />
      <ServicesDescription />
      <ProductGuarantee />
    </div>
  );
}

export default ProductDetails;
