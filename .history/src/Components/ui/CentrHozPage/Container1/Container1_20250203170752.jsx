import React from 'react';
import classes from './Container1.module.css';
import { useNavigate } from 'react-router-dom';
// import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
// import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

function Container1({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerLeft}>
          <img src="/images/centrPred1.png" />
          <img src="/images/CentrHoz1.png" />
          <img src="/images/centrPred3.png" />
          <span>Хубиева Халимат Хасановна</span>
          <span>Начальник центра компетенций в сфере сельскохозяйственной кооперации и поддержки фермеров</span>
        </div>
        <div className={classes.containerRight}>
          <img src="/images/centrEksp5.png" />
          <span>Центр поддержки экспорта</span>
          <span>
            Центр поддержки экспорта Карачаево-Черкесской Республики является
            структурным подразделением в составе Центра «Мой бизнес»
            Карачаево-Черкесия и относится к инфраструктуре поддержки малого и
            среднего предпринимательства, который способствует созданию
            благоприятных условий для развития экспорта республики, выходу
            субъектов МСП на международные рынки, росту товарооборота экспортно
            ориентированных субъектов МСП республики, а также налаживанию
            международных деловых контактов.
          </span>
          <button onClick={() => navigate('/contacts#bid')}>
            Оставить заявку
          </button>
        </div>
      </div>
    </>
  );
}

export default Container1;
