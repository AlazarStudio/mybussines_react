import React from 'react';
import classes from './ContainerTest.module.css';
import { useNavigate } from 'react-router-dom';

function ContainerTest() {
  const navigate = useNavigate();

  return (
    <div className={classes.containerBlock}>
      <div className={classes.containerBlockEl}>
        <div className={classes.containerBlockElLeft}>
          <span className={classes.title}>
            Пройти тестирование для определения уровня предпринимательских
            компетенций
          </span>
          <button
            type="button"
            className={classes.linkBtn}
            onClick={() => navigate('/test')}
          >
            Начать тест
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContainerTest;
