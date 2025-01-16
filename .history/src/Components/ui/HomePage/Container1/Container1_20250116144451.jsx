import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import classes from './Container1.module.css';

import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container1({ children, ...props }) {
  return (
    <CenterBlock>
      <WidthBlock>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className={classes.swiper}
        >
          {/* Slides */}
          <SwiperSlide className={classes.slide}><img src='/images/banner1.png'/></SwiperSlide>
          <SwiperSlide className={classes.slide}><img src='/images/banner1.png'/></SwiperSlide>
          <SwiperSlide className={classes.slide}><img src='/images/banner1.png'/></SwiperSlide>
          <SwiperSlide className={classes.slide}><img src='/images/banner1.png'/></SwiperSlide>
          <SwiperSlide className={classes.slide}>Slide 5</SwiperSlide>
        </Swiper>
      </WidthBlock>
    </CenterBlock>
  );
}

export default Container1;
