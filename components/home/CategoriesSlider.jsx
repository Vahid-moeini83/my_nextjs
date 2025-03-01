"use client";

import classes from "./categoriesSlider.module.css";
import CategoryItem from "./CategoryItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import NavigationButtons from "../ui/NavigationButtons";
import useWindowWidth from "@/hooks/useWindowWidth";

function CategoriesSlider({ items }) {
  const windowWidth = useWindowWidth();

  return (
    <div className={classes.box}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={windowWidth >= 1150 ? 6 : windowWidth >= 768 ? 3 : 2}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
        }}
        className={`custom-slider category-slider ${classes.slider}`}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <CategoryItem title={item.name} src={item.id} />
          </SwiperSlide>
        ))}
        <NavigationButtons />
      </Swiper>
    </div>
  );
}

export default CategoriesSlider;
