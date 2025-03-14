"use client";

import { useEffect, useRef, useState } from "react";
import classes from "./productAddToCart.module.css";
import ProductQuantity from "./ProductQuantity";
import ProductBuyPrice from "./ProductBuyPrice";
import ProductStickyCard from "./ProductStickyCard";

function ProductAddToCart({ name, image, finalPrice, colors }) {
  const targetRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [isPassed, setIsPassed] = useState(false);

  function handleIncQuantity() {
    setQuantity(quantity + 1);
  }

  function handleDecQuantity() {
    if (quantity >= 2) setQuantity(quantity - 1);
  }

  useEffect(() => {
    function handleScroll() {
      if (targetRef.current) {
        const { bottom } = targetRef.current.getBoundingClientRect();

        bottom <= 0 ? setIsPassed(true) : setIsPassed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={targetRef} className={classes.wrapper}>
      <ProductQuantity
        quantity={quantity}
        onIncQuantity={handleIncQuantity}
        onDecQuantity={handleDecQuantity}
      />
      <ProductBuyPrice quantity={quantity} finalPrice={finalPrice} />
      <ProductStickyCard
        name={name}
        image={image}
        colors={colors}
        quantity={quantity}
        onIncQuantity={handleIncQuantity}
        onDecQuantity={handleDecQuantity}
        finalPrice={finalPrice}
        isPassed={isPassed}
      />
    </div>
  );
}

export default ProductAddToCart;
