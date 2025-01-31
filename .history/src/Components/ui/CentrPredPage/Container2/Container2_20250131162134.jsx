import React from 'react';
import classes from './Container2.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

function Container2({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
            <div className={classes.container}>
                <div className={classes.containerTitle}>
                    <span>Здесь можно получить самую различную информацию и услуги, необходимые действующим, начинающим и будущим предпринимателям по различным направлениям: от воплощения идеи до модернизации:</span>
                </div>
                <div className={classes.container}
            </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container2;
