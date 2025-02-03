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
                  информационно-консультационная поддержка субъектам малого и
                  среднего предпринимательства
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>02</span>
                <span>
                  проведение образовательных семинаров и тренингов, круглых
                  столов, форумов
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>03</span>
                <span>
                  организация межрегиональных бизнес-миссий и конференций
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>04</span>
                <span>
                  организация межрегиональных бизнес-миссий и конференций;
                  организация участия СМСП в выставочно-ярмарочных мероприятиях
                  на территории РФ
                </span>
              </div>
              {/* <div className={classes.containerBottomEl}>
                <span>05</span>
                <span>об организациях инфраструктуры развития бизнеса</span>
              </div> */}
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container2;
