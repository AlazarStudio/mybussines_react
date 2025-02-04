import React from 'react';
import classes from './Container2.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container2({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <div className={classes.containerTitle}>
              <span>
              Цели и задачи
              </span>
            </div>
<div className={classes.containerBlock}>
  <div className={classes.containerBlockEl1}>
    <img src='/images/teh3.png'/>
    <span>Создание технической базы</span>
    <span>Создание ресурсной (помещение, оборудование) и информационной (семинары, программы дополнительного образования, веб-ресурсы) базы для технического творчества молодежи, стартапов и инноваций</span>
  </div>
  <div className={classes.containerBlockEl2}>
  <img src='/images/teh4.png'/>
    <span>Воплощение идей в реальность</span>
    <span>Предоставление молодежи возможностей по реализации их творческих и технических идей, с перспективой коммерциализации данных идей</span>
  </div>
  <div className={classes.containerBlockEl3}>
  <img src='/images/teh5.png'/>
    <span>Подготовка кадров</span>
    <span></span>
  </div>
</div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container2;
