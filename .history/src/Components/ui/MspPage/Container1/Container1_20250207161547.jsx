import React from 'react';
import classes from './Container1.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container1({ children, ...props }) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerTop}>
          <div className={classes.containerTopLogo}></div>
          <div className={classes.containerText}></div>
        </div>
        <div className={classes.containerBottom}>
            <span></span>
        </div>
      </div>
    </>
  );
}

export default Container1;
