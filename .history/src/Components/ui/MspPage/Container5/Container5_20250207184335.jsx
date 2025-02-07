import React from 'react';
import classes from './Container5.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container5({ children, ...props }) {
  return (
    <>
    <div className={classes.title}></div>
      <div className={classes.container}>
<div className={classes.title}></div>
      </div>
    </>
  );
}

export default Container5;
