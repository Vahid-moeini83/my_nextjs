import classes from "./productDetails.module.css";
import ProductName from "./ProductName";
import ProductValue from "./ProductValue";
import ProductColors from "../products/ProductColors";
import ProductAddToCart from "./ProductAddToCart";
import ProductServices from "./ProductServices";
import ServicesDescription from "./ServicesDescription";
import ProductGuarantee from "./ProductGuarantee";

function ProductDetails({ name, price, discount, colors }) {
  const finalPrice = discount !== 0 && price - price * (discount / 100);

  return (
    <div className={classes.details}>
      <ProductName name={name} />
      <ProductValue price={price} discount={discount} finalPrice={finalPrice} />
      <ProductColors colors={colors} hasText={true} />
      <ProductAddToCart finalPrice={finalPrice} />
      <ProductServices />
      <ServicesDescription />
      <ProductGuarantee />
    </div>
  );
}

export default ProductDetails;
