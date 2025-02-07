import React from 'react';
import classes from './Container4.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container4({ children, ...props }) {
  return (
    <>
      <div className={classes.title}>Экспресс-программы</div>
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
        <div className={classes.containerEl}>
          <span>
            <img src="/images/yellow.png" />
            «Диагностика бизнеса»
          </span>
          <span>
            Научитесь самостоятельно проводить диагностику собственного бизнеса
            для выявления точек роста
          </span>
        </div>
        <div className={classes.containerEl}>
          <span>
            <img src="/images/yellow.png" />
            «Первые продажи»
          </span>
          <span>
            Создадите и проработаете воронку продаж и научитесь работать с ней
          </span>
        </div>
        <div className={classes.containerEl}>
          <span>
            <img src="/images/yellow.png" />
            «Калькулятор»
          </span>
          <span>
            Научитесь определять ключевые целевые метрики (показатели) бизнеса.
          </span>
        </div>
      </div>
    </>
  );
}

export default Container4;
