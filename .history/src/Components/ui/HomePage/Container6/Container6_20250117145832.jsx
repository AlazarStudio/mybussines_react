import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import classes from './Container6.module.css';

import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';

function Container6({ children, ...props }) {
  const navigate = useNavigate();
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
              <img src="/images/bb5.png" />
            </div>
          </SwiperSlide>
          
          <SwiperSlide className={classes.slide}>
            <div className={classes.slide1}>
              <img src="/images/bb5.png" />
            </div>
          </SwiperSlide>
        </Swiper>
      </WidthBlock>
    </CenterBlock>
  );
}

export default Container6;
