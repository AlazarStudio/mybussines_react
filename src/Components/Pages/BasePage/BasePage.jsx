import React from 'react';
import classes from './BasePage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

function BasePage({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <input placeholder="Искать в базе знаний" />
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default BasePage;
