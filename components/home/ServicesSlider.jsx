"use client";

import ServiceItem from "./ServiceItem";
import classes from "./servicesSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { IoCubeOutline } from "react-icons/io5";
import { GoCreditCard } from "react-icons/go";
import { IoMdReturnLeft } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";

function ServicesSlider() {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      className={`custom-slider ${classes.slider}`}
    >
      <SwiperSlide>
        <ServiceItem
          icon={<IoCubeOutline size={32} />}
          title="Free Shipping"
          description="You will love at great low prices"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ServiceItem
          icon={<GoCreditCard size={32} />}
          title="Flexible Patment"
          description="Pay with Multiple Credit Cards"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ServiceItem
          icon={<IoMdReturnLeft size={32} />}
          title="14 Day Returns"
          description="Within 30 days for an exchange"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ServiceItem
          icon={<TfiHeadphoneAlt size={32} />}
          title="Premium Support"
          description="Outstanding premium support"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default ServicesSlider;
