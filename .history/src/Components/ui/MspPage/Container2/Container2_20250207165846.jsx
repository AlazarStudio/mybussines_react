import React from 'react';
import classes from './Container2.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container2({ children, ...props }) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerEl}>
          <div className={classes.containerElLogo}>
            <img src="/images/msp4.png" />
          </div>
          <div className={classes.containerElText}></div>
        </div>
        <div className={classes.containerEl}>
          <div className={classes.containerElText}></div>
          <div className={classes.containerElLogo}>
            <img src="/images/msp5.png" />
          </div>
        </div>
        <div className={classes.containerEl}>
          <div className={classes.containerElLogo}>
            <img src="/images/msp4.png" />
          </div>
          <div className={classes.containerElText}></div>
        </div>
      </div>
    </>
  );
}

export default Container2;
