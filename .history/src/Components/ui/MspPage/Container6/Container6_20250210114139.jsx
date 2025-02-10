import React from 'react';
import classes from './Container6.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container6({ children, ...props }) {
  return (
    <>
      <div className={classes.title}>Как проходят тренинги в г. Черкесске</div>
      <div className={classes.container}>
        <div className={classes.containerEl}>
          <span>Более</span>
          <span className={classes.number}>100</span>
          <span>тренингов</span>
        </div>
        <div className={classes.containerEl}>
          <span className={classes.number}>1000</span>
          <span>участников</span>
        </div>
        <div className={classes.containerEl}>
          <span className={classes.number}>800</span>
          <span>успешных предпринимателей</span>
        </div>
      </div>
      <img className={classes.img} src="/images/msp111.png" />
    </>
  );
}

export default Container6;
