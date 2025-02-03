import React from 'react';
import classes from './Container6.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container6({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <div className={classes.containerLeft}></div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container6;
