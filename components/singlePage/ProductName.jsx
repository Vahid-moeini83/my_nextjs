import classes from "./productName.module.css";

function ProductName({ name }) {
  return <h2 className={classes.name}>{name}</h2>;
}

export default ProductName;
