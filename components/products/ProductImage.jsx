"use client";

import { useEffect, useRef, useState } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import classes from "./productImage.module.css";
import Image from "next/image";
import Link from "next/link";
import ProductDiscount from "./ProductDiscount";
import ProductButtons from "./ProductButtons";

function ProductImage({
  images,
  to,
  alt,
  discount,
  addToCartBtn,
  isInGrid,
  gridValue,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const windowWidth = useWindowWidth();
  const imageBoxRef = useRef(null);
  const hasFullWidth = gridValue === "grid-1";
  const hasLongWidth =
    gridValue === "grid-2" || gridValue === "grid-3" || gridValue === "grid-4";

  useEffect(() => {
    const cardElement = imageBoxRef.current?.parentElement;

    function mouseEnter() {
      setShowButtons(true);
    }

    function mouseLeave() {
      setShowButtons(false);
    }

    if (cardElement) {
      cardElement.addEventListener("mouseenter", mouseEnter);
      cardElement.addEventListener("mouseleave", mouseLeave);
    }

    return () => {
      cardElement.removeEventListener("mouseenter", mouseEnter);
      cardElement.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <div
      ref={imageBoxRef}
      className={`${hasFullWidth ? classes.fullWidth : classes.box} ${
        hasLongWidth ? classes.longHeight : classes.shortHeight
      }`}
    >
      <ProductDiscount discount={discount} />
      <Link href={to}>
        <Image
          src={isHovered && windowWidth > 768 ? images[2] : images[1]}
          width={windowWidth > 768 ? 360 : windowWidth > 480 ? 320 : 180}
          height={320}
          alt={alt}
          className={`${classes.image} ${isInGrid ? classes.size : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </Link>
      {!hasFullWidth && (
        <div className={classes.buttons}>
          <ProductButtons
            addToCartBtn={addToCartBtn}
            isInGrid={isInGrid}
            gridValue={gridValue}
            showButtons={showButtons}
          />
        </div>
      )}
    </div>
  );
}

export default ProductImage;
