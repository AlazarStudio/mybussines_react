import React from 'react';
import classes from './Container4.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container4({ children, ...props }) {
  return (
    <>
      <div className={classes.title}>Тренеры</div>
      <div className={classes.container}>
        <img src="/images/mspUrusov.png" />
        <div className={classes.containerElText}>
          <span>
          Урусов Салых Манафович</span>
          <span>
            4-дневный тренинг для тех, кто хочет начать свое дело: проверка
            гипотез, CustDev, первый MVP По результатам программы вы сможете:
          </span>
          <span>
            <img src="/images/yellow.png" />
            провести самостоятельную оценку гибких навыков
          </span>
          <span>
            <img src="/images/yellow.png" />
            найти и упаковать прибыльную идею бизнеса
          </span>
          <span>
            <img src="/images/yellow.png" />
            оценить бизнес-идеи
          </span>
          <span>
            <img src="/images/yellow.png" />
            определить клиентские сегменты и сформировать стратегию по
            привлечению клиентов
          </span>
          <span>
            <img src="/images/yellow.png" />
            сформулировать стратегию развития на ближайшие 6 месяцев
          </span>
          <span>
            <img src="/images/yellow.png" />
            рассчитать потенциальную прибыльность и бюджет идеи
          </span>
          <button
            onClick={() =>
              (window.location.href =
                'https://xn--l1agf.xn--p1ai/education/events')
            }
          >
            Узнать больше
          </button>
        </div>
      </div>
    </>
  );
}

export default Container4;
