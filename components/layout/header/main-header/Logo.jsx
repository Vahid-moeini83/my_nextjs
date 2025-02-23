import Image from "next/image";
import Link from "next/link";
import classes from "./logo.module.css";

function HeaderLogo() {
  return (
    <div className={classes.logo}>
      <Link href="/">
        <Image src="/logo.svg" width={120} height={40} alt="logo of the site" />
      </Link>
    </div>
  );
}

export default HeaderLogo;
