import React from 'react';
import classes from './Container7.module.css';
import { useNavigate } from 'react-router-dom';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container7({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container7}>
            <div className={classes.container7title}>
              <span>Структура и руководство Центра «Мой бизнес»</span>
            </div>
            <div className={classes.container7card}>
              <img src='/images/about1.png'/>
              <span>Хубиева Диана Казимовна</span>
              <span>Директор</span>
              <sapn>d.khubieva@moibiz09.ru</sapn>
              <span>8 (8782) 25-02-27</span>
            </div>
            <div className={classes.container7Sotr}>
              
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container7;
