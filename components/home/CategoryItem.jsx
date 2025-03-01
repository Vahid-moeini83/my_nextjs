import Image from "next/image";
import classes from "./categoryItem.module.css";
import Link from "next/link";
import useWindowWidth from "@/hooks/useWindowWidth";

function CategoryItem({ title, src }) {
  const windowWidth = useWindowWidth();

  const path = `/images/home/categories/${
    src === "keyboard" || src === "monitor" ? `${src}.avif` : `${src}.webp`
  }`;

  return (
    <div className={classes.item}>
      <Link href="/collections/gaming">
        <div className={classes.image}>
          <Image
            src={path}
            width={
              windowWidth > 1150
                ? 140
                : windowWidth > 768
                ? 180
                : windowWidth > 480
                ? 160
                : 100
            }
            height={
              windowWidth > 1150
                ? 140
                : windowWidth > 768
                ? 180
                : windowWidth > 480
                ? 160
                : 100
            }
            alt={title}
          />
        </div>
      </Link>
      <Link href="/collections/gaming">
        <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default CategoryItem;
