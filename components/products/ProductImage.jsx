"use client";

import classes from "./productImage.module.css";
import Image from "next/image";
import Link from "next/link";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useState } from "react";

function ProductImage({ images, to, alt, isInGrid }) {
  const [isHovered, setIsHovered] = useState(false);
  const windowWidth = useWindowWidth();

  return (
    <div className={classes.box}>
      <Link href={to}>
        <Image
          src={isHovered && windowWidth > 768 ? images[2] : images[1]}
          width={windowWidth > 768 ? 360 : windowWidth > 480 ? 320 : 420}
          height={320}
          layout={isInGrid ? "responsive" : ""}
          objectFit={isInGrid ? "cover" : ""}
          alt={alt}
          className={`${classes.image} ${isInGrid ? classes.size : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </Link>
    </div>
  );
}

export default ProductImage;
