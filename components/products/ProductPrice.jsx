import classes from "./productPrice.module.css";
import { formatPrice } from "@/utils/helpers";

function ProductPrice({ price, discount }) {
  return (
    <div className={classes.prices}>
      {discount > 0 && (
        <span className={classes.real}>{formatPrice(price)}</span>
      )}
      <span className={classes.final}>
        {formatPrice(price - price * (discount / 100))}
      </span>
    </div>
  );
}

export default ProductPrice;
