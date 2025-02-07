import React from 'react';
import classes from './Container5.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container5({ children, ...props }) {
  return (
    <>
    <div className={classes.title}>Как проходят тренинги в г. Черкесске</div>
      <div className={classes.container}>
<div className={classes.containerEl}>
  <span>Более</span>
  <span>100</span>
  <span>тренингов</span>
</div>
<div className={classes.containerEl}>
  <span>1000</span>
  <span>участников</span>

</div>
<div className={classes.containerEl}>
  <span></span>
  <span></span>
  <span></span>
</div>
      </div>
    </>
  );
}

export default Container5;
