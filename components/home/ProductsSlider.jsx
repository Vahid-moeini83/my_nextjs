"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "../products/ProductCard";
import NavigationButtons from "../ui/NavigationButtons";
import useWindowWidth from "@/hooks/useWindowWidth";

function ProductsSlider({
  products,
  navigation = false,
  addToCartBtn = false,
  cardBorder = false,
}) {
  const windowWidth = useWindowWidth();

  return (
    <Swiper
      modules={[Pagination, ...(navigation ? [Navigation] : [])]}
      slidesPerView={windowWidth > 1150 ? 4 : windowWidth > 768 ? 3 : 2}
      spaceBetween={windowWidth > 1150 ? 32 : 16}
      navigation={
        navigation
          ? {
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }
          : false
      }
      pagination={{ clickable: true }}
      className="custom-slider"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard
            product={product}
            addToCartBtn={addToCartBtn}
            border={cardBorder}
          />
        </SwiperSlide>
      ))}
      {navigation && <NavigationButtons />}
    </Swiper>
  );
}

export default ProductsSlider;
