import React from 'react';
import classes from './Container6.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container6({ children, ...props }) {
  return (
    <>
<div className={classes.title}>src/Components/ui/MspPage/Container5</div>
<div className={classes.container}>
  <div className={classes.containerLeft}>
    <img src='/images/mspBig.png'/>
  </div>
  <div className={classes.containerRight}>
    <span>
Бизнес-обучение на Цифровой платформе МСП.РФ
Развивайте себя и свой бизнес.
Бесплатно. С личной поддержкой наставников</span>
    <span><img src=''</span>
    <span></span>
    <span></span>
  </div>
</div>
    </>
  );
}

export default Container6;
