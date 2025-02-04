import React from 'react';
import classes from './Container7.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container7({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
       <
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container7;
