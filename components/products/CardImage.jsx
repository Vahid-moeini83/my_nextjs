"use client";

import useWindowWidth from "@/hooks/useWindowWidth";
import classes from "./cardImage.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function CardImage({ images, to, alt }) {
  const [isHovered, setIsHovered] = useState(false);
  const windowWidth = useWindowWidth();

  return (
    <div className={classes.box}>
      <Link href={to}>
        <Image
          src={isHovered ? images[2] : images[1]}
          width={windowWidth > 768 ? 360 : windowWidth > 480 ? 320 : 420}
          height={320}
          alt={alt}
          className={classes.image}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </Link>
    </div>
  );
}

export default CardImage;
