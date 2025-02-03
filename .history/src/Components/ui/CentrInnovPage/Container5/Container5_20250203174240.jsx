import React from 'react';
import classes from './Container5.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container5({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          div
          <div className={classes.title}>Полезные ссылки для экспортера</div>
  
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container5;
