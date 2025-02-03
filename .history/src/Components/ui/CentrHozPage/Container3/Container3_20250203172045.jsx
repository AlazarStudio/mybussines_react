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
                  Формирование позитивного имиджа предпринимателя в
                  Карачаево-Черкесии
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <img src="/images/centrEksp3.png" />
                <span>
                  Разработка ряда законодательных инициатив, способствующих
                  развитию предпринимательства
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <img src="/images/centrEksp4.png" />
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
