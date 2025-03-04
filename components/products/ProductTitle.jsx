import Link from "next/link";
import classes from "./productTitle.module.css";

function ProductTitle({ title, to }) {
  return (
    <Link href={to}>
      <h4 className={classes.title}>{title}</h4>
    </Link>
  );
}

export default ProductTitle;
