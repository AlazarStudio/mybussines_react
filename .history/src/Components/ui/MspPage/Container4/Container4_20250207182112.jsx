import React from 'react';
import classes from './Container4.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container4({ children, ...props }) {
  return (
    <>
      <div className={classes.title}>Тренеры</div>
      <div className={classes.container}>
       <img src='/images/mspUrusov'
       
      </div>
    </>
  );
}

export default Container4;
