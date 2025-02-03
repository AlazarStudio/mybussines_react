import React from 'react';
import classes from './Container5.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container5({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>
            Полезные ссылки для экспортера
          </div>
          <div className={classes.container}>
            <div className={classes.containerLeft}>
                <ul><a><span>123123435</span></a></ul>
            </div>
            <div className={classes.containerRight}></div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container5;
