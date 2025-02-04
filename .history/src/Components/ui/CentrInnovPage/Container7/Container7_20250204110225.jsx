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
            <div className={classes.containerTitle}>
              <span>
                Существует 4 категории социального предпринимательства, по
                которым вы сможете определить социальную направленность вашего
                бизнеса:
              </span>
            </div>
            <div className={classes.containerBlock}>
              <div className={classes.containerBlockEl}></div>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container7;
