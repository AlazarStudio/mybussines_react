import React from 'react';
import classes from './Container1.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container1({ children, ...props }) {
  return (
    <CenterBlock>
      <WidthBlock>
        <div className={classes.container1}>
          <div className={classes.container1Left}>
            <img src='/images/aboutLogo.png'/>
          </div>
          <div className={classes.container1Right}>
            <span></span>
          </div>
        </div>
      </WidthBlock>
    </CenterBlock>
  );
}

export default Container1;
