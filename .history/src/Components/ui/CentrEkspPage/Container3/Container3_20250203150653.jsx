import React from 'react';
import classes from './Container3.module.css';

import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container3({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <span>
              Оказываемые Центром услуги позволяют решить ряд важнейших задач:{' '}
            </span>
            <div className={classes.containerBottom}>
              <div className={classes.containerBottomEl}>
                <img src="/images/centrEksp2.png" />
                <span>
                  Формирование позитивного имиджа предпринимателя в
                  Карачаево-Черкесии
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <img src="/images/centrEksp3.png" />
                <span>
                <div className={classes.containerBottomEl}>
                <img src="/images/centrEksp2.png" />
                <span>
                  Формирование позитивного имиджа предпринимателя в
                  Карачаево-Черкесии
                </span>
              </div>
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <img src="/images/centrEksp4.png" />
                <span>
                  Формирование позитивного имиджа предпринимателя в
                  Карачаево-Черкесии
                </span>
              </div>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container3;
