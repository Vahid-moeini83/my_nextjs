import Link from "next/link";
import classes from "./cardTitle.module.css";

function CardTitle({ title, to }) {
  return (
    <Link href={to}>
      <h4 className={classes.title}>{title}</h4>
    </Link>
  );
}

export default CardTitle;
