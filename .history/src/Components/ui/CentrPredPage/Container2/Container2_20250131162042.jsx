import React from 'react';
import classes from './Container2.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

function Container2({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
            <div className={classes.container}
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container2;
