import React from 'react';
import classes from './Bid.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

export default function Bid() {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <span className={classes.containerTitle}>Оставить заявку</span>
            <div className={classes.containerInput}>
            <input placeholder="ФИО*" />
            <input placeholder="Телефон*" />
            <input placeholder="E-mail*" />
            </div>
            <span className={classes.container}>Организационно-правовая форма*</span>
            <div className={classes.containerOrg}>
              <span
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}
