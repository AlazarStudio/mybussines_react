import React from 'react';
import classes from './Container2.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';

function Container2({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container2}>
            <div className={classes.container2Title}>
              На базе Центра «Мой бизнес КЧР» реализуются четыре федеральных
              проекта:
            </div>
            <div className={classes.container2Bottom}>
              <span>01</span>
              <span>Создание благоприятных условий для осуществления деятельности самозанятыми гражданами</span>
            </div>
            <div className={classes.container2Bottom}>
              <span>02</span>
              <span>Акселерация субъектов малого и среднего предпринимательства</span>
            </div>
            <div className={classes.container2Bottom}>
              <span>03</span>
              <span>Создание условий для лёгкого старта и комфортного ведения бизнеса</span>
            </div>
            <div className={classes.container2Bottom}>
              <span>04</span>
              <span>Создание благоприятных условий для осуществления деятельности самозанятыми гражданами</span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container2;
