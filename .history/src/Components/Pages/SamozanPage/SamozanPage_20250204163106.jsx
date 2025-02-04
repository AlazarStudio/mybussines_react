import React from 'react';
import classes from './SamozanPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

function SamozanPage({ children, ...props }) {
  return (
    <>
    <div className={classes.containerTop>}
      <CenterBlock>
        <WidthBlock>
            
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default SamozanPage;
