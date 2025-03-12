import Image from "next/image";
import Link from "next/link";
import classes from "./logo.module.css";

function Logo({ isCenter }) {
  return (
    <div
      className={`${classes.logo} ${isCenter ? classes.center : classes.left}`}
    >
      <Link href="/">
        <Image src="/logo.svg" width={140} height={40} alt="logo of the site" />
      </Link>
    </div>
  );
}

export default Logo;
