import React from 'react';
import classes from './Container3.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container3({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
            <div className={classes.title}>
                
            </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container3;
