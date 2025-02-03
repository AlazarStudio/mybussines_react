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
                Центр компетенций в сфере сельскохозяйственной кооперации и
                поддержки фермеров Карачаево-Черкесской Республики создан в
                соответствии с Постановлением Правительства Российской Федерации
                от 20 апреля 2019 года № 476 «Об утверждении Правил
                предоставления и распределения иных межбюджетных трансфертов из
                федерального бюджета бюджетам субъектов Российской Федерации на
                создание системы поддержки фермеров и развитие сельской
                кооперации», а также в соответствии с постановлением
                Правительства Карачаево-Черкесской Республики от 30 апреля 2019
                года № 125 «О Центре компетенций в сфере сельскохозяйственной
                кооперации и поддержки фермеров Карачаево-Черкесской Республики»
              </span>
            </div>
            <div className={classes.containerRight}>
              <span>
                Руководитель Центра поддержки экспорта Карачаево-Черкесской
                Республики:
              </span>
              <span>Ксалов Мурат Валерьевич</span>
              <span>
                <img src="/images/CentrHoz6.png" />
                +7(8782) 25-02-27
              </span>
              <span>
                <img src="/images/CentrHo.png" />
                369000, г.Черкесск, ул. Ленина, д. 53
              </span>
              <span>
                <img src="/images/centrEksp8.png" />
                Exportkchr@gmail.com
              </span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container6;
