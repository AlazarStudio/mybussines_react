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
              Основные цели деятельности:
              </span>
            </div>
            <div className={classes.containerBottom}>
              <div className={classes.containerBottomEl}>
                <span>01</span>
                <span>
                содействие созданию на сельских территориях или территориях сельских агломераций субъекта РФ субъектов МСП
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>02</span>
                <span>
                оказание содействия органам местного самоуправления в реализации мероприятий по комплексному развитию сельских территорий
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>03</span>
                <span>
                анализ и мониторинг деятельности субъектов МСП в АПК, зарегистрированных в субъекте РФ
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>04</span>
                <span>
                создание и развитие единой системы консультационно-методической поддержки субъектов МСП, в том числе в муниципальных образованиях субъекта РФ
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>05</span>
                <span>участие в разработке и реализации государственных программ (подпрограмм) субъекта РФ, направленных: на развитие АПК, сельскохозяйственной кооперации на территории субъекта РФ; на развитие и поддержку малого и среднего предпринимательства в АПК; на комплексное развитие сельских территорий, иных государственных программ субъектов РФ, муниципальных программ</span>
              </div>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container2;
