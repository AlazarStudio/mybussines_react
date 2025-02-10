import React from 'react';
import classes from './Container6.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container6({ children, ...props }) {
  return (
    <>
      <div className={classes.title}>Бизнес-обучение на платформе МСП.РФ</div>
      <div className={classes.container}>
        <div className={classes.containerLeft}>
          <img src="/images/mspBig.png" />
        </div>
        <div className={classes.containerRight}>
          <span>
            Бизнес-обучение на Цифровой платформе МСП.РФ Развивайте себя и свой
            бизнес. Бесплатно. С личной поддержкой наставников
          </span>
          <span>
            <img src="/images/yellow.png" />
            Как открыть дело?
          </span>
          <span>
            <img src="/images/yellow.png" />
            Как увеличить прибыль?
          </span>
          <span>
            <img src="/images/yellow.png" />
            Как масштабировать бизнес?
          </span>
          <a href='https://xn--l1agf.xn--p1ai/education/promo/'></a>
          <button onClick={1}>Узнать больше</button>
        </div>
      </div>
    </>
  );
}

export default Container6;
