import React from 'react';
import classes from './Container4.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container4({ children, ...props }) {
  return (
    <>
      <div className={classes.title}>Тренеры</div>
      <div className={classes.container}>
        <div className={classes.containerEl}>

        </div>
       
      </div>
    </>
  );
}

export default Container4;
