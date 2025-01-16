import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classes from "./Container1.module.css";

// Подключение модулей Swiper (если требуются дополнительные функции)
import { Navigation, Pagination } from "swiper/modules";

function Container1({ children, ...props }) {
  return (
    <
    <div className={classes.container}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x400?text=Image+1"
            alt="Image 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x400?text=Image+2"
            alt="Image 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x400?text=Image+3"
            alt="Image 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x400?text=Image+4"
            alt="Image 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x400?text=Image+5"
            alt="Image 5"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Container1;
