import React from 'react';
import classes from './Container2.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container2({ children, ...props }) {
  return (
    <>
      <div className={classes.container}>
 <div className={classes.containerEl}>
  <div
 </div>
 <div className={classes.containerEl}></div>
 <div className={classes.containerEl}></div>
      </div>
    </>
  );
}

export default Container2;
