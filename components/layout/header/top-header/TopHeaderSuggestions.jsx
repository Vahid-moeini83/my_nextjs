"use client";

import classes from "./topHeaderSuggestions.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { suggestions } from "@/utils/data";

function TopHeaderSuggestions() {
  return (
    <div className={classes.suggestions}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          centeredSlides: true,
          disableOnInteraction: false,
        }}
      >
        {suggestions.map((suggestion) => (
          <SwiperSlide key={suggestion.id}>
            <p>{suggestion.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopHeaderSuggestions;
