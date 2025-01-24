import React from 'react';
import classes from './Container1.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container1({ children, ...props }) {
  return (
    <CenterBlock>
      <WidthBlock>
        <div className={classes.container1}>
          <div className={classes.container1Left}>
            <img src="/images/aboutLogo.png" />
          </div>
          <div className={classes.container1Right}>
            <span>О центре</span>
            <p>
              С мая 2017 года в рамках Национального проекта «Малое и среднее
              предпринимательство и поддержка индивидуальной предпринимательской
              инициативы» в Карачаево-Черкесской Республике создана
              инфраструктура поддержки субъектов малого и среднего
              предпринимательства – Центр «Мой бизнес КЧР».
            </p>
            <p>
              Работа Центра осуществляется под кураторством Министерства
              Экономического развития Карачаево-Черкесской Республики и
              направлена на всестороннее улучшение предпринимательского климата
              в Карачаево-Черкесии.
            </p>
          </div>
        </div>
      </WidthBlock>
    </CenterBlock>
  );
}

export default Container1;
