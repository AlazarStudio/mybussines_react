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
          <img src="/images/Yarovchuk11.png" />
          <img src="/images/centrPred3.png" />
          <span>Яровчук Дарья Александровна</span>
          <span>
            Начальник центра компетенций в сфере сельскохозяйственной кооперации
            и поддержки фермеров
          </span>
        </div> */}
        <div className={classes.containerRight}>
          <img src="/images/CentrHoz2.png" />
          <span>
            Центр компетенций в сфере сельскохозяйственной кооперации и
            поддержки фермеров Карачаево-Черкесской республики
          </span>
          <span>
            Центр компетенций является структурным подразделением в составе
            Центра «Мой бизнес» КЧР и относится к инфраструктуре
            поддержки малого и среднего предпринимательства, который оказывает
            на территории КЧР информационно-консультационные услуги физическим и
            юридическим лицам, обеспечивает содействие в создании и развитии
            субъектов малого и среднего предпринимательства в сфере сельского
            хозяйства.
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
