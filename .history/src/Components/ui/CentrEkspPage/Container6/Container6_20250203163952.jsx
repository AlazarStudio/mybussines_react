import React from 'react';
import classes from './Container6.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container6({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <div className={classes.containerLeft}>
              <span>Информация об организации</span>
              <span>
                Центр координации поддержки экспортно ориентированных субъектов
                малого и среднего предпринимательства создан в соответствии с
                Приказом Министерства экономического развития Российской
                Федерации от 14 февраля 2018 г. № 67 «Об утверждении требований
                к реализации мероприятий субъектами Российской Федерации,
                бюджетам которых предоставляются предпринимательства, включая
                крестьянские (фермерские) хозяйства, а так же на реализацию
                мероприятий по поддержке молодежного предпринимательства, и
                требований к организациям, образующим инфраструктуру поддержки
                субъектом малого и среднего предпринимательства».
              </span>
            </div>
            <div className={classes.containerRight}>
              <span>
                Руководитель Центра поддержки экспорта Карачаево-Черкесской
                Республики:
              </span>
              <span>Ксалов Мурат Валерьевич</span>
              <span
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container6;
