import classes from "./productValue.module.css";
import { formatPrice } from "@/utils/helpers";

function ProductValue({ price, discount, finalPrice }) {
  const hasDiscount = discount !== 0;

  return (
    <div className={classes.values}>
      {hasDiscount && (
        <span className={classes.final}>{formatPrice(finalPrice)}</span>
      )}
      <span className={hasDiscount ? classes.real : classes.value}>
        {formatPrice(price)}
      </span>
      {hasDiscount && <span className={classes.discount}>{discount}% OFF</span>}
    </div>
  );
}

export default ProductValue;
