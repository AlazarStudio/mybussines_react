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
                Здесь можно получить самую различную информацию и услуги,
                необходимые действующим, начинающим и будущим предпринимателям
                по различным направлениям: от воплощения идеи до модернизации:
              </span>
            </div>
            <div className={classes.containerBottom}>
              <div className={classes.containerBottomEl}>
                <span>01</span>
                <span> о действующих мерах господдержки</span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>02</span>
                <span>о регистрации бизнеса</span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>03</span>
                <span>о государственных микрозаймах</span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>04</span>
                <span>об организациях инфраструктуры развития бизнеса</span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>05</span>
                <span>об организациях инфраструктуры развития бизнеса</span>
              </div>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container2;
