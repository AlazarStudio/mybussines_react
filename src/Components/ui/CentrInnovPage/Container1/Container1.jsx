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
        {/* <div className={classes.containerLeft}>
          <img src="/images/centrPred1.png" />
          <img src="/images/Karasova11.png" />
          <img src="/images/centrPred3.png" />
          <span>Карасова Джамиля Иссаевна</span>
          <span>Начальник центра инноваций социальной сферы</span>
        </div> */}
        <div className={classes.containerRight}>
          <img src="/images/CentrInnov2.png" />
          <span>Центр инноваций социальной сферы</span>
          <span>
            Центр инноваций социальной сферы (ЦИСС) – структурное подразделение
            Центра «Мой бизнес» в Карачаево-Черкесии. ЦИСС является центром
            поддержки для социально ориентированных предпринимателей всей
            республики.
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
