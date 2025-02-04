import React from 'react';
import classes from './Container2.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container2({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <div className={classes.containerTitle}>
              <span>
              Цели и задачи
              </span>
            </div>
<div className={classes.containerBlock}>
  <div className={classes.containerBlockEl1}>
    <i
  </div>
  <div className={classes.containerBlockEl2}></div>
  <div className={classes.containerBlockEl3}></div>
</div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container2;
