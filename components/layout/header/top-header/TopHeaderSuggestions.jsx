"use client";

// Styles
import classes from "./topHeaderSuggestions.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

const suggestions = [
  { id: 1, text: "Ultimate Gaming Gear Sale - Don’t Miss These Deals!" },
  { id: 2, text: "Power Up with Premium Gaming Gear - Prices Slashed!" },
  { id: 3, text: "Epic Gaming Gear Sale - Get Up to 50% Off!" },
];

SwiperCore.use([Autoplay]);

function TopHeaderSuggestions() {
  return (
    <div className={classes.suggestions}>
      <Swiper
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
