import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import classes from './Container1.module.css';

// Подключение модулей Swiper
import { Pagination } from 'swiper/modules';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container1({ children, ...props }) {
  return (
    <CenterBlock>
      <WidthBlock>
        <div className={classes.container}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.custom-pagination', // Указываем кастомный класс для пагинации
            }}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Autoplay]
          >
            <SwiperSlide>
              <img
                src="/images/banner1.png"
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
          {/* Кастомный контейнер для пагинации */}
          <div className="custom-pagination"></div>
        </div>
      </WidthBlock>
    </CenterBlock>
  );
}

export default Container1;
