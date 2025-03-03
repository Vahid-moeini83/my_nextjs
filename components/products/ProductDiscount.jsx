import classes from "./productDiscount.module.css";

function ProductDiscount({ discount }) {
  return <span className={classes.discount}>-{discount}%</span>;
}

export default ProductDiscount;
