import React from 'react';
import classes from './Container4.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container4({ children, ...props }) {
  return (
    <>
      <div className={classes.title}>Тренеры</div>
      <div className={classes.container}>
        <div className={classes.containerEl}>
          <span>
            <img src="/images/yellow.png" />
            «Создание сайта»
          </span>
          <span>
            Научитесь создавать первую лендинговую страницу - текстовое
            содержание и визуальное оформление; подготовите уникальное торговое
            предложение к первым продажам
          </span>
        </div>
       
      </div>
    </>
  );
}

export default Container4;
