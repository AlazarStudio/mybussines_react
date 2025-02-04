import React from 'react';
import classes from './Container7.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container7({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <div className={classes.containerTitle}>
              <span>
                Существует 4 категории социального предпринимательства, по
                которым вы сможете определить социальную направленность вашего
                бизнеса:
              </span>
            </div>
            <div className={classes.containerBlock}>
              <div className={classes.containerBlockEl}>
                <span>Категория 1. Трудоустройство</span>
                <span>К этой категории относятся предприниматели, трудоустраивающие у себя людей, которые относятся к социально незащищенным категориям граждан (пенсионеры, предпенсионеры, люди с инвалидностью и ОВЗ, многодетные и одинокие родители, малоимущие граждане, беженцы, выпускники детских домов и др.)</span>
                <span>Условия:</span>
                <span><img src='/images/tr.png'/></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={classes.containerBlockEl}>2</div>
              <div className={classes.containerBlockEl}>3</div>
              <div className={classes.containerBlockEl}>4</div>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container7;
