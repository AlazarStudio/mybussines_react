import React from 'react';
import classes from './Container1.module.css';
// import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
// import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

function Container1({ children, ...props }) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerLeft}>
          <img src="/images/centrPred1.png" />
          <img src="/images/centrPred2.png" />
          <img src="/images/centrPred3.png" />
          <span>Урусов Салых Манафович</span>
          <span>Начальник центра поддержки предпринимательства</span>
        </div>
        <div className={classes.containerRight}>
            <img src='/images/centrPred'
        </div>
      </div>
    </>
  );
}

export default Container1;
