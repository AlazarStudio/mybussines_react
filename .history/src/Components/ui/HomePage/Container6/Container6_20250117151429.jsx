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
          //   pagination={{
          //     clickable: true,
          //   }}
          className={classes.swiper}
        >
          {/* Slides */}

          <SwiperSlide
            className={classes.slide}
            onClick={() => navigate('/news')}
          >
            <div className={classes.slide1}>
              <img src="/images/MSP.webp" />
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={classes.slide}
          >
            <a className={classes.slide1} href=
                '/https://xn--80aaapecta3abbflycnd5byo.xn--p1ai/?utm_source=kchr&utm_medium=web&utm_campaign=regions'
              <img src="/images/MamaPred.webp" />
            </a>
          </SwiperSlide>
        </Swiper>
      </WidthBlock>
    </CenterBlock>
  );
}

export default Container6;
