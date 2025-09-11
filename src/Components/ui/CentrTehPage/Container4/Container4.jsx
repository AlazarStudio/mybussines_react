import React from 'react';
import classes from './Container4.module.css';
import { service } from '../../../../../bd';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';

function Container4({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>
            <span>
              Обучение детей до 18 лет в объединениях дополнительного
              образования:
            </span>
          </div>
          <div className={classes.container}>
            <div className={classes.containerCard}>
              <img src="/images/cmm2.png" />
              <span>Графический дизайн</span>
              <span>
                <a href="https://vk.com/club223733508 ">Подробнее </a>
              </span>
            </div>
            <div className={classes.containerCard}>
              <img src="/images/cmm8.png" />
              <span>Робототехника</span>
              <span>
                <a href="https://vk.com/roboland_kchr ">Подробнее </a>
              </span>
            </div>
            <div className={classes.containerCard}>
              <img src="/images/cmm6.png" />
              <span>Искусственный интеллект</span>
              <span>
                <a href="https://vk.com/club227960953">Подробнее </a>
              </span>
            </div>
            {/* <div className={classes.containerCard}>
              <img src="/images/cmm3.png" />
              <span>3D-прототипирование</span>
            </div> */}
            <div className={classes.containerCard}>
              <img src="/images/cmm4.png" />
              <span>Лазерная обработка</span>
              <span>
                <a href="https://vk.com/public221133450">Подробнее </a>
              </span>
            </div>
            {/* <div className={classes.containerCard}>
              <img src="/images/cmm5.png" />
              <span>Пилотирование беспилотных летательных аппаратов</span>
            </div> */}

            <div className={classes.containerCard}>
              <img src="/images/cmm7.png" />
              <span>Программирование приложений</span>
              <span>
                <a href="https://vk.com/chagarova.program">Подробнее </a>
              </span>
            </div>

            <div className={classes.containerCard}>
              <img src="/images/cmm1.png" />
              <span>Иллюстрация и 2d анимация</span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container4;
