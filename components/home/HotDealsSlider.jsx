"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../products/ProductCard";
import { Pagination } from "swiper/modules";
import useWindowWidth from "@/hooks/useWindowWidth";

function HotDealsSlider({ products }) {
  const windowWidth = useWindowWidth();

  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={
        windowWidth > 1150
          ? 4
          : windowWidth > 768
          ? 3
          : windowWidth > 480
          ? 2
          : 1
      }
      spaceBetween={windowWidth > 1150 ? 32 : 16}
      pagination={{ clickable: true }}
      className="custom-slider"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HotDealsSlider;
