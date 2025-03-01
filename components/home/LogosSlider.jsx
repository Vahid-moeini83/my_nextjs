"use client";

import Image from "next/image";
import classes from "./logoSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import useWindowWidth from "@/hooks/useWindowWidth";

function LogosSlider({ logos }) {
  const windowWidth = useWindowWidth();

  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={windowWidth >= 1150 ? 6 : windowWidth > 768 ? 3 : 2}
      pagination={{
        clickable: true,
      }}
      className="custom-slider"
    >
      {logos.map((logo) => (
        <SwiperSlide key={logo}>
          <div className={classes.image}>
            <Image
              src={`/images/home/logo/${logo}.webp`}
              width={160}
              height={96}
              layout="responsive"
              alt={logo}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default LogosSlider;
