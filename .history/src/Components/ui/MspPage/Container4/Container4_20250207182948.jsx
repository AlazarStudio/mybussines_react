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
          Сертифицированный тренер Корпорации МСП с 2020 года
          </span>
          <span>
            <img src="/images/yellow.png" />
            Эффективен в коммуникации: способен к организации диалога как с группой в целом, так и с отдельными ее участниками.
          </span>
          <span>
            <img src="/images/yellow.png" />
            Компетентен в сфере групповой динамики
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
