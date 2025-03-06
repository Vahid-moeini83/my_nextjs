import classes from "./pagePath.module.css";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";

function PagePath({ productName }) {
  return (
    <div className={classes.path}>
      <Link href="/">Home</Link>
      <HiChevronRight size={14} />
      <span>{productName}</span>
    </div>
  );
}

export default PagePath;
