"use client";

import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./introSlider.module.css";
import useWindowWidth from "@/hooks/useWindowWidth";
import IntroImage from "./IntroImage";

function IntroSlider() {
  const windowWidth = useWindowWidth();

  return (
    <>
      {windowWidth < 768 && (
        <Swiper slidesPerView={1.5} spaceBetween={10}>
          <SwiperSlide>
            <IntroImage
              image="/images/home/intro-1.webp"
              to="/collections/gaming"
              title="Popular."
              description="Every piece is made to last beyond the season"
            />
          </SwiperSlide>
          <SwiperSlide>
            <IntroImage
              image="/images/home/intro-2.webp"
              to="/collections/gaming"
              title="Best Seller."
              description="Every piece is made to last beyond the season"
            />
          </SwiperSlide>
        </Swiper>
      )}
      {windowWidth >= 768 && (
        <div className={classes.images}>
          <IntroImage
            image="/images/home/intro-1.webp"
            to="/collections/gaming"
            title="Popular."
            description="Every piece is made to last beyond the season"
          />
          <IntroImage
            image="/images/home/intro-2.webp"
            to="/collections/gaming"
            title="Best Seller."
            description="Every piece is made to last beyond the season"
          />
        </div>
      )}
    </>
  );
}

export default IntroSlider;
