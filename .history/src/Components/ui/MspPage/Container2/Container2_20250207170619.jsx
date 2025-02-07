import React from 'react';
import classes from './Container2.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container2({ children, ...props }) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerEl}>
          <div className={classes.containerElLogo}>
            <img src="/images/msp4.png" />
          </div>
          <div className={classes.containerElText}>
            <span>Школа предпринимательства</span>
            <span>5-дневный тренинг для тех, кто уже открыл бизнес и хочет его развить: диагностика бизнеса, команды, продуктовая матрица, исследование рынка. По результатам программы вы сможете:</span>
            <span><img src='/images/yellow.png'/>освоить инструменты диагностики бизнеса</span>
            <span><img src='/images/yellow.png'/>провести комплексную ревизию всех процессов и выстроить автоматизированную систему управления
            </span>
            <span><img src='/images/yellow.png'/></span>
            <span><img src='/images/yellow.png'/></span>
            <span><img src='/images/yellow.png'/></span>
            <span><img src='/images/yellow.png'/></span>
          </div>
        </div>
        <div className={classes.containerEl}>
          <div className={classes.containerElText}></div>
          <div className={classes.containerElLogo}>
            <img src="/images/msp5.png" />
          </div>
        </div>
        <div className={classes.containerEl}>
          <div className={classes.containerElLogo}>
            <img src="/images/msp6.png" />
          </div>
          <div className={classes.containerElText}></div>
        </div>
      </div>
    </>
  );
}

export default Container2;
