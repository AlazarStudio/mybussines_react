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
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container3;
