import React from 'react';
import classes from './Container5.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container5({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <span></span>
          </div>
          
  
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container5;
