import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import classes from './Container1.module.css';

// Подключение модулей Swiper
import { Autoplay, Pagination } from 'swiper/modules';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container1({ children, ...props }) {
  return (
    <CenterBlock>
      <WidthBlock>

      </WidthBlock>
    </CenterBlock>
  );
}

export default Container1;
