"use client";

import Image from "next/image";
import { useState } from "react";

function ProductImage({ src, alt, width, height }) {
  const [imageSrc, setImageSrc] = useState(src);

  function handleError() {
    const alternativeImageSrc = "/images/product/alternative.webp";
    setImageSrc(alternativeImageSrc);
  }

  return (
    <Image
      src={imageSrc}
      width={width}
      height={height}
      alt={alt}
      onError={handleError}
    />
  );
}

export default ProductImage;
