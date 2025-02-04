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
          <img src="/images/teh1.png" />
        </div>
        <div className={classes.containerRight}>
          <img src="/images/teh2.png" />
          <span>
            Центр молодежных инновационных технологий «Тетра» г. Черкесск
          </span>
          <span>
            Проект направлен на создание в г. Черкесск и в г. Карачаевске Центра
            молодежного инновационного творчества, как открытой площадки для
            повышения интереса молодежи (школьников и студентов) к техническому
            творчеству, инновационной инженерной и научной деятельности.
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
