import React from 'react';
import classes from './Container5.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container5({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <div className={classes.containerLeft}>
              <span>Информация об организации</span>
              <span>
            Автономная некоммерческая организация «Центр «Мой бизнес» Карачаево-Черкесской Республики» функционирует с 2017 года и является основным информационно-образовательным оператором по поддержке субъектов малого и среднего предпринимательства и физических лиц, планирующих осуществление предпринимательской деятельности в Карачаево-Черкесской Республике.
              </span>
            </div>
            <div className={classes.containerRight}>
              <span>
                Начальник Центра поддержки предпринимательства:
              </span>
              <span>Перова Анастасия Геннадьевна</span>
              <span><img src='/images/CentrInnov4.png'/>+7(8782) 25-02-27 (доб. 807)
              </span>
              <span><img src='/images/CentrInnov5.png'/>369000, г.Черкесск, ул. Ленина, д. 53</span>
              <span><img src='/images/CentrInnov6.png'/>cpp-kchr@gmail.com</span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container5;
