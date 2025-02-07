import React from 'react';
import classes from './Container4.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container4({ children, ...props }) {
  return (
    <>
      <div className={classes.title}>Экспресс-программы</div>
      <div className={classes.container}>
        <div className={classes.containerEl}>
          <span>
            <img src="/images/yellow.png" />
            «Создание сайта»
          </span>
          <span>
          Научитесь создавать первую лендинговую страницу - текстовое содержание и визуальное оформление; подготовите уникальное торговое предложение к первым продажам
          </span>
        </div>
        <div className={classes.containerEl}>
          <span>
            <img src="/images/yellow.png" />
            «Диагностика бизнеса»
          </span>
          <span>
            Определите преимущества и недостатки форм бизнеса на примере ООО и
            ИП, получите информацию о различных системах налогообложения, а
            также сформируете алгоритм действий при регистрации юридического
            лица и при выборе системы налогообложения;
          </span>
        </div>
        <div className={classes.containerEl}>
          <span>
            <img src="/images/yellow.png" />
            «Консультационная поддержка»
          </span>
          <span>
            Узнаете какие организации инфраструктуры оказывают консультационную
            поддержку предпринимателям и тем, кто планирует ими быть, а также
            узнаете, как именно с такими организациями взаимодействовать;
          </span>
        </div>
        <div className={classes.containerEl}>
          <span>
            <img src="/images/yellow.png" />
            «Проектное управление»
          </span>
          <span>
            Определите основные этапы запуска нового проекта; формирования
            команды нового проекта; сформируете ключевые показатели управления
            проектом и план запуска нового проекта;
          </span>
        </div>

      </div>
    </>
  );
}

export default Container4;
