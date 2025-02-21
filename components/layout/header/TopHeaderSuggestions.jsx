"use client";

// Styles
import classes from "./topHeaderSuggestions.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay]);

function TopHeaderSuggestions() {
  return (
    <div className={classes.suggestions}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 4000,
          centeredSlides: true,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <p className="slide-text">
            Power Up with Premium Gaming Gear - Prices Slashed!
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="slide-text">
            Epic Gaming Gear Sale - Get Up to 50% Off!
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TopHeaderSuggestions;
