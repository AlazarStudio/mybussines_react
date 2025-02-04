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
                Центр инновации социальной сферы Карачаево-Черкесской Республики
                создан в соответствии с Приказом Министерства экономического
                развития Российской Федерации от 14 марта 2019 г. № 125 «Об
                утверждении Требований к реализации мероприятий, осуществляемых
                субъектами Российской Федерации, бюджетам которых
                предоставляются субсидии на государственную поддержку малого и
                среднего предпринимательства в субъектах Российской Федерации в
                целях достижения целей, показателей и результатов региональных
                проектов, обеспечивающих достижение целей, показателей и
                результатов федеральных проектов, входящих в состав
                национального проекта «Малое и среднее предпринимательство и
                поддержка индивидуальной предпринимательской инициативы», и
                требований к организациям, образующим инфраструктуру поддержки
                субъектов малого и среднего предпринимательства».
              </span>
            </div>
            <div className={classes.containerRight}>
              <span>
                Начальник Центра инновации социальной сферы Карачаево-Черкесской
                Республики:
              </span>
              <span>Карасова Джамиля Иссаевна</span>
              <span>
                <img src="/images/CentrInn.png" />
                +7(8782) 25-02-27
              </span>
              <span>
                <img src="/images/CentrHoz7.png" />
                369000, г.Черкесск, ул. Ленина, д. 53
              </span>
              <span>
                <img src="/images/CentrHoz8.png" />
                reception@moibiz09.ru
              </span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container6;
