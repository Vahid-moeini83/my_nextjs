"use client";

import { useState } from "react";
import classes from "./productAddToCart.module.css";
import ProductQuantity from "./ProductQuantity";
import ProductBuyPrice from "./ProductBuyPrice";

function ProductAddToCart({ finalPrice }) {
  const [quantity, setQuantity] = useState(1);

  function handleIncQuantity() {
    setQuantity(quantity + 1);
  }

  function handleDecQuantity() {
    if (quantity >= 2) setQuantity(quantity - 1);
  }

  return (
    <div className={classes.wrapper}>
      <ProductQuantity
        quantity={quantity}
        onIncQuantity={handleIncQuantity}
        onDecQuantity={handleDecQuantity}
      />
      <ProductBuyPrice quantity={quantity} finalPrice={finalPrice} />
    </div>
  );
}

export default ProductAddToCart;
