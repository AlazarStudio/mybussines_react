import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container1({ children, ...props }) {
  return (
    <CenterBlock>
      <WidthBlock>
        <div className={cla}
      </WidthBlock>
    </CenterBlock>
  );
}

export default Container1;
