import classes from "./productDiscount.module.css";

function ProductDiscount({ discount }) {
  if (!discount) return;

  return <span className={classes.discount}>-{discount}%</span>;
}

export default ProductDiscount;
