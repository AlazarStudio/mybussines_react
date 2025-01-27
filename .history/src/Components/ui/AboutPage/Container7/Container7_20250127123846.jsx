import React from 'react';
import classes from './Container5.module.css';
import { useNavigate } from 'react-router-dom';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container7({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container5}>
            <span>Инфраструктура Центра «Мой бизнес КЧР»</span>
            <span>
              {' '}
              Центр «Мой бизнес КЧР» объединяет на своей площадке всю
              инфраструктуру поддержки малого и среднего предпринимательства и
              предоставляет услуги по различным направлениям:
              информационно-консультативные, образовательные, имущественные,
              финансовая поддержка, поддержка бизнесменов, осуществляющих свою
              деятельность с сфере инноваций и модернизации производства,
              сельско-хозяйственной кооперации, а так же экспорта товаров,
              работ, услуг.
            </span>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container5;
