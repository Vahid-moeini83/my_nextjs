"use client";

import classes from "./productImages.module.css";
import Image from "next/image";
import NavigationButtons from "../ui/NavigationButtons";
import useWindowWidth from "@/hooks/useWindowWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";

function ProductImages({ images }) {
  const [zoomPosition, setZoomPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
  });
  const [activeImage, setActiveImage] = useState(0);
  const swiperRef = useRef();
  const imageRef = useRef();
  const windowWidth = useWindowWidth();

  function handleActiveImage(index) {
    setActiveImage(index);

    if (swiperRef.current) swiperRef.current.slideTo(index);
  }

  function handleMouseMove(e) {
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y, visible: true });
  }

  function handleMouseLeave() {
    setZoomPosition((prev) => ({ ...prev, visible: false }));
  }

  return (
    <>
      <div className={classes.wrapper}>
        <ul className={classes.images}>
          {images.map((image, index) => (
            <li
              className={`${
                activeImage === index ? classes.active : classes.inactive
              }`}
              onClick={() => handleActiveImage(index)}
              key={index}
            >
              <Image src={image} fill alt={`Image ${index}`} />
            </li>
          ))}
        </ul>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveImage(swiper.activeIndex)}
          className={`custom-slider ${classes.slider}`}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className={classes.slide}>
              <div
                className={classes.image}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                ref={imageRef}
              >
                <Image src={image} fill alt={`image ${index}`} />
              </div>
            </SwiperSlide>
          ))}
          <NavigationButtons />
        </Swiper>
      </div>
      {zoomPosition.visible && windowWidth > 768 && (
        <div className={classes.overlay}>
          <div
            className={classes.zoomedImage}
            style={{
              backgroundImage: `url(${images[activeImage]})`,
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
            }}
          />
        </div>
      )}
    </>
  );
}

export default ProductImages;
