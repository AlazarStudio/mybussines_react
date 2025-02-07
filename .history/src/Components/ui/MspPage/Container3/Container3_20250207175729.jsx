import React from 'react';
import classes from './Container3.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container3({ children, ...props }) {
  return (
    <>
      <div className={classes.container}>
<div className={classes.containerTitle}>Модули</div>
<div className={classes.containerEl}>
  <span><img src='/images/yellow.png'/>«Финансовая поддержка»</span>
  <span> Получите информацию о возможных видах финансовой поддержки, организациях, которые ее оказывают, и базовых требованиях к субъектам МСП для получения, условиях и процедуре получения финансовой поддержки;</span>
</div>
<div className={classes.containerEl}>
  <span><img src='/images/yellow.png'/>«Юридические аспекты предпринимательства и система налогообложения»</span>
  <span>Определите преимущества и недостатки форм бизнеса на примере ООО и ИП, получите информацию о различных системах налогообложения, а также сформируете алгоритм действий при регистрации юридического лица и при выборе системы налогообложения;</span>
</div>
<div className={classes.containerEl}>
  <span><img src='/images/yellow.png'/>«Консультационная поддержка»</span>
  <span>Узнаете какие организации инфраструктуры оказывают консультационную поддержку предпринимателям и тем, кто планирует ими быть, а также узнаете, как именно с такими организациями взаимодействовать;</span>
</div>
<div className={classes.containerEl}>
  <span><img src='/images/yellow.png'/>«Проектное управление»</span>
  <span>Определите основные этапы запуска нового проекта; формирования команды нового проекта; сформируете ключевые показатели управления проектом и план запуска нового проекта;</span>
</div>
<div className={classes.containerEl}>
  <span><img src='/images/yellow.png'/> «Имущественная поддержка»</span>
  <span></span>
</div>
<div className={classes.containerEl}>
  <span><img src='/images/yellow.png'/></span>
  <span></span>
</div>
<div className={classes.containerEl}>
  <span><img src='/images/yellow.png'/></span>
  <span></span>
</div>
<div className={classes.containerEl}>
  <span><img src='/images/yellow.png'/></span>
  <span></span>
</div>
<div className={classes.containerEl}>
  <span><img src='/images/yellow.png'/></span>
  <span></span>
</div>
      </div>
    </>
  );
}

export default Container3;
