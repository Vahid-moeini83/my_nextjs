import Link from "next/link";
import classes from "./getDirection.module.css";
import { MdArrowOutward } from "react-icons/md";

function GetDirectionLink() {
  return (
    <div className={classes.link}>
      <Link href="#">
        Get Direction
        <MdArrowOutward size={18} />
      </Link>
    </div>
  );
}

export default GetDirectionLink;
