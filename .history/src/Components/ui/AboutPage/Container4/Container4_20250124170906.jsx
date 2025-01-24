import React from 'react';
import classes from './Container4.module.css';
import { useNavigate } from 'react-router-dom';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container4({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container4}>
            <img src="/images/aboutCon4L.jpg" />
            <div className={classes.container4Text}>
              <span>
                <>Центр «Мой бизнес КЧР» </>– уникальная площадка
                Карачаево-Черкесской Республики, которая объединяет все сервисы
                для предпринимателей и полезные материалы для запуска и развития
                бизнеса. У нас можно получить широкий спектр услуг в режиме
                онлайн, узнать о мерах государственной поддержки, получить
                консультации по всем вопросам ведения бизнеса.
              </span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container4;
