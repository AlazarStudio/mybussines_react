import React from 'react';
import classes from './Container1.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container1({ children, ...props }) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerTop}>
          <div className={classes.containerTopLogo}>
            <img src="/images/msp1.png" />
            <img src="/images/msp2.png" />
          </div>
          <div className={classes.containerText}>
            Прохождение обучающих программ Корпорации МСП позволяет претендовать
            на получение гранта для молодых предпринимателей и социальных
            компаний.
          </div>
        </div>
        <div className={classes.containerBottom}>
        <div className={classes.containerBottomEl}><span</div>
        <div className={classes.containerBottomEl}></div>
        <div className={classes.containerBottomEl}></div>
        </div>
      </div>
    </>
  );
}

export default Container1;
