import React from 'react';
import classes from './Container4.module.css';
import { service } from '../../../../../bd';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';

function Container4({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>
            <span>Образовательные курсы</span>
          </div>
          <div className={classes.container}>
            <div className={classes.containerCard}>
              <img src="/images/cmm1.png" />
              <span>Рисование и моделирование</span>
            </div>
            <div className={classes.containerCard}>
              <img src="/images/cmm2.png" />
              <span>Векторная графика</span>
            </div>
            <div className={classes.containerCard}>
              <img src="/images/cmm3.png" />
              <span>3D-прототипирование</span>
            </div>
            <div className={classes.containerCard}>
              <img src="/images/cmm4.png" />
              <span>3D-моделирование</span>
            </div>
            <div className={classes.containerCard}>
              <img src="/images/cmm5.png" />
              <span>Пилотирование беспилотных летательных аппаратов</span>
            </div>
            <div className={classes.containerCard}>
              <img src="/images/cmm6.png" />
              <span>Программирования Ардуино (Arduino)</span>
            </div>
            <div className={classes.containerCard}>
              <img src="/images/cmm7.png" />
              <span>Программирование -сайтов</span>
            </div>
            <div className={classes.containerCard}>
              <img src="/images/cmm8.png" />
              <span>Робототехника LEGO EV3</span>
            </div>
            <div className={classes.containerCard}>
              <img src="/images/cmm9.png" />
              <span>Фото и видео монтаж</span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container4;
