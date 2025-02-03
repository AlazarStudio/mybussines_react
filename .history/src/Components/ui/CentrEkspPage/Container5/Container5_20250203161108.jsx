import React from 'react';
import classes from './Container5.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container5({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>Полезные ссылки для экспортера</div>
          <div className={classes.container}>
            <div className={classes.containerLeft}>
              <p>
                <span>
                  <a href="https://www.alta.ru/tnved">123</a>
                </span>
              </p>
            </div>
            <div className={classes.containerRight}></div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container5;
