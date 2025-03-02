"use client";

import Image from "next/image";
import CommentReview from "./CommentReview";
import classes from "./commentsSlider.module.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Pagination } from "swiper/modules";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useWindowWidth from "@/hooks/useWindowWidth";

function CommentsSlider({ comments }) {
  const [textSlider, setTextSlider] = useState(null);
  const [imageSlider, setImageSlider] = useState(null);
  const windowWidth = useWindowWidth();

  function handleSliding(swiper) {
    if (textSlider && imageSlider) {
      textSlider.slideTo(swiper.activeIndex);
      imageSlider.slideTo(swiper.activeIndex);
    }
  }

  return (
    <div className={classes.wrapper}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Navigation, Pagination, Controller]}
        navigation={{
          nextEl: ".comments-next",
          prevEl: ".comments-prev",
        }}
        pagination={{ clickable: true }}
        onSwiper={setTextSlider}
        onSlideChange={handleSliding}
        className={`custom-slider comments-slider ${classes.reviewSlider}`}
      >
        {comments.map((comment) => (
          <SwiperSlide key={comment.id}>
            <CommentReview comment={comment} />
          </SwiperSlide>
        ))}
      </Swiper>
      {windowWidth > 768 && (
        <Swiper
          slidesPerView={1}
          modules={[Controller]}
          onSwiper={setImageSlider}
          onSlideChange={handleSliding}
          className={`custom-slider comments-slider ${classes.imageSlider}`}
        >
          {comments.map((comment) => (
            <SwiperSlide key={comment.id}>
              <Image
                src={`/images/home/comments/${comment.id}.webp`}
                width={windowWidth > 1150 ? 360 : 280}
                height={windowWidth > 1150 ? 360 : 280}
                alt={comment.item}
                className={classes.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className={classes.navigation}>
        <button className={`comments-prev ${classes.buttons}`}>
          <BiChevronLeft size={20} />
        </button>
        <button className={`comments-next ${classes.buttons}`}>
          <BiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default CommentsSlider;
