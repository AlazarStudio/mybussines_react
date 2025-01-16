import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import classes from './Container1.module.css';

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
