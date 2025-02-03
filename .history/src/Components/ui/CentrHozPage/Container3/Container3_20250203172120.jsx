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
            <span className={classes.containerTitle}>
              Оказываемые Центром услуги позволяют решить ряд важнейших задач:{' '}
            </span>
            <div className={classes.containerBottom}>
              <div className={classes.containerBottomEl}>
                <img src="/images/CentrHoz3.png" />
                <span>
                Для лиц, ведущих личное подсобное хозяйство, фермеров, в том числе и самозанятых в данной отрасли
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <img src="/images/CentrHoz4.png" />
                <span>
                Для сельскохозяйственных, потребительских и производственных кооперативов
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <img src="/images/CentrHoz5.png" />
                <span>
                  Повышение личных и предпринимательских компетенций бизнесменов
                  путем организации и проведения образовательных курсов, лекций,
                  семинаров и тренингов и т.д.
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
