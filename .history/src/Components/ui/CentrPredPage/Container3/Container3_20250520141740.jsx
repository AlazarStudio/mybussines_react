import React from 'react';
import classes from './Container3.module.css';

import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container3({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.bo}>
          <div className={classes.container}>
            <img src="/images/centrPred5.png" />
            <div className={classes.containerRight}>
              <span>
                <span style={{ color: '#ed5338', fontWeight: 'bold' }}>
                  Наша цель
                </span>{' '}
                – предоставить возможность каждому желающему жителю
                Карачаево-Черкесской Республики реализовать свой
                предпринимательский потенциал.
              </span>

              <span>
                <span style={{ color: '#ed5338', fontWeight: 'bold' }}>
                  В задачах центра{' '}
                </span>{' '}
                оказать необходимые меры поддержки субъектам МСП КЧР для
                создания и развития бизнеса.
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
