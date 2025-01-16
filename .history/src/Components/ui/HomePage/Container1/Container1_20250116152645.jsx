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
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className={classes.swiper}
        >
          {/* Slides */}
          <SwiperSlide className={classes.slide}>
            <div className={classes.slide1}>
              <img src="/images/bb1.png" />
              <div className={classes.slide1Left}>
                <span>Центр поддержки экспорта</span>
                <span>Центр поддержки экспорта КЧР является структурным подразделением в составе Центра «Мой бизнес» Карачаево-Черкесия и относится к инфраструктуре поддержки малого и среднего предпринимательства.</span>
                <button onClick={() => navigate('/')}>Узнать больше</button>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className={classes.slide}></SwiperSlide>
          <SwiperSlide className={classes.slide}></SwiperSlide>
          <SwiperSlide className={classes.slide}></SwiperSlide>
          <SwiperSlide className={classes.slide}></SwiperSlide> */}
        </Swiper>
      </WidthBlock>
    </CenterBlock>
  );
}

export default Container1;
