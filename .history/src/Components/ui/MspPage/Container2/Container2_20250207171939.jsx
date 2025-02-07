import React from 'react';
import classes from './Container2.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import { useNavigate } from 'react-router-dom';

function Container2({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerEl}>
          <div className={classes.containerElLogo}>
            <img src="/images/msp4.png" />
          </div>
          <div className={classes.containerElText}>
            <span>Школа предпринимательства</span>
            <span>
              5-дневный тренинг для тех, кто уже открыл бизнес и хочет его
              развить: диагностика бизнеса, команды, продуктовая матрица,
              исследование рынка. По результатам программы вы сможете:
            </span>
            <span>
              <img src="/images/yellow.png" />
              освоить инструменты диагностики бизнеса
            </span>
            <span>
              <img src="/images/yellow.png" />
              провести комплексную ревизию всех процессов и выстроить
              автоматизированную систему управления
            </span>
            <span>
              <img src="/images/yellow.png" />
              выявить проблемы, мешающие росту компании
            </span>
            <span>
              <img src="/images/yellow.png" />
              исследовать целевую аудиторию
            </span>
            <span>
              <img src="/images/yellow.png" />
              рассчитать продуктовые и бизнес показатели
            </span>
            <span>
              <img src="/images/yellow.png" />
              сформулировать стратегию развития компании
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
        <div className={classes.containerEl}>
          <div className={classes.containerElText}>
            <span>Азбука предпринимателя</span>
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
                navigate
              }
            >
              Узнать больше
            </button>
          </div>
          <div className={classes.containerElLogo}>
            <img src="/images/msp5.png" />
          </div>
        </div>
        <div className={classes.containerEl}>
          <div className={classes.containerElLogo}>
            <img src="/images/msp6.png" />
          </div>
          <div className={classes.containerElText}></div>
        </div>
      </div>
    </>
  );
}

export default Container2;
