import Link from "next/link";
import classes from "./productTitle.module.css";

function ProductTitle({ title, to, gridValue }) {
  const hasFullWidth = gridValue === "grid-1";

  return (
    <Link href={to}>
      <h4
        className={`${classes.title} ${
          hasFullWidth ? classes.bigTitle : classes.smallTitle
        }`}
      >
        {title}
      </h4>
    </Link>
  );
}

export default ProductTitle;
